import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "mist";
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "py-16 w-full",
          variant === "mist" ? "bg-mist" : "bg-white",
          className
        )}
        {...props}
      >
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          {children}
        </div>
      </section>
    )
  }
)
Section.displayName = "Section"

export { Section }
