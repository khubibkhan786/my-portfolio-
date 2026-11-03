import {SkillGroup, SkillStatus} from '../types';

export const skillGroups: SkillGroup[] = [
  {
    category: 'Android Development',
    description: 'Native mobile engineering focused on clean architecture and offline reliability.',
    items: [
      {
        name: 'Kotlin',
        status: 'Applied in Projects',
        projectAssociation: 'لمونځ او اذکار (Android App)',
        notes: 'Primary language for modern native Android development'
      },
      {
        name: 'Java',
        status: 'Practical Experience',
        projectAssociation: 'Academic Coursework & Android',
        notes: 'Object-oriented programming and Android core fundamentals'
      },
      {
        name: 'Android SDK',
        status: 'Applied in Projects',
        projectAssociation: 'لمونځ او اذکار',
        notes: 'Activities, services, notifications, and material UI'
      },
      {
        name: 'Room Database & SQLite',
        status: 'Applied in Projects',
        projectAssociation: 'لمونځ او اذکار',
        notes: 'Local persistent storage and offline-first caching'
      }
    ]
  },
  {
    category: 'Web Development',
    description: 'Modern, responsive client interfaces with structured component architecture.',
    items: [
      {
        name: 'React',
        status: 'Applied in Projects',
        projectAssociation: 'Student Academic Portal & UI',
        notes: 'Functional components, hooks, and declarative state flows'
      },
      {
        name: 'TypeScript',
        status: 'Applied in Projects',
        projectAssociation: 'Student Academic Portal',
        notes: 'Type-safe interfaces and robust frontend codebases'
      },
      {
        name: 'JavaScript (ES6+)',
        status: 'Applied in Projects',
        projectAssociation: 'د هوا حالاتو (Weather App)',
        notes: 'Asynchronous fetch, DOM event processing, and scripting'
      },
      {
        name: 'Tailwind CSS',
        status: 'Practical Experience',
        projectAssociation: 'Responsive Portfolios & Dashboards',
        notes: 'Utility-first clean layout design and responsive media queries'
      },
      {
        name: 'HTML5 & CSS3',
        status: 'Applied in Projects',
        projectAssociation: 'All Web Projects',
        notes: 'Semantic accessibility, responsive grids, and clean layout'
      }
    ]
  },
  {
    category: 'Databases',
    description: 'Relational data modeling, query optimization, and local data persistence.',
    items: [
      {
        name: 'SQL',
        status: 'Active Coursework',
        projectAssociation: 'Paktia University Coursework',
        notes: 'Relational query design, indexing, joins, and schemas'
      },
      {
        name: 'MySQL',
        status: 'Active Coursework',
        projectAssociation: 'Information Systems Lab',
        notes: 'Server database schemas and relational table design'
      },
      {
        name: 'SQLite',
        status: 'Applied in Projects',
        projectAssociation: 'لمونځ او اذکار & Data Utilities',
        notes: 'Lightweight client-side relational storage without server overhead'
      }
    ]
  },
  {
    category: 'Development Tools',
    description: 'Essential daily engineering environments, version control, and build tooling.',
    items: [
      {
        name: 'Git & GitHub',
        status: 'Applied in Projects',
        projectAssociation: 'Portfolio & Project Repositories',
        notes: 'Branching, commit history, and remote collaboration'
      },
      {
        name: 'Android Studio',
        status: 'Practical Experience',
        projectAssociation: 'Native App Profiling & Builds',
        notes: 'Emulator debugging, Gradle configuration, and APK assembly'
      },
      {
        name: 'VS Code',
        status: 'Practical Experience',
        projectAssociation: 'Daily Coding Environment',
        notes: 'Workspace customization, extensions, and fast editing'
      },
      {
        name: 'Node.js & npm',
        status: 'Practical Experience',
        projectAssociation: 'Tooling & Automation Scripts',
        notes: 'CLI automation, package execution, and frontend pipelines'
      }
    ]
  },
  {
    category: 'Automation & Scripting',
    description: 'Practical automation and AI-assisted workflows for academic efficiency.',
    items: [
      {
        name: 'Workflow Automation',
        status: 'Applied in Projects',
        projectAssociation: 'Workflow Automation Toolkit',
        notes: 'Batch file processing and structured study card generation'
      },
      {
        name: 'AI-assisted Development',
        status: 'Practical Experience',
        projectAssociation: 'Daily Workflow Acceleration',
        notes: 'Prompt engineering and rapid architecture exploration'
      },
      {
        name: 'RESTful API Integration',
        status: 'Applied in Projects',
        projectAssociation: 'Weather App & AI Prototypes',
        notes: 'Consuming HTTP endpoints and parsing JSON responses'
      }
    ]
  }
];

export interface SkillRoadmapTier {
  id: 'foundations' | 'developing' | 'learning';
  title: string;
  badge: string;
  description: string;
  skills: string[];
}

export const skillRoadmapTiers: SkillRoadmapTier[] = [
  {
    id: 'foundations',
    title: 'Established Foundations',
    badge: 'Core',
    description: 'Technologies thoroughly practiced through academic coursework and hands-on projects.',
    skills: [
      'Kotlin & Java',
      'SQL & SQLite',
      'HTML5 / CSS3',
      'Git & GitHub',
      'Android SDK & Studio'
    ]
  },
  {
    id: 'developing',
    title: 'Actively Developing',
    badge: 'In Progress',
    description: 'Skills actively being applied and strengthened across current personal and web projects.',
    skills: [
      'JavaScript (ES6+)',
      'TypeScript',
      'React',
      'Tailwind CSS',
      'Room Persistence',
      'REST APIs'
    ]
  },
  {
    id: 'learning',
    title: 'Targeted Roadmap',
    badge: 'Next',
    description: 'Upcoming academic semester targets and planned software engineering competencies.',
    skills: [
      'Backend REST APIs',
      'Advanced Kotlin Coroutines',
      'Full-Stack Architecture',
      'Automated Software Testing',
      'Database Query Optimization'
    ]
  }
];
