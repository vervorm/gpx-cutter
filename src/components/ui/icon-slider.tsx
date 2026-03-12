import * as React from "react"
import { SeparatorVertical } from "lucide-react"
import { cn } from "@/lib/utils"

interface IconSliderProps {
  min?: number
  max?: number
  step?: number
  value?: number
  onValueChange?: (value: number) => void
  className?: string
  id?: string
}

export function IconSlider({
  min = 0,
  max = 100,
  step = 1,
  value = 0,
  onValueChange,
  className,
  id,
}: IconSliderProps) {
  const [isDragging, setIsDragging] = React.useState(false)
  const trackRef = React.useRef<HTMLDivElement>(null)

  const percentage = ((value - min) / (max - min)) * 100

  const updateValue = (clientX: number) => {
    if (!trackRef.current) return

    const rect = trackRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(1, x / rect.width))
    const rawValue = min + percentage * (max - min)
    const steppedValue = Math.round(rawValue / step) * step
    const clampedValue = Math.max(min, Math.min(max, steppedValue))

    if (onValueChange && clampedValue !== value) {
      onValueChange(clampedValue)
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    updateValue(e.clientX)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    if (e.touches.length > 0) {
      updateValue(e.touches[0].clientX)
    }
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      updateValue(e.clientX)
    }
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging && e.touches.length > 0) {
      updateValue(e.touches[0].clientX)
    }
  }

  const handleEnd = () => {
    setIsDragging(false)
  }

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleEnd)
      document.addEventListener('touchmove', handleTouchMove)
      document.addEventListener('touchend', handleEnd)

      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleEnd)
        document.removeEventListener('touchmove', handleTouchMove)
        document.removeEventListener('touchend', handleEnd)
      }
    }
  }, [isDragging, min, max, step, value, onValueChange])

  return (
    <div
      id={id}
      className={cn("relative w-full", className)}
      style={{ touchAction: 'none' }}
    >
      {/* Track */}
      <div
        ref={trackRef}
        className="relative h-3 md:h-2 bg-gray-200 dark:bg-gray-700 rounded-lg cursor-pointer"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Filled portion */}
        <div
          className="absolute h-full bg-primary rounded-lg transition-all"
          style={{ width: `${percentage}%` }}
        />

        {/* Handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
          style={{ left: `${percentage}%` }}
        >
          {/* Touch target */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 md:w-8 md:h-8"
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          />

          {/* Visual handle */}
          <div className={cn(
            "bg-primary rounded-full p-1.5 md:p-1 border-2 border-white shadow-lg transition-transform",
            isDragging && "scale-110"
          )}>
            <SeparatorVertical className="w-5 h-5 md:w-3 md:h-3 text-white" />
          </div>
        </div>
      </div>
    </div>
  )
}
