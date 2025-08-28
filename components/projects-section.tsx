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
      description: 'Full-stack e-commerce solution with React and Node.js',
      longDescription:
        'A comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, payment integration, and admin dashboard. Built with modern technologies and best practices.',
      status: 'Completed',
      difficulty: 'Expert',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Docker'],
      duration: '6 months',
      teamSize: 5,
      impact: 'Increased sales by 40%',
      category: 'Web Application',
      completionDate: '2023-12',
      githubUrl: '#',
      liveUrl: '#',
      rewards:
        styleMode === 'game'
          ? ['1500 XP', 'Leadership Badge', 'Commerce Master']
          : ['Team Leadership', 'Full-Stack Development', 'Payment Integration'],
    },
    {
      id: 'taskmanager',
      title: 'Task Management App',
      description: 'Real-time collaboration tool with WebSocket integration',
      longDescription:
        'A collaborative task management application with real-time updates, team collaboration features, file sharing, and advanced project tracking capabilities.',
      status: 'Completed',
      difficulty: 'Advanced',
      technologies: ['React', 'Socket.io', 'Express', 'MongoDB', 'Redis'],
      duration: '4 months',
      teamSize: 3,
      impact: 'Improved team productivity by 60%',
      category: 'Productivity Tool',
      completionDate: '2023-08',
      githubUrl: '#',
      liveUrl: '#',
      rewards:
        styleMode === 'game'
          ? ['1200 XP', 'Collaboration Expert', 'Real-time Master']
          : ['WebSocket Implementation', 'Team Collaboration', 'Real-time Features'],
    },
    {
      id: 'dashboard',
      title: 'Data Visualization Dashboard',
      description: 'Interactive charts and analytics platform',
      longDescription:
        'An advanced analytics dashboard with interactive charts, real-time data processing, custom reporting, and machine learning insights for business intelligence.',
      status: 'In Progress',
      difficulty: 'Expert',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
      duration: '8 months',
      teamSize: 4,
      impact: 'Expected 50% faster decision making',
      category: 'Analytics',
      completionDate: '2024-03',
      githubUrl: '#',
      liveUrl: '#',
      rewards:
        styleMode === 'game'
          ? ['2000 XP', 'Data Wizard', 'Visualization Master']
          : ['Data Visualization', 'Analytics', 'Machine Learning'],
    },
    {
      id: 'mobile',
      title: 'Mobile Fitness App',
      description: 'Cross-platform fitness tracking application',
      longDescription:
        'A comprehensive fitness tracking app with workout plans, nutrition tracking, social features, and AI-powered recommendations.',
      status: 'Completed',
      difficulty: 'Advanced',
      technologies: ['React Native', 'Firebase', 'Node.js', 'TensorFlow'],
      duration: '5 months',
      teamSize: 4,
      impact: '10k+ active users',
      category: 'Mobile App',
      completionDate: '2023-06',
      githubUrl: '#',
      liveUrl: '#',
      rewards:
        styleMode === 'game'
          ? ['1300 XP', 'Mobile Master', 'Health Guardian']
          : ['Mobile Development', 'AI Integration', 'User Engagement'],
    },
    {
      id: 'blockchain',
      title: 'Blockchain Voting System',
      description: 'Secure decentralized voting platform',
      longDescription:
        'A blockchain-based voting system ensuring transparency, security, and immutability of votes with smart contracts and decentralized architecture.',
      status: 'Completed',
      difficulty: 'Expert',
      technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'IPFS'],
      duration: '7 months',
      teamSize: 3,
      impact: '100% vote integrity',
      category: 'Blockchain',
      completionDate: '2023-10',
      githubUrl: '#',
      liveUrl: '#',
      rewards:
        styleMode === 'game'
          ? ['1800 XP', 'Blockchain Pioneer', 'Security Expert']
          : ['Blockchain Development', 'Smart Contracts', 'Security Implementation'],
    },
    {
      id: 'ai-chatbot',
      title: 'AI Customer Support Bot',
      description: 'Intelligent chatbot with natural language processing',
      longDescription:
        'An AI-powered customer support chatbot with advanced NLP capabilities, sentiment analysis, and integration with existing support systems.',
      status: 'In Progress',
      difficulty: 'Expert',
      technologies: ['Python', 'TensorFlow', 'React', 'Node.js', 'OpenAI'],
      duration: '6 months',
      teamSize: 5,
      impact: 'Expected 70% reduction in support tickets',
      category: 'AI/ML',
      completionDate: '2024-04',
      githubUrl: '#',
      liveUrl: '#',
      rewards:
        styleMode === 'game'
          ? ['2200 XP', 'AI Master', 'Language Wizard']
          : ['AI Development', 'NLP', 'Customer Service Automation'],
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
                    className={`h-6 w-6 ml-3 ${project.status === 'Completed' ? 'text-green-500' : 'text-blue-500'}`}
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
