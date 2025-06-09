
"use client"

import Link from "next/link"
import { ThemeToggleButton } from "@/components/theme-toggle-button"
import { Button } from "@/components/ui/button"
import { CodeXml } from "lucide-react"

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#designs", label: "Designs" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="#home" className="flex items-center space-x-2 group" aria-label="PortfolioPro Home">
          <CodeXml className="h-7 w-7 text-primary transition-transform duration-300 group-hover:rotate-12" />
          <span className="font-headline text-xl font-bold text-foreground">PortfolioPro</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Button key={item.label} variant="ghost" asChild className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <ThemeToggleButton />
          {/* Mobile menu button can be added here if needed */}
        </div>
      </div>
    </header>
  )
}
