'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, User, Award, Briefcase, Building, Crown } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { MainMenu } from '@/components/main-menu';
import { CharacterHeader } from '@/components/character-header';
import { CharacterAvatar } from '@/components/character-avatar';
import { CharacterInfo } from '@/components/character-info';
import { CharacterStats } from '@/components/character-stats';
import { ContactInfo } from '@/components/contact-info';
import { AchievementGallery } from '@/components/achievement-gallery';
import { CharacterBiography } from '@/components/character-biography';
import { SkillsSection } from '@/components/skills-section';
import { ExperienceSection } from '@/components/experience-section';
import { ProjectsSection, type Project as ProjectType } from '@/components/projects-section';
import { ContactForm } from '@/components/contact-form';
import { FloatingParticles } from '@/components/floating-particles';
import { PatchNotes } from '@/components/patch-notes';
import { MusicPlayer } from '@/components/music-player';
import { ProjectModal } from '@/components/modals/project-modal';
import { ChatMessage } from '@/components/chatbox';

type ViewMode = 'menu' | 'character' | 'patchNotes';
type StyleMode = 'normal' | 'game';
export default function RPGPortfolio() {
  const [currentView, setCurrentView] = useState<ViewMode>('menu');
  const [styleMode, setStyleMode] = useState<StyleMode>('normal');
  const [mounted, setMounted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleViewChange = (newView: ViewMode, newStyleMode?: StyleMode) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentView(newView);
      if (newStyleMode) setStyleMode(newStyleMode);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 300);
  };

  const getTerminology = () => {
    if (styleMode === 'game') {
      return {
        projects: 'Quests',
        skills: 'Abilities',
        experience: 'Guilds',
        education: 'Education',
        contact: 'Send a Quest',
        about: 'Character Bio',
        companies: 'Guilds',
        certificates: 'Achievements',
      };
    }
    return {
      projects: 'Projects',
      skills: 'Skills',
      experience: 'Experience',
      education: 'Education',
      contact: 'Contact',
      about: 'About',
      companies: 'Companies',
      certificates: 'Certificates',
    };
  };

  const openProjectModal = (project: ProjectType | null) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-500/20 text-green-600 border-green-500/40';
      case 'Intermediate':
        return 'bg-yellow-500/20 text-yellow-600 border-yellow-500/40';
      case 'Advanced':
        return 'bg-orange-500/20 text-orange-600 border-orange-500/40';
      case 'Expert':
        return 'bg-red-500/20 text-red-600 border-red-500/40';
      default:
        return 'bg-primary/20 text-primary border-primary/40';
    }
  };

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <FloatingParticles />
      </div>

      <MusicPlayer />
      <ThemeToggle />
      <ChatMessage />

      {isTransitioning && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 flex items-center justify-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            <span className="text-lg font-medium text-primary">
              {currentView === 'menu' ? 'Loading Menu...' : 'Loading Character Sheet...'}
            </span>
          </div>
        </div>
      )}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        {currentView === 'menu' && <MainMenu onViewChange={handleViewChange} />}

        {currentView === 'character' && (
          <CharacterInterface
            styleMode={styleMode}
            terminology={getTerminology()}
            onBack={() => handleViewChange('menu')}
            onProjectClick={openProjectModal}
          />
        )}

        {currentView === 'patchNotes' && <PatchNotes onBack={() => handleViewChange('menu')} />}
      </div>
      {isModalOpen && selectedProject && (
        <ProjectModal
          project={selectedProject}
          styleMode={styleMode}
          onClose={closeProjectModal}
          getDifficultyColor={getDifficultyColor}
        />
      )}
    </div>
  );
}

function CharacterInterface({
  styleMode,
  terminology,
  onBack,
  onProjectClick,
}: {
  styleMode: StyleMode;
  terminology: Record<string, string>;
  onBack: () => void;
  onProjectClick: (project: ProjectType | null) => void;
}) {
  const [activeTab, setActiveTab] = useState('profile');
  const [isVisible, setIsVisible] = useState(false);
  const [isTabTransitioning, setIsTabTransitioning] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleTabChange = (newTab: string) => {
    if (newTab === activeTab) return;
    setIsTabTransitioning(true);
    setTimeout(() => {
      setActiveTab(newTab);
      setTimeout(() => setIsTabTransitioning(false), 100);
    }, 200);
  };

  return (
    <div
      className={`w-full max-w-6xl mx-auto transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <CharacterHeader styleMode={styleMode} onBack={onBack} isVisible={isVisible} />

      {/* Main Interface */}
      <div
        className={`grid grid-cols-1 lg:grid-cols-4 gap-6 transition-all duration-500 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {/* Navigation Panel */}
        <Card className="lg:col-span-1 p-4 bg-card/80 backdrop-blur-sm border-primary/20">
          <nav className="space-y-2">
            {[
              { id: 'profile', label: terminology.about, icon: User },
              { id: 'skills', label: terminology.skills, icon: Award },
              { id: 'projects', label: terminology.projects, icon: Briefcase },
              {
                id: 'experience',
                label: terminology.experience,
                icon: Building,
              },
              { id: 'contact', label: terminology.contact, icon: Mail },
            ].map((item, index) => (
              <Button
                key={item.id}
                onClick={() => handleTabChange(item.id)}
                variant={activeTab === item.id ? 'default' : 'ghost'}
                className={`w-full justify-start transition-all duration-300 transform hover:scale-105 ${
                  activeTab === item.id
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'hover:bg-primary/10 hover:text-primary'
                } ${isVisible ? `animate-in slide-in-from-left-4 duration-500` : ''}`}
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.label}
              </Button>
            ))}
          </nav>
        </Card>

        {/* Content Panel */}
        <Card className="lg:col-span-3 p-6 bg-card/80 backdrop-blur-sm border-primary/20 relative overflow-hidden">
          {isTabTransitioning && (
            <div className="absolute inset-0 bg-background/50 backdrop-blur-sm z-10 flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          <div
            className={`min-h-[500px] transition-all duration-300 ${
              isTabTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
          >
            {activeTab === 'profile' && (
              <ProfileSection styleMode={styleMode} terminology={terminology} />
            )}
            {activeTab === 'skills' && <SkillsSection styleMode={styleMode} />}
            {activeTab === 'projects' && (
              <ProjectsSection styleMode={styleMode} onProjectClick={onProjectClick} />
            )}
            {activeTab === 'experience' && <ExperienceSection styleMode={styleMode} />}
            {activeTab === 'contact' && <ContactForm styleMode={styleMode} />}
          </div>
        </Card>
      </div>
    </div>
  );
}

function ProfileSection({
  styleMode,
  terminology,
}: {
  styleMode: StyleMode;
  terminology: Record<string, string>;
}) {
  const [barsAnimated, setBarsAnimated] = useState(false);
  const [sectionsVisible, setSectionsVisible] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setBarsAnimated(true), 500);
    const timer2 = setTimeout(() => setSectionsVisible(true), 200);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const characterStats = {
    level: 99,
    experience: 15750,
    nextLevelExp: 16000,
    health: 100,
    mana: 85,
    strength: 92,
    intelligence: 96,
    agility: 88,
    charisma: 90,
    attributes: [
      { name: 'Strength', value: 92, color: 'text-red-500' },
      { name: 'Intelligence', value: 96, color: 'text-blue-500' },
      { name: 'Agility', value: 88, color: 'text-green-500' },
      { name: 'Charisma', value: 90, color: 'text-purple-500' },
    ],
  };

  return (
    <div className="space-y-8">
      <div
        className={`flex items-center space-x-3 transition-all duration-500 ${
          sectionsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <h2 className="text-3xl font-bold text-primary">{terminology.about}</h2>
        {styleMode === 'game' && <Crown className="h-8 w-8 text-primary animate-pulse" />}
      </div>

      <div
        className={`grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-500 delay-200 ${
          sectionsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {/* Character Avatar */}
        <div className="space-y-6">
          <CharacterAvatar
            styleMode={styleMode}
            characterStats={characterStats}
            barsAnimated={barsAnimated}
          />
          <CharacterInfo styleMode={styleMode} characterStats={characterStats} />
        </div>

        {/* Character Stats */}
        <CharacterStats
          styleMode={styleMode}
          barsAnimated={barsAnimated}
          attributes={characterStats.attributes}
        />

        {/* Contact Information */}
        <ContactInfo styleMode={styleMode} />
      </div>

      {/* Character Biography */}
      <CharacterBiography styleMode={styleMode} />

      {/* Achievement Gallery */}
      <AchievementGallery styleMode={styleMode} />
    </div>
  );
}
