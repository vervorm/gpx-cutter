import { useMemo, useRef, useCallback } from 'react'
import { RoutePoint, getDistanceFromLatLonInKm } from '@/lib/gpx-utils'
import { IconSlider } from '@/components/ui/icon-slider'

interface ElevationProfileProps {
  points: RoutePoint[]
  startKm?: number
  className?: string
  currentStartKm?: number
  currentDistanceKm?: number
  totalRouteDistanceKm?: number
  onStartKmChange?: (km: number) => void
  onDistanceChange?: (km: number) => void
  pointerKm?: number | null
  onPointerKmChange?: (km: number | null) => void
}

export function ElevationProfile({
  points,
  startKm = 0,
  className = '',
  currentStartKm = 0,
  currentDistanceKm = 100,
  totalRouteDistanceKm = 1000,
  onStartKmChange,
  onDistanceChange,
  pointerKm,
  onPointerKmChange,
}: ElevationProfileProps) {
  const profileData = useMemo(() => {
    const pointsWithEle = points.filter(p => p.ele !== undefined)
    if (pointsWithEle.length === 0) return null

    const distances: number[] = [0]
    let totalDist = 0
    for (let i = 1; i < pointsWithEle.length; i++) {
      const dist = getDistanceFromLatLonInKm(
        pointsWithEle[i - 1].lat, pointsWithEle[i - 1].lon,
        pointsWithEle[i].lat, pointsWithEle[i].lon
      )
      totalDist += dist
      distances.push(totalDist)
    }

    const elevations = pointsWithEle.map(p => p.ele!)
    const minEle = Math.min(...elevations)
    const maxEle = Math.max(...elevations)
    const eleRange = maxEle - minEle
    const displayMin = minEle
    let displayMax = maxEle + eleRange * 0.1
    if (displayMax - displayMin < 50) displayMax = displayMin + 50

    return { distances, totalDistance: totalDist, minEle: displayMin, maxEle: displayMax, elevations }
  }, [points])

  if (!profileData) return null

  const { distances, totalDistance, minEle, maxEle, elevations } = profileData

  // SVG dimensions
  const width = 600
  const height = 200
  const padding = { top: 20, right: 20, bottom: 30, left: 50 }
  const chartWidth = width - padding.left - padding.right
  const chartHeight = height - padding.top - padding.bottom

  const xScale = (dist: number) => padding.left + (dist / totalDistance) * chartWidth
  const yScale = (ele: number) => padding.top + chartHeight - ((ele - minEle) / (maxEle - minEle)) * chartHeight

  const getColorForSlope = (slope: number) => {
    if (slope >= 0.18) return '#8B0000'
    if (slope >= 0.10) return '#FF6600'
    if (slope >= 0.02) return '#FFFF00'
    if (slope >= 0.00) return '#90EE90'
    if (slope >= -0.02) return '#87CEEB'
    if (slope >= -0.10) return '#0000FF'
    return '#00008B'
  }

  const pathPoints = distances.map((dist, i) => ({
    x: xScale(dist),
    y: yScale(elevations[i]),
    dist,
    ele: elevations[i],
  }))

  const pathD = pathPoints.reduce((path, point, i) =>
    i === 0 ? `M ${point.x} ${point.y}` : `${path} L ${point.x} ${point.y}`, '')

  const segments = []
  for (let i = 0; i < pathPoints.length - 1; i++) {
    const p1 = pathPoints[i]
    const p2 = pathPoints[i + 1]
    const distDiff = distances[i + 1] - distances[i]
    const eleDiff = elevations[i + 1] - elevations[i]
    const slope = distDiff > 0 ? eleDiff / (distDiff * 1000) : 0
    segments.push({
      path: `M ${p1.x} ${yScale(minEle)} L ${p1.x} ${p1.y} L ${p2.x} ${p2.y} L ${p2.x} ${yScale(minEle)} Z`,
      color: getColorForSlope(slope),
    })
  }

  const yLabels = [
    { value: minEle, label: Math.round(minEle) },
    { value: (minEle + maxEle) / 2, label: Math.round((minEle + maxEle) / 2) },
    { value: maxEle, label: Math.round(maxEle) },
  ]

  const numXLabels = 5
  const xLabels = Array.from({ length: numXLabels }, (_, i) => {
    const dist = (totalDistance / (numXLabels - 1)) * i
    return { value: dist, label: (startKm + dist).toFixed(1) }
  })

  const maxStartKm = Math.max(0, totalRouteDistanceKm - currentDistanceKm - 1)
  const maxDistanceKm = Math.min(200, totalRouteDistanceKm - currentStartKm)

  // Interactive pointer logic
  const svgRef = useRef<SVGSVGElement>(null)

  const handlePointerMove = useCallback((clientX: number) => {
    if (!onPointerKmChange || !svgRef.current) return

    const rect = svgRef.current.getBoundingClientRect()
    const x = clientX - rect.left

    // Convert x position to distance
    const relativeX = Math.max(padding.left, Math.min(x, width - padding.right))
    const distanceRatio = (relativeX - padding.left) / chartWidth
    const distanceInSegment = distanceRatio * totalDistance

    onPointerKmChange(distanceInSegment)
  }, [onPointerKmChange, totalDistance, chartWidth, padding.left, padding.right, width])

  const handleSvgClick = (e: React.MouseEvent<SVGSVGElement>) => {
    handlePointerMove(e.clientX)
  }

  const handleSvgMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (e.buttons === 1) { // Left mouse button is pressed
      handlePointerMove(e.clientX)
    }
  }

  // Calculate pointer position
  const pointerX = pointerKm !== null && pointerKm !== undefined ? xScale(pointerKm) : null

  return (
    <div className={className}>
      {/* IconSliders boven het profiel */}
      {(onStartKmChange || onDistanceChange) && (
        <div className="space-y-2 mb-3">
          {onStartKmChange && (
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted-foreground w-12 shrink-0">Start</span>
              <IconSlider
                min={0}
                max={maxStartKm}
                step={1}
                value={currentStartKm}
                onValueChange={onStartKmChange}
                className="flex-1"
              />
              <span className="text-xs font-semibold text-primary w-14 text-right shrink-0">
                {currentStartKm} km
              </span>
            </div>
          )}
          {onDistanceChange && (
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted-foreground w-12 shrink-0">Einde</span>
              <IconSlider
                min={10}
                max={maxDistanceKm}
                step={1}
                value={currentDistanceKm}
                onValueChange={onDistanceChange}
                className="flex-1"
              />
              <span className="text-xs font-semibold text-primary w-14 text-right shrink-0">
                {currentDistanceKm} km
              </span>
            </div>
          )}
        </div>
      )}

      {/* Puur visueel SVG hoogteprofiel */}
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
        onClick={handleSvgClick}
        onMouseMove={handleSvgMouseMove}
        className={onPointerKmChange ? 'cursor-pointer' : ''}
      >
        {/* Grid lijnen */}
        {yLabels.map((label, i) => (
          <line key={`grid-y-${i}`} x1={padding.left} y1={yScale(label.value)}
            x2={width - padding.right} y2={yScale(label.value)} stroke="#e5e7eb" strokeWidth="1" />
        ))}
        {xLabels.map((label, i) => (
          <line key={`grid-x-${i}`} x1={xScale(label.value)} y1={padding.top}
            x2={xScale(label.value)} y2={height - padding.bottom} stroke="#e5e7eb" strokeWidth="1" />
        ))}

        {/* Kleurvlakken per helling */}
        {segments.map((segment, i) => (
          <path key={`segment-${i}`} d={segment.path} fill={segment.color} fillOpacity="0.7" />
        ))}

        {/* Hoogte lijn */}
        <path d={pathD} fill="none" stroke="#374151" strokeWidth="2" strokeLinejoin="round" />

        {/* Interactive pointer line */}
        {pointerX !== null && (
          <g>
            <line
              x1={pointerX}
              y1={padding.top}
              x2={pointerX}
              y2={height - padding.bottom}
              stroke="#ef4444"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            <circle
              cx={pointerX}
              cy={padding.top}
              r="6"
              fill="#ef4444"
              stroke="white"
              strokeWidth="2"
              className="cursor-grab active:cursor-grabbing"
            />
          </g>
        )}

        {/* Y-as labels */}
        {yLabels.map((label, i) => (
          <text key={`y-label-${i}`} x={padding.left - 10} y={yScale(label.value)}
            textAnchor="end" dominantBaseline="middle" fontSize="12" fill="#6b7280">
            {label.label}m
          </text>
        ))}

        {/* X-as labels */}
        {xLabels.map((label, i) => (
          <text key={`x-label-${i}`} x={xScale(label.value)} y={height - padding.bottom + 20}
            textAnchor="middle" fontSize="12" fill="#6b7280">
            {label.label}
          </text>
        ))}
      </svg>
    </div>
  )
}
