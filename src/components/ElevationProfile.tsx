import { useMemo } from 'react'
import { RoutePoint, getDistanceFromLatLonInKm } from '@/lib/gpx-utils'

interface ElevationProfileProps {
  points: RoutePoint[]
  startKm?: number
  className?: string
}

export function ElevationProfile({ points, startKm = 0, className = '' }: ElevationProfileProps) {
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

  return (
    <div className={className}>
      <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid meet">
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

        {/* Axis labels */}
        <text
          x={padding.left + chartWidth / 2}
          y={height - 5}
          textAnchor="middle"
          fontSize="14"
          fill="#374151"
          fontWeight="500"
        >
          Afstand (km)
        </text>
        <text
          x={15}
          y={padding.top + chartHeight / 2}
          textAnchor="middle"
          fontSize="14"
          fill="#374151"
          fontWeight="500"
          transform={`rotate(-90 15 ${padding.top + chartHeight / 2})`}
        >
          Hoogte (m)
        </text>
      </svg>
    </div>
  )
}
