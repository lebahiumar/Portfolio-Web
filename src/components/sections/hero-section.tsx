import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center text-center bg-gradient-to-br from-background via-background to-primary/10 dark:to-primary/5 py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 opacity-10 dark:opacity-5 pattern-dots pattern-slate-400 dark:pattern-slate-700 pattern-bg-transparent pattern-size-6 pattern-opacity-20"></div>
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="font-headline text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          <span className="block">Hello, I&apos;m</span>
          <span className="block text-primary mt-2">Your Name</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
          A passionate developer creating beautiful and functional web experiences. Explore my work and get in touch!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" asChild className="font-headline shadow-lg transform transition-transform hover:scale-105">
            <Link href="#projects">
              View My Work
              <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="font-headline shadow-lg transform transition-transform hover:scale-105">
            <Link href="#contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
