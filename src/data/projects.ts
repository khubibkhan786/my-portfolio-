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
    ]
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
    ]
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
    ]
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
    ]
  }
];
