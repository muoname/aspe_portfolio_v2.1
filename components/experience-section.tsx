'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Building, Circle, Trophy } from 'lucide-react';

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
      id: 'tech-innovations',
      title: 'Tech Innovations Inc.',
      role: 'Senior Full Stack Developer',
      duration: '2020 - Present',
      description:
        'Led the development of scalable web applications using React, Node.js, and GraphQL. Implemented CI/CD pipelines and automated testing frameworks. Mentored junior developers and conducted code reviews.',
      responsibilities: [
        'Developed and maintained RESTful APIs using Node.js and Express',
        'Implemented user authentication and authorization using JWT',
        'Optimized database queries and improved application performance',
        'Collaborated with cross-functional teams to deliver high-quality software',
      ],
      technologies: ['React', 'Node.js', 'GraphQL', 'PostgreSQL', 'Docker', 'AWS'],
      achievements: [
        'Increased application performance by 40%',
        'Reduced bug count by 30%',
        'Improved code coverage by 20%',
      ],
      skills: [
        'Full Stack Development',
        'API Design',
        'Database Optimization',
        'CI/CD',
        'Mentoring',
      ],
      location: 'Las Pinas, Manila',
      companySize: '200+',
      industry: 'Software Development',
      website: 'www.techinnovations.com',
      awards: ['Best Place to Work 2022', 'Innovation Award 2021'],
      projects: [
        {
          name: 'E-commerce Platform',
          description: 'Developed a scalable e-commerce platform using React and Node.js',
          technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
        },
        {
          name: 'Task Management App',
          description:
            'Developed a real-time task management application using React and Socket.io',
          technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
        },
      ],
    },
    {
      id: 'global-solutions',
      title: 'Global Solutions Ltd.',
      role: 'Full Stack Developer',
      duration: '2018 - 2020',
      description:
        'Developed and maintained web applications using Angular, Java, and Spring Boot. Implemented responsive designs and ensured cross-browser compatibility. Collaborated with designers and product managers to deliver user-friendly interfaces.',
      responsibilities: [
        'Developed and maintained RESTful APIs using Java and Spring Boot',
        'Implemented user authentication and authorization using OAuth 2.0',
        'Optimized database queries and improved application performance',
        'Collaborated with cross-functional teams to deliver high-quality software',
      ],
      technologies: ['Angular', 'Java', 'Spring Boot', 'MySQL', 'Docker', 'Azure'],
      achievements: [
        'Increased application performance by 30%',
        'Reduced bug count by 20%',
        'Improved code coverage by 10%',
      ],
      skills: [
        'Full Stack Development',
        'API Design',
        'Database Optimization',
        'CI/CD',
        'Teamwork',
      ],
      location: 'New York, NY',
      companySize: '500+',
      industry: 'Software Development',
      website: 'www.globalsolutions.com',
      awards: ['Top 100 Companies 2020', 'Customer Satisfaction Award 2019'],
      projects: [
        {
          name: 'CRM System',
          description: 'Developed a customer relationship management system using Angular and Java',
          technologies: ['Angular', 'Java', 'Spring Boot', 'MySQL'],
        },
        {
          name: 'Inventory Management App',
          description: 'Developed an inventory management application using Angular and Java',
          technologies: ['Angular', 'Java', 'Spring Boot', 'MySQL'],
        },
      ],
    },
    {
      id: 'innovative-tech',
      title: 'Innovative Tech Solutions',
      role: 'Frontend Developer',
      duration: '2016 - 2018',
      description:
        'Developed and maintained web applications using HTML, CSS, and JavaScript. Implemented responsive designs and ensured cross-browser compatibility. Collaborated with designers and product managers to deliver user-friendly interfaces.',
      responsibilities: [
        'Developed and maintained web applications using HTML, CSS, and JavaScript',
        'Implemented responsive designs and ensured cross-browser compatibility',
        'Collaborated with designers and product managers to deliver user-friendly interfaces',
        'Optimized website performance and improved user experience',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'Git'],
      achievements: [
        'Increased website traffic by 20%',
        'Reduced bounce rate by 10%',
        'Improved website loading time by 50%',
      ],
      skills: [
        'Frontend Development',
        'Responsive Design',
        'Cross-Browser Compatibility',
        'UI/UX Design',
        'Teamwork',
      ],
      location: 'Los Angeles, CA',
      companySize: '100+',
      industry: 'Web Development',
      website: 'www.innovativetech.com',
      awards: ['Best Website Design 2017', 'User Experience Award 2016'],
      projects: [
        {
          name: 'Company Website',
          description: 'Developed a company website using HTML, CSS, and JavaScript',
          technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
        },
        {
          name: 'Landing Page',
          description: 'Developed a landing page for a new product using HTML, CSS, and JavaScript',
          technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
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
