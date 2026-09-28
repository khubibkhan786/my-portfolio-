export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  technologies: string[];
  image?: string;
  screenshots?: string[];
  year: string;
  status: 'Completed' | 'In Progress' | 'Upcoming';
  featured: boolean;
  liveDemo?: string;
  github?: string;
  features: string[];
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillGroup {
  category: string;
  items: Skill[];
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface JourneyStep {
  year: string;
  title: string;
  description: string;
}

export type Theme = 'light' | 'dark';
