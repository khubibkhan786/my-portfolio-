export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  filterCategories?: string[];
  technologies: string[];
  image?: string;
  screenshots?: string[];
  year: string;
  status: 'Completed' | 'In Progress' | 'Upcoming';
  featured: boolean;
  liveDemo?: string;
  github?: string;
  features: string[];
  problem?: string;
  solution?: string;
  role?: string;
  platformBadge?: string;
  storeBadge?: string;
  translations?: {
    ps?: {
      title?: string;
      category?: string;
      shortDescription?: string;
      fullDescription?: string;
      features?: string[];
      problem?: string;
      solution?: string;
    };
    fa?: {
      title?: string;
      category?: string;
      shortDescription?: string;
      fullDescription?: string;
      features?: string[];
      problem?: string;
      solution?: string;
    };
  };
}

export interface Skill {
  name: string;
  icon?: string;
  evidence?: string;
  proficiency?: number;
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
  translations?: {
    ps?: {
      title: string;
      description: string;
      year?: string;
    };
    fa?: {
      title: string;
      description: string;
      year?: string;
    };
  };
}

export type Theme = 'light' | 'dark';
export type Language = 'en' | 'ps' | 'fa';
