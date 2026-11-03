import {SkillItem, SkillCategoryGroup, RoadmapStage, SkillStatus} from '../types';

export type {SkillItem, SkillCategoryGroup, RoadmapStage, SkillStatus};

// A. PRACTICAL APPLICATION: Technologies genuinely used in real projects
export const practicalSkills: SkillItem[] = [
  {
    name: 'Kotlin',
    status: 'practical',
    category: 'mobile',
    description: 'Applied in Lemunz Aw Azkar for native Android UI, activities, and local Room database integration.',
    evidence: 'Implemented in production APK with offline persistence',
    projectAssociation: ['lemunz-azkar'],
  },
  {
    name: 'React 19',
    status: 'practical',
    category: 'web',
    description: 'Component architecture, custom hooks, and reactive UI state flows.',
    evidence: 'Applied in AGZ Portfolio and Student Academic Portal',
    projectAssociation: ['student-portal-hub'],
  },
  {
    name: 'TypeScript',
    status: 'practical',
    category: 'web',
    description: 'Type-safe interfaces, strict contract definition, and structured frontend logic.',
    evidence: 'Used across React portfolio and frontend prototypes',
    projectAssociation: ['student-portal-hub'],
  },
  {
    name: 'Tailwind CSS 4',
    status: 'practical',
    category: 'web',
    description: 'Responsive styling, dark/light theme systems, and clean layout spacing.',
    evidence: 'Primary CSS framework for responsive web deliverables',
  },
  {
    name: 'HTML5 & CSS3',
    status: 'practical',
    category: 'web',
    description: 'Semantic markup, accessible layout structure, and cross-browser styling.',
    evidence: 'Foundational web standards used in all web projects',
    projectAssociation: ['weather-app'],
  },
  {
    name: 'JavaScript (ES6+)',
    status: 'practical',
    category: 'web',
    description: 'DOM interaction, asynchronous API fetching, and client-side logic.',
    evidence: 'Applied in weather tracking app and automation utilities',
    projectAssociation: ['weather-app', 'workflow-automation-toolkit'],
  },
  {
    name: 'Android Studio',
    status: 'practical',
    category: 'tools',
    description: 'Primary Android IDE: Gradle configuration, layout editor, and device debugging.',
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
  {
    name: 'Git & GitHub',
    status: 'practical',
    category: 'tools',
    description: 'Version control, feature branching, commit discipline, and repository hosting.',
    evidence: 'Active source management for all personal projects',
  },
];

// B. CURRENTLY LEARNING: Actively studied through university coursework and ongoing exercises
export const currentlyLearningSkills: SkillItem[] = [
  {
    name: 'SQL',
    status: 'learning',
    category: 'databases',
    description: 'Relational data modeling, table schemas, primary/foreign keys, joins, and queries.',
    evidence: 'Active coursework & practical lab exercises at Paktia University',
  },
  {
    name: 'MySQL',
    status: 'learning',
    category: 'databases',
    description: 'Database creation, tables, CRUD operations, constraints, and relational integrity.',
    evidence: 'Practicing relational database administration and university lab assignments',
  },
  {
    name: 'Software Engineering Principles',
    status: 'learning',
    category: 'engineering',
    description: 'Software development life cycle, requirement analysis, modular design, and maintainability.',
    evidence: 'Core Information Systems curriculum and project planning',
  },
];

// C. FOUNDATIONAL KNOWLEDGE: Fundamental concepts understood, practical proficiency developing
export const foundationalSkills: SkillItem[] = [
  {
    name: 'Java',
    status: 'foundational',
    category: 'languages',
    description: 'Basic familiarity with syntax, object-oriented concepts (classes, encapsulation, inheritance), and university coursework.',
    evidence: 'Studying in university computer science classes; foundational programming',
  },
  {
    name: 'Node.js Basics',
    status: 'foundational',
    category: 'runtime',
    description: 'Runtime environment, npm package management, and basic command-line script execution.',
    evidence: 'Used for local project toolchains and automation scripts',
  },
  {
    name: 'Data Structures Fundamentals',
    status: 'foundational',
    category: 'engineering',
    description: 'Understanding linear collections (arrays, lists) and basic algorithm logic.',
    evidence: 'Academic computer science theoretical curriculum',
  },
];

// Grouped by Category for categorized display
export const skillCategoriesData: SkillCategoryGroup[] = [
  {
    category: 'Practical Application',
    tagline: 'Technologies genuinely applied in projects with verified implementation ownership',
    items: practicalSkills,
  },
  {
    category: 'Currently Learning',
    tagline: 'Actively studied through university coursework, lab exercises, and practical building',
    items: currentlyLearningSkills,
  },
  {
    category: 'Foundational Knowledge',
    tagline: 'Fundamental concepts understood through academic study with proficiency developing',
    items: foundationalSkills,
  },
];

// D. FUTURE SOFTWARE ENGINEERING ROADMAP (7 STAGES)
export const softwareEngineeringRoadmap: RoadmapStage[] = [
  {
    stageNumber: 1,
    id: 'programming-foundations',
    title: 'Programming Foundations',
    subtitle: 'Core computer science and structured software thinking',
    status: 'foundational',
    description: 'Deepening comprehension of programming paradigms, robust problem solving, and disciplined debugging.',
    skills: [
      'Java',
      'Object-Oriented Programming (OOP)',
      'Data Structures',
      'Algorithms',
      'Problem Solving',
      'Debugging Techniques',
      'Software Fundamentals',
    ],
  },
  {
    stageNumber: 2,
    id: 'database-engineering',
    title: 'Database Engineering',
    subtitle: 'Relational modeling, schema design, and query optimization',
    status: 'current',
    description: 'Mastering relational database design, data integrity, transactional safety, and query design.',
    skills: [
      'SQL',
      'MySQL',
      'Relational Database Design',
      'Relationships & Constraints',
      'Joins & Subqueries',
      'Normalization (1NF-3NF)',
      'Transactions & Indexing',
    ],
  },
  {
    stageNumber: 3,
    id: 'modern-web-development',
    title: 'Modern Web Development',
    subtitle: 'Accessible, responsive, and type-safe client applications',
    status: 'current',
    description: 'Refining frontend engineering to deliver fast, accessible, and structured user experiences.',
    skills: [
      'HTML5 & Modern CSS',
      'Responsive Layout Design',
      'JavaScript (ESNext)',
      'TypeScript',
      'React Architecture',
      'State Management',
      'API Integration',
    ],
  },
  {
    stageNumber: 4,
    id: 'backend-engineering',
    title: 'Backend Engineering',
    subtitle: 'Scalable server architecture, APIs, and business logic (Path Open)',
    status: 'future',
    description: 'Designing robust backend services. The specific backend stack direction is intentionally open between two strong paths, to be finalized after solidifying programming and database foundations.',
    skills: [
      'RESTful API Design',
      'Server-Side Architecture',
      'Authentication & Authorization',
      'Database Connectivity',
      'Error Handling & Logging',
    ],
    decisionNote: 'Direction intentionally undecided: Option A (Java + Spring Boot) vs. Option B (TypeScript + Node.js). Final choice will follow foundational database and OOP mastery.',
  },
  {
    stageNumber: 5,
    id: 'mobile-app-development',
    title: 'Mobile Application Development',
    subtitle: 'Native Android architecture, local storage, and offline-first reliability',
    status: 'current',
    description: 'Expanding on native Android expertise to architect production-grade, offline-first mobile applications.',
    skills: [
      'Kotlin Mastery',
      'Native Android Architecture',
      'Android Jetpack & Components',
      'Room & SQLite Persistence',
      'Offline-First Data Sync',
      'REST API Integration',
    ],
  },
  {
    stageNumber: 6,
    id: 'ai-integrated-software',
    title: 'AI-Integrated Software',
    subtitle: 'Connecting intelligent capabilities with practical software products',
    status: 'future',
    description: 'Integrating machine intelligence securely via backend endpoints to solve genuine user problems.',
    skills: [
      'AI API Integration',
      'Chat & Conversational UI',
      'Context & Memory Management',
      'Streaming Response Handling',
      'Secure Backend Proxying',
      'Retrieval-Augmented Generation (RAG)',
      'Intelligent Product Features',
    ],
  },
  {
    stageNumber: 7,
    id: 'full-stack-software-engineering',
    title: 'Full-Stack Software Engineering',
    subtitle: 'End-to-end product delivery across web, mobile, and backend systems',
    status: 'future',
    description: 'Unifying client applications, mobile apps, shared backend APIs, relational databases, AI services, and automated testing into complete, dependable digital products.',
    skills: [
      'End-to-End System Architecture',
      'Web & Mobile Client Integration',
      'Shared Backend Services',
      'Relational Database Modeling',
      'Authentication & Business Logic',
      'Testing & Deployment Hygiene',
    ],
  },
];
