export interface ProjectChallenge {
  challenge: string;
  solution: string;
}

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
  productVision?: string;
  designAndPlanning?: string;
  architecture?: string;
  developerContribution?: string;
  challengesAndSolutions?: ProjectChallenge[];
  hasDedicatedPage?: boolean;
  featureHighlights?: string[];
  translations?: {
    ps?: {
      title?: string;
      category?: string;
      shortDescription?: string;
      fullDescription?: string;
      featureHighlights?: string[];
      features?: string[];
      problem?: string;
      solution?: string;
      productVision?: string;
      designAndPlanning?: string;
      architecture?: string;
      developerContribution?: string;
      challengesAndSolutions?: ProjectChallenge[];
    };
    fa?: {
      title?: string;
      category?: string;
      shortDescription?: string;
      fullDescription?: string;
      featureHighlights?: string[];
      features?: string[];
      problem?: string;
      solution?: string;
      productVision?: string;
      designAndPlanning?: string;
      architecture?: string;
      developerContribution?: string;
      challengesAndSolutions?: ProjectChallenge[];
    };
  };
}

export type SkillStatus = 'practical' | 'learning' | 'foundational' | 'planned';

export interface SkillItem {
  name: string;
  status: SkillStatus;
  category: string;
  description: string;
  evidence?: string;
  projectAssociation?: string[];
}

export interface SkillCategoryGroup {
  category: string;
  tagline: string;
  items: SkillItem[];
}

export interface SimplifiedSkillCategory {
  id: 'software-dev' | 'databases' | 'web-mobile';
  title: string;
  shortSummary: string;
  icon: string;
  verifiedDetails: {
    area: string;
    description: string;
  }[];
  translations?: {
    ps?: {
      title?: string;
      shortSummary?: string;
      verifiedDetails?: {area: string; description: string}[];
    };
    fa?: {
      title?: string;
      shortSummary?: string;
      verifiedDetails?: {area: string; description: string}[];
    };
  };
}

export interface RoadmapStage {
  stageNumber: number;
  id: string;
  title: string;
  subtitle: string;
  status: 'foundational' | 'current' | 'future';
  description: string;
  skills: string[];
  decisionNote?: string;
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
