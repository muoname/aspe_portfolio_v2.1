'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Zap, Shield, Star, AlertTriangle, LucideIcon } from 'lucide-react';

interface PatchNotesProps {
  onBack: () => void;
}

interface PatchNoteSection {
  title: string;
  subtitle: string;
  date?: string;
  color: string;
  icon: LucideIcon;
  categories: {
    heading?: string;
    items: string[];
  }[];
}

const patchNotesData: PatchNoteSection[] = [
  {
    title: 'Version 2.0 - Current',
    subtitle: 'Released: August 2025',
    color: 'primary',
    icon: Zap,
    categories: [
      {
        heading: '✨ New Features',
        items: [
          'Dual-mode portfolio system (Professional & Adventure)',
          'Interactive RPG-style character interface',
          'Dynamic theme switching (Light/Dark)',
          'Animated progress bars and skill visualizations',
          'Project modal system with detailed quest information',
          'Floating particle effects and animations',
          'Responsive design across all devices',
          'Background Music w/ Volume Slider',
          'Chat feature',
        ],
      },
    ],
  },
  {
    title: 'Version 3.0 - Coming Soon',
    subtitle: 'Expected: Q1 2025',
    color: 'accent',
    icon: Star,
    categories: [
      {
        heading: '🔮 Planned Features',
        items: [
          'Interactive skill tree system',
          'Achievement and badge collection',
          'Blog/journal integration',
          'Sound effects',
          'Multi-language support',
        ],
      },
      {
        heading: '🛠️ Technical Improvements',
        items: [
          'Performance optimizations',
          'Enhanced accessibility features',
          'Progressive Web App (PWA) support',
          'Advanced animation system',
        ],
      },
    ],
  },
  {
    title: 'Known Issues',
    subtitle: 'Currently being addressed',
    color: 'destructive',
    icon: AlertTriangle,
    categories: [
      {
        items: [
          'Minor animation stuttering on older devices',
          'Theme switching delay in some browsers',
          'Modal positioning on ultra-wide screens',
        ],
      },
    ],
  },
  {
    title: 'Version 1.0',
    subtitle: 'Released: March 2025',
    color: 'secondary',
    icon: Shield,
    categories: [
      {
        heading: '🚀 Initial Release',
        items: [
          'Basic portfolio structure',
          'Simple contact information',
          'Basic responsive design',
        ],
      },
    ],
  },
];

export function PatchNotes({ onBack }: PatchNotesProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Button
            onClick={onBack}
            variant="outline"
            className="mb-4 border-primary/30 hover:border-primary/50 bg-transparent theme-transition"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Menu
          </Button>

          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Patch Notes & Updates
            </h1>
            <p className="text-muted-foreground">Development changelog and upcoming features</p>
          </div>
        </div>

        <div className="grid gap-6">
          {patchNotesData.map((section, idx) => {
            const Icon = section.icon;
            return (
              <Card
                key={idx}
                className={`p-6 border-${section.color}/30 bg-card/90 backdrop-blur-sm`}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-2 bg-${section.color}/20 rounded-full`}>
                    <Icon className={`h-5 w-5 text-${section.color}`} />
                  </div>
                  <div>
                    <h2 className={`text-2xl font-bold text-${section.color}`}>{section.title}</h2>
                    <p className="text-sm text-muted-foreground">{section.subtitle}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {section.categories.map((cat, i) => (
                    <div key={i}>
                      {cat.heading && <h3 className="font-semibold text-lg mt-2">{cat.heading}</h3>}
                      <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                        {cat.items.map((item, j) => (
                          <li key={j}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {section.title === 'Known Issues' && (
                    <p className="text-xs text-muted-foreground/60 mt-4">
                      Found a bug? Contact the developer through the character interface!
                    </p>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
