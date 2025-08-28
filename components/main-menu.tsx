"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Shield, Sword, Star, Zap, Briefcase, ScrollText } from "lucide-react"

type ViewMode = "menu" | "character" | "patchNotes"
type StyleMode = "normal" | "game"

interface MainMenuProps {
  onViewChange: (newView: ViewMode, newStyleMode?: StyleMode) => void
}

export function MainMenu({ onViewChange }: MainMenuProps) {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative">
      <div className="absolute inset-0 -m-20">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-pulse ${
              i % 4 === 0
                ? "w-2 h-2 bg-primary/30"
                : i % 4 === 1
                  ? "w-1.5 h-1.5 bg-primary/40"
                  : i % 4 === 2
                    ? "w-1 h-1 bg-primary/50"
                    : "w-3 h-3 bg-primary/20"
            }`}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
              animationDelay: `${i * 300}ms`,
              animationDuration: `${2 + (i % 3)}s`,
            }}
          />
        ))}

        {/* Enhanced floating geometric shapes */}
        <div
          className="absolute top-16 right-24 w-8 h-8 border border-primary/20 rotate-45 animate-spin opacity-60"
          style={{ animationDuration: "20s" }}
        />
        <div
          className="absolute bottom-24 left-16 w-6 h-6 border border-primary/15 rotate-12 animate-spin opacity-40"
          style={{ animationDuration: "15s" }}
        />
        <div
          className="absolute top-1/3 left-8 w-4 h-4 border border-primary/25 rounded-full animate-bounce opacity-30"
          style={{ animationDuration: "3s" }}
        />
      </div>

      <Card
        className={`w-full max-w-lg p-10 bg-card/90 backdrop-blur-md border-2 border-primary/30 shadow-2xl relative overflow-hidden transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 animate-pulse" />

        <div className="relative z-10 text-center space-y-8">
          <div
            className={`space-y-4 transition-all duration-500 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex items-center justify-center space-x-3">
              <Shield className="h-8 w-8 text-primary animate-pulse" />
              <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                RPG Portfolio
              </h1>
              <Sword className="h-8 w-8 text-primary animate-pulse delay-500" />
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Star className="h-4 w-4 text-primary/60" />
              <p className="text-lg text-muted-foreground font-medium">Choose your adventure style</p>
              <Star className="h-4 w-4 text-primary/60" />
            </div>
          </div>

          <div
            className={`space-y-6 transition-all duration-500 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div
              className="relative"
              onMouseEnter={() => setHoveredButton("professional")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              {hoveredButton === "professional" && (
                <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl animate-pulse" />
              )}
              <Button
                onClick={() => onViewChange("character", "normal")}
                className="relative w-full h-20 text-xl bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground border-2 border-primary/50 hover:border-primary shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105 hover:rotate-1"
                size="lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary-foreground/20 rounded-full">
                    <Briefcase className="h-8 w-8" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold">Professional Mode</div>
                    <div className="text-sm opacity-90">Traditional Portfolio</div>
                  </div>
                </div>
              </Button>
            </div>

            <div
              className="relative"
              onMouseEnter={() => setHoveredButton("adventure")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              {hoveredButton === "adventure" && (
                <div className="absolute inset-0 bg-secondary/20 rounded-lg blur-xl animate-pulse" />
              )}
              <Button
                onClick={() => onViewChange("character", "game")}
                className="relative w-full h-20 text-xl bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-secondary-foreground border-2 border-secondary/50 hover:border-secondary shadow-lg hover:shadow-secondary/25 transition-all duration-300 transform hover:scale-105 hover:-rotate-1"
                size="lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-secondary-foreground/20 rounded-full">
                    <Sword className="h-8 w-8" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold">Adventure Mode</div>
                    <div className="text-sm opacity-90">RPG Experience</div>
                  </div>
                </div>
              </Button>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-primary/20">
            <div className="flex items-center justify-center space-x-2">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Mode Descriptions</span>
              <Zap className="h-4 w-4 text-primary" />
            </div>
            <div className="grid grid-cols-1 gap-2 text-sm text-muted-foreground">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>
                  <strong>Professional:</strong> Standard portfolio terminology
                </span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <span>
                  <strong>Adventure:</strong> RPG-style gaming experience
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-2 text-xs text-muted-foreground/60">
            <span>Portfolio v2.0</span>
            <span>•</span>
            <span>Level ∞ Developer</span>
          </div>

          <div className="pt-2">
            <Button
              onClick={() => onViewChange("patchNotes")}
              variant="outline"
              size="sm"
              className="text-xs border-primary/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            >
              <ScrollText className="h-3 w-3 mr-1" />
              Patch Notes
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
