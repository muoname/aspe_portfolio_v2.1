'use client';

import { Star, Info } from 'lucide-react';

type StyleMode = 'normal' | 'game';

interface CharacterInfoProps {
  styleMode: StyleMode;
  characterStats: {
    level: number;
  };
}

export function CharacterInfo({ styleMode, characterStats }: CharacterInfoProps) {
  return (
    <div className="text-center space-y-2">
      <h3 className="text-2xl font-bold theme-transition">Eugene Lance Aspe</h3>
      <p className="text-lg text-muted-foreground theme-transition flex items-center justify-center space-x-1">
        {styleMode === 'game' ? (
          <>
            <span>Level {characterStats.level} Code Wizard</span>

            {/* Info icon with RPG-themed Tailwind tooltip */}
            <div className="relative group">
              <Info className="h-4 w-4 text-muted-foreground cursor-pointer" />
              <div
                className="absolute top-1/2 left-full ml-2 transform -translate-y-1/2
                              bg-primary text-primary-foreground text-xs px-3 py-3 rounded-lg shadow-lg
                              opacity-0 group-hover:opacity-100 transition-opacity whitespace-normal text-left w-36"
              >
                <span>
                  Level is based on work experience.
                  <br />
                  <strong>Formula:</strong> Level = Years of Experience × 10
                  <br />
                  Progress toward next level is shown in the bar.
                </span>
              </div>
            </div>
          </>
        ) : (
          'Full Stack Developer'
        )}
      </p>
      <div className="flex items-center justify-center space-x-2">
        <Star className="h-4 w-4 text-primary fill-current" />
        <span className="text-sm text-primary font-semibold">
          {styleMode === 'game' ? 'Apprentice Rank' : 'Junior Level'}
        </span>
        <Star className="h-4 w-4 text-primary fill-current" />
      </div>
    </div>
  );
}
