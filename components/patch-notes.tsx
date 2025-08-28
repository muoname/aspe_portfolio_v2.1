'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Zap, Shield, Star, AlertTriangle } from 'lucide-react';

interface PatchNotesProps {
  onBack: () => void;
}

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
          {/* Current Version */}
          <Card className="p-6 border-primary/30 bg-card/90 backdrop-blur-sm">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-primary/20 rounded-full">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary">Version 2.0 - Current</h2>
                <p className="text-sm text-muted-foreground">Released: December 2024</p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-lg">✨ New Features</h3>
              <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                <li>• Dual-mode portfolio system (Professional & Adventure)</li>
                <li>• Interactive RPG-style character interface</li>
                <li>• Dynamic theme switching (Light/Dark)</li>
                <li>• Animated progress bars and skill visualizations</li>
                <li>• Project modal system with detailed quest information</li>
                <li>• Floating particle effects and animations</li>
                <li>• Responsive design across all devices</li>
              </ul>
            </div>
          </Card>

          {/* Previous Versions */}
          <Card className="p-6 border-secondary/30 bg-card/90 backdrop-blur-sm">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-secondary/20 rounded-full">
                <Shield className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-secondary">Version 1.0</h2>
                <p className="text-sm text-muted-foreground">Released: November 2024</p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-lg">🚀 Initial Release</h3>
              <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                <li>• Basic portfolio structure</li>
                <li>• Static project showcase</li>
                <li>• Simple contact information</li>
                <li>• Basic responsive design</li>
              </ul>
            </div>
          </Card>

          {/* Upcoming Features */}
          <Card className="p-6 border-accent/30 bg-card/90 backdrop-blur-sm">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-accent/20 rounded-full">
                <Star className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-accent">Version 3.0 - Coming Soon</h2>
                <p className="text-sm text-muted-foreground">Expected: Q1 2025</p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-lg">🔮 Planned Features</h3>
              <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                <li>• Interactive skill tree system</li>
                <li>• Achievement and badge collection</li>
                <li>• Blog/journal integration</li>
                <li>• Contact form with RPG-style messaging</li>
                <li>• Sound effects and ambient audio</li>
                <li>• Mobile app companion</li>
                <li>• Multi-language support</li>
              </ul>

              <h3 className="font-semibold text-lg mt-4">🛠️ Technical Improvements</h3>
              <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                <li>• Performance optimizations</li>
                <li>• Enhanced accessibility features</li>
                <li>• Progressive Web App (PWA) support</li>
                <li>• Advanced animation system</li>
                <li>• Database integration for dynamic content</li>
              </ul>
            </div>
          </Card>

          {/* Bug Fixes & Known Issues */}
          <Card className="p-6 border-destructive/30 bg-card/90 backdrop-blur-sm">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-destructive/20 rounded-full">
                <AlertTriangle className="h-5 w-5 text-destructive" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-destructive">Known Issues</h2>
                <p className="text-sm text-muted-foreground">Currently being addressed</p>
              </div>
            </div>

            <div className="space-y-3">
              <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                <li>• Minor animation stuttering on older devices</li>
                <li>• Theme switching delay in some browsers</li>
                <li>• Modal positioning on ultra-wide screens</li>
              </ul>

              <p className="text-xs text-muted-foreground/60 mt-4">
                Found a bug? Contact the developer through the character interface!
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
