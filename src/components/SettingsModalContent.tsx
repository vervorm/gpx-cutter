import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Minus, Plus } from 'lucide-react'

/**
 * SettingsModalContent
 *
 * Modal content voor instellingen met:
 * 1. Manuele input voor "Start vanaf" (km)
 * 2. Manuele input voor "Afstand" (km)
 * 3. Plus/minus spinner voor "Max afstand"
 *
 * Wordt geopend via het MoreVertical (3-dots) icoon in de hoofdkaart.
 * Alle wijzigingen worden pas toegepast bij klik op "Pas aan".
 */

interface SettingsModalContentProps {
  startFromKM: number
  distanceKM: number
  maxDistanceInput: string
  maxDistanceSetting: number
  roundedMaxDistance: number
  maxDistanceKM: number
  setStartFromKM: (km: number) => void
  setDistanceKM: (km: number) => void
  setMaxDistanceInput: (val: string) => void
  setMaxDistanceSetting: (val: number) => void
  onClose: () => void
  startFromLabel: string
  distanceLabel: string
}

export function SettingsModalContent({
  startFromKM,
  distanceKM,
  maxDistanceInput,
  maxDistanceSetting,
  roundedMaxDistance,
  maxDistanceKM,
  setStartFromKM,
  setDistanceKM,
  setMaxDistanceInput,
  setMaxDistanceSetting,
  onClose,
  startFromLabel,
  distanceLabel,
}: SettingsModalContentProps) {
  // Lokale state voor inputs - pas bij "Pas aan" worden ze toegepast
  const [localStartKm, setLocalStartKm] = useState<string>(startFromKM.toString())
  const [localDistanceKm, setLocalDistanceKm] = useState<string>(distanceKM.toString())

  // Sync lokale state als de modal opent met nieuwe waarden
  useEffect(() => {
    setLocalStartKm(startFromKM.toString())
    setLocalDistanceKm(distanceKM.toString())
  }, [startFromKM, distanceKM])

  const handleApply = () => {
    // Validate en apply max distance
    const maxValue = parseInt(maxDistanceInput, 10)
    if (!isNaN(maxValue) && maxValue >= 10 && maxValue <= 1000) {
      setMaxDistanceSetting(maxValue)
      setMaxDistanceInput(maxValue.toString())
    } else {
      setMaxDistanceInput(maxDistanceSetting.toString())
    }

    // Validate en apply start km
    const startValue = parseInt(localStartKm, 10)
    if (!isNaN(startValue) && startValue >= 0 && startValue <= roundedMaxDistance - 10) {
      setStartFromKM(startValue)
    }

    // Validate en apply distance km
    const distValue = parseInt(localDistanceKm, 10)
    if (!isNaN(distValue) && distValue >= 10 && distValue <= maxDistanceKM) {
      setDistanceKM(distValue)
    }

    onClose()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleApply()
    }
  }

  return (
    <div className="space-y-6 py-4">
      {/* SECTIE 1: Manuele inputs voor segment selectie */}
      <div
        id="settings-segment-inputs"
        className="space-y-4 p-4 bg-muted/30 rounded-lg border"
      >
        <h3 className="text-sm font-semibold text-foreground">Segment selectie</h3>

        {/* Start vanaf input */}
        <div className="space-y-2">
          <Label htmlFor="modal-startKm" className="text-sm">
            {startFromLabel}
          </Label>
          <div className="flex items-center gap-2">
            <input
              id="modal-startKm"
              type="number"
              inputMode="numeric"
              min={0}
              max={Math.max(0, roundedMaxDistance - 10)}
              step={1}
              value={localStartKm}
              onFocus={(e) => e.target.select()}
              onChange={(e) => setLocalStartKm(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 px-3 py-2 text-base border rounded focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <span className="text-sm text-muted-foreground w-8">km</span>
          </div>
        </div>

        {/* Afstand input */}
        <div className="space-y-2">
          <Label htmlFor="modal-distanceKm" className="text-sm">
            {distanceLabel}
          </Label>
          <div className="flex items-center gap-2">
            <input
              id="modal-distanceKm"
              type="number"
              inputMode="numeric"
              min={10}
              max={maxDistanceKM}
              step={1}
              value={localDistanceKm}
              onFocus={(e) => e.target.select()}
              onChange={(e) => setLocalDistanceKm(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 px-3 py-2 text-base border rounded focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <span className="text-sm text-muted-foreground w-8">km</span>
          </div>
        </div>
      </div>

      {/* SECTIE 2: Max afstand spinner */}
      <div
        id="settings-max-distance"
        className="space-y-3 p-4 bg-muted/30 rounded-lg border"
      >
        <h3 className="text-sm font-semibold text-foreground">Max afstand</h3>
        <p className="text-xs text-muted-foreground">
          Bovengrens voor de afstand slider
        </p>

        {/* Plus/Minus Spinner */}
        <div className="flex items-center justify-center gap-4 bg-background rounded-full p-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full hover:bg-muted"
            onClick={() => {
              const currentValue = parseInt(maxDistanceInput, 10)
              const newValue = Math.max(10, currentValue - 10)
              setMaxDistanceInput(newValue.toString())
            }}
          >
            <Minus className="h-4 w-4" />
          </Button>

          <div className="flex items-center gap-2 min-w-[100px] justify-center">
            <span className="text-2xl font-bold">{maxDistanceInput}</span>
            <span className="text-base text-muted-foreground">km</span>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full hover:bg-muted"
            onClick={() => {
              const currentValue = parseInt(maxDistanceInput, 10)
              const newValue = Math.min(1000, currentValue + 10)
              setMaxDistanceInput(newValue.toString())
            }}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Apply knop */}
      <Button onClick={handleApply} className="w-full">
        Pas aan
      </Button>
    </div>
  )
}
