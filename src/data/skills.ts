import {SkillGroup} from '../types';

export const skillGroups: SkillGroup[] = [
  {
    category: 'Programming',
    items: [
      {name: 'Java', evidence: 'Core language in لمونځ او اذکار'},
      {name: 'Kotlin', evidence: 'Native Android application development'},
      {name: 'JavaScript', evidence: 'Weather App & utility scripting'},
      {name: 'TypeScript', evidence: 'Student Academic Portal & UI'}
    ]
  },
  {
    category: 'Web Development',
    items: [
      {name: 'HTML5', evidence: 'Semantic document structure'},
      {name: 'CSS3', evidence: 'Modern responsive styling'},
      {name: 'React', evidence: 'Component architecture & state flows'},
      {name: 'Tailwind CSS', evidence: 'Utility-first clean layout design'},
      {name: 'Responsive UI', evidence: 'Mobile-first design discipline'}
    ]
  },
  {
    category: 'Databases',
    items: [
      {name: 'SQL', evidence: 'Relational data query design'},
      {name: 'MySQL', evidence: 'Academic coursework schemas'},
      {name: 'SQLite / Room', evidence: 'Offline-first Android persistence'}
    ]
  },
  {
    category: 'Tools & Workflow',
    items: [
      {name: 'Git & GitHub', evidence: 'Version control & repositories'},
      {name: 'VS Code', evidence: 'Daily development environment'},
      {name: 'Android Studio', evidence: 'Native SDK build & profiling'},
      {name: 'Node.js', evidence: 'CLI scripting & build pipelines'}
    ]
  },
  {
    category: 'AI & Automation',
    items: [
      {name: 'AI-assisted Development', evidence: 'Prompt engineering & workflow acceleration'},
      {name: 'Workflow Automation', evidence: 'Transcript & flashcard script generation'},
      {name: 'AI API Integration', evidence: 'RESTful AI endpoints in academic prototypes'}
    ]
  }
];

export interface SkillMaturityTier {
  id: 'foundations' | 'developing' | 'learning';
  title: string;
  badge: string;
  description: string;
  skills: string[];
}

export const skillMaturityTiers: SkillMaturityTier[] = [
  {
    id: 'foundations',
    title: 'Current Foundations',
    badge: 'Core',
    description: 'Technologies thoroughly practiced through academic coursework and hands-on projects.',
    skills: [
      'Java',
      'Kotlin',
      'SQL',
      'HTML/CSS',
      'Git/GitHub',
      'Android fundamentals'
    ]
  },
  {
    id: 'developing',
    title: 'Actively Developing',
    badge: 'Growing',
    description: 'Skills actively being applied and strengthened across current personal and web projects.',
    skills: [
      'JavaScript',
      'TypeScript',
      'React',
      'Tailwind CSS',
      'Room Database',
      'APIs'
    ]
  },
  {
    id: 'learning',
    title: 'Learning Next',
    badge: 'Targets',
    description: 'Next semester expansion areas and advanced engineering targets.',
    skills: [
      'Backend REST APIs',
      'Advanced Kotlin Coroutines',
      'Full-Stack Architecture',
      'Software Testing',
      'CI/CD',
      'Database Optimization'
    ]
  }
];

export const learningSkills: string[] = [
  'Backend REST APIs',
  'Advanced Kotlin Coroutines',
  'Full-Stack Architecture',
  'Software Testing & CI/CD',
  'Database Optimization'
];
