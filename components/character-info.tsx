"use client"

import { Star } from "lucide-react"

type StyleMode = "normal" | "game"

interface CharacterInfoProps {
  styleMode: StyleMode
  characterStats: {
    level: number
  }
}

export function CharacterInfo({ styleMode, characterStats }: CharacterInfoProps) {
  return (
    <div className="text-center space-y-2">
      <h3 className="text-2xl font-bold theme-transition">Eugene Lance Aspe</h3>
      <p className="text-lg text-muted-foreground theme-transition">
        {styleMode === "game" ? `Level ${characterStats.level} Code Wizard` : "Senior Full Stack Developer"}
      </p>
      <div className="flex items-center justify-center space-x-2">
        <Star className="h-4 w-4 text-primary fill-current" />
        <span className="text-sm text-primary font-semibold">
          {styleMode === "game" ? "Legendary Rank" : "Expert Level"}
        </span>
        <Star className="h-4 w-4 text-primary fill-current" />
      </div>
    </div>
  )
}
