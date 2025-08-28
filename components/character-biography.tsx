"use client"

import { Card } from "@/components/ui/card"
import { User } from "lucide-react"

type StyleMode = "normal" | "game"

interface CharacterBiographyProps {
  styleMode: StyleMode
}

export function CharacterBiography({ styleMode }: CharacterBiographyProps) {
  return (
    <div className="space-y-4">
      <h4 className="text-xl font-semibold text-primary flex items-center space-x-2">
        <User className="h-5 w-5" />
        <span>{styleMode === "game" ? "Character Biography" : "Professional Summary"}</span>
      </h4>
      <Card className="p-6 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
        <p className="text-muted-foreground leading-relaxed text-lg">
          {styleMode === "game"
            ? "A legendary code wizard who has mastered the ancient arts of JavaScript and wielded the mystical powers of React for over half a decade. Having conquered numerous digital dungeons, slain countless bugs, and led brave parties of developers through treacherous project deadlines, this seasoned adventurer continues their epic quest to build extraordinary user experiences that inspire and delight users across the digital realm."
            : "A passionate and experienced full-stack developer with over 5 years of expertise in modern web technologies. Proven track record of building scalable applications, leading cross-functional development teams, and delivering high-quality solutions that drive business growth. Committed to continuous learning, mentoring junior developers, and staying at the forefront of technological innovation."}
        </p>
      </Card>
    </div>
  )
}
