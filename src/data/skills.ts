export interface SkillItem {
  name: string;
  description: string;
}

export interface SkillCategoryGroup {
  category: string;
  tagline: string;
  items: SkillItem[];
}

export const verifiedSkillCategories: SkillCategoryGroup[] = [
  {
    category: 'Programming Languages',
    tagline: 'Core languages studied and applied in software projects',
    items: [
      {
        name: 'Kotlin',
        description: 'Modern language for native Android development and clean architecture',
      },
      {
        name: 'Java',
        description: 'Object-oriented programming, academic coursework, and Android core',
      },
      {
        name: 'JavaScript (ES6+)',
        description: 'Asynchronous fetch, DOM logic, and web project scripting',
      },
      {
        name: 'TypeScript',
        description: 'Type-safe interfaces and structured frontend application logic',
      },
    ],
  },
  {
    category: 'Android Development',
    tagline: 'Native mobile engineering with offline reliability',
    items: [
      {
        name: 'Android SDK',
        description: 'Activities, services, notifications, and material UI architecture',
      },
      {
        name: 'Room & SQLite',
        description: 'Local relational persistence and offline-first database caching',
      },
      {
        name: 'XML UI & Layouts',
        description: 'Responsive mobile layouts, custom components, and navigation',
      },
    ],
  },
  {
    category: 'Web Development',
    tagline: 'Modern, responsive client interfaces with declarative state',
    items: [
      {
        name: 'React',
        description: 'Functional components, hooks, and clean declarative state flows',
      },
      {
        name: 'Tailwind CSS',
        description: 'Utility-first responsive layouts and clean design systems',
      },
      {
        name: 'HTML5 & CSS3',
        description: 'Semantic markup, accessible structure, and responsive design',
      },
    ],
  },
  {
    category: 'Databases',
    tagline: 'Relational data modeling, schema design, and local storage',
    items: [
      {
        name: 'SQL',
        description: 'Relational query design, table schemas, indexing, and joins',
      },
      {
        name: 'MySQL',
        description: 'Relational database management and academic lab coursework',
      },
      {
        name: 'SQLite',
        description: 'Serverless, lightweight local storage for offline applications',
      },
    ],
  },
  {
    category: 'Development Tools',
    tagline: 'Daily engineering environments, version control, and build systems',
    items: [
      {
        name: 'Git & GitHub',
        description: 'Version control, branch management, and project repositories',
      },
      {
        name: 'Android Studio',
        description: 'Native Android SDK profiling, Gradle configuration, and emulator debugging',
      },
      {
        name: 'VS Code',
        description: 'Primary coding environment, workspace setup, and extensions',
      },
      {
        name: 'Node.js & npm',
        description: 'Package management, automation scripts, and frontend build tools',
      },
    ],
  },
];

export interface RoadmapGroup {
  id: 'foundations' | 'developing' | 'future';
  title: string;
  badge: string;
  description: string;
  skills: string[];
}

export const learningRoadmapGroups: RoadmapGroup[] = [
  {
    id: 'foundations',
    title: 'Established Foundations',
    badge: 'Core',
    description: 'Technologies thoroughly practiced through academic coursework and hands-on projects.',
    skills: [
      'Kotlin',
      'Java',
      'SQL',
      'SQLite',
      'HTML5 & CSS3',
      'Git & GitHub',
      'Android Studio',
    ],
  },
  {
    id: 'developing',
    title: 'Actively Developing',
    badge: 'In Progress',
    description: 'Skills actively being strengthened across current personal and web projects.',
    skills: [
      'TypeScript',
      'React',
      'Tailwind CSS',
      'Room Persistence',
      'JavaScript (ES6+)',
      'REST APIs',
    ],
  },
  {
    id: 'future',
    title: 'Future Learning Goals',
    badge: 'Planned',
    description: 'Targeted expansion areas for upcoming academic semesters and software engineering growth.',
    skills: [
      'Backend REST APIs',
      'Advanced Kotlin Coroutines',
      'Full-Stack Architecture',
      'Automated Software Testing',
      'Database Optimization',
    ],
  },
];
