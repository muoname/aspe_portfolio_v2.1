'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Flame,
  Clock,
  Target,
  TrendingUp,
  Palette,
  Server,
  Database,
  Smartphone,
  GitBranch,
} from 'lucide-react';

type StyleMode = 'normal' | 'game';

interface Skill {
  name: string;
  level: number;
  category: string;
  experience: string;
  projects: number;
  mastery: string;
  description: string;
}

interface SkillCategory {
  icon:
    | typeof Flame
    | typeof Clock
    | typeof Target
    | typeof TrendingUp
    | typeof Palette
    | typeof Server
    | typeof Database
    | typeof Smartphone
    | typeof GitBranch;
  color: string;
  bgColor: string;
  glowColor: string;
}

interface SkillsSectionProps {
  styleMode: StyleMode;
}

export function SkillsSection({ styleMode }: SkillsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [barsAnimated, setBarsAnimated] = useState(false);
  const [sectionsVisible, setSectionsVisible] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setBarsAnimated(true), 800);
    const timer2 = setTimeout(() => setSectionsVisible(true), 300);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const skillCategories: Record<string, SkillCategory> = {
    Frontend: {
      icon: Palette,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500',
      glowColor: 'rgba(59, 130, 246, 0.4)',
    },
    Backend: {
      icon: Server,
      color: 'text-green-500',
      bgColor: 'bg-green-500',
      glowColor: 'rgba(34, 197, 94, 0.4)',
    },
    Database: {
      icon: Database,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500',
      glowColor: 'rgba(168, 85, 247, 0.4)',
    },
    Mobile: {
      icon: Smartphone,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500',
      glowColor: 'rgba(251, 146, 60, 0.4)',
    },
    DevOps: {
      icon: GitBranch,
      color: 'text-red-500',
      bgColor: 'bg-red-500',
      glowColor: 'rgba(239, 68, 68, 0.4)',
    },
    Design: {
      icon: Palette,
      color: 'text-pink-500',
      bgColor: 'bg-pink-500',
      glowColor: 'rgba(219, 39, 119, 0.4)',
    },
  };

  const skills: Skill[] = [
    {
      name: 'JavaScript',
      level: 95,
      category: 'Frontend',
      experience: '5+ years',
      projects: 45,
      mastery: 'Expert',
      description: 'Advanced ES6+, async/await, closures, prototypes',
    },
    {
      name: 'React',
      level: 90,
      category: 'Frontend',
      experience: '4+ years',
      projects: 35,
      mastery: 'Expert',
      description: 'Hooks, Context, Redux, Next.js, SSR',
    },
    {
      name: 'TypeScript',
      level: 85,
      category: 'Frontend',
      experience: '3+ years',
      projects: 28,
      mastery: 'Advanced',
      description: 'Advanced types, generics, utility types',
    },
    {
      name: 'Node.js',
      level: 80,
      category: 'Backend',
      experience: '4+ years',
      projects: 25,
      mastery: 'Advanced',
      description: 'Express, APIs, microservices, authentication',
    },
    {
      name: 'Python',
      level: 75,
      category: 'Backend',
      experience: '3+ years',
      projects: 20,
      mastery: 'Intermediate',
      description: 'Django, Flask, data processing, automation',
    },
    {
      name: 'PostgreSQL',
      level: 70,
      category: 'Database',
      experience: '3+ years',
      projects: 18,
      mastery: 'Intermediate',
      description: 'Complex queries, optimization, indexing',
    },
    {
      name: 'Docker',
      level: 65,
      category: 'DevOps',
      experience: '2+ years',
      projects: 15,
      mastery: 'Intermediate',
      description: 'Containerization, orchestration, CI/CD',
    },
    {
      name: 'React Native',
      level: 60,
      category: 'Mobile',
      experience: '2+ years',
      projects: 8,
      mastery: 'Intermediate',
      description: 'Cross-platform mobile development',
    },
  ];

  const filteredSkills =
    selectedCategory === 'all'
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  const getMasteryColor = (mastery: string) => {
    switch (mastery) {
      case 'Expert':
        return 'text-yellow-500';
      case 'Advanced':
        return 'text-blue-500';
      case 'Intermediate':
        return 'text-green-500';
      default:
        return 'text-gray-500';
    }
  };

  const getMasteryBg = (mastery: string) => {
    switch (mastery) {
      case 'Expert':
        return 'bg-yellow-500/20 border-yellow-500/40';
      case 'Advanced':
        return 'bg-blue-500/20 border-blue-500/40';
      case 'Intermediate':
        return 'bg-green-500/20 border-green-500/40';
      default:
        return 'bg-gray-500/20 border-gray-500/40';
    }
  };

  return (
    <div className="space-y-8">
      <div
        className={`flex items-center space-x-3 transition-all duration-500 ${
          sectionsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <h2 className="text-3xl font-bold text-primary">
          {styleMode === 'game' ? 'Ability Tree' : 'Skills & Expertise'}
        </h2>
        {styleMode === 'game' && <Flame className="h-8 w-8 text-primary animate-pulse" />}
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        <Button
          onClick={() => setSelectedCategory('all')}
          variant={selectedCategory === 'all' ? 'default' : 'outline'}
          size="sm"
          className={
            selectedCategory === 'all'
              ? 'bg-primary text-primary-foreground'
              : 'border-primary/20 hover:border-primary/40'
          }
        >
          All Skills
        </Button>
        {Object.entries(skillCategories).map(([category, config]) => (
          <Button
            key={category}
            onClick={() => setSelectedCategory(category)}
            variant={selectedCategory === category ? 'default' : 'outline'}
            size="sm"
            className={`${
              selectedCategory === category
                ? 'bg-primary text-primary-foreground'
                : 'border-primary/20 hover:border-primary/40'
            }`}
          >
            <config.icon className="h-4 w-4 mr-2" />
            {category}
          </Button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill, skillIndex) => {
          const categoryConfig = skillCategories[skill.category as keyof typeof skillCategories];
          return (
            <Card
              key={skillIndex}
              className={`p-6 border transition-all duration-300 hover:scale-105 cursor-pointer ${
                hoveredSkill === skill.name ? 'border-primary/60 shadow-lg' : 'border-primary/20'
              }`}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <categoryConfig.icon className={`h-6 w-6 ${categoryConfig.color}`} />
                    <h3 className="font-bold text-lg">{skill.name}</h3>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold border ${getMasteryBg(
                      skill.mastery,
                    )} ${getMasteryColor(skill.mastery)}`}
                  >
                    {styleMode === 'game' ? `Lv.${Math.floor(skill.level / 10)}` : skill.mastery}
                  </span>
                </div>

                {/* Skill Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {styleMode === 'game' ? 'Mastery' : 'Proficiency'}
                    </span>
                    <span className="text-primary font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3 border border-primary/20 overflow-hidden">
                    <div
                      className={`h-3 rounded-full transition-all duration-1500 ease-out relative overflow-hidden shadow-lg ${categoryConfig.bgColor}`}
                      style={{
                        width: barsAnimated ? `${skill.level}%` : '0%',
                        transitionDelay: `${skillIndex * 100}ms`,
                        boxShadow: `0 0 6px ${
                          categoryConfig.glowColor || 'rgba(var(--primary), 0.4)'
                        }`,
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse delay-500" />
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black/10" />
                    </div>
                  </div>
                </div>

                {/* Skill Stats */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{skill.experience}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      {skill.projects} {styleMode === 'game' ? 'quests' : 'projects'}
                    </span>
                  </div>
                </div>

                {/* Skill Description */}
                {hoveredSkill === skill.name && (
                  <div className="pt-2 border-t border-primary/20">
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                )}
              </div>
            </Card>
          );
        })}
      </div>

      {/* Skill Summary Stats */}
      <Card className="p-6 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
        <h3 className="text-xl font-semibold text-primary mb-4 flex items-center space-x-2">
          <TrendingUp className="h-5 w-5" />
          <span>{styleMode === 'game' ? 'Ability Summary' : 'Skill Overview'}</span>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">{skills.length}</div>
            <div className="text-sm text-muted-foreground">
              {styleMode === 'game' ? 'Abilities Learned' : 'Technologies'}
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">
              {Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%
            </div>
            <div className="text-sm text-muted-foreground">
              Average {styleMode === 'game' ? 'Mastery' : 'Proficiency'}
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">
              {skills.reduce((acc, skill) => acc + skill.projects, 0)}
            </div>
            <div className="text-sm text-muted-foreground">
              {styleMode === 'game' ? 'Quests Completed' : 'Projects Built'}
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">
              {skills.filter((skill) => skill.mastery === 'Expert').length}
            </div>
            <div className="text-sm text-muted-foreground">
              {styleMode === 'game' ? 'Master Level' : 'Expert Skills'}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
