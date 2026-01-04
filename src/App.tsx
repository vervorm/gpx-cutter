import { useState, useRef, useEffect, useMemo } from 'react'
import { UploadCloud, FileUp, CheckCircle, Settings, Download, HelpCircle, Eye, Map } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Toast } from '@/components/ui/toast'
import { Slider } from '@/components/ui/slider'
import { processGPX, analyzeGPX, type GPXPreview, type GPXProcessResult } from '@/lib/gpx-utils'
import { MapViewer } from '@/components/MapViewer'

function App() {
  const [file, setFile] = useState<File | null>(null)
  const [currentXML, setCurrentXML] = useState<Document | null>(null)
  const [startFromKM, setStartFromKM] = useState<number>(0)
  const [distanceKM, setDistanceKM] = useState<number>(40)
  const [preview, setPreview] = useState<GPXPreview | null>(null)
  const [allSegments, setAllSegments] = useState<GPXProcessResult[]>([])
  const [selectedSegmentIndex, setSelectedSegmentIndex] = useState<number | null>(null)
  const [toast, setToast] = useState({ show: false, message: '' })
  const [helpOpen, setHelpOpen] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

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
      setDistanceKM(Math.min(40, Math.floor(previewData.totalDistance)))
      showToast('Preview geladen!')
    } catch (error) {
      showToast(error instanceof Error ? error.message : 'Er is een fout opgetreden')
    }
  }

  const generateAllSegments = () => {
    if (!currentXML || !preview) return

    try {
      const segments: GPXProcessResult[] = []
      const segmentLength = 40 // 40km segments
      let start = 0

      while (start < preview.totalDistance) {
        const distance = Math.min(segmentLength, preview.totalDistance - start)
        if (distance < 5) break // Skip very short segments at the end

        const segment = processGPX(currentXML, {
          startFromKM: start,
          distanceKM: distance,
        })
        segments.push(segment)
        start += segmentLength
      }

      setAllSegments(segments)
      setSelectedSegmentIndex(null)
      showToast(`${segments.length} segmenten gegenereerd!`)
    } catch (error) {
      showToast(error instanceof Error ? error.message : 'Er is een fout opgetreden')
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
    showToast(`${segment.fileName} gedownload!`)
  }

  const maxDistance = preview?.totalDistance || 1000
  const roundedMaxDistance = Math.floor(maxDistance / 10) * 10

  return (
    <div className="min-h-screen bg-background p-4 pb-20">
      <Toast show={toast.show}>{toast.message}</Toast>

      {/* Header */}
      <header className="mb-8 mt-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground tracking-tight">Route Inkorten</h1>
        <p className="text-muted-foreground mt-1">Maak een korte versie van je Komoot tour</p>
      </header>

      <div className="max-w-3xl mx-auto space-y-4">
        {/* Step 1: Upload */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UploadCloud className="w-5 h-5 text-primary" />
              Stap 1: Route Laden
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div
              className="relative border-2 border-dashed border-border rounded-xl p-8 text-center hover:bg-accent/50 transition-colors cursor-pointer"
              onClick={() => fileInputRef.current?.click()}
            >
              <FileUp className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground">Tik om GPX bestand te kiezen</p>
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
                Route Preview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Route naam:</p>
                  <p className="font-semibold">{preview.originalName}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Totale afstand:</p>
                  <p className="font-semibold">{preview.totalDistance.toFixed(2)} km</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Aantal punten:</p>
                  <p className="font-semibold">{preview.totalPoints.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Max selectie:</p>
                  <p className="font-semibold">0 - {preview.totalDistance.toFixed(0)} km</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Settings - MOVED BEFORE MAP */}
        {preview && (
          <Card className="border-orange-200 bg-orange-50/50 dark:bg-orange-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-900 dark:text-orange-100">
                <Settings className="w-5 h-5" />
                Stap 2: Selecteer Segment
              </CardTitle>
              <CardDescription>
                Gebruik de sliders om je segment te kiezen - de kaart toont het direct
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label htmlFor="startFromKM">Start vanaf (KM)</Label>
                  <span className="text-lg font-semibold text-primary">{startFromKM} km</span>
                </div>
                <Slider
                  id="startFromKM"
                  min={0}
                  max={roundedMaxDistance}
                  step={10}
                  value={startFromKM}
                  onValueChange={setStartFromKM}
                />
                <p className="text-xs text-muted-foreground">
                  Stappen van 10 km
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label htmlFor="distanceKM">Afstand (KM)</Label>
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
                  Stappen van 10 km
                </p>
              </div>

              <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-lg border-2 border-primary/20">
                <p className="text-sm font-medium text-center">
                  📍 Geselecteerd Segment: <span className="text-primary font-bold">{startFromKM} km</span> → <span className="text-primary font-bold">{startFromKM + distanceKM} km</span>
                </p>
                {liveSegment && (
                  <p className="text-xs text-center mt-1 text-muted-foreground">
                    {liveSegment.pointCount} GPS punten · {liveSegment.distance.toFixed(2)} km
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Map Viewer - NOW AFTER SETTINGS */}
        {preview && (
          <Card className="border-purple-200 bg-purple-50/50 dark:bg-purple-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-900 dark:text-purple-100">
                <Map className="w-5 h-5" />
                Route Kaart
              </CardTitle>
              <CardDescription>
                Volledige route in grijs, geselecteerd segment in blauw
              </CardDescription>
            </CardHeader>
            <CardContent>
              <MapViewer
                allPoints={preview.allPoints}
                selectedPoints={liveSegment?.selectedPoints}
                startKm={startFromKM}
                endKm={startFromKM + distanceKM}
              />
            </CardContent>
          </Card>
        )}

        {/* Generate All Segments Button */}
        {preview && (
          <Button
            onClick={generateAllSegments}
            className="w-full h-12 text-base bg-purple-600 hover:bg-purple-700"
            size="lg"
          >
            <Settings className="w-5 h-5" />
            Genereer Alle Segmenten (40km)
          </Button>
        )}

        {/* All Segments Grid */}
        {allSegments.length > 0 && (
          <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/20">
            <CardHeader>
              <CardTitle className="text-green-900 dark:text-green-100">
                Alle Segmenten ({allSegments.length})
              </CardTitle>
              <CardDescription>
                Klik op een segment om te downloaden
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
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      selectedSegmentIndex === index
                        ? 'border-green-500 bg-green-100 dark:bg-green-900/50 shadow-lg scale-105'
                        : 'border-green-200 bg-white dark:bg-green-950/20 hover:border-green-400'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-green-900 dark:text-green-100">
                        Segment {index + 1}
                      </span>
                      <Download className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="text-sm space-y-1">
                      <p className="text-muted-foreground">
                        {segment.startKm.toFixed(1)} - {segment.endKm.toFixed(1)} km
                      </p>
                      <p className="font-medium">
                        {segment.distance.toFixed(2)} km · {segment.pointCount} punten
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Help Section */}
        <Card className="mt-12">
          <CardHeader
            className="cursor-pointer hover:bg-accent/50 transition-colors"
            onClick={() => setHelpOpen(!helpOpen)}
          >
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5" />
              Hoe werkt dit?
            </CardTitle>
          </CardHeader>
          {helpOpen && (
            <CardContent>
              <CardDescription className="space-y-2">
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Exporteer je GPX bestand vanuit Komoot.</li>
                  <li>Upload het bestand - een preview wordt automatisch getoond.</li>
                  <li>Gebruik de sliders om een segment te kiezen - zie het direct op de kaart!</li>
                  <li>Of klik op "Genereer Alle Segmenten" voor 40km segmenten van de hele route.</li>
                  <li>Klik op een segment om het te downloaden.</li>
                </ol>
              </CardDescription>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  )
}

export default App
