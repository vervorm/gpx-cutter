import { useEffect, useMemo, useState } from 'react'
import { MapContainer, TileLayer, Polyline, Marker, Popup, useMap } from 'react-leaflet'
import { LatLngBounds, LatLngExpression, DivIcon, DragEndEvent } from 'leaflet'
import { Maximize2, Minimize2, MapPin } from 'lucide-react'
import { renderToStaticMarkup } from 'react-dom/server'
import { getDistanceFromLatLonInKm } from '@/lib/gpx-utils'
import 'leaflet/dist/leaflet.css'

interface RoutePoint {
  lat: number
  lon: number
}

interface MapViewerProps {
  allPoints: RoutePoint[]
  selectedPoints?: RoutePoint[]
  startKm?: number
  endKm?: number
  onStartKmChange?: (km: number) => void
  onDistanceChange?: (km: number) => void
  translations?: {
    openFullscreen: string
    closeFullscreen: string
    startMarker: string
    endMarker: string
    noRouteData: string
    dragToAdjust: string
  }
}

/**
 * Find the distance (in km) along the route for a given lat/lon point
 * by finding the closest point on the route
 */
function findDistanceAlongRoute(lat: number, lon: number, routePoints: RoutePoint[]): number {
  let minDistance = Infinity
  let closestIndex = 0

  // Find the closest point on the route
  routePoints.forEach((point, index) => {
    const dist = getDistanceFromLatLonInKm(lat, lon, point.lat, point.lon)
    if (dist < minDistance) {
      minDistance = dist
      closestIndex = index
    }
  })

  // Calculate cumulative distance to that point
  let cumulativeDistance = 0
  for (let i = 1; i <= closestIndex; i++) {
    const prev = routePoints[i - 1]
    const curr = routePoints[i]
    cumulativeDistance += getDistanceFromLatLonInKm(prev.lat, prev.lon, curr.lat, curr.lon)
  }

  return cumulativeDistance
}

// Component to fit map bounds
function FitBounds({ bounds }: { bounds: LatLngBounds | null }) {
  const map = useMap()

  useEffect(() => {
    if (bounds && bounds.isValid()) {
      map.fitBounds(bounds, { padding: [50, 50] })
    }
  }, [bounds, map])

  return null
}

// Component to handle map resize on fullscreen toggle
function MapResizer({ isFullscreen }: { isFullscreen: boolean }) {
  const map = useMap()

  useEffect(() => {
    // Multiple calls to ensure map resizes correctly
    const timers = [
      setTimeout(() => map.invalidateSize(), 0),
      setTimeout(() => map.invalidateSize(), 100),
      setTimeout(() => map.invalidateSize(), 300),
      setTimeout(() => map.invalidateSize(), 500),
    ]
    return () => timers.forEach(timer => clearTimeout(timer))
  }, [isFullscreen, map])

  return null
}

// Fullscreen toggle button inside map
function FullscreenControl({ isFullscreen, onToggle, openText, closeText }: {
  isFullscreen: boolean
  onToggle: () => void
  openText: string
  closeText: string
}) {
  return (
    <div className="leaflet-top leaflet-right" style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 1000 }}>
      <div className="leaflet-control">
        <button
          onClick={onToggle}
          className="bg-white hover:bg-gray-100 text-gray-700 p-2 rounded-lg shadow-lg transition-colors border border-gray-300"
          title={isFullscreen ? closeText : openText}
        >
          {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
        </button>
      </div>
    </div>
  )
}

export function MapViewer({
  allPoints,
  selectedPoints,
  startKm = 0,
  endKm,
  onStartKmChange,
  onDistanceChange,
  translations
}: MapViewerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)

  // Default translations
  const t = translations || {
    openFullscreen: 'Open fullscreen',
    closeFullscreen: 'Close fullscreen',
    startMarker: 'Start',
    endMarker: 'End',
    noRouteData: 'No route data available',
    dragToAdjust: 'Drag to adjust',
  }

  // Create custom icons using MapPin from lucide
  const startIcon = useMemo(() => {
    const iconMarkup = renderToStaticMarkup(
      <div style={{
        color: '#22C55E',
        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
      }}>
        <MapPin size={32} fill="#22C55E" strokeWidth={2} />
      </div>
    )
    return new DivIcon({
      html: iconMarkup,
      className: 'custom-marker-icon',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    })
  }, [])

  const endIcon = useMemo(() => {
    const iconMarkup = renderToStaticMarkup(
      <div style={{
        color: '#EF4444',
        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
      }}>
        <MapPin size={32} fill="#EF4444" strokeWidth={2} />
      </div>
    )
    return new DivIcon({
      html: iconMarkup,
      className: 'custom-marker-icon',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    })
  }, [])

  // Convert points to Leaflet format
  const fullRoute: LatLngExpression[] = useMemo(
    () => allPoints.map(p => [p.lat, p.lon] as LatLngExpression),
    [allPoints]
  )

  const selectedRoute: LatLngExpression[] | undefined = useMemo(
    () => selectedPoints?.map(p => [p.lat, p.lon] as LatLngExpression),
    [selectedPoints]
  )

  // Calculate bounds - zoom to selected segment if available, otherwise full route
  const bounds = useMemo(() => {
    const boundsObj = new LatLngBounds([])
    const pointsToFit = selectedPoints && selectedPoints.length > 0 ? selectedPoints : allPoints
    pointsToFit.forEach(p => boundsObj.extend([p.lat, p.lon]))
    return boundsObj
  }, [allPoints, selectedPoints])

  const selectedBounds = useMemo(() => {
    if (!selectedPoints || selectedPoints.length === 0) {
      return null
    }
    const boundsObj = new LatLngBounds([])
    selectedPoints.forEach(p => boundsObj.extend([p.lat, p.lon]))
    return boundsObj
  }, [selectedPoints])

  // Get start and end markers
  const startPoint = selectedPoints?.[0] || allPoints[0]
  const endPoint = selectedPoints?.[selectedPoints.length - 1] || allPoints[allPoints.length - 1]

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  // Handle start marker drag
  const handleStartMarkerDrag = (event: DragEndEvent) => {
    if (!onStartKmChange) return

    const { lat, lng } = event.target.getLatLng()
    const distanceFromStart = findDistanceAlongRoute(lat, lng, allPoints)

    // Round to nearest 1km (consistent with slider)
    const roundedDistance = Math.round(distanceFromStart)
    onStartKmChange(roundedDistance)
  }

  // Handle end marker drag
  const handleEndMarkerDrag = (event: DragEndEvent) => {
    if (!onDistanceChange || !startKm) return

    const { lat, lng } = event.target.getLatLng()
    const distanceFromStart = findDistanceAlongRoute(lat, lng, allPoints)

    // Calculate the distance from start marker to end marker
    const segmentDistance = distanceFromStart - startKm

    // Round to nearest 10km and ensure it's at least 10km
    const roundedDistance = Math.max(10, Math.round(segmentDistance / 10) * 10)
    onDistanceChange(roundedDistance)
  }

  if (allPoints.length === 0) {
    return (
      <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">{t.noRouteData}</p>
      </div>
    )
  }

  return (
    <div
      className={`rounded-lg overflow-hidden border-2 border-border shadow-lg transition-all ${
        isFullscreen
          ? 'fixed inset-4 z-[999] w-[calc(100vw-2rem)] h-[calc(100vh-2rem)]'
          : 'w-full h-full'
      }`}
    >
      <MapContainer
        center={[allPoints[0].lat, allPoints[0].lon]}
        zoom={13}
        className="w-full h-full"
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <FitBounds bounds={selectedBounds || bounds} />
        <MapResizer isFullscreen={isFullscreen} />
        <FullscreenControl
          isFullscreen={isFullscreen}
          onToggle={toggleFullscreen}
          openText={t.openFullscreen}
          closeText={t.closeFullscreen}
        />

          {/* Full route - more visible */}
          <Polyline
            positions={fullRoute}
            pathOptions={{
              color: '#6B7280',
              weight: 6,
              opacity: 0.8,
            }}
          />

          {/* Selected segment in blue */}
          {selectedRoute && selectedRoute.length > 0 && (
            <Polyline
              positions={selectedRoute}
              pathOptions={{
                color: '#3B82F6',
                weight: 8,
                opacity: 0.95,
              }}
            />
          )}

          {/* Start marker - using MapPin icon */}
          {startPoint && (
            <Marker
              position={[startPoint.lat, startPoint.lon]}
              icon={startIcon}
              draggable={!!onStartKmChange}
              eventHandlers={{
                dragend: handleStartMarkerDrag,
              }}
            >
              <Popup>
                <div className="text-sm">
                  <p className="font-semibold">{t.startMarker}</p>
                  <p>{startKm.toFixed(1)} km</p>
                  {onStartKmChange && <p className="text-xs text-gray-500 mt-1">{t.dragToAdjust}</p>}
                </div>
              </Popup>
            </Marker>
          )}

          {/* End marker - using MapPin icon */}
          {endPoint && selectedPoints && selectedPoints.length > 0 && (
            <Marker
              position={[endPoint.lat, endPoint.lon]}
              icon={endIcon}
              draggable={!!onDistanceChange}
              eventHandlers={{
                dragend: handleEndMarkerDrag,
              }}
            >
              <Popup>
                <div className="text-sm">
                  <p className="font-semibold">{t.endMarker}</p>
                  <p>{endKm?.toFixed(1)} km</p>
                  {onDistanceChange && <p className="text-xs text-gray-500 mt-1">{t.dragToAdjust}</p>}
                </div>
              </Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
  )
}
