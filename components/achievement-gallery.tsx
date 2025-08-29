'use client';

import { Card } from '@/components/ui/card';
import { Trophy, Crown, Sword, Shield, Sparkles, Bug, Code, Users } from 'lucide-react';

type StyleMode = 'normal' | 'game';

interface Achievement {
  name: string;
  description: string;
  icon:
    | typeof Trophy
    | typeof Crown
    | typeof Sword
    | typeof Shield
    | typeof Sparkles
    | typeof Bug
    | typeof Code
    | typeof Users;
  rarity: 'legendary' | 'epic' | 'magic' | 'rare' | 'common';
}

interface AchievementGalleryProps {
  styleMode: StyleMode;
}

export function AchievementGallery({ styleMode }: AchievementGalleryProps) {
  const achievements: Achievement[] = [
    {
      name: 'Code Master',
      description: 'Mastered 10+ programming languages',
      icon: Crown,
      rarity: 'legendary',
    },
    {
      name: 'Bug Slayer',
      description: 'Fixed 1000+ bugs across multiple projects',
      icon: Sword,
      rarity: 'epic',
    },
    {
      name: 'Bug Catcher',
      description: 'Raised 120 tickets containing 250+ issues in 20 days',
      icon: Bug,
      rarity: 'magic',
    },
    {
      name: 'Team Leader',
      description: 'Led 5+ successful projects with cross-functional teams',
      icon: Shield,
      rarity: 'rare',
    },
    {
      name: 'Code Contributor',
      description: 'Committed 500+ pull requests across repositories',
      icon: Code,
      rarity: 'magic',
    },
    {
      name: 'Innovation Pioneer',
      description: 'Created groundbreaking solutions adopted company-wide',
      icon: Sparkles,
      rarity: 'legendary',
    },
    {
      name: 'Sprint Hero',
      description: 'Delivered 15 sprint-critical fixes under tight deadlines',
      icon: Trophy,
      rarity: 'epic',
    },
    {
      name: 'Guild Collaborator',
      description: 'Worked with 10+ engineers, QA, and managers seamlessly',
      icon: Users,
      rarity: 'common',
    },
  ];

  if (styleMode !== 'game') return null;

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
              achievement.rarity === 'legendary'
                ? 'border-yellow-500/40 bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 hover:shadow-yellow-500/30'
                : achievement.rarity === 'epic'
                ? 'border-purple-500/40 bg-gradient-to-r from-purple-500/10 to-purple-500/5 hover:shadow-purple-500/30'
                : achievement.rarity === 'magic'
                ? 'border-green-500/40 bg-gradient-to-r from-green-500/10 to-green-500/5 hover:shadow-green-500/30'
                : achievement.rarity === 'rare'
                ? 'border-blue-500/40 bg-gradient-to-r from-blue-500/10 to-blue-500/5 hover:shadow-blue-500/30'
                : 'border-gray-400/40 bg-gradient-to-r from-gray-400/10 to-gray-400/5 hover:shadow-gray-400/30'
            } hover:shadow-lg`}
          >
            <div className="flex items-start space-x-3">
              <achievement.icon
                className={`h-6 w-6 mt-1 ${
                  achievement.rarity === 'legendary'
                    ? 'text-yellow-500'
                    : achievement.rarity === 'epic'
                    ? 'text-purple-500'
                    : achievement.rarity === 'magic'
                    ? 'text-green-500'
                    : achievement.rarity === 'rare'
                    ? 'text-blue-500'
                    : 'text-gray-500'
                }`}
              />
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h5 className="font-semibold">{achievement.name}</h5>
                  <span
                    className={`text-xs px-2 py-1 rounded-full capitalize ${
                      achievement.rarity === 'legendary'
                        ? 'bg-yellow-500/20 text-yellow-600'
                        : achievement.rarity === 'epic'
                        ? 'bg-purple-500/20 text-purple-600'
                        : achievement.rarity === 'magic'
                        ? 'bg-green-500/20 text-green-600'
                        : achievement.rarity === 'rare'
                        ? 'bg-blue-500/20 text-blue-600'
                        : 'bg-gray-400/20 text-gray-600'
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
  );
}
