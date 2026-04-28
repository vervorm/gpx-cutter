import { useState, useRef, useEffect, useMemo } from 'react'
import { UploadCloud, FileUp, CheckCircle, Settings, Download, Eye, Map, HelpCircle, ExternalLink, Heart, Code2, Github, MoreVertical, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Toast } from '@/components/ui/toast'
import { IconSlider } from '@/components/ui/icon-slider'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { processGPX, analyzeGPX, type GPXPreview, type GPXProcessResult } from '@/lib/gpx-utils'
import { MapViewer } from '@/components/MapViewer'
import { ElevationProfile } from '@/components/ElevationProfile'
import { Language, getTranslations } from '@/lib/i18n'
import { LanguageSelector } from '@/components/LanguageSelector'
import { saveRoute, loadRoute, clearRoute } from '@/lib/route-cache'
import { EXAMPLE_GPX } from '@/data/example-route'
import { SettingsModalContent } from '@/components/SettingsModalContent'

const APP_VERSION = '1.2.0'
const BUILD_DATE = new Date().toISOString().split('T')[0]

function App() {
  // Initialize language from localStorage or default to 'nl'
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language')
    const validLanguages: Language[] = ['nl', 'en', 'fr', 'es', 'de', 'no', 'pt']
    return (saved && validLanguages.includes(saved as Language)) ? (saved as Language) : 'nl'
  })
  const t = getTranslations(language)

  const [file, setFile] = useState<File | null>(null)
  const [currentXML, setCurrentXML] = useState<Document | null>(null)
  const [startFromKM, setStartFromKM] = useState<number>(0)
  const [distanceKM, setDistanceKM] = useState<number>(100)
  const [preview, setPreview] = useState<GPXPreview | null>(null)
  const [allSegments, setAllSegments] = useState<GPXProcessResult[]>([])
  const [selectedSegmentIndex, setSelectedSegmentIndex] = useState<number | null>(null)
  const [toast, setToast] = useState({ show: false, message: '' })
  const [helpOpen, setHelpOpen] = useState(false)
  const [hasCachedRoute, setHasCachedRoute] = useState<string | null>(null)
  // Interactive pointer position (km from start of selected segment)
  const [pointerKm, setPointerKm] = useState<number | null>(null)
  const [maxDistanceSetting, setMaxDistanceSetting] = useState<number>(() => {
    const saved = localStorage.getItem('maxDistanceSetting')
    return saved ? parseInt(saved, 10) : 250
  })
  const [maxDistanceInput, setMaxDistanceInput] = useState<string>(() => {
    const saved = localStorage.getItem('maxDistanceSetting')
    return saved || '250'
  })
  const [settingsOpen, setSettingsOpen] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Laad route automatisch bij opstarten als er iets in IndexedDB staat
  useEffect(() => {
    loadRoute().then((entry) => {
      if (entry) {
        setHasCachedRoute(entry.filename)
        const parser = new DOMParser()
        const xml = parser.parseFromString(entry.xml, 'text/xml')
        setCurrentXML(xml)

        // Preview maken en dan slider posities herstellen
        try {
          const previewData = analyzeGPX(xml)
          setPreview(previewData)

          // Herstel opgeslagen slider posities, of gebruik defaults
          setStartFromKM(entry.startFromKM ?? 0)
          setDistanceKM(entry.distanceKM ?? Math.min(100, Math.floor(previewData.totalDistance)))
        } catch (error) {
          console.error('Failed to preview cached route:', error)
        }
      }
    })
  }, [])

  // Save language preference to localStorage
  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  // Save max distance setting to localStorage
  useEffect(() => {
    localStorage.setItem('maxDistanceSetting', maxDistanceSetting.toString())
  }, [maxDistanceSetting])

  const showToast = (message: string) => {
    setToast({ show: true, message })
    setTimeout(() => {
      setToast({ show: false, message: '' })
    }, 3000)
  }

  // Live preview of selected segment
  const liveSegment = useMemo(() => {
    if (!currentXML || !preview) return null

    try {
      return processGPX(currentXML, {
        startFromKM,
        distanceKM,
      })
    } catch (error) {
      return null
    }
  }, [currentXML, startFromKM, distanceKM, preview])

  const loadXMLString = (xmlString: string, filename: string) => {
    const parser = new DOMParser()
    const xml = parser.parseFromString(xmlString, 'text/xml')
    setCurrentXML(xml)
    setPreview(null)
    setAllSegments([])
    setSelectedSegmentIndex(null)
    setHasCachedRoute(filename)
  }

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      setPreview(null)
      setAllSegments([])
      setSelectedSegmentIndex(null)
      const reader = new FileReader()
      reader.onload = (e) => {
        const xmlString = e.target?.result as string
        loadXMLString(xmlString, selectedFile.name)
        saveRoute(xmlString, selectedFile.name).catch(() => {})
      }
      reader.readAsText(selectedFile)
    }
  }

  const handleLoadCachedRoute = async () => {
    const entry = await loadRoute()
    if (entry) {
      setHasCachedRoute(entry.filename)
      const parser = new DOMParser()
      const xml = parser.parseFromString(entry.xml, 'text/xml')
      setCurrentXML(xml)
      setAllSegments([])
      setSelectedSegmentIndex(null)

      // Preview maken en dan slider posities herstellen
      try {
        const previewData = analyzeGPX(xml)
        setPreview(previewData)

        // Herstel opgeslagen slider posities, of gebruik defaults
        setStartFromKM(entry.startFromKM ?? 0)
        setDistanceKM(entry.distanceKM ?? Math.min(100, Math.floor(previewData.totalDistance)))
      } catch (error) {
        console.error('Failed to preview cached route:', error)
      }
    }
  }

  const handleClearCachedRoute = () => {
    clearRoute().catch(() => {})
    setHasCachedRoute(null)
    setFile(null)
    setCurrentXML(null)
    setPreview(null)
    setAllSegments([])
    setSelectedSegmentIndex(null)
  }

  const handleLoadExample = () => {
    setFile(null)
    loadXMLString(EXAMPLE_GPX, 'Voorbeeld Route: Oostende - Antwerpen')
    saveRoute(EXAMPLE_GPX, 'Voorbeeld Route: Oostende - Antwerpen').catch(() => {})
  }

  const handleDeleteRoute = () => {
    // Reset all state
    setFile(null)
    setCurrentXML(null)
    setPreview(null)
    setAllSegments([])
    setSelectedSegmentIndex(null)
    setStartFromKM(0)
    setDistanceKM(100)
    // Clear cached route
    clearRoute().catch(() => {})
    setHasCachedRoute(null)
    showToast('Route gewist')
  }

  const handlePreview = () => {
    if (!currentXML) return

    try {
      const previewData = analyzeGPX(currentXML)
      setPreview(previewData)
      setStartFromKM(0)
      setDistanceKM(Math.min(100, Math.floor(previewData.totalDistance)))
      showToast('Preview geladen!')
    } catch (error) {
      showToast(error instanceof Error ? error.message : 'Er is een fout opgetreden')
    }
  }

  const generateAllSegments = () => {
    if (!currentXML || !preview) return

    try {
      const segments: GPXProcessResult[] = []

      if (startFromKM === 0) {
        // 2 segmenten: splits de route op basis van selectie
        // Segment 1: 0 tot gekozen afstand
        const segment1 = processGPX(currentXML, {
          startFromKM: 0,
          distanceKM: distanceKM,
        })
        segments.push(segment1)

        // Segment 2: start waar segment 1 eindigt
        const remainingDistance = preview.totalDistance - segment1.endKm
        if (remainingDistance > 0.1) { // Voeg alleen toe als er nog iets over is (0.1km marge)
          segments.push(processGPX(currentXML, {
            startFromKM: segment1.endKm,
            distanceKM: remainingDistance,
          }))
        }
      } else {
        // 3 segmenten: voor, geselecteerd, na
        // Segment 1: 0 tot start (als er ruimte is)
        if (startFromKM > 0) {
          segments.push(processGPX(currentXML, {
            startFromKM: 0,
            distanceKM: startFromKM,
          }))
        }

        // Segment 2: geselecteerd segment
        const segment2 = processGPX(currentXML, {
          startFromKM,
          distanceKM,
        })
        segments.push(segment2)

        // Segment 3: na het geselecteerde segment tot einde (als er ruimte is)
        const remaining = preview.totalDistance - segment2.endKm
        if (remaining > 1) {
          segments.push(processGPX(currentXML, {
            startFromKM: segment2.endKm,
            distanceKM: remaining,
          }))
        }
      }

      setAllSegments(segments)
      setSelectedSegmentIndex(null)
      showToast(`${segments.length} ${t.segmentsGenerated}`)
    } catch (error) {
      showToast(error instanceof Error ? error.message : t.error)
    }
  }

  // Auto-preview when file is loaded
  useEffect(() => {
    if (currentXML && !preview) {
      handlePreview()
    }
  }, [currentXML])

  const handleDownload = (segment: GPXProcessResult) => {
    const url = URL.createObjectURL(segment.blob)
    const a = document.createElement('a')
    a.href = url
    a.download = segment.fileName
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    showToast(`${segment.fileName} ${t.downloaded}`)
  }

  const maxDistance = preview?.totalDistance || 0
  const roundedMaxDistance = Math.ceil(maxDistance)
  const maxDistanceKM = Math.max(10, Math.min(maxDistanceSetting, Math.floor(maxDistance - startFromKM)))

  // Clamp distanceKM when startFromKM changes and leaves no room
  useEffect(() => {
    if (preview && distanceKM > maxDistanceKM) {
      setDistanceKM(Math.max(10, maxDistanceKM))
    }
  }, [startFromKM, preview, maxDistanceKM, distanceKM])

  // Save slider positions to IndexedDB when they change
  useEffect(() => {
    if (currentXML && hasCachedRoute) {
      const serializer = new XMLSerializer()
      const xmlString = serializer.serializeToString(currentXML)
      saveRoute(xmlString, hasCachedRoute, startFromKM, distanceKM).catch(() => {})
    }
  }, [startFromKM, distanceKM])

  return (
    <div className="min-h-screen bg-background p-2 md:p-4 pb-20">
      <Toast show={toast.show}>{toast.message}</Toast>

      {/* Header with Language Selector */}
      <header className="mb-4 md:mb-8 mt-2 md:mt-4 max-w-7xl mx-auto px-2">
        <div className="flex flex-col">
          <div className="lg:hidden mb-6">
            <div className="sticky top-4">
              <a
                href="https://www.komoptegenkanker.be/acties/10k-voor-k"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:opacity-80 transition-opacity flex gap-4 items-end"
                title="Kom op tegen Kanker - 10K voor K"
              >
                <img
                  src="kotk_base_logo-mobile.svg"
                  alt="Kom op tegen Kanker"
                /><span className="italic text-sm block mt-2 text-amber-900">
                  #10k-voor-k <br />#KomOpTegenKanker
                </span>
              </a>
            </div>
          </div>
          <div className="flex justify-between items-start gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">{t.title}</h1>
              <p className="text-sm md:text-base text-muted-foreground mt-1">{t.subtitle}</p>
            </div>
            <LanguageSelector currentLanguage={language} onLanguageChange={handleLanguageChange} />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-2 flex">
        <Tabs defaultValue="route" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="route">{t.tabRoute}</TabsTrigger>
            <TabsTrigger value="about">{t.tabAbout}</TabsTrigger>
          </TabsList>

          <TabsContent value="route" className="space-y-4">
            {/* Hidden file input — altijd aanwezig */}
            <input
              ref={fileInputRef}
              type="file"
              accept=".gpx"
              className="hidden"
              onChange={handleFileSelect}
            />

            {/* Step 1: Upload — verborgen zodra een route geladen is */}
            {!preview && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <UploadCloud className="w-5 h-5 text-primary" />
                    {t.step1Title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Cached route banner */}
                  {hasCachedRoute && (
                    <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-3 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2 min-w-0">
                        <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                        <div className="min-w-0">
                          <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Vorige route opgeslagen</p>
                          <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 truncate">{hasCachedRoute}</p>
                        </div>
                      </div>
                      <div className="flex gap-2 shrink-0">
                        <Button size="sm" onClick={handleLoadCachedRoute}>
                          Laad opnieuw
                        </Button>
                        <Button size="sm" variant="ghost" className="text-muted-foreground" onClick={handleClearCachedRoute}>
                          Wis
                        </Button>
                      </div>
                    </div>
                  )}

                  <div className="space-y-3">
                    <div
                      className="relative border-2 border-dashed border-border rounded-xl p-8 text-center hover:bg-accent/50 transition-colors cursor-pointer"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <FileUp className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground">{t.uploadPrompt}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex-1 border-t border-border"></div>
                      <span className="text-xs text-muted-foreground uppercase">of</span>
                      <div className="flex-1 border-t border-border"></div>
                    </div>

                    <Button
                      onClick={handleLoadExample}
                      variant="outline"
                      className="w-full"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      {t.tryExample}
                    </Button>
                  </div>

                  {file && (
                    <div className="bg-primary/10 text-primary p-3 rounded-lg text-sm flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>{file.name}</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Kleine "andere route laden" knop als een route actief is */}
            {preview && (
              <div className="flex items-center justify-between gap-3 px-1">
                <div className="flex items-center gap-2 text-sm text-muted-foreground min-w-0">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                  <span className="truncate font-medium">{hasCachedRoute || file?.name}</span>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => fileInputRef.current?.click()}>
                    <FileUp className="w-4 h-4" />
                    Andere route
                  </Button>
                  <Button size="sm" variant="ghost" onClick={handleDeleteRoute} title={t.deleteRoute}>
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </Button>
                </div>
              </div>
            )}

            {/* Preview */}
            {preview && (
              <Card className="border-blue-200 bg-blue-50/50 dark:bg-blue-950/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900 dark:text-blue-100">
                    <Eye className="w-5 h-5" />
                    {t.previewTitle}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">{t.routeName}</p>
                      <p className="font-semibold">{preview.originalName}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">{t.totalDistance}</p>
                      <p className="font-semibold">{preview.totalDistance.toFixed(2)} km</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">{t.totalPoints}</p>
                      <p className="font-semibold">{preview.totalPoints.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">{t.maxSelection}</p>
                      <p className="font-semibold">0 - {preview.totalDistance.toFixed(0)} km</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Settings and Map - Side by side on desktop */}
            {preview && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Settings Card */}
                <Card className="border-orange-200 bg-orange-50/50 dark:bg-orange-950/20">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="flex items-center gap-2 text-orange-900 dark:text-orange-100">
                          <Settings className="w-5 h-5" />
                          {t.step2Title}
                        </CardTitle>
                        <CardDescription>
                          {t.step2Description}
                        </CardDescription>
                      </div>
                      <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                          <DialogHeader>
                            <DialogTitle>Instellingen</DialogTitle>
                          </DialogHeader>
                          <SettingsModalContent
                            startFromKM={startFromKM}
                            distanceKM={distanceKM}
                            maxDistanceInput={maxDistanceInput}
                            maxDistanceSetting={maxDistanceSetting}
                            roundedMaxDistance={roundedMaxDistance}
                            maxDistanceKM={maxDistanceKM}
                            setStartFromKM={setStartFromKM}
                            setDistanceKM={setDistanceKM}
                            setMaxDistanceInput={setMaxDistanceInput}
                            setMaxDistanceSetting={setMaxDistanceSetting}
                            onClose={() => setSettingsOpen(false)}
                            startFromLabel={t.startFromLabel}
                            distanceLabel={t.distanceLabel}
                          />
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Label htmlFor="startFromKM" className="text-sm">{t.startFromLabel}</Label>
                        <span className="text-base font-semibold text-primary">{startFromKM} km</span>
                      </div>
                      <IconSlider
                        id="startFromKM"
                        min={0}
                        max={roundedMaxDistance}
                        step={1}
                        value={startFromKM}
                        onValueChange={setStartFromKM}
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Label htmlFor="distanceKM" className="text-sm">{t.distanceLabel}</Label>
                        <span className="text-base font-semibold text-primary">{distanceKM} km</span>
                      </div>
                      <IconSlider
                        id="distanceKM"
                        min={10}
                        max={maxDistanceKM}
                        step={1}
                        value={distanceKM}
                        onValueChange={setDistanceKM}
                      />
                    </div>

                  </CardContent>
                </Card>

                {/*
                  ============================================================
                  MAP CARD - id: map-and-segments-card
                  ============================================================
                  Dit is de gecombineerde kaart die de volgende onderdelen bevat:
                  1. De interactieve kaart met route visualisatie
                  2. Het hoogteprofiel onder de kaart
                  3. De "Genereer segmenten" knop
                  4. Het grid met alle gegenereerde segmenten

                  Deze card blijft "sticky" op desktop (lg:sticky lg:top-4)
                */}
                <Card
                  id="map-and-segments-card"
                  className="border-amber-200 bg-amber-50/50 dark:bg-amber-950/20 h-fit lg:sticky lg:top-4"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-amber-900 dark:text-amber-100">
                      <Map className="w-5 h-5" />
                      {t.mapTitle}
                    </CardTitle>
                    <CardDescription>
                      {t.mapDescription}
                    </CardDescription>
                  </CardHeader>

                  {/*
                    CardContent met vertical spacing tussen alle onderdelen
                    space-y-4 zorgt voor 1rem (16px) ruimte tussen child elementen
                  */}
                  <CardContent className="space-y-4">

                    {/*
                      ============================================================
                      MAP VIEWER CONTAINER - id: map-viewer-container
                      ============================================================
                      Container voor de interactieve kaart met responsive heights:
                      - Mobile: 400px
                      - Tablet (md): 500px
                      - Desktop (lg): 600px
                    */}
                    <div
                      id="map-viewer-container"
                      className="h-[400px] md:h-[500px] lg:h-[600px]"
                    >
                      {/*
                        MapViewer component toont de route op een Leaflet kaart
                        - allPoints: alle punten van de originele route
                        - selectedPoints: geselecteerde punten voor het huidige segment
                        - startKm/endKm: start en eind positie van het segment
                        - onStartKmChange/onDistanceChange: callbacks voor het aanpassen van segment via markers
                        - pointerKm: positie van de pointer op het hoogteprofiel (sync met kaart)
                        - elevationProfile: het hoogteprofiel element dat in fullscreen getoond wordt
                      */}
                      <MapViewer
                        allPoints={preview.allPoints}
                        selectedPoints={liveSegment?.selectedPoints}
                        startKm={startFromKM}
                        endKm={startFromKM + distanceKM}
                        onStartKmChange={(km) => {
                          // Voorkom dat start positie verder gaat dan totale afstand - 10km
                          // We hebben minimaal 10km nodig voor een segment
                          const maxStart = Math.floor(preview.totalDistance - 10)
                          const newStart = Math.max(0, Math.min(km, maxStart))
                          setStartFromKM(newStart)
                        }}
                        onDistanceChange={(km) => {
                          // Voorkom dat afstand groter is dan beschikbare afstand vanaf start punt
                          const maxDistance = Math.floor(preview.totalDistance - startFromKM)
                          const newDistance = Math.max(10, Math.min(km, maxDistance))
                          setDistanceKM(newDistance)
                        }}
                        pointerKm={pointerKm}
                        onPointerKmChange={setPointerKm}
                        elevationProfile={
                          // Conditionally render het hoogteprofiel als er een segment is met elevation data
                          liveSegment && liveSegment.selectedPoints.length > 0 && liveSegment.elevation ? (
                            <div className="p-3 bg-white dark:bg-gray-800 rounded-lg border-2 border-amber-200">
                              <ElevationProfile
                                points={liveSegment.selectedPoints}
                                startKm={startFromKM}
                                className="w-full"
                                pointerKm={pointerKm}
                                onPointerKmChange={setPointerKm}
                              />
                            </div>
                          ) : undefined
                        }
                        translations={{
                          openFullscreen: t.openFullscreen,
                          closeFullscreen: t.closeFullscreen,
                          startMarker: t.startMarker,
                          endMarker: t.endMarker,
                          pointerMarker: 'Positie',
                          noRouteData: t.noRouteData,
                          dragToAdjust: t.dragToAdjust,
                        }}
                      />
                    </div>

                    {/*
                      ============================================================
                      ELEVATION PROFILE - id: elevation-profile-section
                      ============================================================
                      Het hoogteprofiel wordt hier ONDER de kaart getoond in normale modus.
                      In fullscreen modus wordt dit ook getoond via de elevationProfile prop.

                      Voorwaarden om te tonen:
                      1. Er moet een live segment zijn
                      2. Het segment moet punten bevatten
                      3. Het segment moet elevation data bevatten
                    */}
                    {liveSegment && liveSegment.selectedPoints.length > 0 && liveSegment.elevation && (
                      <div
                        id="elevation-profile-section"
                        className="p-3 bg-white dark:bg-gray-800 rounded-lg border-2 border-amber-200"
                      >
                        {/*
                          ElevationProfile component visualiseert hoogte data als een grafiek
                          - Toont hoogte (elevation) op Y-as
                          - Toont afstand op X-as
                          - Interactief: hover/click om pointer positie te wijzigen
                          - Pointer sync met de kaart via pointerKm state
                        */}
                        <ElevationProfile
                          points={liveSegment.selectedPoints}
                          startKm={startFromKM}
                          className="w-full"
                          pointerKm={pointerKm}
                          onPointerKmChange={setPointerKm}
                        />
                      </div>
                    )}

                    {/*
                      ============================================================
                      GENERATE SEGMENTS BUTTON - id: generate-segments-button
                      ============================================================
                      Knop om automatisch 2 of 3 segmenten te genereren op basis van:
                      - Als startFromKM === 0: genereert 2 segmenten (eerste helft + tweede helft)
                      - Als startFromKM > 0: genereert 3 segmenten (voor start, tussen start-eind, na eind)
                    */}
                    {preview && (
                      <Button
                        id="generate-segments-button"
                        onClick={generateAllSegments}
                        className="w-full h-12 text-base bg-amber-600 hover:bg-amber-700"
                        size="lg"
                      >
                        <Settings className="w-5 h-5" />
                        {startFromKM === 0 ? t.generate2Segments : t.generate3Segments}
                      </Button>
                    )}

                    {/*
                      ============================================================
                      ALL SEGMENTS GRID - id: all-segments-grid
                      ============================================================
                      Grid met alle gegenereerde segmenten
                      - Wordt alleen getoond als er segmenten zijn
                      - Responsive grid: 1 kolom op mobile, 2 kolommen op desktop (md)
                      - Elk segment is een klikbare button die het segment downloadt
                      - Hover effect: highlight het segment op de kaart via selectedSegmentIndex
                    */}
                    {allSegments.length > 0 && (
                      <div id="all-segments-grid">
                        {/* Header met titel en beschrijving */}
                        <div className="mb-3">
                          <h3 className="font-semibold text-green-900 dark:text-green-100">
                            {t.allSegmentsTitle} ({allSegments.length})
                          </h3>
                          <p className="text-sm text-muted-foreground">{t.allSegmentsDescription}</p>
                        </div>

                        {/*
                          Grid container
                          - grid-cols-1: 1 kolom op mobile
                          - md:grid-cols-2: 2 kolommen vanaf medium screens
                          - gap-3: 0.75rem ruimte tussen grid items
                        */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {allSegments.map((segment, index) => (
                            <button
                              key={index}
                              onClick={() => handleDownload(segment)}
                              onMouseEnter={() => setSelectedSegmentIndex(index)}
                              onMouseLeave={() => setSelectedSegmentIndex(null)}
                              className={`p-4 rounded-lg border-2 transition-all text-left ${selectedSegmentIndex === index
                                ? 'border-green-500 bg-green-100 dark:bg-green-900/50 shadow-lg scale-105'
                                : 'border-green-200 bg-white dark:bg-green-950/20 hover:border-green-400'
                                }`}
                            >
                              {/* Segment header met nummer en download icon */}
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-semibold text-green-900 dark:text-green-100">
                                  {t.segment} {index + 1}
                                </span>
                                <Download className="w-4 h-4 text-green-600" />
                              </div>

                              {/* Segment details: afstand, punten, elevatie */}
                              <div className="text-sm space-y-1">
                                {/* Start en eind kilometer */}
                                <p className="text-muted-foreground">
                                  {segment.startKm.toFixed(1)} - {segment.endKm.toFixed(1)} km
                                </p>
                                {/* Totale afstand en aantal punten */}
                                <p className="font-medium">
                                  {segment.distance.toFixed(2)} km · {segment.pointCount} {t.points}
                                </p>
                                {/* Hoogtemeters (gain/loss) indien beschikbaar */}
                                {segment.elevation && (
                                  <p className="text-xs text-muted-foreground">
                                    ↗ {segment.elevation.gain}m · ↘ {segment.elevation.loss}m
                                  </p>
                                )}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Help Section */}
            <Card className="mt-8">
              <CardHeader
                className="cursor-pointer hover:bg-accent/50 transition-colors"
                onClick={() => setHelpOpen(!helpOpen)}
              >
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5" />
                  {t.howItWorksTitle}
                </CardTitle>
              </CardHeader>
              {helpOpen && (
                <CardContent>
                  <CardDescription className="space-y-2">
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>{t.howItWorksStep1}</li>
                      <li>{t.howItWorksStep2}</li>
                      <li>{t.howItWorksStep3}</li>
                      <li>{t.howItWorksStep4}</li>
                      <li>{t.howItWorksStep5}</li>
                    </ol>
                  </CardDescription>
                </CardContent>
              )}
            </Card>
          </TabsContent>

          <TabsContent value="about" className="space-y-4">
            {/* About Section */}
            <Card className="border-4 border-blue-300 bg-gradient-to-br from-blue-50 via-amber-50 to-yellow-50 dark:from-blue-950/40 dark:via-amber-950/40 dark:to-yellow-950/40 shadow-xl">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-2xl text-blue-900 dark:text-blue-100">
                  <Heart className="w-7 h-7 text-yellow-600 fill-yellow-600" />
                  {t.aboutTitle}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Why this tool */}
                <div className="space-y-3 bg-white/60 dark:bg-gray-900/20 p-4 rounded-lg">
                  <h3 className="font-bold text-lg text-blue-900 dark:text-blue-100">{t.aboutWhyTitle}</h3>
                  <div className="space-y-2 text-sm">
                    <p>• {t.aboutWhyText1}</p>
                    <p>• {t.aboutWhyText2}</p>
                    <p>• {t.aboutWhyText3}</p>
                  </div>
                </div>

                {/* Personal story */}
                <div className="space-y-4 bg-gradient-to-r from-amber-50/80 to-yellow-50/80 dark:from-amber-950/30 dark:to-yellow-950/30 p-5 rounded-lg border-2 border-amber-200 dark:border-amber-800">
                  <h3 className="font-bold text-xl text-amber-900 dark:text-amber-100 flex items-center gap-2">
                    {t.aboutStoryTitle}
                  </h3>
                  <div className="space-y-3 text-sm">
                    <p className="font-medium">{t.aboutStoryText1}</p>
                    <p>{t.aboutStoryText2}</p>
                    <p className="pt-2 font-semibold">{t.aboutStoryText3}</p>
                    <p className="font-bold text-blue-700 dark:text-blue-300 text-xl py-3 bg-white/50 dark:bg-gray-900/30 rounded-lg">
                      {t.aboutStoryText4}
                    </p>

                    <p className="text-sm font-medium bg-blue-50/80 dark:bg-blue-950/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800">
                      {t.aboutJourneyDates}
                    </p>

                    {/* Kom op tegen Kanker */}
                    <div className="bg-yellow-300/80 dark:bg-yellow-950/40 p-4 rounded-lg border-2 border-yellow-500 dark:border-yellow-700 mt-4">
                      <p className="font-bold text-yellow-900 dark:text-yellow-100 text-lg flex items-center justify-center gap-2">
                        {t.aboutCancerText}
                      </p>
                    </div>

                    <p className="italic font-bold text-lg text-amber-700 dark:text-amber-300 pt-3">
                      {t.aboutDedication}
                    </p>
                  </div>
                </div>

                {/* Links */}
                <div className="space-y-3 bg-white/60 dark:bg-gray-900/20 p-4 rounded-lg">
                  <h3 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-3">{t.aboutLinksTitle}</h3>
                  <div className="space-y-2">
                    <a
                      href="https://www.komoot.com/collection/3148111/-tenkfork"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 hover:underline transition-colors font-medium"
                    >
                      <Map className="w-5 h-5" />
                      {t.aboutLinkKomoot}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.komoptegenkanker.be/acties/10k-voor-k"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-800 dark:hover:text-yellow-200 hover:underline transition-colors font-medium"
                    >
                      <Heart className="w-5 h-5 fill-current" />
                      {t.aboutLinkKomOpTegenKanker}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.instagram.com/steven_verhoest?igsh=eHY0Y3BsOXd3dTdv&utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-amber-600 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-200 hover:underline transition-colors font-medium"
                    >
                      <Eye className="w-5 h-5" />
                      {t.aboutLinkInstagram}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Technology & Open Source */}
                <div className="space-y-3 bg-gradient-to-r from-gray-50/80 to-blue-50/80 dark:from-gray-900/30 dark:to-blue-950/30 p-4 rounded-lg border-2 border-gray-200 dark:border-gray-700">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100 flex items-center gap-2">
                    <Code2 className="w-5 h-5" />
                    {t.aboutTechTitle}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{t.aboutTechText}</p>
                  <div className="space-y-2 pt-2">
                    <a
                      href="https://github.com/vervorm/gpx-cutter"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:text-gray-950 dark:hover:text-white hover:underline transition-colors font-medium"
                    >
                      <Github className="w-5 h-5" />
                      {t.aboutTechGithub}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 pt-2 border-t border-gray-300 dark:border-gray-600">
                      <Code2 className="w-4 h-4" />
                      <span>{t.aboutTechClaude}</span>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-500 pt-2 text-center">
                      v{APP_VERSION}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        <div className="hidden lg:block ml-6">
          <div className="sticky top-4">
            <a
              href="https://www.komoptegenkanker.be/acties/10k-voor-k"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:opacity-80 transition-opacity"
              title="Kom op tegen Kanker - 10K voor K"
            >
              <img
                src="kom-op-tegen-kanker.svg"
                alt="Kom op tegen Kanker"
                className="w-40 rounded-lg shadow-lg"
              />
              <span className="italic text-sm block mt-2 text-amber-900">
                #10k-voor-k #KomOpTegenKanker
              </span>
            </a>
          </div>
        </div>
      </div>

      {/*
        ============================================================
        VERSION FOOTER
        ============================================================
        Versienummer onderaan de pagina (niet fixed).
        Tooltip toont build datum bij hover.
      */}
      <footer className="text-center py-6 mt-8 border-t border-border">
        <p
          className="text-xs text-muted-foreground font-mono"
          title={`Built on ${BUILD_DATE}`}
        >
          v{APP_VERSION}
        </p>
      </footer>
    </div>
  )
}

export default App
