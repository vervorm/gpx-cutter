import { useState, useRef, useEffect } from 'react'
import { UploadCloud, FileUp, CheckCircle, Settings, Scissors, Download, HelpCircle, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Toast } from '@/components/ui/toast'
import { processGPX, analyzeGPX, type GPXPreview } from '@/lib/gpx-utils'

function App() {
  const [file, setFile] = useState<File | null>(null)
  const [currentXML, setCurrentXML] = useState<Document | null>(null)
  const [startFromKM, setStartFromKM] = useState<number>(0)
  const [distanceKM, setDistanceKM] = useState<number>(40)
  const [preview, setPreview] = useState<GPXPreview | null>(null)
  const [result, setResult] = useState<{
    blob: Blob
    fileName: string
    distance: number
    pointCount: number
    startKm: number
    endKm: number
  } | null>(null)
  const [toast, setToast] = useState({ show: false, message: '' })
  const [helpOpen, setHelpOpen] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const showToast = (message: string) => {
    setToast({ show: true, message })
    setTimeout(() => {
      setToast({ show: false, message: '' })
    }, 3000)
  }

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      setPreview(null)
      setResult(null)
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
      showToast('Preview geladen!')
    } catch (error) {
      showToast(error instanceof Error ? error.message : 'Er is een fout opgetreden')
    }
  }

  const handleProcess = () => {
    if (!currentXML) return

    try {
      const processedResult = processGPX(currentXML, {
        startFromKM,
        distanceKM,
      })
      setResult(processedResult)
      showToast(`Route gegenereerd: ${Math.round(processedResult.distance * 10) / 10} km!`)
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

  const handleDownload = () => {
    if (!result) return
    const url = URL.createObjectURL(result.blob)
    const a = document.createElement('a')
    a.href = url
    a.download = result.fileName
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

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

        {/* Step 2: Settings */}
        <Card className={!file ? 'opacity-50 pointer-events-none' : ''}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5 text-primary" />
              Stap 2: Instellingen
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="startFromKM">Start vanaf (KM)</Label>
              <div className="flex items-center gap-4">
                <Input
                  id="startFromKM"
                  type="number"
                  min="0"
                  max={preview?.totalDistance || 1000}
                  value={startFromKM}
                  onChange={(e) => setStartFromKM(Number(e.target.value))}
                  className="flex-1 text-lg"
                />
                <span className="text-xs text-muted-foreground w-1/2">
                  Begin het knipselectie op dit kilometerpunt.
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="distanceKM">Afstand (KM)</Label>
              <div className="flex items-center gap-4">
                <Input
                  id="distanceKM"
                  type="number"
                  min="1"
                  value={distanceKM}
                  onChange={(e) => setDistanceKM(Number(e.target.value))}
                  className="flex-1 text-lg"
                />
                <span className="text-xs text-muted-foreground w-1/2">
                  Hoeveel kilometer vanaf het startpunt.
                </span>
              </div>
            </div>
            {preview && (
              <div className="p-3 bg-accent/50 rounded-lg">
                <p className="text-sm font-medium">
                  Selectie: {startFromKM} km → {startFromKM + distanceKM} km
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Action Button */}
        {file && (
          <Button onClick={handleProcess} className="w-full h-12 text-base" size="lg">
            <Scissors className="w-5 h-5" />
            Route Genereren
          </Button>
        )}

        {/* Results */}
        {result && (
          <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/20">
            <CardHeader>
              <CardTitle className="text-green-900 dark:text-green-100">Resultaat</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                <div>
                  <p className="text-muted-foreground">Route segment:</p>
                  <p className="font-semibold">{result.startKm.toFixed(1)} - {result.endKm.toFixed(1)} km</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Afstand:</p>
                  <p className="font-semibold">{result.distance.toFixed(2)} km</p>
                </div>
                <div>
                  <p className="text-muted-foreground">GPS punten:</p>
                  <p className="font-semibold">{result.pointCount.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Bestandsnaam:</p>
                  <p className="font-semibold text-xs truncate">{result.fileName}</p>
                </div>
              </div>
              <Button
                onClick={handleDownload}
                className="w-full h-12 text-base bg-green-600 hover:bg-green-700"
                size="lg"
              >
                <Download className="w-5 h-5" />
                Download GPX Bestand
              </Button>
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
                  <li>Kies waar je wilt beginnen (Start vanaf KM).</li>
                  <li>Kies hoeveel kilometer je wilt hebben vanaf dat punt.</li>
                  <li>Klik op 'Route Genereren'.</li>
                  <li>Download je aangepaste GPX bestand!</li>
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
