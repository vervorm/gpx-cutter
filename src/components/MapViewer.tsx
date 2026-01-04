import { useEffect, useMemo, useState } from 'react'
import { MapContainer, TileLayer, Polyline, CircleMarker, Popup, useMap } from 'react-leaflet'
import { LatLngBounds, LatLngExpression } from 'leaflet'
import { Maximize2, Minimize2 } from 'lucide-react'
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
}

// Component to fit map bounds
function FitBounds({ bounds }: { bounds: LatLngBounds }) {
  const map = useMap()

  useEffect(() => {
    if (bounds.isValid()) {
      map.fitBounds(bounds, { padding: [50, 50] })
    }
  }, [bounds, map])

  return null
}

// Component to handle map resize on fullscreen toggle
function MapResizer({ isFullscreen }: { isFullscreen: boolean }) {
  const map = useMap()

  useEffect(() => {
    // Delay to allow CSS transition to complete
    const timer = setTimeout(() => {
      map.invalidateSize()
    }, 100)
    return () => clearTimeout(timer)
  }, [isFullscreen, map])

  return null
}

export function MapViewer({ allPoints, selectedPoints, startKm = 0, endKm }: MapViewerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)

  // Convert points to Leaflet format
  const fullRoute: LatLngExpression[] = useMemo(
    () => allPoints.map(p => [p.lat, p.lon] as LatLngExpression),
    [allPoints]
  )

  const selectedRoute: LatLngExpression[] | undefined = useMemo(
    () => selectedPoints?.map(p => [p.lat, p.lon] as LatLngExpression),
    [selectedPoints]
  )

  // Calculate bounds
  const bounds = useMemo(() => {
    const boundsObj = new LatLngBounds([])
    allPoints.forEach(p => boundsObj.extend([p.lat, p.lon]))
    return boundsObj
  }, [allPoints])

  // Get start and end markers
  const startPoint = selectedPoints?.[0] || allPoints[0]
  const endPoint = selectedPoints?.[selectedPoints.length - 1] || allPoints[allPoints.length - 1]

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  if (allPoints.length === 0) {
    return (
      <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Geen route data beschikbaar</p>
      </div>
    )
  }

  return (
    <div className="relative">
      {/* Fullscreen toggle button */}
      <button
        onClick={toggleFullscreen}
        className="absolute top-2 right-2 z-[1000] bg-white hover:bg-gray-100 text-gray-700 p-2 rounded-lg shadow-lg transition-colors border border-gray-300"
        title={isFullscreen ? 'Sluit fullscreen' : 'Open fullscreen'}
      >
        {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
      </button>

      <div
        className={`rounded-lg overflow-hidden border-2 border-border shadow-lg transition-all ${
          isFullscreen
            ? 'fixed inset-4 z-[999] w-[calc(100vw-2rem)] h-[calc(100vh-2rem)]'
            : 'w-full h-96'
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

          <FitBounds bounds={bounds} />
          <MapResizer isFullscreen={isFullscreen} />

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

          {/* Start marker - using CircleMarker to avoid icon 404 */}
          {startPoint && (
            <CircleMarker
              center={[startPoint.lat, startPoint.lon]}
              radius={8}
              pathOptions={{
                color: '#22C55E',
                fillColor: '#22C55E',
                fillOpacity: 1,
                weight: 3,
              }}
            >
              <Popup>
                <div className="text-sm">
                  <p className="font-semibold">Start</p>
                  <p>{startKm.toFixed(1)} km</p>
                </div>
              </Popup>
            </CircleMarker>
          )}

          {/* End marker */}
          {endPoint && selectedPoints && selectedPoints.length > 0 && (
            <CircleMarker
              center={[endPoint.lat, endPoint.lon]}
              radius={8}
              pathOptions={{
                color: '#EF4444',
                fillColor: '#EF4444',
                fillOpacity: 1,
                weight: 3,
              }}
            >
              <Popup>
                <div className="text-sm">
                  <p className="font-semibold">Einde</p>
                  <p>{endKm?.toFixed(1)} km</p>
                </div>
              </Popup>
            </CircleMarker>
          )}
        </MapContainer>
      </div>
    </div>
  )
}
