import {useState, useMemo, useEffect, useRef} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {
  Github,
  ExternalLink,
  Code2,
  ArrowUpRight,
  X,
  Layers,
  Smartphone,
  Globe,
  LayoutGrid,
  Star,
  CheckCircle2,
  Wrench,
  Compass,
  Cpu,
  AlertCircle
} from 'lucide-react';
import {projects} from '../../data/projects';
import {Project} from '../../types';
import {useLanguage} from '../../context/LanguageContext';
import {cn} from '../../lib/utils';

type FilterCategory = 'all' | 'mobile' | 'web' | 'automation' | 'ai';

interface FilterOption {
  key: FilterCategory;
  labelKey: 'all' | 'mobile' | 'web' | 'automation' | 'ai';
  icon: typeof LayoutGrid;
  accent: string;
}

const FILTER_OPTIONS: FilterOption[] = [
  {key: 'all', labelKey: 'all', icon: LayoutGrid, accent: 'group-hover:text-indigo-500'},
  {key: 'mobile', labelKey: 'mobile', icon: Smartphone, accent: 'group-hover:text-emerald-500'},
  {key: 'web', labelKey: 'web', icon: Globe, accent: 'group-hover:text-sky-500'},
  {key: 'automation', labelKey: 'automation', icon: Wrench, accent: 'group-hover:text-amber-500'},
  {key: 'ai', labelKey: 'ai', icon: Cpu, accent: 'group-hover:text-purple-500'},
];

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  onOpenProjectDetails?: (projectId: string) => void;
}

// Compact, Refined Developer Project Card for Grid
function ProjectCard({project, onSelect, onOpenProjectDetails}: ProjectCardProps) {
  const {t, language, isRtl} = useLanguage();
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({x: 0, y: 0});
  const [isHovered, setIsHovered] = useState(false);

  const isDedicated = project.hasDedicatedPage || project.id === 'zwak-weather' || project.id === 'hidayat-lar';

  const title =
    (language !== 'en' && project.translations?.[language as 'ps' | 'fa']?.title) || project.title;
  const category =
    (language !== 'en' && project.translations?.[language as 'ps' | 'fa']?.category) || project.category;
  const shortDescription =
    (language !== 'en' && project.translations?.[language as 'ps' | 'fa']?.shortDescription) || project.shortDescription;
  const featureHighlights =
    (language !== 'en' && project.translations?.[language as 'ps' | 'fa']?.featureHighlights) || project.featureHighlights;

  const isCompleted = project.status === 'Completed';

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleCardClick = () => {
    if (isDedicated && onOpenProjectDetails) {
      onOpenProjectDetails(project.id);
    } else {
      onSelect(project);
    }
  };

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{opacity: 0, y: 14}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: false, amount: 0.15}}
      exit={{opacity: 0, scale: 0.98}}
      transition={{duration: 0.35, ease: [0.16, 1, 0.3, 1]}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col h-full cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="card-soft-underglow" />

      <div className="relative z-10 bg-white dark:bg-[#0c121e]/95 rounded-2xl overflow-hidden border border-slate-200/90 dark:border-white/[0.08] group-hover:border-indigo-500/50 shadow-[0_2px_12px_rgba(15,23,42,0.04)] group-hover:shadow-[0_12px_32px_rgba(15,23,42,0.08)] dark:group-hover:shadow-[0_12px_32px_rgba(0,0,0,0.5)] group-hover:-translate-y-1 transition-all duration-300 flex flex-col h-full backdrop-blur-sm">
        {/* Subtle Cursor Spotlight */}
        <div
          className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300 rounded-2xl overflow-hidden"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.12), transparent 70%)`,
          }}
          aria-hidden="true"
        />

        {/* Visual Media Container - Consistent 16:9 ratio */}
        <div className="relative aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-slate-800 z-10">
          {project.image ? (
            <img
              src={project.image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-slate-800/10 to-sky-600/10 flex flex-col items-center justify-center p-6 group-hover:scale-105 transition-transform duration-500">
              <Code2 size={30} className="text-indigo-600/40 dark:text-indigo-400/40 mb-1" />
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                {category}
              </span>
            </div>
          )}

          {/* Ambient Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Platform & Status Badges */}
          <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between gap-1.5 pointer-events-none">
            <div className="flex items-center gap-1.5">
              {project.platformBadge && (
                <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-900/85 text-white backdrop-blur-md border border-white/10 shadow-2xs">
                  {project.platformBadge}
                </span>
              )}
            </div>

            <span
              className={cn(
                'px-2 py-0.5 rounded-full text-[10px] font-semibold backdrop-blur-md border shadow-2xs flex items-center gap-1.5',
                isCompleted
                  ? 'bg-emerald-500/90 text-white border-emerald-400/30'
                  : 'bg-amber-500/90 text-white border-amber-400/30'
              )}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              {isCompleted ? t.projects.statusCompleted : t.projects.statusInProgress}
            </span>
          </div>

          {/* Quick Action Button on Hover */}
          <div className="absolute bottom-3 right-3 z-30 flex gap-1.5 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelect(project);
              }}
              className="p-1.5 bg-indigo-600 text-white backdrop-blur-md rounded-lg hover:bg-indigo-500 transition-colors shadow-xs cursor-pointer"
              aria-label="Open case study modal"
            >
              <ExternalLink size={13} />
            </button>
          </div>
        </div>

        {/* Card Content & Metadata */}
        <div className="p-5 flex flex-col flex-grow relative z-30 text-left rtl:text-right">
          {/* Metadata Line */}
          <div className="flex items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2 font-medium">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide text-[11px] uppercase">
                {category}
              </span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span className="text-[11px] font-medium">{project.year}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-base font-bold font-outfit tracking-tight text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1">
            {title}
          </h3>

          {/* Short Description */}
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-[13px] leading-relaxed mb-3 flex-grow line-clamp-2">
            {shortDescription}
          </p>

          {/* 3-4 Important Feature Highlights */}
          {featureHighlights && featureHighlights.length > 0 && (
            <div className="mb-3.5 space-y-1.5 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800/60">
              {featureHighlights.slice(0, 4).map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-700 dark:text-slate-300 font-medium">
                  <CheckCircle2 size={12} className="text-indigo-500 shrink-0" />
                  <span className="line-clamp-1">{highlight}</span>
                </div>
              ))}
            </div>
          )}

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 mb-4" dir="ltr">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[10px] sm:text-[11px] font-medium text-slate-700 dark:text-slate-300 bg-slate-100/90 dark:bg-slate-800/80 px-2 py-0.5 rounded-md border border-slate-200/70 dark:border-slate-700/70"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-[10px] text-slate-400 font-medium py-0.5">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Card Footer */}
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 mt-auto">
            {isDedicated ? (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  if (onOpenProjectDetails) {
                    onOpenProjectDetails(project.id);
                  }
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors shadow-xs hover:shadow-indigo-500/20 active:scale-[0.98] cursor-pointer"
              >
                <span>
                  {language === 'ps'
                    ? 'د پروژې بشپړ جزییات وګورئ'
                    : language === 'fa'
                    ? 'مشاهده جزئیات پروژه'
                    : 'View Project Details'}
                </span>
                <ArrowUpRight
                  size={14}
                  className={cn(
                    'transition-transform',
                    isRtl ? 'rotate-[-90deg]' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                  )}
                />
              </button>
            ) : (
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 group-hover:gap-2 transition-all">
                  <span>{t.projects.viewCaseStudy}</span>
                  <ArrowUpRight
                    size={14}
                    className={cn(
                      'transition-transform',
                      isRtl ? 'rotate-[-90deg]' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                    )}
                  />
                </span>

                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-[11px] text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center gap-1 font-medium"
                  >
                    <Github size={12} />
                    <span>{t.projects.sourceCode}</span>
                  </a>
                ) : (
                  <span className="text-[10px] font-medium text-slate-400 dark:text-slate-500">
                    {isCompleted ? t.projects.statusCompleted : t.projects.statusInProgress}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

interface ProjectsProps {
  onOpenProjectDetails?: (projectId: string) => void;
}

export function Projects({onOpenProjectDetails}: ProjectsProps = {}) {
  const {t, language, isRtl} = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [modalTab, setModalTab] = useState<'overview' | 'architecture' | 'behind'>('overview');

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scroll when modal open
  useEffect(() => {
    if (activeModalProject) {
      document.body.style.overflow = 'hidden';
      setModalTab('overview');
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeModalProject]);

  const isProjectInFilter = (project: Project, filter: FilterCategory): boolean => {
    if (filter === 'all') return true;
    if (project.filterCategories && project.filterCategories.length > 0) {
      if (filter === 'ai') return project.filterCategories.includes('AI');
      if (filter === 'web') return project.filterCategories.includes('Web');
      if (filter === 'automation') return project.filterCategories.includes('Automation');
      if (filter === 'mobile') return project.filterCategories.includes('Mobile');
    }
    return true;
  };

  const categoryCounts = useMemo(() => {
    return {
      all: projects.length,
      mobile: projects.filter((p) => isProjectInFilter(p, 'mobile')).length,
      web: projects.filter((p) => isProjectInFilter(p, 'web')).length,
      automation: projects.filter((p) => isProjectInFilter(p, 'automation')).length,
      ai: projects.filter((p) => isProjectInFilter(p, 'ai')).length,
    };
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => isProjectInFilter(p, selectedCategory));
  }, [selectedCategory]);

  // Featured flagship project (Hidayat Lar - هدایت لار)
  const featuredProject = useMemo(() => {
    return projects.find((p) => p.id === 'hidayat-lar' || p.id === 'lemunz-azkar') || projects[0];
  }, []);

  const showFeaturedSpotlight = selectedCategory === 'all' || isProjectInFilter(featuredProject, selectedCategory);
  const remainingProjects = useMemo(() => {
    if (showFeaturedSpotlight) {
      return filteredProjects.filter((p) => p.id !== featuredProject.id);
    }
    return filteredProjects;
  }, [filteredProjects, showFeaturedSpotlight, featuredProject]);

  // Localized featured project fields
  const featuredTitle =
    (language !== 'en' && featuredProject.translations?.[language as 'ps' | 'fa']?.title) || featuredProject.title;
  const featuredCategory =
    (language !== 'en' && featuredProject.translations?.[language as 'ps' | 'fa']?.category) || featuredProject.category;
  const featuredDesc =
    (language !== 'en' && featuredProject.translations?.[language as 'ps' | 'fa']?.shortDescription) ||
    featuredProject.shortDescription;
  const featuredFeatures =
    (language !== 'en' && featuredProject.translations?.[language as 'ps' | 'fa']?.features) ||
    featuredProject.features;
  const featuredVision =
    (language !== 'en' && featuredProject.translations?.[language as 'ps' | 'fa']?.productVision) ||
    featuredProject.productVision;

  // Modal localized project details
  const modalTitle = activeModalProject
    ? (language !== 'en' && activeModalProject.translations?.[language as 'ps' | 'fa']?.title) ||
      activeModalProject.title
    : '';

  const modalCategory = activeModalProject
    ? (language !== 'en' && activeModalProject.translations?.[language as 'ps' | 'fa']?.category) ||
      activeModalProject.category
    : '';

  const modalFullDescription = activeModalProject
    ? (language !== 'en' &&
        activeModalProject.translations?.[language as 'ps' | 'fa']?.fullDescription) ||
      activeModalProject.fullDescription
    : '';

  const modalVision = activeModalProject
    ? (language !== 'en' && activeModalProject.translations?.[language as 'ps' | 'fa']?.productVision) ||
      activeModalProject.productVision
    : '';

  const modalPlanning = activeModalProject
    ? (language !== 'en' && activeModalProject.translations?.[language as 'ps' | 'fa']?.designAndPlanning) ||
      activeModalProject.designAndPlanning
    : '';

  const modalArchitecture = activeModalProject
    ? (language !== 'en' && activeModalProject.translations?.[language as 'ps' | 'fa']?.architecture) ||
      activeModalProject.architecture
    : '';

  const modalContribution = activeModalProject
    ? (language !== 'en' && activeModalProject.translations?.[language as 'ps' | 'fa']?.developerContribution) ||
      activeModalProject.developerContribution
    : '';

  const modalFeatures = activeModalProject
    ? (language !== 'en' && activeModalProject.translations?.[language as 'ps' | 'fa']?.features) ||
      activeModalProject.features
    : [];

  const modalChallenges = activeModalProject
    ? (language !== 'en' && activeModalProject.translations?.[language as 'ps' | 'fa']?.challengesAndSolutions) ||
      activeModalProject.challengesAndSolutions || []
    : [];

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-[#07090e] relative overflow-hidden transition-colors duration-300"
    >
      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 -left-20 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-indigo-500/10 via-sky-500/8 to-transparent dark:from-indigo-600/10 dark:via-sky-600/8 dark:to-transparent blur-[85px]" />
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-gradient-to-tl from-emerald-500/10 via-indigo-500/8 to-transparent dark:from-emerald-600/10 dark:via-indigo-600/8 dark:to-transparent blur-[85px]" />
        <div className="absolute inset-0 bg-tech-grid-light dark:bg-tech-grid-dark opacity-15" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{opacity: 0, y: 14}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: false, amount: 0.2}}
          transition={{duration: 0.45, ease: [0.16, 1, 0.3, 1]}}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4 sm:gap-6"
        >
          <div>
            <span className="inline-flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-xs mb-2 font-outfit">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
              {t.projects.tag}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-outfit tracking-tight text-slate-900 dark:text-white leading-tight">
              {t.projects.headline}
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 max-w-md text-xs sm:text-sm leading-relaxed">
            {t.projects.subtitle}
          </p>
        </motion.div>

        {/* Category Filter Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-10">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 p-1.5 bg-white/90 dark:bg-slate-900/90 rounded-2xl max-w-full overflow-x-auto border border-slate-200/90 dark:border-slate-800 shadow-xs backdrop-blur-md">
            {FILTER_OPTIONS.map((option) => {
              const Icon = option.icon;
              const isActive = selectedCategory === option.key;
              const count = categoryCounts[option.key];
              const label = t.projects.filters[option.labelKey] || option.key;

              return (
                <button
                  key={option.key}
                  onClick={() => setSelectedCategory(option.key)}
                  className={cn(
                    'relative flex items-center gap-2 px-3.5 sm:px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer group',
                    isActive
                      ? 'text-indigo-600 dark:text-white font-bold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100/70 dark:hover:bg-slate-800/70'
                  )}
                  aria-pressed={isActive}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 bg-slate-100 dark:bg-slate-800 rounded-xl border border-indigo-500/30 dark:border-indigo-500/40 -z-10 shadow-2xs"
                      transition={{type: 'spring', stiffness: 500, damping: 35}}
                    />
                  )}
                  <Icon
                    size={14}
                    className={cn(
                      'transition-transform duration-200 group-hover:scale-110',
                      isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400 dark:text-slate-500',
                      option.accent
                    )}
                  />
                  <span>{label}</span>
                  <span
                    className={cn(
                      'text-[10px] font-bold px-1.5 py-0.5 rounded-full transition-colors',
                      isActive
                        ? 'bg-indigo-600/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-300 font-bold'
                        : 'bg-slate-200/70 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {selectedCategory !== 'all' && (
            <div className="flex items-center gap-2 self-start sm:self-auto text-xs text-slate-500 dark:text-slate-400 font-medium">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200/70 dark:border-indigo-800/70 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                <span>
                  {t.projects.filters[selectedCategory]}:{' '}
                  <strong className="font-bold">{filteredProjects.length}</strong>
                </span>
              </span>
              <button
                onClick={() => setSelectedCategory('all')}
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer px-2.5 py-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
              >
                <X size={13} />
                <span>{t.projects.resetFilter}</span>
              </button>
            </div>
          )}
        </div>

        {/* 1. PROMINENT FEATURED PROJECT PRESENTATION */}
        {showFeaturedSpotlight && (
          <motion.div
            initial={{opacity: 0, y: 16}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.15}}
            transition={{duration: 0.45, ease: [0.16, 1, 0.3, 1]}}
            className="mb-10 sm:mb-12 group relative"
          >
            <div className="card-soft-underglow" />

            <div className="relative z-10 rounded-3xl bg-white/95 dark:bg-slate-900/95 border border-slate-200/90 dark:border-slate-800 overflow-hidden shadow-sm group-hover:border-indigo-500/50 group-hover:shadow-2xl group-hover:shadow-indigo-500/10 transition-all duration-300 backdrop-blur-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                {/* Large Preview Media */}
                <div
                  onClick={() => {
                    const isFeaturedDedicated =
                      featuredProject.hasDedicatedPage ||
                      featuredProject.id === 'zwak-weather' ||
                      featuredProject.id === 'hidayat-lar';
                    if (isFeaturedDedicated && onOpenProjectDetails) {
                      onOpenProjectDetails(featuredProject.id);
                    } else {
                      setActiveModalProject(featuredProject);
                    }
                  }}
                  className="lg:col-span-7 relative min-h-[260px] sm:min-h-[340px] lg:min-h-[380px] flex items-center justify-center p-3 sm:p-5 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/40 overflow-hidden cursor-pointer group/media"
                  title="View Dedicated Project Details"
                >
                  {featuredProject.image ? (
                    <>
                      {/* Ambient background blur */}
                      <img
                        src={featuredProject.image}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-30 dark:opacity-40 scale-110 pointer-events-none"
                      />

                      {/* Crisp, uncropped full poster */}
                      <img
                        src={featuredProject.image}
                        alt={featuredTitle}
                        className="relative z-10 w-full h-auto max-h-[360px] sm:max-h-[420px] object-contain rounded-2xl shadow-xl transition-transform duration-500 group-hover/media:scale-[1.01]"
                        loading="eager"
                        referrerPolicy="no-referrer"
                      />
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-slate-900/60 to-emerald-900/30 flex items-center justify-center p-8">
                      <Smartphone size={56} className="text-indigo-400/40" />
                    </div>
                  )}

                  {/* Gradient Overlay on mobile */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:hidden" />

                  {/* Flagship Badges */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-600 text-white shadow-md shadow-indigo-600/30">
                      <Star size={12} className="fill-white" />
                      <span>Featured Project</span>
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-900/85 text-white backdrop-blur-md border border-white/15">
                      {featuredProject.platformBadge || 'Native Android'}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 z-20">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/90 text-white backdrop-blur-md border border-emerald-400/30 shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      <span>{t.projects.statusCompleted}</span>
                    </span>
                  </div>
                </div>

                {/* Project Details & Actual Tech Stack */}
                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between text-left rtl:text-right">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2 font-medium">
                      <span className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase text-xs">
                        {featuredCategory}
                      </span>
                      <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                      <span className="text-xs font-medium">{featuredProject.year}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold font-outfit text-slate-900 dark:text-white mb-3 tracking-tight">
                      {featuredTitle}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                      {featuredDesc}
                    </p>

                    {/* Product Vision Highlight */}
                    {featuredVision && (
                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-800 mb-4 text-xs text-slate-700 dark:text-slate-300">
                        <strong className="text-indigo-600 dark:text-indigo-400 font-outfit block mb-0.5">
                          {t.projects.productVisionTitle}:
                        </strong>
                        <span className="text-[12px] leading-relaxed">{featuredVision}</span>
                      </div>
                    )}

                    {/* Actual Technology Stack */}
                    <div className="mb-6" dir="ltr">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 font-outfit mb-2 text-left rtl:text-right">
                        {t.projects.techStackTitle}:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {featuredProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-medium text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-200/80 dark:border-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions: View Case Study, GitHub link */}
                  <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                    <button
                      onClick={() => {
                        const isFeaturedDedicated =
                          featuredProject.hasDedicatedPage ||
                          featuredProject.id === 'zwak-weather' ||
                          featuredProject.id === 'hidayat-lar';
                        if (isFeaturedDedicated && onOpenProjectDetails) {
                          onOpenProjectDetails(featuredProject.id);
                        } else {
                          setActiveModalProject(featuredProject);
                        }
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl transition-all shadow-md shadow-indigo-600/20 active:scale-[0.98] cursor-pointer"
                    >
                      <span>{t.projects.viewCaseStudy}</span>
                      <ArrowUpRight size={14} className={isRtl ? 'rotate-[-90deg]' : ''} />
                    </button>

                    <div className="flex items-center gap-3">
                      {featuredProject.github && (
                        <a
                          href={featuredProject.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        >
                          <Github size={14} />
                          <span>{t.projects.sourceCode}</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* 2. REMAINING PROJECTS GRID */}
        {remainingProjects.length > 0 ? (
          <div>
            {showFeaturedSpotlight && (
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-outfit">
                  Additional Verified Projects & Prototypes ({remainingProjects.length})
                </h3>
              </div>
            )}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              <AnimatePresence mode="popLayout">
                {remainingProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onSelect={(proj) => setActiveModalProject(proj)}
                    onOpenProjectDetails={onOpenProjectDetails}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        ) : !showFeaturedSpotlight ? (
          <div className="p-12 text-center rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 max-w-md mx-auto">
            <Layers className="mx-auto text-slate-400 mb-3" size={32} />
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
              {t.projects.noProjectsMatch}
            </h3>
            <button
              onClick={() => setSelectedCategory('all')}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-500 transition-colors shadow-xs cursor-pointer"
            >
              {t.projects.resetFilter}
            </button>
          </div>
        ) : null}
      </div>

      {/* Structured "Behind the Build" Case Study Modal Dialog */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              onClick={() => setActiveModalProject(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Dialog Content */}
            <motion.div
              initial={{opacity: 0, scale: 0.95, y: 15}}
              animate={{opacity: 1, scale: 1, y: 0}}
              exit={{opacity: 0, scale: 0.95, y: 15}}
              transition={{duration: 0.3, ease: [0.16, 1, 0.3, 1]}}
              className="relative w-full max-w-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl z-10 overflow-hidden my-6 max-h-[92vh] flex flex-col text-left rtl:text-right"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-slate-200/80 dark:border-slate-800 flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-indigo-600 dark:text-indigo-400 mb-1.5 font-medium">
                    <span>{modalCategory}</span>
                    <span>·</span>
                    <span>{activeModalProject.year}</span>
                    <span>·</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                      {activeModalProject.status === 'Completed'
                        ? t.projects.statusCompleted
                        : t.projects.statusInProgress}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-outfit text-slate-900 dark:text-white">
                    {modalTitle}
                  </h3>
                </div>

                <button
                  onClick={() => setActiveModalProject(null)}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Navigation Tabs (Overview, Architecture, Behind the Build) */}
              <div className="px-6 pt-3 pb-2 border-b border-slate-200/70 dark:border-slate-800/70 flex items-center gap-2 bg-slate-50/50 dark:bg-slate-900/50 overflow-x-auto">
                <button
                  onClick={() => setModalTab('overview')}
                  className={cn(
                    'px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap',
                    modalTab === 'overview'
                      ? 'bg-indigo-600 text-white shadow-2xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  )}
                >
                  1. Overview & Vision
                </button>
                <button
                  onClick={() => setModalTab('architecture')}
                  className={cn(
                    'px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap',
                    modalTab === 'architecture'
                      ? 'bg-indigo-600 text-white shadow-2xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  )}
                >
                  2. Architecture & Design
                </button>
                <button
                  onClick={() => setModalTab('behind')}
                  className={cn(
                    'px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap',
                    modalTab === 'behind'
                      ? 'bg-indigo-600 text-white shadow-2xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  )}
                >
                  3. Behind the Build (Contribution)
                </button>
              </div>

              {/* Modal Body with 3 Tab Views */}
              <div className="p-6 overflow-y-auto space-y-6">
                {activeModalProject.image && modalTab === 'overview' && (
                  <div className="rounded-2xl overflow-hidden aspect-[16/9] max-h-[240px] bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-800">
                    <img
                      src={activeModalProject.image}
                      alt={modalTitle}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Tab 1: Overview & Vision */}
                {modalTab === 'overview' && (
                  <div className="space-y-5">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2 font-outfit">
                        Project Overview
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {modalFullDescription}
                      </p>
                    </div>

                    {modalVision && (
                      <div className="p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200/70 dark:border-indigo-900/50">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300 mb-1.5 font-outfit">
                          {t.projects.productVisionTitle}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                          {modalVision}
                        </p>
                      </div>
                    )}

                    {modalFeatures && modalFeatures.length > 0 && (
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2.5 font-outfit">
                          {t.projects.keyFeaturesTitle}
                        </h4>
                        <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                          {modalFeatures.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* Tab 2: Architecture & Planning */}
                {modalTab === 'architecture' && (
                  <div className="space-y-5">
                    {modalPlanning && (
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2 font-outfit">
                          {t.projects.designPlanningTitle}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {modalPlanning}
                        </p>
                      </div>
                    )}

                    {modalArchitecture && (
                      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-800">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-1.5 font-outfit">
                          {t.projects.architectureTitle}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {modalArchitecture}
                        </p>
                      </div>
                    )}

                    <div dir="ltr">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2 font-outfit text-left rtl:text-right">
                        {t.projects.techStackTitle}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {activeModalProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-medium text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 3: Behind the Build (Contribution & Challenges) */}
                {modalTab === 'behind' && (
                  <div className="space-y-5">
                    {modalContribution && (
                      <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/70 dark:border-emerald-900/50">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 mb-1.5 font-outfit">
                          {t.projects.developerContributionTitle}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                          {modalContribution}
                        </p>
                      </div>
                    )}

                    {modalChallenges && modalChallenges.length > 0 && (
                      <div className="space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white font-outfit">
                          {t.projects.challengesSolutionsTitle}
                        </h4>
                        {modalChallenges.map((item, idx) => (
                          <div
                            key={idx}
                            className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-800 space-y-1.5 text-xs"
                          >
                            <div className="flex items-start gap-2 text-amber-700 dark:text-amber-400 font-semibold">
                              <AlertCircle size={14} className="shrink-0 mt-0.5" />
                              <span>{item.challenge}</span>
                            </div>
                            <div className="flex items-start gap-2 text-slate-600 dark:text-slate-300 pl-5 rtl:pl-0 rtl:pr-5">
                              <CheckCircle2 size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                              <span>{item.solution}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-6 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-3 bg-slate-50/50 dark:bg-slate-900/50">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  {t.projects.closeCaseStudy}
                </button>

                <div className="flex items-center gap-2">
                  {activeModalProject.github && (
                    <a
                      href={activeModalProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-xl hover:bg-slate-800 transition-colors"
                    >
                      <Github size={13} />
                      <span>{t.projects.viewRepo}</span>
                    </a>
                  )}
                  {activeModalProject.liveDemo && (
                    <a
                      href={activeModalProject.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 text-white text-xs font-semibold rounded-xl hover:bg-indigo-500 transition-colors shadow-xs"
                    >
                      <ExternalLink size={13} />
                      <span>{t.projects.liveDemo}</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
