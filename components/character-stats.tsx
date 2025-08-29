'use client';

import { useState } from 'react';
import { Trophy, Building, Briefcase, Award, Medal } from 'lucide-react';

type StyleMode = 'normal' | 'game';

interface CharacterAttribute {
  name: string;
  value: number;
  color: string;
}

interface CharacterStatsProps {
  styleMode: StyleMode;
  barsAnimated: boolean;
  attributes: CharacterAttribute[];
}

export function CharacterStats({ styleMode, barsAnimated, attributes }: CharacterStatsProps) {
  const [hoveredStat, setHoveredStat] = useState<string | null>(null);

  if (styleMode === 'game') {
    return (
      <div className="space-y-6">
        <h4 className="text-xl font-semibold text-primary flex items-center space-x-2 theme-transition">
          <Trophy className="h-5 w-5" />
          <span>Character Attributes</span>
        </h4>

        <div className="grid grid-cols-2 gap-4">
          {attributes.map((stat, index) => (
            <div
              key={stat.name}
              className="p-3 bg-card rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer"
              onMouseEnter={() => setHoveredStat(stat.name)}
              onMouseLeave={() => setHoveredStat(null)}
            >
              <div className="text-sm flex justify-between items-center">
                <span className="font-medium">{stat.name}</span>
                <span className={`font-bold ${stat.color}`}>{stat.value}</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                <div
                  className={`h-2 rounded-full transition-all duration-1000 ease-out relative shadow-sm ${
                    stat.name === 'Strength'
                      ? 'bg-gradient-to-r from-red-500 to-red-400'
                      : stat.name === 'Intelligence'
                      ? 'bg-gradient-to-r from-blue-500 to-blue-400'
                      : stat.name === 'Agility'
                      ? 'bg-gradient-to-r from-green-500 to-green-400'
                      : 'bg-gradient-to-r from-purple-500 to-purple-400'
                  }`}
                  style={{
                    width: barsAnimated ? `${stat.value}%` : '0%',
                    transitionDelay: `${index * 200}ms`,
                    boxShadow:
                      hoveredStat === stat.name
                        ? `0 0 8px ${
                            stat.name === 'Strength'
                              ? 'rgba(239, 68, 68, 0.6)'
                              : stat.name === 'Intelligence'
                              ? 'rgba(59, 130, 246, 0.6)'
                              : stat.name === 'Agility'
                              ? 'rgba(34, 197, 94, 0.6)'
                              : 'rgba(168, 85, 247, 0.6)'
                          }`
                        : 'none',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-pulse" />
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-white/40" />
                </div>
              </div>
              {hoveredStat === stat.name && (
                <div className="pt-2 text-xs text-muted-foreground">
                  {stat.name === 'Strength' && 'Problem-solving power'}
                  {stat.name === 'Intelligence' && 'Technical knowledge'}
                  {stat.name === 'Agility' && 'Adaptability & speed'}
                  {stat.name === 'Charisma' && 'Leadership & communication'}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h4 className="text-xl font-semibold text-primary flex items-center space-x-2 theme-transition">
        <Trophy className="h-5 w-5" />
        <span>Professional Stats</span>
      </h4>

      <div className="space-y-4">
        {[
          { label: 'Years Experience', value: '1+', icon: Building },
          { label: 'Projects Completed', value: '12+', icon: Briefcase },
          { label: 'Companies Worked', value: '2', icon: Award },
          { label: 'Certifications Earned', value: '4', icon: Medal },
        ].map((stat, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 rounded-lg border border-primary/20"
          >
            <div className="flex items-center space-x-3">
              <stat.icon className="h-5 w-5 text-primary" />
              <span className="font-medium">{stat.label}</span>
            </div>
            <span className="text-primary font-bold text-lg">{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
