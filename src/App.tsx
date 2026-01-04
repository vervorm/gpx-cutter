import { useState, useRef } from 'react'
import { UploadCloud, FileUp, CheckCircle, Settings, Scissors, Download, HelpCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Toast } from '@/components/ui/toast'
import { processGPX } from '@/lib/gpx-utils'

function App() {
  const [file, setFile] = useState<File | null>(null)
  const [currentXML, setCurrentXML] = useState<Document | null>(null)
  const [chunkSize, setChunkSize] = useState<number>(40)
  const [result, setResult] = useState<{
    blob: Blob
    fileName: string
    distance: number
    pointCount: number
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
      const reader = new FileReader()
      reader.onload = (e) => {
        const parser = new DOMParser()
        const xml = parser.parseFromString(e.target?.result as string, 'text/xml')
        setCurrentXML(xml)
      }
      reader.readAsText(selectedFile)
    }
  }

  const handleProcess = () => {
    if (!currentXML) return

    try {
      const processedResult = processGPX(currentXML, chunkSize)
      setResult(processedResult)
      showToast(`Route ingekort tot ${Math.round(processedResult.distance * 10) / 10} km!`)
    } catch (error) {
      showToast(error instanceof Error ? error.message : 'Er is een fout opgetreden')
    }
  }

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

        {/* Step 2: Settings */}
        <Card className={!file ? 'opacity-50 pointer-events-none' : ''}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5 text-primary" />
              Stap 2: Instellingen
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label htmlFor="chunkSize">Gewenste afstand (KM)</Label>
              <div className="flex items-center gap-4">
                <Input
                  id="chunkSize"
                  type="number"
                  value={chunkSize}
                  onChange={(e) => setChunkSize(Number(e.target.value))}
                  className="flex-1 text-lg"
                />
                <span className="text-xs text-muted-foreground w-1/2">
                  De route wordt afgekapt na dit aantal kilometers.
                </span>
              </div>
            </div>
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
          <Card>
            <CardHeader>
              <CardTitle>Resultaat</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                onClick={handleDownload}
                className="w-full h-12 text-base bg-green-600 hover:bg-green-700"
                size="lg"
              >
                <Download className="w-5 h-5" />
                Download GPX Bestand
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                Gegenereerd: {result.fileName} ({result.pointCount} punten)
              </p>
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
                  <li>Upload het bestand hierboven.</li>
                  <li>Vul in hoeveel kilometer je wilt hebben (bijv. 40).</li>
                  <li>Klik op 'Route Genereren'.</li>
                  <li>Je krijgt één GPX bestand dat precies die afstand is (vanaf de start).</li>
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
