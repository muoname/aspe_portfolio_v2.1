'use client';

import { Button } from '@/components/ui/button';
import { Sword, Users, Github, ExternalLink, Calendar, X, Clock, TrendingUp } from 'lucide-react';

import { type Project as ProjectType } from '@/components/projects-section';

type StyleMode = 'normal' | 'game';

export function ProjectModal({
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
                className={`px-4 py-2 rounded-full text-sm font-semibold border ${getDifficultyColor(
                  project.difficulty,
                )}`}
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
