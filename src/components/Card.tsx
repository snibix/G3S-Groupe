import * as React from "react"
import { cn } from "@/lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, icon, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-white border border-line border-t-4 border-t-brand rounded-md p-6 flex flex-col",
          className
        )}
        {...props}
      >
        {icon && (
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand text-white mb-4">
            {icon}
          </div>
        )}
        {children}
      </div>
    )
  }
)
Card.displayName = "Card"

export { Card }
