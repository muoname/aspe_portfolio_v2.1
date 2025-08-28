'use client';

import { Button } from '@/components/ui/button';

type StyleMode = 'normal' | 'game';

interface CharacterHeaderProps {
  styleMode: StyleMode;
  onBack: () => void;
  isVisible: boolean;
}

export function CharacterHeader({ styleMode, onBack, isVisible }: CharacterHeaderProps) {
  return (
    <div
      className={`flex items-center justify-between mb-6 transition-all duration-500 delay-200 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <Button
        onClick={onBack}
        variant="outline"
        className="border-primary/20 hover:border-primary/40 bg-transparent theme-transition hover:scale-105"
        style={{
          transition:
            'transform 0.3s ease-in-out, background-color 0.3s ease-in-out, border-color 0.3s ease-in-out',
        }}
      >
        ← Back to Menu
      </Button>
      <h1 className="text-2xl font-bold text-primary">
        {styleMode === 'game' ? 'Character Sheet' : 'Portfolio Dashboard'}
      </h1>
      <div className="w-24" /> {/* Spacer */}
    </div>
  );
}
