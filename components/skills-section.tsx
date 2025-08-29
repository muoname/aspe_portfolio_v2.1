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
  Wrench,
  Code2,
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
    | typeof GitBranch
    | typeof Wrench
    | typeof Code2;
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
    Programming: {
      icon: Code2,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500',
      glowColor: 'rgba(234, 179, 8, 0.4)',
    },
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
    Others: {
      icon: Wrench,
      color: 'text-gray-500',
      bgColor: 'bg-gray-500',
      glowColor: 'rgba(107, 114, 128, 0.4)',
    },
  };

  const skills: Skill[] = [
    // ---------- Frontend (Main Arsenal) ----------
    {
      name: 'Next.js',
      level: 88,
      category: 'Frontend',
      experience: '1.5+ yrs',
      projects: 5,
      mastery: 'Expert',
      description:
        'Built portfolio and production apps with App Router, SSR, and SSG for optimized performance.',
    },
    {
      name: 'React',
      level: 86,
      category: 'Frontend',
      experience: '2+ yrs',
      projects: 6,
      mastery: 'Expert',
      description:
        'Developed 30+ enterprise modules using hooks, context, and memoization; improved UI performance by 25%.',
    },
    {
      name: 'shadcn/ui',
      level: 78,
      category: 'Frontend',
      experience: '1+ yr',
      projects: 3,
      mastery: 'Advanced',
      description:
        'Designed modern UI with accessible, customizable components integrated with Tailwind CSS.',
    },
    {
      name: 'Vue',
      level: 68,
      category: 'Frontend',
      experience: '1+ yr',
      projects: 2,
      mastery: 'Intermediate',
      description:
        'Built dashboards and map features with Vue + Quasar for listing management applications.',
    },
    {
      name: 'HTML',
      level: 90,
      category: 'Frontend',
      experience: '3+ yrs',
      projects: 6,
      mastery: 'Expert',
      description: 'Structured semantic, accessible markup across e-commerce and admin dashboards.',
    },
    {
      name: 'CSS',
      level: 88,
      category: 'Frontend',
      experience: '3+ yrs',
      projects: 6,
      mastery: 'Expert',
      description:
        'Implemented responsive, mobile-first designs; optimized DOM for faster rendering.',
    },
    {
      name: 'Bootstrap',
      level: 76,
      category: 'Frontend',
      experience: '2+ yrs',
      projects: 4,
      mastery: 'Advanced',
      description:
        'Styled web pages quickly with prebuilt utilities and components in training and client projects.',
    },

    // ---------- Backend ----------
    {
      name: 'Node.js',
      level: 78,
      category: 'Backend',
      experience: '1.5+ yrs',
      projects: 4,
      mastery: 'Advanced',
      description:
        'Built APIs and data filtering logic; handled sprint-critical backend tickets with React + TypeScript integration.',
    },
    {
      name: 'Rails',
      level: 68,
      category: 'Backend',
      experience: '1+ yr',
      projects: 2,
      mastery: 'Intermediate',
      description:
        'Developed listing and account modules with Rails + MySQL; deployed on Google Cloud Platform.',
    },
    {
      name: 'CodeIgniter',
      level: 77,
      category: 'Backend',
      experience: '2+ yrs',
      projects: 3,
      mastery: 'Advanced',
      description:
        'Created e-commerce backend with Stripe checkout, order management, and admin dashboard in 7 days.',
    },
    {
      name: 'Spring Boot',
      level: 68,
      category: 'Backend',
      experience: '1+ yr',
      projects: 2,
      mastery: 'Intermediate',
      description:
        'Built REST services in academic projects; applied OOP and enterprise design principles.',
    },

    // ---------- Database ----------
    {
      name: 'Supabase',
      level: 79,
      category: 'Database',
      experience: '1+ yr',
      projects: 4,
      mastery: 'Advanced',
      description:
        'Implemented auth and Postgres DB integration for portfolio apps with real-time updates.',
    },
    {
      name: 'MySQL',
      level: 78,
      category: 'Database',
      experience: '3+ yrs',
      projects: 5,
      mastery: 'Advanced',
      description:
        'Designed schemas and optimized queries in multiple full-stack apps (CodeIgniter, Rails).',
    },
    {
      name: 'PostgreSQL',
      level: 77,
      category: 'Database',
      experience: '2+ yrs',
      projects: 4,
      mastery: 'Advanced',
      description:
        'Used with Supabase and Rails apps; optimized queries and maintained data integrity.',
    },
    {
      name: 'Firebase',
      level: 68,
      category: 'Database',
      experience: '1+ yr',
      projects: 3,
      mastery: 'Intermediate',
      description: 'Implemented realtime DB and authentication features for small projects.',
    },

    // ---------- Programming ----------
    {
      name: 'JavaScript',
      level: 79,
      category: 'Programming',
      experience: '2+ yrs',
      projects: 6,
      mastery: 'Advanced',
      description: 'Core language for most projects; applied async/await, closures, and modules.',
    },
    {
      name: 'TypeScript',
      level: 78,
      category: 'Programming',
      experience: '1.5+ yrs',
      projects: 5,
      mastery: 'Advanced',
      description:
        'Typed React + Node codebases; reduced bugs by leveraging generics and strict typing.',
    },
    {
      name: 'Python',
      level: 68,
      category: 'Programming',
      experience: '2+ yrs',
      projects: 4,
      mastery: 'Intermediate',
      description: 'Automated scripts and built small Flask/Django utilities.',
    },
    {
      name: 'Java',
      level: 68,
      category: 'Programming',
      experience: '1+ yr',
      projects: 3,
      mastery: 'Intermediate',
      description: 'Implemented REST services with Spring Boot in coursework and training.',
    },
    {
      name: 'C++',
      level: 65,
      category: 'Programming',
      experience: '1+ yr',
      projects: 2,
      mastery: 'Intermediate',
      description: 'Academic and system-level coding experience.',
    },
    {
      name: 'C#',
      level: 66,
      category: 'Programming',
      experience: '1–2 yrs',
      projects: 2,
      mastery: 'Intermediate',
      description: 'Unity scripting for gameplay logic in published Android game.',
    },
    {
      name: 'PHP',
      level: 77,
      category: 'Programming',
      experience: '2+ yrs',
      projects: 3,
      mastery: 'Advanced',
      description: 'Full-stack development with CodeIgniter and MySQL; Stripe integration.',
    },
    {
      name: 'Ruby',
      level: 69,
      category: 'Programming',
      experience: '1+ yr',
      projects: 2,
      mastery: 'Intermediate',
      description: 'Rails projects with MVC structure, DB operations, and deployment.',
    },

    // ---------- Mobile ----------
    {
      name: 'React Native',
      level: 68,
      category: 'Mobile',
      experience: '1+ yr',
      projects: 2,
      mastery: 'Intermediate',
      description: 'Built small cross-platform apps reusing React knowledge.',
    },
    {
      name: 'Unity',
      level: 66,
      category: 'Mobile',
      experience: '1–2 yrs',
      projects: 2,
      mastery: 'Intermediate',
      description: 'Published Android game with dynamic story content and custom assets.',
    },

    // ---------- DevOps ----------
    {
      name: 'Vercel',
      level: 87,
      category: 'DevOps',
      experience: '1+ yr',
      projects: 4,
      mastery: 'Expert',
      description: 'Deployed Next.js portfolio and apps with CI/CD integration.',
    },
    {
      name: 'Git/GitHub',
      level: 85,
      category: 'DevOps',
      experience: '3+ yrs',
      projects: 6,
      mastery: 'Expert',
      description: 'Version control across 4M+ LOC repos; enforced PR and branching standards.',
    },
    {
      name: 'Docker',
      level: 69,
      category: 'DevOps',
      experience: '1+ yr',
      projects: 3,
      mastery: 'Intermediate',
      description: 'Containerized services and used in CI/CD pipelines.',
    },
    {
      name: 'CI/CD',
      level: 68,
      category: 'DevOps',
      experience: '1+ yr',
      projects: 2,
      mastery: 'Intermediate',
      description: 'Configured GitHub Actions for testing and deployment workflows.',
    },

    // ---------- Design ----------
    {
      name: 'Figma',
      level: 68,
      category: 'Design',
      experience: '2+ yrs',
      projects: 3,
      mastery: 'Intermediate',
      description: 'Created wireframes and handoff-ready prototypes for apps.',
    },

    // ---------- Others ----------
    {
      name: 'Testing',
      level: 69,
      category: 'Others',
      experience: '1+ yr',
      projects: 3,
      mastery: 'Intermediate',
      description: 'Wrote unit tests with Jest and performed QA, reducing production bugs by 30%.',
    },
    {
      name: 'API Integrations',
      level: 77,
      category: 'Others',
      experience: '2+ yrs',
      projects: 4,
      mastery: 'Advanced',
      description: 'Integrated Stripe payments, Google Maps API, and RESTful services in apps.',
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
