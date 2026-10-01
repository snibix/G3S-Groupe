import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", asChild = false, ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center rounded px-6 py-3 font-sans font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
      variant === "primary" && "bg-brand text-white border-2 border-brand hover:bg-navy focus-visible:ring-sky",
      variant === "secondary" && "bg-white text-brand border-2 border-brand hover:bg-mist focus-visible:ring-sky",
      variant === "outline" && "bg-transparent text-navy border-2 border-line hover:border-brand hover:text-brand hover:bg-brand/5 focus-visible:ring-sky",
      className
    )

    if (asChild && React.isValidElement(props.children)) {
      const child = props.children as React.ReactElement<any>;
      // We exclude 'children' from props so we don't overwrite the child's children
      const { children, ...restProps } = props;
      
      return React.cloneElement(child, {
        ...restProps,
        className: cn(classes, child.props.className),
        ref: ref as React.Ref<any>,
      } as any);
    }

    return (
      <button
        className={classes}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
