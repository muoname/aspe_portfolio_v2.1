'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Building, ChevronDown, ChevronUp, Circle, Trophy } from 'lucide-react';

type StyleMode = 'normal' | 'game';

interface Experience {
  id: string;
  title: string;
  role: string;
  duration: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
  skills: string[];
  location: string;
  companySize: string;
  industry: string;
  website: string;
  awards: string[];
  projects: {
    name: string;
    description: string;
    technologies: string[];
  }[];
}

interface ExperienceSectionProps {
  styleMode: StyleMode;
}

export function ExperienceSection({ styleMode }: ExperienceSectionProps) {
  const [selectedExperience, setSelectedExperience] = useState<string | null>(null);

  const experiences: Experience[] = [
    {
      id: 'aws',
      title: 'Advanced World Solutions, Inc.',
      role: 'Junior R&D Engineer ',
      duration: 'July 2024 – Present',
      description:
        'Full-stack engineer contributing to one of Japan’s largest real estate platforms. Implemented features, fixed sprint-critical bugs, and optimized performance using React, TypeScript, Node.js, and OracleDB.',
      responsibilities: [
        'Developed and maintained full-stack features for real estate platform modules',
        'Optimized filtering and search logic for large-scale datasets',
        'Collaborated in Agile sprints with senior engineers, QA, and product managers',
        'Delivered sprint-critical fixes under tight deadlines with minimal regression',
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'OracleDB', 'GitHub'],
      achievements: [
        'Ranked Top 1 trainee during onboarding',
        'Exceeded KPI targets by 220%',
        'Consistently delivered sprint-critical features on time',
      ],
      skills: [
        'Full Stack Development',
        'Agile Collaboration',
        'Database Optimization',
        'Performance Tuning',
        'Cross-Team Communication',
      ],
      location: 'Makati, Philippines',
      companySize: '500+',
      industry: 'Software Development (Real Estate Tech)',
      website: 'https://www.awsolutions.com/',
      awards: ['Top 1 Trainee'],
      projects: [
        {
          name: 'Property Search Module',
          description:
            'Implemented and optimized advanced property filtering and query logic on both frontend and backend.',
          technologies: ['React', 'TypeScript', 'Node.js', 'OracleDB'],
        },
        {
          name: 'Agent Tools',
          description:
            'Developed internal tools for property listing and agent workflows with role-based access.',
          technologies: ['React', 'Node.js', 'OracleDB'],
        },
      ],
    },
    {
      id: 'village88',
      title: 'Village88 Inc.',
      role: 'Software Developer Intern (OJT)',
      duration: 'Jan 2024 – May 2024',
      description:
        'Intensive hands-on training and project-based internship focusing on full-stack web development, coding best practices, and Agile workflows.',
      responsibilities: [
        'Developed web applications using PHP, MySQL, and JavaScript under mentorship',
        'Practiced Agile methodologies and pair programming with peers',
        'Improved code quality through reviews and coding standards',
      ],
      technologies: ['PHP', 'JavaScript', 'MySQL', 'HTML', 'CSS'],
      achievements: [
        'Completed Village88 intensive OJT program',
        'Built multiple training projects simulating real-world constraints',
      ],
      skills: ['Full Stack Development', 'Agile Practices', 'Team Collaboration', 'Code Review'],
      location: 'Remote (Philippines)',
      companySize: '50+',
      industry: 'Software Development Training',
      website: 'https://village88.com/',
      awards: [],
      projects: [
        {
          name: 'Training Systems',
          description: 'Built CRUD-based web apps following industry coding standards.',
          technologies: ['PHP', 'MySQL', 'JavaScript'],
        },
        {
          name: 'Group Exercises',
          description: 'Collaborated on paired and group coding challenges and mini-projects.',
          technologies: ['JavaScript', 'HTML', 'CSS'],
        },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-3">
        <h2 className="text-3xl font-bold text-primary">
          {styleMode === 'game' ? 'Guild Archives' : 'Professional Experience'}
        </h2>
        {styleMode === 'game' && <Building className="h-8 w-8 text-primary animate-pulse" />}
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        <div className="absolute left-1/2 top-4 bottom-4 w-0.5 bg-primary/20" />
        <div className="space-y-6">
          {experiences.map((experience) => (
            <div key={experience.id} className="flex items-start gap-4">
              <div className="w-1/2 text-right">
                <h3 className="font-bold text-lg text-primary">{experience.title}</h3>
                <p className="text-sm text-muted-foreground">{experience.role}</p>
                <p className="text-xs text-muted-foreground">{experience.duration}</p>
              </div>
              <div className="relative w-8 h-8 rounded-full bg-primary border-4 border-background shadow-lg flex items-center justify-center">
                <Circle className="h-4 w-4 text-primary-foreground" />
              </div>
              <div className="w-1/2">
                <Card
                  className={`p-4 border-primary/20 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:scale-105 cursor-pointer ${
                    selectedExperience === experience.id ? 'shadow-xl border-primary/60' : ''
                  }`}
                  onClick={() => {
                    if (selectedExperience === experience.id) setSelectedExperience(null);
                    else setSelectedExperience(experience.id);
                  }}
                >
                  <div className="space-y-2">
                    <div className="absolute top-0 right-1 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                      {selectedExperience ? (
                        <ChevronUp className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                      )}
                    </div>

                    <p className="text-muted-foreground">{experience.description}</p>
                    {selectedExperience === experience.id && (
                      <div className="pt-4 border-t border-primary/20 space-y-3">
                        <h4 className="text-sm font-semibold text-primary mb-2">
                          Key Responsibilities:
                        </h4>
                        <ul className="list-disc list-inside text-sm text-muted-foreground">
                          {experience.responsibilities.map((responsibility, index) => (
                            <li key={index}>{responsibility}</li>
                          ))}
                        </ul>
                        <h4 className="text-sm font-semibold text-primary mb-2">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <h4 className="text-sm font-semibold text-primary mb-2">
                          Key Achievements:
                        </h4>
                        <ul className="list-disc list-inside text-sm text-muted-foreground">
                          {experience.achievements.map((achievement, index) => (
                            <li key={index}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Summary */}
      <Card className="p-6 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
        <h3 className="text-xl font-semibold text-primary mb-4 flex items-center space-x-2">
          <Trophy className="h-5 w-5" />
          <span>{styleMode === 'game' ? 'Guild Summary' : 'Experience Overview'}</span>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">{experiences.length}</div>
            <div className="text-sm text-muted-foreground">
              {styleMode === 'game' ? 'Guilds Joined' : 'Companies Worked'}
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">
              {experiences.reduce((acc, exp) => acc + exp.skills.length, 0)}
            </div>
            <div className="text-sm text-muted-foreground">
              {styleMode === 'game' ? 'Skills Learned' : 'Skills Utilized'}
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">
              {experiences.reduce((acc, exp) => acc + exp.projects.length, 0)}
            </div>
            <div className="text-sm text-muted-foreground">
              {styleMode === 'game' ? 'Quests Undertaken' : 'Projects Completed'}
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">
              {experiences.reduce((acc, exp) => acc + exp.awards.length, 0)}
            </div>
            <div className="text-sm text-muted-foreground">
              {styleMode === 'game' ? 'Achievements Earned' : 'Awards Received'}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
