"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button
        className={cn(
          "rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
          className
        )}
        aria-label="Toggle theme"
      >
        <div className="size-5" />
      </button>
    )
  }

  const cycleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <button
      onClick={cycleTheme}
      className={cn(
        "relative rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors overflow-hidden group",
        className
      )}
      aria-label="Toggle theme"
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <div className="relative size-5">
        <Sun
          className={cn(
            "absolute inset-0 size-5 transition-all duration-500 ease-in-out",
            theme === "light"
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0"
          )}
        />
        <Moon
          className={cn(
            "absolute inset-0 size-5 transition-all duration-500 ease-in-out",
            theme === "dark"
              ? "rotate-0 scale-100 opacity-100"
              : "rotate-90 scale-0 opacity-0"
          )}
        />
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
