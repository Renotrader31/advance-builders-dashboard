"use client"

import * as React from "react"
import { cn } from "builders/lib/utils"

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'premium'
  size?: 'sm' | 'default' | 'lg'
}

export const Progress = ({ className, value = 0, variant = 'default', size = 'default', ...props }: ProgressProps) => {
  const variants = {
    default: "bg-gradient-to-r from-blue-500 to-blue-600",
    success: "bg-gradient-to-r from-green-500 to-green-600", 
    warning: "bg-gradient-to-r from-yellow-500 to-yellow-600",
    danger: "bg-gradient-to-r from-red-500 to-red-600",
    premium: "bg-gradient-to-r from-purple-500 via-blue-500 to-green-500"
  }

  const sizes = {
    sm: "h-2",
    default: "h-3", 
    lg: "h-4"
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-full bg-slate-200 shadow-inner w-full",
        sizes[size],
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "h-full transition-all duration-700 ease-out shadow-lg",
          variants[variant]
        )}
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
      {variant === 'premium' && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
      )}
    </div>
  )
}
