import * as React from "react"
import { cn } from "@/lib/utils"

interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  min?: number
  max?: number
  step?: number
  value?: number
  onValueChange?: (value: number) => void
}

const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ className, min = 0, max = 100, step = 1, value, onValueChange, onChange, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(e.target.value)
      onValueChange?.(newValue)
      onChange?.(e)
    }

    return (
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        ref={ref}
        className={cn(
          // Base track styling - larger for mobile
          "w-full h-3 md:h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700",
          // Active state
          "active:bg-gray-300 dark:active:bg-gray-600",
          // Focus state for accessibility
          "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",

          // WebKit (Chrome, Safari, Edge) thumb styling
          "[&::-webkit-slider-thumb]:appearance-none",
          "[&::-webkit-slider-thumb]:w-11 [&::-webkit-slider-thumb]:h-11", // 44px touch target
          "md:[&::-webkit-slider-thumb]:w-5 md:[&::-webkit-slider-thumb]:h-5", // Smaller on desktop
          "[&::-webkit-slider-thumb]:rounded-full",
          "[&::-webkit-slider-thumb]:bg-primary",
          "[&::-webkit-slider-thumb]:cursor-pointer",
          "[&::-webkit-slider-thumb]:shadow-md",
          "[&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white",
          "[&::-webkit-slider-thumb]:transition-all",
          "[&::-webkit-slider-thumb]:hover:scale-110",
          "[&::-webkit-slider-thumb]:active:scale-125",

          // Firefox thumb styling
          "[&::-moz-range-thumb]:w-11 [&::-moz-range-thumb]:h-11", // 44px touch target
          "md:[&::-moz-range-thumb]:w-5 md:[&::-moz-range-thumb]:h-5", // Smaller on desktop
          "[&::-moz-range-thumb]:rounded-full",
          "[&::-moz-range-thumb]:bg-primary",
          "[&::-moz-range-thumb]:cursor-pointer",
          "[&::-moz-range-thumb]:border-0",
          "[&::-moz-range-thumb]:shadow-md",
          "[&::-moz-range-thumb]:transition-all",

          // WebKit track progress fill
          "[&::-webkit-slider-runnable-track]:h-3 md:[&::-webkit-slider-runnable-track]:h-2",
          "[&::-webkit-slider-runnable-track]:rounded-lg",
          "[&::-webkit-slider-runnable-track]:bg-gray-200 dark:[&::-webkit-slider-runnable-track]:bg-gray-700",

          // Firefox track
          "[&::-moz-range-track]:h-3 md:[&::-moz-range-track]:h-2",
          "[&::-moz-range-track]:rounded-lg",
          "[&::-moz-range-track]:bg-gray-200 dark:[&::-moz-range-track]:bg-gray-700",

          className
        )}
        {...props}
      />
    )
  }
)
Slider.displayName = "Slider"

export { Slider }
