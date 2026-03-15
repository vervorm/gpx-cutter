import { useEffect, useMemo, useState } from 'react'
import { MapContainer, TileLayer, Polyline, Marker, Popup, Tooltip, useMap } from 'react-leaflet'
import { LatLngBounds, LatLngExpression, DivIcon, DragEndEvent } from 'leaflet'
import { Maximize2, Minimize2, MapPin } from 'lucide-react'
import { renderToStaticMarkup } from 'react-dom/server'
import { getDistanceFromLatLonInKm } from '@/lib/gpx-utils'
import 'leaflet/dist/leaflet.css'

interface RoutePoint {
  lat: number
  lon: number
  ele?: number
}

interface MapViewerProps {
  allPoints: RoutePoint[]
  selectedPoints?: RoutePoint[]
  startKm?: number
  endKm?: number
  onStartKmChange?: (km: number) => void
  onDistanceChange?: (km: number) => void
  pointerKm?: number | null
  onPointerKmChange?: (km: number | null) => void
  elevationProfile?: React.ReactNode
  translations?: {
    openFullscreen: string
    closeFullscreen: string
    startMarker: string
    endMarker: string
    noRouteData: string
    dragToAdjust: string
    pointerMarker?: string
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

/**
 * Find the lat/lon/elevation position at a given distance along the route
 */
function findPointAtDistance(distanceKm: number, routePoints: RoutePoint[]): RoutePoint | null {
  if (routePoints.length === 0) return null

  let cumulativeDistance = 0

  for (let i = 1; i < routePoints.length; i++) {
    const prev = routePoints[i - 1]
    const curr = routePoints[i]
    const segmentDistance = getDistanceFromLatLonInKm(prev.lat, prev.lon, curr.lat, curr.lon)

    if (cumulativeDistance + segmentDistance >= distanceKm) {
      // Interpolate between prev and curr
      const ratio = (distanceKm - cumulativeDistance) / segmentDistance
      const point: RoutePoint = {
        lat: prev.lat + (curr.lat - prev.lat) * ratio,
        lon: prev.lon + (curr.lon - prev.lon) * ratio,
      }

      // Interpolate elevation if available
      if (prev.ele !== undefined && curr.ele !== undefined) {
        point.ele = prev.ele + (curr.ele - prev.ele) * ratio
      }

      return point
    }

    cumulativeDistance += segmentDistance
  }

  // If distance exceeds route length, return last point
  return routePoints[routePoints.length - 1]
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

// Component to handle map ready event
function MapReady({ onReady }: { onReady: () => void }) {
  const map = useMap()

  useEffect(() => {
    map.whenReady(() => {
      onReady()
    })
  }, [map, onReady])

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
  pointerKm,
  onPointerKmChange,
  elevationProfile,
  translations
}: MapViewerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

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

  const pointerIcon = useMemo(() => {
    const iconMarkup = renderToStaticMarkup(
      <div style={{
        color: '#F59E0B',
        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
      }}>
        <MapPin size={28} fill="#F59E0B" strokeWidth={2} />
      </div>
    )
    return new DivIcon({
      html: iconMarkup,
      className: 'custom-marker-icon',
      iconSize: [28, 28],
      iconAnchor: [14, 28],
      popupAnchor: [0, -28],
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

  // Calculate pointer position
  const pointerPoint = useMemo(() => {
    if (pointerKm === null || pointerKm === undefined || !selectedPoints || selectedPoints.length === 0) {
      return null
    }
    return findPointAtDistance(pointerKm, selectedPoints)
  }, [pointerKm, selectedPoints])

  // Calculate slope at pointer position
  const pointerSlope = useMemo(() => {
    if (pointerKm === null || pointerKm === undefined || !selectedPoints || selectedPoints.length === 0) {
      return null
    }

    let cumulativeDistance = 0
    for (let i = 1; i < selectedPoints.length; i++) {
      const prev = selectedPoints[i - 1]
      const curr = selectedPoints[i]
      const segmentDistance = getDistanceFromLatLonInKm(prev.lat, prev.lon, curr.lat, curr.lon)

      if (cumulativeDistance + segmentDistance >= pointerKm) {
        // Found the segment - calculate slope
        if (prev.ele !== undefined && curr.ele !== undefined) {
          const distDiff = segmentDistance * 1000 // Convert km to meters
          const eleDiff = curr.ele - prev.ele
          return distDiff > 0 ? (eleDiff / distDiff) : 0
        }
        return null
      }

      cumulativeDistance += segmentDistance
    }
    return null
  }, [pointerKm, selectedPoints])

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
    // Ensure loading state is reset when toggling fullscreen
    setIsLoading(false)
  }

  // Prevent body scroll when fullscreen is active
  useEffect(() => {
    const originalOverflow = document.body.style.overflow

    if (isFullscreen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = originalOverflow || ''
    }

    return () => {
      // Always restore original overflow on cleanup
      document.body.style.overflow = originalOverflow || ''
    }
  }, [isFullscreen])

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
    if (!onDistanceChange || startKm === undefined) return

    const { lat, lng } = event.target.getLatLng()
    const distanceFromStart = findDistanceAlongRoute(lat, lng, allPoints)

    // Calculate the distance from start marker to end marker
    const segmentDistance = distanceFromStart - startKm

    // Round to nearest 1km and ensure it's at least 10km
    const roundedDistance = Math.max(10, Math.round(segmentDistance))
    onDistanceChange(roundedDistance)
  }

  // Handle pointer marker drag
  const handlePointerMarkerDrag = (event: DragEndEvent) => {
    if (!onPointerKmChange || !selectedPoints || selectedPoints.length === 0) return

    const { lat, lng } = event.target.getLatLng()
    const distanceFromSegmentStart = findDistanceAlongRoute(lat, lng, selectedPoints)

    onPointerKmChange(distanceFromSegmentStart)
  }

  if (allPoints.length === 0) {
    return (
      <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">{t.noRouteData}</p>
      </div>
    )
  }

  {/*
    ============================================================
    MAP CONTENT - id: map-content-container
    ============================================================
    De hoofdcontainer voor de kaart zelf
    - Bevat de Leaflet MapContainer
    - Bevat de loading indicator
    - Krijgt verschillende styling afhankelijk van fullscreen modus
  */}
  const mapContent = (
    <div
      id="map-content-container"
      className={`overflow-hidden shadow-lg ${
        isFullscreen
          ? 'relative w-full h-full rounded-lg border-2 border-border'
          : 'relative w-full h-full rounded-lg border-2 border-border'
      }`}
    >
      {/*
        ============================================================
        LOADING INDICATOR - id: map-loading-indicator
        ============================================================
        Wordt getoond terwijl de kaart aan het laden is
        - Absolute positioning over de hele kaart
        - Hoge z-index (1000) om boven de kaart te verschijnen
        - Spinner animatie met "Kaart laden..." tekst
      */}
      {isLoading && (
        <div
          id="map-loading-indicator"
          className="absolute inset-0 bg-gray-100 dark:bg-gray-800 z-[1000] flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-3">
            {/* Rotating spinner */}
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Kaart laden...</p>
          </div>
        </div>
      )}

      {/*
        ============================================================
        LEAFLET MAP CONTAINER - id: leaflet-map-container
        ============================================================
        De hoofdcontainer voor de Leaflet kaart
        - center: initieel center punt (eerste punt van de route)
        - zoom: initiële zoom level (13 = stad niveau)
        - scrollWheelZoom: sta zoomen met muiswiel toe
      */}
      <MapContainer
        id="leaflet-map-container"
        center={[allPoints[0].lat, allPoints[0].lon]}
        zoom={13}
        className="w-full h-full"
        scrollWheelZoom={true}
      >
        {/*
          TileLayer: de achtergrond kaart tiles van OpenStreetMap
          - url: template voor tile URLs
          - attribution: copyright vermelding
        */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/*
          Custom components voor kaart functionaliteit:
          - MapReady: detecteert wanneer kaart geladen is en zet isLoading op false
          - FitBounds: past kaart zoom/center aan om alle punten te tonen
          - MapResizer: zorgt voor correcte kaart grootte bij fullscreen toggle
          - FullscreenControl: de fullscreen knop rechtsboven
        */}
        <MapReady onReady={() => setIsLoading(false)} />
        <FitBounds bounds={selectedBounds || bounds} />
        <MapResizer isFullscreen={isFullscreen} />
        <FullscreenControl
          isFullscreen={isFullscreen}
          onToggle={toggleFullscreen}
          openText={t.openFullscreen}
          closeText={t.closeFullscreen}
        />

          {/*
            ============================================================
            VOLLEDIGE ROUTE POLYLINE - id: full-route-polyline
            ============================================================
            Toont de VOLLEDIGE route in grijze kleur
            - color: grijs (#6B7280)
            - weight: 6px breed
            - opacity: 0.8 (licht transparant)
            Dit is de achtergrond route waar het geselecteerde segment overheen komt
          */}
          <Polyline
            positions={fullRoute}
            pathOptions={{
              color: '#6B7280',
              weight: 6,
              opacity: 0.8,
            }}
          />

          {/*
            ============================================================
            GESELECTEERD SEGMENT POLYLINE - id: selected-segment-polyline
            ============================================================
            Toont het GESELECTEERDE segment in blauwe kleur
            - color: blauw (#3B82F6)
            - weight: 8px breed (dikker dan de volledige route)
            - opacity: 0.95 (bijna niet transparant)
            Dit segment ligt OVER de grijze route heen voor betere zichtbaarheid
          */}
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

          {/*
            ============================================================
            START MARKER - id: start-marker
            ============================================================
            Groene MapPin marker op het startpunt van het segment
            - Groen: #22C55E
            - Draggable: kan versleept worden om startpunt aan te passen (indien onStartKmChange callback beschikbaar)
            - onDragEnd: roept handleStartMarkerDrag aan die startFromKM update
            - Popup: toont "Start" en kilometer positie
          */}
          {startPoint && (
            <Marker
              position={[startPoint.lat, startPoint.lon]}
              icon={startIcon}
              draggable={!!onStartKmChange}
              eventHandlers={{
                dragend: handleStartMarkerDrag,
              }}
            >
              <Popup autoPan={false}>
                <div className="text-sm">
                  <p className="font-semibold">{t.startMarker}</p>
                  <p>{startKm.toFixed(1)} km</p>
                  {onStartKmChange && <p className="text-xs text-gray-500 mt-1">{t.dragToAdjust}</p>}
                </div>
              </Popup>
            </Marker>
          )}

          {/*
            ============================================================
            EIND MARKER - id: end-marker
            ============================================================
            Rode MapPin marker op het eindpunt van het segment
            - Rood: #EF4444
            - Draggable: kan versleept worden om segment lengte aan te passen (indien onDistanceChange callback beschikbaar)
            - onDragEnd: roept handleEndMarkerDrag aan die distanceKM update
            - Popup: toont "Eind" en kilometer positie
          */}
          {endPoint && selectedPoints && selectedPoints.length > 0 && (
            <Marker
              position={[endPoint.lat, endPoint.lon]}
              icon={endIcon}
              draggable={!!onDistanceChange}
              eventHandlers={{
                dragend: handleEndMarkerDrag,
              }}
            >
              <Popup autoPan={false}>
                <div className="text-sm">
                  <p className="font-semibold">{t.endMarker}</p>
                  <p>{endKm?.toFixed(1)} km</p>
                  {onDistanceChange && <p className="text-xs text-gray-500 mt-1">{t.dragToAdjust}</p>}
                </div>
              </Popup>
            </Marker>
          )}

          {/*
            ============================================================
            POINTER MARKER - id: pointer-marker
            ============================================================
            Oranje/Amber MapPin marker die de huidige hover/geselecteerde positie toont
            - Oranje/Amber: #F59E0B
            - Gesynchroniseerd met het hoogteprofiel:
              * Wanneer je over het hoogteprofiel hovert, beweegt deze marker mee
              * Wanneer je deze marker versleept, update het hoogteprofiel
            - Permanent Tooltip: altijd zichtbaar (niet alleen op hover)
              * Toont hoogte (elevation) in meters indien beschikbaar
              * Toont helling (slope) in procenten:
                - Rood voor omhoog (positieve helling)
                - Blauw voor omlaag (negatieve helling)

            Deze marker verbindt de kaart met het hoogteprofiel voor interactieve visualisatie
          */}
          {pointerPoint && (
            <Marker
              position={[pointerPoint.lat, pointerPoint.lon]}
              icon={pointerIcon}
              draggable={!!onPointerKmChange}
              eventHandlers={{
                dragend: handlePointerMarkerDrag,
              }}
            >
              {/*
                Permanent tooltip (altijd zichtbaar)
                - direction="top": verschijnt boven de marker
                - offset=[0, -10]: 10px naar boven voor betere positionering
              */}
              <Tooltip permanent direction="top" offset={[0, -10]}>
                <div className="text-xs text-center">
                  {/* Hoogte in meters (indien elevation data beschikbaar) */}
                  {pointerPoint.ele !== undefined && (
                    <div className="font-bold text-amber-500">{Math.round(pointerPoint.ele)}m</div>
                  )}
                  {/*
                    Helling in procenten (indien berekend)
                    - Rood (text-red-500): omhoog / positieve helling
                    - Blauw (text-blue-500): omlaag / negatieve helling
                  */}
                  {pointerSlope !== null && (
                    <div className={`font-semibold ${pointerSlope >= 0 ? 'text-red-500' : 'text-blue-500'}`}>
                      {(pointerSlope * 100).toFixed(1)}%
                    </div>
                  )}
                </div>
              </Tooltip>
            </Marker>
          )}
        </MapContainer>
      </div>
  )

  {/*
    ============================================================
    FULLSCREEN MODE MET ELEVATION PROFILE
    ============================================================
    Als de kaart fullscreen is EN er is een elevation profile:
    - Toon beide in een verticale flex container
    - Kaart neemt flex-1 (maximale ruimte)
    - Elevation profile heeft vaste hoogte (h-48 = 12rem = 192px)

    Fixed positioning:
    - z-[9999]: zeer hoge z-index om boven alles te komen
    - Mobile: volledig scherm
    - Desktop (md): kleine marge (4 = 1rem) van de randen
  */}
  if (isFullscreen && elevationProfile) {
    return (
      <div
        id="fullscreen-with-elevation"
        className="fixed top-0 left-0 md:top-4 md:left-4 z-[9999] w-screen h-screen md:w-[calc(100vw-2rem)] md:h-[calc(100vh-2rem)] md:rounded-lg overflow-hidden bg-background"
      >
        {/*
          Flex container met verticale layout (flex-col)
          - gap-4: 1rem ruimte tussen kaart en elevation profile
          - p-4: padding rondom
          - h-full: volledige hoogte van parent
        */}
        <div className="flex flex-col h-full gap-4 p-4">
          {/*
            Map container
            - flex-1: neemt alle beschikbare ruimte (na aftrek van elevation profile)
            - min-h-0: voorkom dat flex item te groot wordt
          */}
          <div id="fullscreen-map-wrapper" className="flex-1 min-h-0">
            {mapContent}
          </div>

          {/*
            Elevation profile container
            - h-48: vaste hoogte van 12rem (192px)
            - overflow-y-auto: scrollbar indien nodig
          */}
          <div id="fullscreen-elevation-wrapper" className="h-48 overflow-y-auto">
            {elevationProfile}
          </div>
        </div>
      </div>
    )
  }

  {/*
    ============================================================
    FULLSCREEN MODE ZONDER ELEVATION PROFILE
    ============================================================
    Als de kaart fullscreen is ZONDER elevation profile:
    - Toon alleen de kaart in fullscreen
    - Zelfde fixed positioning als hierboven
  */}
  if (isFullscreen) {
    return (
      <div
        id="fullscreen-map-only"
        className="fixed top-0 left-0 md:top-4 md:left-4 z-[9999] w-screen h-screen md:w-[calc(100vw-2rem)] md:h-[calc(100vh-2rem)] md:rounded-lg overflow-hidden"
      >
        {mapContent}
      </div>
    )
  }

  {/*
    ============================================================
    NORMALE MODE
    ============================================================
    Standaard weergave: kaart in normale modus binnen de parent container
  */}
  return mapContent
}
