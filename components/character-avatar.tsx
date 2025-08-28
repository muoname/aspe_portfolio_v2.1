'use client';
import { User, Heart, Zap } from 'lucide-react';

type StyleMode = 'normal' | 'game';

interface CharacterStats {
  level: number;
  experience: number;
  nextLevelExp: number;
  health: number;
  mana: number;
}

interface CharacterAvatarProps {
  styleMode: StyleMode;
  characterStats: CharacterStats;
  barsAnimated: boolean;
}

export function CharacterAvatar({ styleMode, characterStats, barsAnimated }: CharacterAvatarProps) {
  return (
    <div className="space-y-6">
      <div className="relative">
        <div className="w-48 h-48 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl flex items-center justify-center mx-auto border-4 border-primary/40 shadow-2xl">
          <User className="h-24 w-24 text-primary" />
          {styleMode === 'game' && (
            <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg border-2 border-background">
              {characterStats.level}
            </div>
          )}
        </div>

        {styleMode === 'game' && (
          <div className="mt-4 space-y-2">
            {/* Experience Bar */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-muted-foreground">
                  {styleMode === 'game' ? 'Experience' : 'Career Progress'}
                </span>
                <span className="text-sm font-semibold text-primary">
                  {characterStats.experience}/{characterStats.nextLevelExp} XP
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-3 border border-primary/20 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 h-3 rounded-full transition-all duration-2000 ease-out relative overflow-hidden shadow-lg"
                  style={{
                    width: barsAnimated
                      ? `${(characterStats.experience / characterStats.nextLevelExp) * 100}%`
                      : '0%',
                    boxShadow:
                      'inset 0 1px 2px rgba(255,255,255,0.3), 0 0 8px rgba(var(--primary), 0.4)',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse delay-300" />
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                </div>
              </div>
            </div>

            {/* Health and Mana Bars */}
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1">
                <div className="flex items-center space-x-1">
                  <Heart className="h-3 w-3 text-red-500 animate-pulse" />
                  <span className="text-xs text-muted-foreground">HP</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-red-500 to-red-400 h-2 rounded-full transition-all duration-1500 ease-out relative shadow-lg"
                    style={{
                      width: barsAnimated ? `${characterStats.health}%` : '0%',
                      boxShadow: '0 0 6px rgba(239, 68, 68, 0.5)',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-red-300/60" />
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center space-x-1">
                  <Zap className="h-3 w-3 text-blue-500 animate-pulse delay-150" />
                  <span className="text-xs text-muted-foreground">MP</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full transition-all duration-1500 ease-out delay-200 relative shadow-lg"
                    style={{
                      width: barsAnimated ? `${characterStats.mana}%` : '0%',
                      boxShadow: '0 0 6px rgba(59, 130, 246, 0.5)',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse delay-300" />
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-blue-300/60" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
