import * as React from "react"

import { cn } from "@/lib/utils"

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  show: boolean
}

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ className, show, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "fixed top-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-full shadow-lg z-50 text-sm font-medium transition-opacity duration-300",
          show ? "opacity-100" : "opacity-0 pointer-events-none",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
Toast.displayName = "Toast"

export { Toast }
