'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Sword,
  Users,
  Github,
  ExternalLink,
  Mail,
  Calendar,
  User,
  Award,
  X,
  Clock,
  TrendingUp,
  Briefcase,
  Building,
  Crown,
} from 'lucide-react';

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
        experience: 'Training',
        education: 'Education',
        contact: 'Guild Contact',
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

      <ThemeToggle />

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

function ProjectModal({
  project,
  styleMode,
  onClose,
  getDifficultyColor,
}: {
  project: ProjectType;
  styleMode: StyleMode;
  onClose: () => void;
  getDifficultyColor: (difficulty: string) => string;
}) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-background border-2 border-primary/40 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-primary/20">
        {/* Modal Header */}
        <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-primary/20 p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <h2 className="text-2xl font-bold text-primary">{project.title}</h2>
            {styleMode === 'game' && <Sword className="h-6 w-6 text-primary animate-pulse" />}
          </div>
          <Button
            onClick={onClose}
            variant="ghost"
            size="sm"
            className="hover:bg-primary/20 text-muted-foreground hover:text-primary"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          {/* Project Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {styleMode === 'game' ? 'Quest Description' : 'Project Overview'}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {styleMode === 'game' ? 'Magic & Tools Used' : 'Technologies'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-primary/20 text-primary text-sm font-medium rounded-lg border border-primary/30 hover:bg-primary/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project Stats */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">
                {styleMode === 'game' ? 'Quest Details' : 'Project Stats'}
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Duration</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{project.duration}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Team Size</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{project.teamSize} members</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Completed</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{project.completionDate}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Impact</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{project.impact}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Status and Difficulty */}
          <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg border border-primary/20">
            <div className="flex items-center space-x-4">
              <span
                className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  project.status === 'Completed'
                    ? 'bg-green-500/20 text-green-600 border border-green-500/40'
                    : 'bg-blue-500/20 text-blue-600 border border-blue-500/40'
                }`}
              >
                {styleMode === 'game'
                  ? project.status === 'Completed'
                    ? 'Quest Complete'
                    : 'In Progress'
                  : project.status}
              </span>
              <span
                className={`px-4 py-2 rounded-full text-sm font-semibold border ${getDifficultyColor(project.difficulty)}`}
              >
                {styleMode === 'game' ? `${project.difficulty} Level` : project.difficulty}
              </span>
            </div>
          </div>

          {/* Rewards/Achievements */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white bg-primary/60 px-4 py-2 rounded-lg border-2 border-primary shadow-lg shadow-primary/20 inline-block backdrop-blur-sm">
              {styleMode === 'game' ? 'Quest Rewards' : 'Key Achievements'}
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.rewards.map((reward: string, index: number) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-primary/50 text-white text-sm font-semibold rounded-full border-2 border-primary shadow-md shadow-primary/30 hover:bg-primary/70 hover:shadow-lg hover:shadow-primary/40 transition-all duration-200 backdrop-blur-sm"
                >
                  {reward}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-center space-x-4 pt-4 border-t border-primary/20">
            <Button
              onClick={() => window.open(project.githubUrl, '_blank')}
              className="bg-primary/20 hover:bg-primary/30 text-primary border border-primary/40"
            >
              <Github className="h-4 w-4 mr-2" />
              {styleMode === 'game' ? 'View Code Scrolls' : 'View Code'}
            </Button>
            <Button
              onClick={() => window.open(project.liveUrl, '_blank')}
              className="bg-primary hover:bg-primary/80 text-primary-foreground"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              {styleMode === 'game' ? 'Enter Quest World' : 'Live Demo'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
