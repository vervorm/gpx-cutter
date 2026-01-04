import { useEffect, useMemo } from 'react'
import { MapContainer, TileLayer, Polyline, Marker, Popup, useMap } from 'react-leaflet'
import { LatLngBounds, LatLngExpression } from 'leaflet'
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

export function MapViewer({ allPoints, selectedPoints, startKm = 0, endKm }: MapViewerProps) {
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

  if (allPoints.length === 0) {
    return (
      <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Geen route data beschikbaar</p>
      </div>
    )
  }

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden border-2 border-border shadow-lg">
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

        {/* Full route in gray */}
        <Polyline
          positions={fullRoute}
          pathOptions={{
            color: '#9CA3AF',
            weight: 4,
            opacity: 0.6,
          }}
        />

        {/* Selected segment in blue */}
        {selectedRoute && selectedRoute.length > 0 && (
          <Polyline
            positions={selectedRoute}
            pathOptions={{
              color: '#3B82F6',
              weight: 6,
              opacity: 0.9,
            }}
          />
        )}

        {/* Start marker */}
        {startPoint && (
          <Marker position={[startPoint.lat, startPoint.lon]}>
            <Popup>
              <div className="text-sm">
                <p className="font-semibold">Start</p>
                <p>{startKm.toFixed(1)} km</p>
              </div>
            </Popup>
          </Marker>
        )}

        {/* End marker */}
        {endPoint && selectedPoints && selectedPoints.length > 0 && (
          <Marker position={[endPoint.lat, endPoint.lon]}>
            <Popup>
              <div className="text-sm">
                <p className="font-semibold">Einde</p>
                <p>{endKm?.toFixed(1)} km</p>
              </div>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  )
}
