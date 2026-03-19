import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "builders/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-lg px-3 py-1 text-xs font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 border border-blue-300 shadow-sm hover:shadow-md",
        secondary: "bg-gradient-to-r from-slate-100 to-slate-200 text-slate-800 border border-slate-300 shadow-sm",
        destructive: "bg-gradient-to-r from-red-100 to-red-200 text-red-800 border border-red-300 shadow-sm",
        success: "bg-gradient-to-r from-green-100 to-green-200 text-green-800 border border-green-300 shadow-sm",
        warning: "bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 border border-yellow-300 shadow-sm",
        outline: "border-2 border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50",
        premium: "bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 text-white shadow-lg hover:shadow-xl transform hover:scale-105",
      },
      size: {
        sm: "px-2 py-0.5 text-xs rounded-md",
        default: "px-3 py-1 text-xs rounded-lg",
        lg: "px-4 py-2 text-sm rounded-xl font-black",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
