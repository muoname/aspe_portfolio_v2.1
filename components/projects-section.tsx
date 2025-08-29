'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Play, Circle, Sword, Clock, Users, Calendar, TrendingUp } from 'lucide-react';

export type StyleMode = 'normal' | 'game';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  status: string;
  difficulty: string;
  technologies: string[];
  duration: string;
  teamSize: number;
  impact: string;
  category: string;
  completionDate: string;
  githubUrl: string;
  liveUrl: string;
  rewards: string[];
}

interface ProjectsSectionProps {
  styleMode: StyleMode;
  onProjectClick: (project: Project | null) => void;
}

export function ProjectsSection({ styleMode, onProjectClick }: ProjectsSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: 'ecommerce',
      title: 'E-commerce Platform',
      description: 'Full-stack online store with payment and admin dashboard',
      longDescription:
        'Developed in 7 days as a solo project, featuring Stripe payment, order management, and an admin dashboard. Implemented with CodeIgniter (PHP) and MySQL on the backend, and Bootstrap for rapid UI delivery.',
      status: 'Completed',
      difficulty: 'Advanced',
      technologies: ['PHP', 'CodeIgniter', 'MySQL', 'Bootstrap', 'Stripe'],
      duration: '1 week',
      teamSize: 1,
      impact: 'Store prototype in 7 days',
      category: 'Web Application',
      completionDate: '2022-08',
      githubUrl: '#',
      liveUrl: '#',
      rewards:
        styleMode === 'game'
          ? ['1200 XP', 'Speed Coder Badge', 'Commerce Conqueror']
          : ['Full-Stack Delivery', 'Stripe Integration', 'Rapid Prototyping'],
    },
    {
      id: 'rpg-portfolio',
      title: 'RPG Web Portfolio',
      description: 'Gamified developer portfolio with quest-like UI',
      longDescription:
        'A personal web portfolio designed as an RPG quest log. Built with Next.js, Tailwind, shadcn/ui, Supabase for data, and deployed on Vercel. Features interactive animations, skill trees, and a quest-based project showcase.',
      status: 'In Progress',
      difficulty: 'Expert',
      technologies: ['Next.js', 'React', 'Tailwind', 'shadcn/ui', 'Supabase', 'Vercel'],
      duration: '2 months',
      teamSize: 1,
      impact: 'Interactive portfolio',
      category: 'Web Application',
      completionDate: '2024-09',
      githubUrl: '#',
      liveUrl: '#',
      rewards:
        styleMode === 'game'
          ? ['1500 XP', 'UI Artisan', 'Quest Designer']
          : ['Next.js Deployment', 'Supabase Integration', 'UI/UX Design'],
    },
    {
      id: 'real-estate',
      title: 'Real Estate Platform Modules',
      description: 'Enterprise modules for Japan’s largest property portal',
      longDescription:
        'Worked as Junior R&D Engineer on production modules in React and TypeScript. Contributed 37+ features and bug fixes, optimized filtering queries, and handled sprint-critical tickets that improved site performance.',
      status: 'Completed',
      difficulty: 'Expert',
      technologies: ['React', 'TypeScript', 'Rails', 'MySQL', 'GitHub'],
      duration: '1 year',
      teamSize: 70,
      impact: '37+ features delivered',
      category: 'Web Application',
      completionDate: '2024-07',
      githubUrl: '#',
      liveUrl: '#',
      rewards:
        styleMode === 'game'
          ? ['2000 XP', 'Bug Slayer', 'Sprint Hero']
          : ['React + TypeScript Expertise', 'Performance Optimization', 'Agile Development'],
    },
    {
      id: 'productivity-tool',
      title: 'Issue Automation Tool',
      description: 'Custom ticket generator for QA team',
      longDescription:
        'Built a customized productivity tool to generate automated issues/tickets for the testing team. Improved workflow speed by automating repetitive reporting tasks and reducing manual errors.',
      status: 'Completed',
      difficulty: 'Advanced',
      technologies: ['Python', 'Node.js', 'GitHub API', 'CI/CD'],
      duration: '2 months',
      teamSize: 1,
      impact: '50% faster QA workflow',
      category: 'Productivity Tool',
      completionDate: '2023-05',
      githubUrl: '#',
      liveUrl: '#',
      rewards:
        styleMode === 'game'
          ? ['1100 XP', 'Automation Alchemist', 'Workflow Enhancer']
          : ['Python Scripting', 'Automation Development', 'QA Collaboration'],
    },
    {
      id: 'unity-game',
      title: 'Dynamic Unity ARG Maker',
      description: 'Unity-powered game published on Google Play',
      longDescription:
        'Created an interactive ARG Maker with branching storylines, character art, and custom dialogue system. Published on Google Play using Unity and C# scripting.',
      status: 'Completed',
      difficulty: 'Intermediate',
      technologies: ['Unity', 'C#', 'Photoshop', 'Google Play Console'],
      duration: '6 months',
      teamSize: 3,
      impact: 'Published on Play Store',
      category: 'Mobile App',
      completionDate: '2021-12',
      githubUrl: '#',
      liveUrl: '#',
      rewards:
        styleMode === 'game'
          ? ['900 XP', 'Game Dev Initiate', 'Story Weaver']
          : ['Unity Development', 'C# Scripting', 'Game Publishing'],
    },
    {
      id: 'warespace',
      title: 'WareSpace',
      description: 'Warehouse and property management platform',
      longDescription:
        'Developed a full-stack warehouse management platform using VueJS with Quasar Framework for the frontend and Ruby on Rails with MySQL for the backend. Integrated Google Maps API for location-based features. Deployed on Google Cloud Platform with full CRUD operations, role-based access, and secure sessions.',
      status: 'Completed',
      difficulty: 'Advanced',
      technologies: ['VueJS', 'Quasar', 'Ruby on Rails', 'MySQL', 'Google Maps API', 'GCP'],
      duration: '4 months',
      teamSize: 3,
      impact: 'Platform for managing spaces',
      category: 'Web Application',
      completionDate: '2023-02',
      githubUrl: '#',
      liveUrl: '#',
      rewards:
        styleMode === 'game'
          ? ['1400 XP', 'Map Master', 'Full-Stack Builder']
          : ['VueJS + Rails Integration', 'Google Maps API', 'Cloud Deployment'],
    },
    {
      id: 'old-portfolio',
      title: 'Next.js Portfolio (Legacy)',
      description: 'Original developer portfolio built with Next.js',
      longDescription:
        'Created my first portfolio website using Next.js to showcase my projects and skills. Deployed on Vercel with responsive design and dynamic routing. Served as the foundation before building the RPG-styled portfolio.',
      status: 'Completed',
      difficulty: 'Intermediate',
      technologies: ['Next.js', 'React', 'Tailwind', 'Vercel'],
      duration: '1 month',
      teamSize: 1,
      impact: 'Initial Portfolio',
      category: 'Web Application',
      completionDate: '2023-01',
      githubUrl: '#',
      liveUrl: 'https://eugenelanceaspe.vercel.app/',
      rewards:
        styleMode === 'game'
          ? ['800 XP', 'Portfolio Pioneer', 'Frontend Explorer']
          : ['Next.js Deployment', 'Portfolio Foundation', 'Responsive Design'],
    },
  ];

  const categories = [
    'all',
    'Web Application',
    'Mobile App',
    'Analytics',
    'Blockchain',
    'AI/ML',
    'Productivity Tool',
  ];
  const statuses = ['all', 'Completed', 'In Progress'];

  const filteredProjects = projects.filter((project) => {
    if (selectedFilter === 'all') return true;
    return project.category === selectedFilter || project.status === selectedFilter;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'text-green-500 bg-green-500/20 border-green-500/40';
      case 'Intermediate':
        return 'text-yellow-500 bg-yellow-500/20 border-yellow-500/40';
      case 'Advanced':
        return 'text-orange-500 bg-orange-500/20 border-orange-500/40';
      case 'Expert':
        return 'text-red-500 bg-red-500/20 border-red-500/40';
      default:
        return 'text-primary bg-primary/20 border-primary/40';
    }
  };

  const getStatusIcon = (status: string) => {
    return status === 'Completed' ? CheckCircle : status === 'In Progress' ? Play : Circle;
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-3">
        <h2 className="text-3xl font-bold text-primary">
          {styleMode === 'game' ? 'Quest Log' : 'Projects Portfolio'}
        </h2>
        {styleMode === 'game' && <Sword className="h-8 w-8 text-primary animate-pulse" />}
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2">
        {[...categories, ...statuses.slice(1)].map((filter) => (
          <Button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            variant={selectedFilter === filter ? 'default' : 'outline'}
            size="sm"
            className={
              selectedFilter === filter
                ? 'bg-primary text-primary-foreground'
                : 'border-primary/20 hover:border-primary/40'
            }
          >
            {filter === 'all' ? 'All Projects' : filter}
          </Button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => {
          const StatusIcon = getStatusIcon(project.status);
          return (
            <Card
              key={project.id}
              className={`p-6 border transition-all duration-300 hover:scale-105 cursor-pointer ${
                hoveredProject === project.id ? 'border-primary/60 shadow-xl' : 'border-primary/20'
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => onProjectClick(project)}
            >
              <div className="space-y-4">
                {/* Project Header */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-primary mb-2">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                  <StatusIcon
                    className={`h-6 w-6 ml-3 ${
                      project.status === 'Completed' ? 'text-green-500' : 'text-blue-500'
                    }`}
                  />
                </div>

                {/* Project Stats */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{project.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{project.teamSize} members</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{project.completionDate}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{project.impact}</span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Status and Difficulty */}
                <div className="flex items-center justify-between">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
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
                    className={`px-3 py-1 rounded-full text-sm font-semibold border ${getDifficultyColor(
                      project.difficulty,
                    )}`}
                  >
                    {styleMode === 'game' ? `${project.difficulty} Level` : project.difficulty}
                  </span>
                </div>

                {/* Rewards/Achievements */}
                {hoveredProject === project.id && (
                  <div className="pt-4 border-t border-primary/20 space-y-3">
                    <p className="text-sm text-muted-foreground">{project.longDescription}</p>
                    <div>
                      <h4 className="text-sm font-bold text-white bg-primary/60 px-4 py-2 rounded-lg border-2 border-primary shadow-lg shadow-primary/20 mb-3 inline-block backdrop-blur-sm">
                        {styleMode === 'game' ? 'Quest Rewards:' : 'Key Achievements:'}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.rewards.map((reward, index) => (
                          <span
                            key={index}
                            className="px-3 py-1.5 bg-primary/50 text-white text-sm font-semibold rounded-full border-2 border-primary shadow-md shadow-primary/30 hover:bg-primary/70 hover:shadow-lg hover:shadow-primary/40 transition-all duration-200 backdrop-blur-sm"
                          >
                            {reward}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
