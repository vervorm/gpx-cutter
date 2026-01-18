import { useMemo, useState, useRef } from 'react'
import { RoutePoint, getDistanceFromLatLonInKm } from '@/lib/gpx-utils'

interface ElevationProfileProps {
  points: RoutePoint[]
  startKm?: number
  className?: string
  currentStartKm?: number
  currentDistanceKm?: number
  totalRouteDistance?: number
  onStartKmChange?: (km: number) => void
  onDistanceChange?: (km: number) => void
}

export function ElevationProfile({
  points,
  startKm = 0,
  className = '',
  currentStartKm = 0,
  currentDistanceKm = 100,
  totalRouteDistance = 0,
  onStartKmChange,
  onDistanceChange
}: ElevationProfileProps) {
  const [isDraggingStart, setIsDraggingStart] = useState(false)
  const [isDraggingEnd, setIsDraggingEnd] = useState(false)
  const [tempStartX, setTempStartX] = useState<number | null>(null)
  const [tempEndX, setTempEndX] = useState<number | null>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const profileData = useMemo(() => {
    // Filter points with elevation data
    const pointsWithEle = points.filter(p => p.ele !== undefined)

    if (pointsWithEle.length === 0) {
      return null
    }

    // Calculate distances between points
    const distances: number[] = [0]
    let totalDist = 0

    for (let i = 1; i < pointsWithEle.length; i++) {
      const prev = pointsWithEle[i - 1]
      const curr = pointsWithEle[i]

      // Use Haversine formula for accurate distance
      const dist = getDistanceFromLatLonInKm(prev.lat, prev.lon, curr.lat, curr.lon)

      totalDist += dist
      distances.push(totalDist)
    }

    // Get elevation range
    const elevations = pointsWithEle.map(p => p.ele!)
    const minEle = Math.min(...elevations)
    const maxEle = Math.max(...elevations)
    const eleRange = maxEle - minEle

    // Bottom boundary is the lowest point (no padding below)
    const displayMin = minEle

    // Add 10% padding to the top
    const padding = eleRange * 0.1
    let displayMax = maxEle + padding

    // Ensure minimum range of 50 meters for realistic perspective
    // Only add padding to the top to maintain the minimum range
    const currentRange = displayMax - displayMin
    const minRange = 50
    if (currentRange < minRange) {
      displayMax = displayMin + minRange
    }

    return {
      points: pointsWithEle,
      distances,
      totalDistance: totalDist,
      minEle: displayMin,
      maxEle: displayMax,
      elevations,
    }
  }, [points])

  if (!profileData) {
    return null
  }

  const { distances, totalDistance, minEle, maxEle, elevations } = profileData

  // SVG dimensions
  const width = 600
  const height = 200
  const padding = { top: 20, right: 20, bottom: 30, left: 50 }
  const chartWidth = width - padding.left - padding.right
  const chartHeight = height - padding.top - padding.bottom

  // Scale functions
  const xScale = (dist: number) => {
    return padding.left + (dist / totalDistance) * chartWidth
  }

  const yScale = (ele: number) => {
    return padding.top + chartHeight - ((ele - minEle) / (maxEle - minEle)) * chartHeight
  }

  // Calculate slope colors
  const getColorForSlope = (slope: number) => {
    if (slope >= 0.18) return '#8B0000' // Dark red: >= 18%
    if (slope >= 0.10) return '#FF6600' // Orange: 10-17%
    if (slope >= 0.02) return '#FFFF00' // Yellow: 2-9%
    if (slope >= 0.00) return '#90EE90' // Light green: 0-1%
    if (slope >= -0.02) return '#87CEEB' // Light blue: -1 to -2%
    if (slope >= -0.10) return '#0000FF' // Blue: -3 to -10%
    return '#00008B' // Dark blue: < -10%
  }

  // Create path and colored segments
  const pathPoints = distances.map((dist, i) => {
    const x = xScale(dist)
    const y = yScale(elevations[i])
    return { x, y, dist, ele: elevations[i] }
  })

  // Create path for elevation line
  const pathD = pathPoints.reduce((path, point, i) => {
    if (i === 0) {
      return `M ${point.x} ${point.y}`
    }
    return `${path} L ${point.x} ${point.y}`
  }, '')

  // Create colored segments based on slope
  const segments = []
  for (let i = 0; i < pathPoints.length - 1; i++) {
    const p1 = pathPoints[i]
    const p2 = pathPoints[i + 1]

    // Calculate slope
    const distDiff = distances[i + 1] - distances[i]
    const eleDiff = elevations[i + 1] - elevations[i]
    const slope = distDiff > 0 ? eleDiff / (distDiff * 1000) : 0 // meters per meter

    const color = getColorForSlope(slope)

    // Create a filled polygon for this segment
    const segmentPath = `
      M ${p1.x} ${yScale(minEle)}
      L ${p1.x} ${p1.y}
      L ${p2.x} ${p2.y}
      L ${p2.x} ${yScale(minEle)}
      Z
    `

    segments.push({
      path: segmentPath,
      color,
      slope,
    })
  }

  // Y-axis labels
  const yLabels = [
    { value: minEle, label: Math.round(minEle) },
    { value: (minEle + maxEle) / 2, label: Math.round((minEle + maxEle) / 2) },
    { value: maxEle, label: Math.round(maxEle) },
  ]

  // X-axis labels
  const numXLabels = 5
  const xLabels = Array.from({ length: numXLabels }, (_, i) => {
    const dist = (totalDistance / (numXLabels - 1)) * i
    return {
      value: dist,
      label: (startKm + dist).toFixed(1),
    }
  })

  // Slider bar dimensions (above the chart)
  const sliderBarY = 5
  const sliderBarHeight = 30
  const sliderWidth = width - padding.left - padding.right

  // Calculate slider handle positions - slider represents the current segment
  // The slider bar spans from 0 to 100% of the segment
  // Use temporary positions during drag, otherwise use edge positions
  const startHandleX = useMemo(() => {
    if (tempStartX !== null) return tempStartX
    return padding.left
  }, [tempStartX, padding.left])

  const endHandleX = useMemo(() => {
    if (tempEndX !== null) return tempEndX
    return padding.left + sliderWidth
  }, [tempEndX, padding.left, sliderWidth])

  // Slider event handlers - adjust segment boundaries
  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!isDraggingStart && !isDraggingEnd) return
    if (!svgRef.current) return

    const svg = svgRef.current
    const rect = svg.getBoundingClientRect()

    // Calculate position along the slider bar
    const mouseX = e.clientX - rect.left
    const clampedX = Math.max(padding.left, Math.min(mouseX, padding.left + sliderWidth))

    if (isDraggingStart) {
      setTempStartX(clampedX)
    }

    if (isDraggingEnd) {
      setTempEndX(clampedX)
    }
  }

  const handleMouseUp = () => {
    // Apply changes when mouse is released
    if (isDraggingStart && tempStartX !== null && onStartKmChange) {
      const relativeX = (tempStartX - padding.left) / sliderWidth
      const clampedPosition = Math.max(0, Math.min(1, relativeX))

      // Moving start handle to the right shortens segment from the left
      const kmIntoSegment = clampedPosition * currentDistanceKm
      const newStartKm = currentStartKm + kmIntoSegment

      // Ensure we don't go past the end (leave at least 10km)
      const maxStartKm = currentStartKm + currentDistanceKm - 10
      const roundedStart = Math.round(newStartKm)
      onStartKmChange(Math.max(currentStartKm, Math.min(roundedStart, maxStartKm)))
    }

    if (isDraggingEnd && tempEndX !== null && onDistanceChange) {
      const relativeX = (tempEndX - padding.left) / sliderWidth
      const clampedPosition = Math.max(0, Math.min(1, relativeX))

      // Moving end handle to the left shortens segment from the right
      const newDistance = clampedPosition * currentDistanceKm

      // Ensure minimum 10km and max 200km
      const clampedDistance = Math.max(10, Math.min(newDistance, 200, currentDistanceKm))
      const roundedDistance = Math.round(clampedDistance / 10) * 10
      onDistanceChange(roundedDistance)
    }

    // Reset drag state
    setIsDraggingStart(false)
    setIsDraggingEnd(false)
    setTempStartX(null)
    setTempEndX(null)
  }

  return (
    <div className={className}>
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ cursor: isDraggingStart || isDraggingEnd ? 'ew-resize' : 'default' }}
      >
        {/* Grid lines */}
        {yLabels.map((label, i) => (
          <line
            key={`grid-y-${i}`}
            x1={padding.left}
            y1={yScale(label.value)}
            x2={width - padding.right}
            y2={yScale(label.value)}
            stroke="#e5e7eb"
            strokeWidth="1"
          />
        ))}
        {xLabels.map((label, i) => (
          <line
            key={`grid-x-${i}`}
            x1={xScale(label.value)}
            y1={padding.top}
            x2={xScale(label.value)}
            y2={height - padding.bottom}
            stroke="#e5e7eb"
            strokeWidth="1"
          />
        ))}

        {/* Colored segments based on slope */}
        {segments.map((segment, i) => (
          <path
            key={`segment-${i}`}
            d={segment.path}
            fill={segment.color}
            fillOpacity="0.7"
          />
        ))}

        {/* Elevation line */}
        <path
          d={pathD}
          fill="none"
          stroke="#374151"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Y-axis labels */}
        {yLabels.map((label, i) => (
          <text
            key={`y-label-${i}`}
            x={padding.left - 10}
            y={yScale(label.value)}
            textAnchor="end"
            dominantBaseline="middle"
            fontSize="12"
            fill="#6b7280"
          >
            {label.label}m
          </text>
        ))}

        {/* X-axis labels */}
        {xLabels.map((label, i) => (
          <text
            key={`x-label-${i}`}
            x={xScale(label.value)}
            y={height - padding.bottom + 20}
            textAnchor="middle"
            fontSize="12"
            fill="#6b7280"
          >
            {label.label}
          </text>
        ))}



        {/* Horizontal range slider above the chart */}
        {(onStartKmChange || onDistanceChange) && (
          <g>
            {/* Background slider bar (full route) */}
            <rect
              x={padding.left}
              y={sliderBarY}
              width={sliderWidth}
              height={sliderBarHeight}
              fill="#E5E7EB"
              rx="15"
            />

            {/* Selected segment highlight */}
            <rect
              x={startHandleX}
              y={sliderBarY}
              width={endHandleX - startHandleX}
              height={sliderBarHeight}
              fill="#3B82F6"
              fillOpacity="0.6"
              rx="15"
            />

            {/* Vertical dashed lines from handles to chart */}
            {onStartKmChange && (
              <line
                x1={startHandleX}
                y1={sliderBarY + sliderBarHeight}
                x2={startHandleX}
                y2={height - padding.bottom}
                stroke="#3B82F6"
                strokeWidth="2"
                strokeDasharray="5,5"
                strokeOpacity="0.5"
                pointerEvents="none"
              />
            )}

            {onDistanceChange && (
              <line
                x1={endHandleX}
                y1={sliderBarY + sliderBarHeight}
                x2={endHandleX}
                y2={height - padding.bottom}
                stroke="#3B82F6"
                strokeWidth="2"
                strokeDasharray="5,5"
                strokeOpacity="0.5"
                pointerEvents="none"
              />
            )}

            {/* Start handle */}
            {onStartKmChange && (
              <circle
                cx={startHandleX}
                cy={sliderBarY + sliderBarHeight / 2}
                r="14"
                fill="#3B82F6"
                stroke="white"
                strokeWidth="3"
                style={{ cursor: 'ew-resize' }}
                onMouseDown={(e) => {
                  e.stopPropagation()
                  setIsDraggingStart(true)
                }}
              />
            )}

            {/* End handle */}
            {onDistanceChange && (
              <circle
                cx={endHandleX}
                cy={sliderBarY + sliderBarHeight / 2}
                r="14"
                fill="#3B82F6"
                stroke="white"
                strokeWidth="3"
                style={{ cursor: 'ew-resize' }}
                onMouseDown={(e) => {
                  e.stopPropagation()
                  setIsDraggingEnd(true)
                }}
              />
            )}
          </g>
        )}
      </svg>
    </div>
  )
}
