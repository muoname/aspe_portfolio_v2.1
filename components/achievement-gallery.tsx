"use client"

import { Card } from "@/components/ui/card"
import { Trophy, Crown, Sword, Shield, Sparkles } from "lucide-react"

type StyleMode = "normal" | "game"

interface Achievement {
  name: string
  description: string
  icon:
    | typeof Trophy
    | typeof Crown
    | typeof Sword
    | typeof Shield
    | typeof Sparkles
  rarity: string
}

interface AchievementGalleryProps {
  styleMode: StyleMode
}

export function AchievementGallery({ styleMode }: AchievementGalleryProps) {
  const achievements: Achievement[] = [
    { name: "Code Master", description: "Mastered 10+ programming languages", icon: Crown, rarity: "legendary" },
    { name: "Bug Slayer", description: "Fixed 1000+ bugs", icon: Sword, rarity: "epic" },
    { name: "Team Leader", description: "Led 5+ successful projects", icon: Shield, rarity: "rare" },
    { name: "Innovation Pioneer", description: "Created groundbreaking solutions", icon: Sparkles, rarity: "epic" },
  ]

  if (styleMode !== "game") return null

  return (
    <div className="space-y-4">
      <h4 className="text-xl font-semibold text-primary flex items-center space-x-2">
        <Trophy className="h-5 w-5" />
        <span>Achievement Gallery</span>
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {achievements.map((achievement, index) => (
          <Card
            key={index}
            className={`p-4 border transition-all duration-300 hover:scale-105 cursor-pointer ${
              achievement.rarity === "legendary"
                ? "border-yellow-500/40 bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 hover:shadow-yellow-500/20"
                : achievement.rarity === "epic"
                  ? "border-purple-500/40 bg-gradient-to-r from-purple-500/10 to-purple-500/5 hover:shadow-purple-500/20"
                  : "border-blue-500/40 bg-gradient-to-r from-blue-500/10 to-blue-500/5 hover:shadow-blue-500/20"
            } hover:shadow-lg`}
          >
            <div className="flex items-start space-x-3">
              <achievement.icon
                className={`h-6 w-6 mt-1 ${
                  achievement.rarity === "legendary"
                    ? "text-yellow-500"
                    : achievement.rarity === "epic"
                      ? "text-purple-500"
                      : "text-blue-500"
                }`}
              />
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h5 className="font-semibold">{achievement.name}</h5>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      achievement.rarity === "legendary"
                        ? "bg-yellow-500/20 text-yellow-600"
                        : achievement.rarity === "epic"
                          ? "bg-purple-500/20 text-purple-600"
                          : "bg-blue-500/20 text-blue-600"
                    }`}
                  >
                    {achievement.rarity}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{achievement.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
