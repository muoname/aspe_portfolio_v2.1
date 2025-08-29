'use client';

import { Card } from '@/components/ui/card';
import { User } from 'lucide-react';

type StyleMode = 'normal' | 'game';

interface CharacterBiographyProps {
  styleMode: StyleMode;
}

export function CharacterBiography({ styleMode }: CharacterBiographyProps) {
  return (
    <div className="space-y-4">
      <h4 className="text-xl font-semibold text-primary flex items-center space-x-2">
        <User className="h-5 w-5" />
        <span>{styleMode === 'game' ? 'Character Biography' : 'Professional Summary'}</span>
      </h4>
      <Card className="p-6 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
        <p className="text-muted-foreground leading-relaxed text-lg">
          {styleMode === 'game'
            ? 'A code adventurer forged in the halls of Ateneo de Naga University, where he graduated with highest honors and mastered the ancient arts of JavaScript, React, and full-stack sorcery. Wielding languages from Python to Ruby, and battle-tested in dungeons of NodeJS and Rails, he has conquered quests for Japanese real estate empires and startup guilds alike. With legendary feats like boosting system performance by 25%, crafting e-commerce strongholds in just 7 days, and publishing his own Unity-powered game to the Google Play Store, he continues his epic campaign. A Top 1 trainee and bearer of the PHILNITS crest, this warrior-scholar now roams the digital realm—slaying bugs, leading fellow dev knights, and forging user experiences that inspire allies across the kingdom of code.'
            : 'Eugene Lance V. Aspe is a full-stack developer with 5+ years of experience in modern web technologies. Currently an R&D Engineer at Advanced World Solutions, he has delivered high-performing features for Japan’s largest real estate platform while exceeding KPIs by 220%. A Cum Laude IT graduate, PHILNITS-certified, and skilled in React, NodeJS, and Rails, he combines technical expertise with adaptability, collaboration, and a passion for building impactful digital solutions.'}
        </p>
      </Card>
    </div>
  );
}
