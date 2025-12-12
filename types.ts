import React from 'react';

export type Language = 'es' | 'en';

export interface LocalizedContent<T> {
  es: T;
  en: T;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

export interface MetricData {
  name: string;
  value: number;
  label: string;
  subLabel?: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  contribution: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company?: string;
}