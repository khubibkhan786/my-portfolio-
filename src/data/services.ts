import {Service} from '../types';

export const services: Service[] = [
  {
    title: 'Modern & Responsive Websites',
    description: 'Fast, accessible, mobile-first websites built with semantic HTML5, modern CSS, and React, optimized across all devices.',
    icon: 'Globe'
  },
  {
    title: 'Web Applications with AI-Powered Features',
    description: 'Practical web applications integrating AI APIs for smart text processing, conversational assistance, and workflow automation.',
    icon: 'Sparkles'
  },
  {
    title: 'Mobile Applications with AI Integration',
    description: 'Native Android applications in Kotlin featuring offline-first Room database storage, clean architecture, and practical AI tools.',
    icon: 'Smartphone'
  },
  {
    title: 'Clean User Interface Implementation',
    description: 'Translating design concepts and wireframes into pixel-perfect, accessible, and intuitive web and mobile interfaces.',
    icon: 'Layout'
  },
  {
    title: 'Database-Connected Applications',
    description: 'Designing relational schemas, setting up MySQL/SQLite tables, and creating structured CRUD data flows.',
    icon: 'Database'
  },
  {
    title: 'Application Improvements & Refinements',
    description: 'Refactoring codebases, optimizing load speeds, resolving responsive layout bugs, and enhancing overall user experience.',
    icon: 'Wrench'
  }
];

export interface ProcessStage {
  step: number;
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const workProcessStages: ProcessStage[] = [
  {
    step: 1,
    id: 'understanding',
    title: 'Understanding Requirements',
    description: 'Clarifying the core problem, user needs, target platform, and essential functionality.',
    icon: 'Lightbulb'
  },
  {
    step: 2,
    id: 'planning',
    title: 'Planning & Design',
    description: 'Structuring user flows, UI layouts, database relationships, and component architecture.',
    icon: 'Compass'
  },
  {
    step: 3,
    id: 'development',
    title: 'Development & Implementation',
    description: 'Writing clean, structured, and type-safe code using modern engineering best practices.',
    icon: 'Code2'
  },
  {
    step: 4,
    id: 'testing',
    title: 'Testing & Refinement',
    description: 'Verifying responsiveness, debugging issues, optimizing performance, and polishing interactions.',
    icon: 'CheckCircle2'
  },
  {
    step: 5,
    id: 'delivery',
    title: 'Delivery & Support',
    description: 'Deploying the application, providing clear documentation, and ensuring dependable operation.',
    icon: 'Rocket'
  }
];
