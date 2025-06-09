"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"

export function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
      className="rounded-full transition-all duration-300 hover:bg-accent/50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      {theme === "light" ? (
        <Sun className="h-5 w-5 text-foreground transition-transform duration-300 ease-in-out hover:rotate-12" />
      ) : (
        <Moon className="h-5 w-5 text-foreground transition-transform duration-300 ease-in-out hover:rotate-12" />
      )}
    </Button>
  )
}
