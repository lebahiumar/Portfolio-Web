import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="border-t border-border/40 bg-background/95 py-8 relative z-10">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer" aria-label="Email" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="h-6 w-6" />
          </Link>
          <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-6 w-6" />
          </Link>
          <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-6 w-6" />
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} PortfolioPro. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Designed by an Expert Designer.
        </p>
      </div>
    </footer>
  )
}
