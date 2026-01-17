import { useState, useRef, useEffect, useMemo } from 'react'
import { UploadCloud, FileUp, CheckCircle, Settings, Download, Eye, Map, HelpCircle, ExternalLink, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Toast } from '@/components/ui/toast'
import { Slider } from '@/components/ui/slider'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { processGPX, analyzeGPX, type GPXPreview, type GPXProcessResult } from '@/lib/gpx-utils'
import { MapViewer } from '@/components/MapViewer'
import { Language, getTranslations } from '@/lib/i18n'
import { LanguageSelector } from '@/components/LanguageSelector'

function App() {
  // Initialize language from localStorage or default to 'nl'
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language')
    return (saved as Language) || 'nl'
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
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Save language preference to localStorage
  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

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

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      setPreview(null)
      setAllSegments([])
      setSelectedSegmentIndex(null)
      const reader = new FileReader()
      reader.onload = (e) => {
        const parser = new DOMParser()
        const xml = parser.parseFromString(e.target?.result as string, 'text/xml')
        setCurrentXML(xml)
      }
      reader.readAsText(selectedFile)
    }
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

  return (
    <div className="min-h-screen bg-background p-2 md:p-4 pb-20">
      <Toast show={toast.show}>{toast.message}</Toast>

      {/* Header with Language Selector */}
      <header className="mb-4 md:mb-8 mt-2 md:mt-4 max-w-7xl mx-auto px-2">
        <div className="flex justify-between items-start gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">{t.title}</h1>
            <p className="text-sm md:text-base text-muted-foreground mt-1">{t.subtitle}</p>
          </div>
          <LanguageSelector currentLanguage={language} onLanguageChange={handleLanguageChange} />
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-2">
        <Tabs defaultValue="route" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="route">{t.tabRoute}</TabsTrigger>
            <TabsTrigger value="about">{t.tabAbout}</TabsTrigger>
          </TabsList>

          <TabsContent value="route" className="space-y-4">
        {/* Step 1: Upload */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UploadCloud className="w-5 h-5 text-primary" />
              {t.step1Title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div
              className="relative border-2 border-dashed border-border rounded-xl p-8 text-center hover:bg-accent/50 transition-colors cursor-pointer"
              onClick={() => fileInputRef.current?.click()}
            >
              <FileUp className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground">{t.uploadPrompt}</p>
              <input
                ref={fileInputRef}
                type="file"
                accept=".gpx"
                className="hidden"
                onChange={handleFileSelect}
              />
            </div>

            {file && (
              <div className="bg-primary/10 text-primary p-3 rounded-lg text-sm flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>{file.name}</span>
              </div>
            )}
          </CardContent>
        </Card>

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
                <CardTitle className="flex items-center gap-2 text-orange-900 dark:text-orange-100">
                  <Settings className="w-5 h-5" />
                  {t.step2Title}
                </CardTitle>
                <CardDescription>
                  {t.step2Description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label htmlFor="startFromKM">{t.startFromLabel}</Label>
                  <span className="text-lg font-semibold text-primary">{startFromKM} km</span>
                </div>
                <Slider
                  id="startFromKM"
                  min={0}
                  max={roundedMaxDistance}
                  step={1}
                  value={startFromKM}
                  onValueChange={setStartFromKM}
                />
                <p className="text-xs text-muted-foreground">
                  Stappen van 1 km
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label htmlFor="distanceKM">{t.distanceLabel}</Label>
                  <span className="text-lg font-semibold text-primary">{distanceKM} km</span>
                </div>
                <Slider
                  id="distanceKM"
                  min={10}
                  max={Math.min(200, roundedMaxDistance)}
                  step={10}
                  value={distanceKM}
                  onValueChange={setDistanceKM}
                />
                <p className="text-xs text-muted-foreground">
                  Stappen van 10 km (max 200 km)
                </p>
              </div>

              <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-lg border-2 border-primary/20">
                <p className="text-sm font-medium text-center">
                  📍 {t.selectedSegment} <span className="text-primary font-bold">{startFromKM} km</span> → <span className="text-primary font-bold">{startFromKM + distanceKM} km</span>
                </p>
                {liveSegment && (
                  <p className="text-xs text-center mt-1 text-muted-foreground">
                    {liveSegment.pointCount} {t.points} · {liveSegment.distance.toFixed(2)} km
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

            {/* Map Card */}
            <Card className="border-amber-200 bg-amber-50/50 dark:bg-amber-950/20 h-fit lg:sticky lg:top-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-amber-900 dark:text-amber-100">
                  <Map className="w-5 h-5" />
                  {t.mapTitle}
                </CardTitle>
                <CardDescription>
                  {t.mapDescription}
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[400px] md:h-[500px] lg:h-[600px]">
                <MapViewer
                  allPoints={preview.allPoints}
                  selectedPoints={liveSegment?.selectedPoints}
                  startKm={startFromKM}
                  endKm={startFromKM + distanceKM}
                  translations={{
                    openFullscreen: t.openFullscreen,
                    closeFullscreen: t.closeFullscreen,
                    startMarker: t.startMarker,
                    endMarker: t.endMarker,
                    noRouteData: t.noRouteData,
                  }}
                />
              </CardContent>
            </Card>
          </div>
        )}

        {/* Generate All Segments Button */}
        {preview && (
          <Button
            onClick={generateAllSegments}
            className="w-full h-12 text-base bg-amber-600 hover:bg-amber-700"
            size="lg"
          >
            <Settings className="w-5 h-5" />
            {startFromKM === 0 ? t.generate2Segments : t.generate3Segments}
          </Button>
        )}

        {/* All Segments Grid */}
        {allSegments.length > 0 && (
          <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/20">
            <CardHeader>
              <CardTitle className="text-green-900 dark:text-green-100">
                {t.allSegmentsTitle} ({allSegments.length})
              </CardTitle>
              <CardDescription>
                {t.allSegmentsDescription}
              </CardDescription>
            </CardHeader>
            <CardContent>
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
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-green-900 dark:text-green-100">
                        {t.segment} {index + 1}
                      </span>
                      <Download className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="text-sm space-y-1">
                      <p className="text-muted-foreground">
                        {segment.startKm.toFixed(1)} - {segment.endKm.toFixed(1)} km
                      </p>
                      <p className="font-medium">
                        {segment.distance.toFixed(2)} km · {segment.pointCount} {t.points}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
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
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default App
