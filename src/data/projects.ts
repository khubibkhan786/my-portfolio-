import {Project} from '../types';

export const projects: Project[] = [
  {
    id: 'lemunz-azkar',
    title: 'لمونځ او اذکار',
    shortDescription: 'A comprehensive Android application for prayer times and Islamic supplications.',
    fullDescription: 'A dedicated Android application designed to help users track prayer times, recite daily azkar (supplications), and maintain their spiritual journey with a clean and intuitive interface.',
    category: 'Android Application',
    technologies: ['Java', 'Android SDK', 'SQLite', 'XML'],
    image: '/src/assets/images/project_prayer_app_1790485013658.jpg',
    year: '2025',
    status: 'Completed',
    featured: true,
    features: [
      'Accurate prayer time calculations',
      'Daily azkar collection',
      'Offline access',
      'Customizable notifications'
    ],
    problem: 'Users in areas with intermittent internet connectivity needed a reliable, distraction-free tool for accurate prayer schedules and authentic daily supplications without persistent ad tracking.',
    solution: 'Engineered an offline-first native Android app with local SQLite storage for instant daily azkar lookup, calculated astronomical prayer timetables, and battery-friendly notifications.',
    role: 'Android Developer'
  },
  {
    id: 'weather-app',
    title: 'د هوا حالاتو',
    shortDescription: 'A real-time weather tracking application providing accurate forecasts.',
    fullDescription: 'A modern weather application that provides real-time updates, multi-day forecasts, and detailed atmospheric data for various locations.',
    category: 'Weather Application',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Weather API'],
    image: '/src/assets/images/project_weather_app_1790485024344.jpg',
    year: '2025',
    status: 'Completed',
    featured: true,
    features: [
      'Real-time weather updates',
      '5-day forecast',
      'Location-based tracking',
      'Dynamic weather backgrounds'
    ],
    problem: 'Visualizing regional climate and multi-day forecasts in a clean, high-speed interface with minimal network payload.',
    solution: 'Built an asynchronous frontend parsing meteorological endpoints, rendering condition-adaptive backgrounds, hourly atmospheric conditions, and responsive 5-day trends.',
    role: 'Frontend Developer'
  },
  {
    id: 'student-portal-hub',
    title: 'Student Academic Portal & Schedule Hub',
    shortDescription: 'A responsive digital web dashboard designed to organize course syllabi, assignments, and study materials.',
    fullDescription: 'A lightweight and practical student web application built with modern frontend tools to help university peers organize lecture notes, track semester deadlines, and coordinate course schedules.',
    category: 'Web Application',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Local Storage'],
    year: '2025',
    status: 'Completed',
    featured: false,
    features: [
      'Interactive semester calendar & deadline tracker',
      'Course resource & lecture note repository',
      'Instant search and tag filtering',
      'Local storage persistence with zero backend overhead'
    ],
    problem: 'University students frequently lose track of scattered assignment dates, disparate slide decks, and semester milestones across different chat groups.',
    solution: 'Created a unified client-side dashboard with fast local browser persistence, calendar countdowns, category filters, and zero authentication friction.',
    role: 'Full-Stack Student Builder'
  },
  {
    id: 'workflow-automation-toolkit',
    title: 'AI-Assisted Workflow Automation Toolkit',
    shortDescription: 'Practical automation utility scripts leveraging modern AI tools to streamline repetitive digital tasks.',
    fullDescription: 'A collection of focused JavaScript automation tools and prompt templates designed to parse raw educational transcripts, auto-generate study flashcards, and format data exports efficiently.',
    category: 'Automation & Tools',
    technologies: ['JavaScript', 'Node.js', 'AI API Integration', 'JSON'],
    year: '2026',
    status: 'In Progress',
    featured: false,
    features: [
      'Automated text summaries of lecture transcripts',
      'Batch conversion of structured notes into flashcard format',
      'CLI utilities for fast repetitive file organization',
      'API-driven content synthesis'
    ],
    problem: 'Processing lengthy educational transcripts and converting raw technical notes into structured study summaries was manual and time-consuming.',
    solution: 'Designed scripted CLI pipelines combining Node.js stream parsers with structured AI prompts to batch-convert unformatted notes into clean JSON flashcards.',
    role: 'Automation Developer'
  },
  {
    id: 'islamic-companion',
    title: 'Islamic Companion',
    shortDescription: 'Modern offline-first Android application designed for spiritual mindfulness and daily supplications.',
    fullDescription: 'An offline-first Android application built with Kotlin, focusing on performance, elegant typography, verified supplications, and local device autonomy without tracking.',
    category: 'Android Application',
    technologies: ['Kotlin', 'Android Jetpack', 'Room Database', 'Material 3'],
    year: '2026',
    status: 'In Progress',
    featured: true,
    features: [
      'Offline-first Room database architecture',
      'Clean typography and verified azkar catalog',
      'Low battery consumption background alarms',
      'Material 3 design system'
    ],
    problem: 'Many spiritual apps are encumbered with intrusive advertising, battery-draining telemetry, and broken offline access.',
    solution: 'Developing an intentional, clean Kotlin application powered by local Room persistence and lightweight Material 3 components.',
    role: 'Android Developer'
  }
];
