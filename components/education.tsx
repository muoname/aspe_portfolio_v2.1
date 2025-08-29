'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { BookOpen, GraduationCap, Circle, ChevronDown, ChevronUp, ScrollText } from 'lucide-react';

type StyleMode = 'normal' | 'game';

interface Education {
  id: string;
  school: string;
  degree: string;
  duration: string;
  description: string;
  coursework: string[];
  projects: {
    name: string;
    description: string;
    technologies: string[];
  }[];
  achievements: string[];
  location: string;
}

interface EducationSectionProps {
  styleMode: StyleMode;
}

export function EducationSection({ styleMode }: EducationSectionProps) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setFilled(true), 2000); // trigger pulse after animation
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setProgress(100), 300); // animate fill after load
    return () => clearTimeout(timeout);
  }, []);

  const education: Education[] = [
    {
      id: 'adnu',
      school: 'Ateneo de Naga University',
      degree: 'Bachelor of Science in Information Technology',
      duration: '2020 – 2024',
      description:
        'Focused on software development, database systems, networking, and emerging IT technologies. Gained strong experience in both academic research and applied software projects.',
      coursework: [
        'Software Engineering',
        'Database Management Systems',
        'Computer Networks',
        'Algorithms & Data Structures',
        'Human-Computer Interaction',
      ],
      projects: [
        {
          name: 'Capstone Project',
          description:
            'Developed a monitoring and automation system integrating IoT devices with a responsive web dashboard.',
          technologies: ['Arduino', 'C++', 'MySQL', 'PHP'],
        },
      ],
      achievements: ['QPI: 3.8 / 4.0', 'Capstone successfully defended'],
      location: 'Naga City, Camarines Sur',
    },
    {
      id: 'mseuf',
      school: 'Manuel S. Enverga University Foundation',
      degree: 'Senior High School – STEM Strand',
      duration: '2018 – 2020',
      description:
        'Completed the Academic Track specializing in Science, Technology, Engineering, and Mathematics. Built a strong foundation in advanced mathematics, sciences, and preparatory programming.',
      coursework: ['Pre-Calculus', 'Physics', 'Basic Programming', 'Engineering Design'],
      projects: [
        {
          name: 'STEM Research & Showcase',
          description:
            'Presented small-scale engineering and programming projects as part of STEM exhibits.',
          technologies: ['C', 'Arduino', 'Electronics'],
        },
      ],
      achievements: ['Graduated with General Average: 97%'],
      location: 'Lucena City, Quezon',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="flex items-center space-x-3">
        <h2 className="text-3xl font-bold text-primary">
          {styleMode === 'game' ? 'Academy Archives' : 'Education'}
        </h2>
        {styleMode === 'game' ? (
          <ScrollText className="h-8 w-8 text-primary animate-bounce" />
        ) : (
          <GraduationCap className="h-8 w-8 text-primary" />
        )}
      </div>

      {/* Education Ladder */}
      <div
        className={`relative pl-6 space-y-6 ${
          styleMode === 'game'
            ? 'before:content-[""] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-primary/80 before:via-primary/40 before:to-primary/80 before:bg-[length:100%_200%] before:animate-[spineflow_3s_linear_infinite]'
            : 'border-l-2 border-primary/20'
        }`}
      >
        {education.map((edu) => (
          <div key={edu.id} className="relative">
            <div className="relative group">
              {/* Stepper icon */}
              <div
                className={`absolute -left-4 top-2 w-8 h-8 flex items-center justify-center 
    rounded-full bg-primary text-white shadow-lg z-10
    transition-all duration-300 group-hover:-translate-x-2 
    group-hover:scale-110 group-hover:shadow-primary/70`}
              >
                {styleMode === 'game' ? <BookOpen size={16} /> : <Circle size={12} />}
              </div>

              {/* Card */}
              <Card
                className={`p-4 pl-7 transition-all duration-300 cursor-pointer transform
    ${expanded === edu.id ? 'shadow-xl border-primary/60' : 'border-primary/20'}
    hover:scale-[1.02] hover:shadow-lg hover:border-primary/40
    ${styleMode === 'game' ? 'bg-gradient-to-r from-primary/10 to-transparent' : ''}`}
                onClick={() => setExpanded(expanded === edu.id ? null : edu.id)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-lg text-primary">{edu.school}</h3>
                    <p className="text-sm text-muted-foreground">{edu.degree}</p>
                    <p className="text-xs text-muted-foreground">{edu.duration}</p>
                  </div>
                  {expanded === edu.id ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </div>

                <p className="mt-2 text-muted-foreground">{edu.description}</p>

                {expanded === edu.id && (
                  <div className="mt-4 space-y-3 border-t border-primary/20 pt-3">
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-1">
                        {styleMode === 'game' ? 'Lessons Studied:' : 'Coursework:'}
                      </h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground">
                        {edu.coursework.map((course, index) => (
                          <li key={index}>{course}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-1">
                        {styleMode === 'game' ? 'Quests:' : 'Projects:'}
                      </h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground">
                        {edu.projects.map((proj, index) => (
                          <li key={index}>
                            <span className="font-medium">{proj.name}:</span> {proj.description}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-1">
                        {styleMode === 'game' ? 'Level Ups:' : 'Achievements:'}
                      </h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground">
                        {edu.achievements.map((ach, index) => (
                          <li key={index}>{ach}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </Card>
            </div>
          </div>
        ))}
      </div>

      {/* Academic XP / Level Progress */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold text-primary mb-4 flex items-center space-x-2">
          {styleMode === 'game' ? (
            <>
              <BookOpen className="h-5 w-5 animate-pulse" />
              <span>Academic Level Progress</span>
            </>
          ) : (
            <>
              <GraduationCap className="h-5 w-5" />
              <span>Education Growth</span>
            </>
          )}
        </h3>

        {/* XP Bar with labels inside */}
        <div className="relative w-full h-10 bg-muted rounded-full overflow-hidden shadow-inner flex">
          {/* Animated fill */}
          <div
            className={`absolute top-0 left-0 h-full rounded-full transition-all duration-[2000ms] ease-out
            ${
              styleMode === 'game'
                ? `bg-gradient-to-r from-primary via-green-400 to-yellow-400 ${
                    filled ? 'animate-pulse' : ''
                  }`
                : `bg-primary ${filled ? 'animate-pulse' : ''}`
            }`}
            style={{ width: `${progress}%` }}
          />

          {/* Segments with labels */}
          <div className="relative z-10 flex-1 flex items-center justify-center text-xs md:text-sm font-semibold text-white">
            Novice
          </div>
          <div className="relative z-10 flex-1 flex items-center justify-center text-xs md:text-sm font-semibold text-white">
            Apprentice
          </div>
          <div className="relative z-10 flex-1 flex items-center justify-center text-xs md:text-sm font-semibold text-white">
            Graduate
          </div>
        </div>
      </div>

      {/* Closing Lore / Message */}
      <Card
        className="p-6 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent 
  hover:shadow-md hover:scale-[1.01] transition-all duration-300 text-center"
      >
        <p className="italic text-muted-foreground">
          {styleMode === 'game'
            ? '“From humble beginnings in STEM, the scholar sharpened skills and forged a path through the Academy Archives, ready for greater quests ahead.”'
            : 'A journey from STEM foundations to engineering expertise, building the skills needed for a career in technology.'}
        </p>
      </Card>
    </div>
  );
}
