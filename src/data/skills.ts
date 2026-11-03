import {SkillItem, SkillCategoryGroup, RoadmapStage, SkillStatus} from '../types';

export type {SkillItem, SkillCategoryGroup, RoadmapStage, SkillStatus};

// 1. USING: Technologies applied in practical software projects
export const practicalSkills: SkillItem[] = [
  {
    name: 'React 19',
    status: 'practical',
    category: 'web',
    description: 'Component architecture, custom hooks, and reactive user interfaces.',
    evidence: 'AGZ Portfolio, Student Academic Portal',
    projectAssociation: ['student-portal-hub'],
  },
  {
    name: 'TypeScript',
    status: 'practical',
    category: 'web',
    description: 'Type-safe contracts, strict interfaces, and scalable frontend code.',
    evidence: 'React application logic & full-stack prototypes',
    projectAssociation: ['student-portal-hub'],
  },
  {
    name: 'Kotlin',
    status: 'practical',
    category: 'mobile',
    description: 'Native Android UI, activity lifecycle, and offline Room database integration.',
    evidence: 'Lemunz Aw Azkar production APK',
    projectAssociation: ['lemunz-azkar'],
  },
  {
    name: 'Tailwind CSS',
    status: 'practical',
    category: 'web',
    description: 'Modern utility styling, dark/light themes, and responsive design systems.',
    evidence: 'Responsive layouts & portfolio design',
  },
  {
    name: 'JavaScript (ES6+)',
    status: 'practical',
    category: 'web',
    description: 'Asynchronous APIs, DOM manipulation, and interactive client workflows.',
    evidence: 'Weather Tracking App & automation tools',
    projectAssociation: ['weather-app', 'workflow-automation-toolkit'],
  },
  {
    name: 'Git & GitHub',
    status: 'practical',
    category: 'tools',
    description: 'Version control, feature branching, commit discipline, and code repositories.',
    evidence: 'Active source management for all personal projects',
  },
  {
    name: 'Android Studio',
    status: 'practical',
    category: 'tools',
    description: 'Android IDE: Gradle build systems, layout inspections, and device debugging.',
    evidence: 'Used for compiling, debugging, and packaging APKs',
    projectAssociation: ['lemunz-azkar'],
  },
  {
    name: 'VS Code',
    status: 'practical',
    category: 'tools',
    description: 'Daily development environment for React, TypeScript, and script workflows.',
    evidence: 'Primary editor configured for web and tooling development',
  },
];

// 2. LEARNING: Actively studied through university coursework and ongoing development
export const currentlyLearningSkills: SkillItem[] = [
  {
    name: 'SQL & Relational Databases',
    status: 'learning',
    category: 'databases',
    description: 'Relational data modeling, table relationships, primary/foreign keys, and query optimization.',
    evidence: 'Paktia University Information Systems coursework & practical lab exercises',
  },
  {
    name: 'MySQL',
    status: 'learning',
    category: 'databases',
    description: 'Database creation, relational constraints, CRUD operations, and transaction integrity.',
    evidence: 'University database administration lab assignments and test projects',
  },
  {
    name: 'Software Engineering Principles',
    status: 'learning',
    category: 'engineering',
    description: 'Software development life cycle (SDLC), modular architecture, requirement analysis, and code quality.',
    evidence: 'Core Information Systems curriculum and software design planning',
  },
  {
    name: 'Java & OOP',
    status: 'learning',
    category: 'languages',
    description: 'Object-oriented programming concepts: encapsulation, inheritance, polymorphism, and class hierarchies.',
    evidence: 'University computer science coursework & foundational problem solving',
  },
];

// For backward compatibility
export const foundationalSkills: SkillItem[] = [];

// Grouped by Category for categorized display
export const skillCategoriesData: SkillCategoryGroup[] = [
  {
    category: 'Using in Projects',
    tagline: 'Technologies actively used in practical projects with verified implementation',
    items: practicalSkills,
  },
  {
    category: 'Currently Learning',
    tagline: 'Actively studied through university coursework, lab exercises, and practical building',
    items: currentlyLearningSkills,
  },
];

// 3. MINIMAL & PROFESSIONAL ROADMAP (5 STAGES)
export const softwareEngineeringRoadmap: RoadmapStage[] = [
  {
    stageNumber: 1,
    id: 'core-programming',
    title: 'Core Programming & OOP',
    subtitle: 'Solid foundations in structured code and object-oriented design',
    status: 'foundational',
    description: 'Mastering algorithmic thinking, data structures, and disciplined debugging in Java.',
    skills: ['Java', 'OOP Principles', 'Data Structures', 'Debugging'],
  },
  {
    stageNumber: 2,
    id: 'relational-databases',
    title: 'Relational Databases & SQL',
    subtitle: 'Database modeling, schema design, and query optimization',
    status: 'current',
    description: 'Designing structured tables, relationships, integrity constraints, and queries in MySQL.',
    skills: ['SQL', 'MySQL', 'Schema Design', 'Normalization', 'Relational Integrity'],
  },
  {
    stageNumber: 3,
    id: 'modern-web-development',
    title: 'Modern Web & Frontend',
    subtitle: 'Responsive, accessible, and type-safe client applications',
    status: 'current',
    description: 'Refining frontend engineering with React 19, TypeScript, and modern CSS architecture.',
    skills: ['React 19', 'TypeScript', 'Tailwind CSS', 'Responsive UI', 'REST APIs'],
  },
  {
    stageNumber: 4,
    id: 'mobile-ai-features',
    title: 'Mobile & Practical AI Features',
    subtitle: 'Native Android architecture with practical AI integration',
    status: 'current',
    description: 'Building offline-first Android apps with Kotlin and integrating practical AI APIs for smart features.',
    skills: ['Kotlin', 'Android Jetpack', 'Room DB', 'AI API Integration', 'Offline-First'],
  },
  {
    stageNumber: 5,
    id: 'full-stack-engineering',
    title: 'Full-Stack Software Engineering',
    subtitle: 'End-to-end applications across web, mobile, and backend systems',
    status: 'future',
    description: 'Unifying client interfaces, secure backend services, databases, and automated testing into reliable products.',
    skills: ['End-to-End Architecture', 'Backend Services', 'Database Integration', 'Cloud Deployment'],
  },
];
