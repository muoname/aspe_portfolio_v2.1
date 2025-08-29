'use client';

import { Card } from '@/components/ui/card';
import { Award, Scroll, Star, Medal } from 'lucide-react';

type StyleMode = 'normal' | 'game';

interface Certification {
  name: string;
  issuer: string;
  year: string;
  icon: typeof Award | typeof Scroll | typeof Star | typeof Medal;
  rarity: 'legendary' | 'epic' | 'rare' | 'magic' | 'common';
}

interface CertificationsSectionProps {
  styleMode: StyleMode;
}

export function CertificationGallery({ styleMode }: CertificationsSectionProps) {
  const certifications: Certification[] = [
    {
      name: 'IT Professional (FE) Certification',
      issuer: 'Philippine National IT Standards Foundation',
      year: '2024',
      icon: Medal,
      rarity: 'legendary',
    },
    {
      name: 'JLPT N4 Certificate',
      issuer: 'Japan Foundation',
      year: '2024',
      icon: Scroll,
      rarity: 'epic',
    },
    {
      name: 'ACTION FE Training Program',
      issuer: 'Advanced World Solutions, Inc.',
      year: '2024',
      icon: Star,
      rarity: 'rare',
    },
    {
      name: 'Advanced React',
      issuer: 'Meta Platforms, Inc. (Coursera)',
      year: '2025',
      icon: Award,
      rarity: 'epic',
    },
  ];

  return (
    <div className="space-y-4">
      <h4 className="text-xl font-semibold text-primary flex items-center space-x-2">
        {styleMode === 'game' ? <Scroll className="h-5 w-5" /> : <Award className="h-5 w-5" />}
        <span>{styleMode === 'game' ? 'Scrolls of Mastery' : 'Certifications'}</span>
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert, index) => (
          <Card
            key={index}
            className={`p-4 border transition-all duration-300 hover:scale-105 cursor-pointer ${
              cert.rarity === 'legendary'
                ? 'border-yellow-500/40 bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 hover:shadow-yellow-500/30'
                : cert.rarity === 'epic'
                ? 'border-purple-500/40 bg-gradient-to-r from-purple-500/10 to-purple-500/5 hover:shadow-purple-500/30'
                : cert.rarity === 'magic'
                ? 'border-green-500/40 bg-gradient-to-r from-green-500/10 to-green-500/5 hover:shadow-green-500/30'
                : 'border-blue-500/40 bg-gradient-to-r from-blue-500/10 to-blue-500/5 hover:shadow-blue-500/30'
            } hover:shadow-lg`}
          >
            <div className="flex items-start space-x-3">
              <cert.icon
                className={`h-6 w-6 mt-1 ${
                  cert.rarity === 'legendary'
                    ? 'text-yellow-500'
                    : cert.rarity === 'epic'
                    ? 'text-purple-500'
                    : cert.rarity === 'magic'
                    ? 'text-green-500'
                    : 'text-blue-500'
                }`}
              />
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h5 className="font-semibold">{cert.name}</h5>
                  {styleMode === 'game' && (
                    <span
                      className={`text-xs px-2 py-1 rounded-full capitalize ${
                        cert.rarity === 'legendary'
                          ? 'bg-yellow-500/20 text-yellow-600'
                          : cert.rarity === 'epic'
                          ? 'bg-purple-500/20 text-purple-600'
                          : cert.rarity === 'magic'
                          ? 'bg-green-500/20 text-green-600'
                          : 'bg-blue-500/20 text-blue-600'
                      }`}
                    >
                      {cert.rarity}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {cert.issuer} • {cert.year}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
