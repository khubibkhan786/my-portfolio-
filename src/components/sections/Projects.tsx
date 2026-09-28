import {useState, useMemo, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {Github, ExternalLink, Code2, ArrowUpRight, X, CheckCircle2, Layers, Terminal, AlertCircle, Smartphone, Globe, Cpu} from 'lucide-react';
import {projects} from '../../data/projects';
import {Project} from '../../types';
import {useLanguage} from '../../context/LanguageContext';
import {cn} from '../../lib/utils';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

// Compact, Refined RahimDev-Style Developer Project Card
function ProjectCard({project, onSelect}: ProjectCardProps) {
  const {t, language, isRtl} = useLanguage();

  const title =
    (language !== 'en' && project.translations?.[language as 'ps' | 'fa']?.title) || project.title;
  const category =
    (language !== 'en' && project.translations?.[language as 'ps' | 'fa']?.category) || project.category;
  const shortDescription =
    (language !== 'en' && project.translations?.[language as 'ps' | 'fa']?.shortDescription) || project.shortDescription;

  const isCompleted = project.status === 'Completed';

  return (
    <motion.div
      layout
      initial={{opacity: 0, y: 16}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{ once: false, amount: 0.2 }}
      exit={{opacity: 0, scale: 0.98}}
      transition={{duration: 0.35, ease: [0.16, 1, 0.3, 1] as const}}
      className="group bg-white/90 dark:bg-slate-900/90 rounded-2xl overflow-hidden border border-slate-200/90 dark:border-slate-800/90 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 shadow-xs hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full"
    >
      {/* Visual Image Media Container - Compact 16:9 ratio */}
      <div className="relative aspect-[16/9] max-h-[190px] overflow-hidden bg-slate-100 dark:bg-slate-800">
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
            <Code2 size={32} className="text-indigo-600/40 dark:text-indigo-400/40 mb-1" />
            <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 font-medium">
              {category}
            </span>
          </div>
        )}

        {/* Ambient Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* RahimDev-style Platform & Store Badges */}
        <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between gap-1.5 pointer-events-none">
          <div className="flex items-center gap-1.5">
            {project.platformBadge && (
              <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-slate-900/85 text-white backdrop-blur-md border border-white/10 shadow-2xs">
                {project.platformBadge}
              </span>
            )}
            {project.storeBadge && (
              <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-indigo-900/85 text-indigo-200 backdrop-blur-md border border-indigo-400/20 shadow-2xs">
                {project.storeBadge}
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
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            {isCompleted ? t.projects.statusCompleted : t.projects.statusInProgress}
          </span>
        </div>

        {/* Hover Quick Actions */}
        <div className="absolute bottom-3 right-3 z-10 flex gap-1.5 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 bg-slate-900/90 text-white backdrop-blur-md rounded-lg hover:bg-indigo-600 transition-colors shadow-xs"
              aria-label="View source on GitHub"
            >
              <Github size={13} />
            </a>
          )}
          <button
            onClick={() => onSelect(project)}
            className="p-1.5 bg-indigo-600 text-white backdrop-blur-md rounded-lg hover:bg-indigo-500 transition-colors shadow-xs"
            aria-label="Open case study modal"
          >
            <ExternalLink size={13} />
          </button>
        </div>
      </div>

      {/* Card Content & Metadata */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Unboxed Metadata Line with typographic separators */}
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2 font-medium">
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide text-[11px] uppercase">
            {category}
          </span>
          <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
          <span className="font-mono text-[11px]">{project.year}</span>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold font-outfit tracking-tight text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1">
          {title}
        </h3>

        {/* Short Description */}
        <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-[13px] leading-relaxed mb-4 flex-grow line-clamp-2">
          {shortDescription}
        </p>

        {/* Technology Badges */}
        <div className="flex flex-wrap gap-1.5 mb-4" dir="ltr">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[10px] sm:text-[11px] font-mono text-slate-700 dark:text-slate-300 bg-slate-100/90 dark:bg-slate-800/80 px-2 py-0.5 rounded-md border border-slate-200/70 dark:border-slate-700/70"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-[10px] text-slate-400 font-mono py-0.5">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Card Footer: View Case Study Trigger */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between mt-auto">
          <button
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 group-hover:gap-2 transition-all cursor-pointer"
          >
            <span>{t.projects.viewCaseStudy}</span>
            <ArrowUpRight
              size={14}
              className={cn(
                'transition-transform',
                isRtl ? 'rotate-[-90deg]' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
              )}
            />
          </button>

          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-[11px] text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center gap-1"
            >
              <Github size={12} />
              <span>{t.projects.sourceCode}</span>
            </a>
          ) : (
            <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
              {t.projects.verifiedProject}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const {t, language, isRtl} = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

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
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeModalProject]);

  // Clean category extraction
  const categories = useMemo(() => {
    const cats = ['All', ...new Set(projects.map((p) => p.category))];
    return cats;
  }, []);

  // Filter projects dynamically
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

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

  const modalProblem = activeModalProject
    ? (language !== 'en' && activeModalProject.translations?.[language as 'ps' | 'fa']?.problem) ||
      activeModalProject.problem
    : '';

  const modalSolution = activeModalProject
    ? (language !== 'en' && activeModalProject.translations?.[language as 'ps' | 'fa']?.solution) ||
      activeModalProject.solution
    : '';

  const modalFeatures = activeModalProject
    ? (language !== 'en' && activeModalProject.translations?.[language as 'ps' | 'fa']?.features) ||
      activeModalProject.features
    : [];

  return (
    <section id="projects" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/60 dark:bg-[#07090e] relative overflow-hidden transition-colors duration-300">
      {/* Subtle Atmospheric Gradient */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 -left-20 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-indigo-500/10 via-sky-500/8 to-transparent dark:from-indigo-600/10 dark:via-sky-600/8 dark:to-transparent blur-[90px]" />
        <div className="absolute -bottom-20 -right-20 w-[420px] h-[420px] rounded-full bg-gradient-to-tl from-cyan-500/10 via-indigo-500/8 to-transparent dark:from-cyan-600/10 dark:via-indigo-600/8 dark:to-transparent blur-[90px]" />
        <div className="absolute inset-0 bg-tech-grid-light dark:bg-tech-grid-dark opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{opacity: 0, y: 16}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{ once: false, amount: 0.2 }}
          transition={{duration: 0.45, ease: [0.16, 1, 0.3, 1]}}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4 sm:gap-6"
        >
          <div>
            <span className="inline-flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-xs mb-2 font-mono">
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

        {/* Instant Interactive Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-8 sm:mb-10 p-1 bg-slate-200/60 dark:bg-slate-900/80 rounded-2xl max-w-full overflow-x-auto border border-slate-300/70 dark:border-slate-800 shadow-2xs">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            const count =
              category === 'All'
                ? projects.length
                : projects.filter((p) => p.category === category).length;
            const label = category === 'All' ? t.projects.allFilter : category;

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  'px-3 sm:px-4 py-1.5 text-xs font-semibold rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer',
                  isActive
                    ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                )}
              >
                {label}
                <span className="ml-1 opacity-60 text-[10px] font-mono">({count})</span>
              </button>
            );
          })}
        </div>

        {/* 2-3 Project Cards visible in grid on desktop */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(proj) => setActiveModalProject(proj)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Modal Dialog */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              onClick={() => setActiveModalProject(null)}
              className="fixed inset-0 bg-slate-950/75 backdrop-blur-md"
            />

            {/* Modal Dialog Content */}
            <motion.div
              initial={{opacity: 0, scale: 0.96, y: 14}}
              animate={{opacity: 1, scale: 1, y: 0}}
              exit={{opacity: 0, scale: 0.96, y: 14}}
              transition={{duration: 0.25, ease: [0.16, 1, 0.3, 1] as const}}
              className="relative w-full max-w-2xl bg-white dark:bg-[#0e121b] border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl p-5 sm:p-7 max-h-[90vh] overflow-y-auto z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 rtl:left-4 rtl:right-auto p-2 rounded-full bg-slate-100 dark:bg-slate-800/80 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                aria-label="Close case study dialog"
              >
                <X size={16} />
              </button>

              {/* Unboxed Metadata Header */}
              <div className="flex flex-wrap items-center gap-2 mb-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-wider text-[11px]">
                  {modalCategory}
                </span>
                <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                <span className="font-mono">{activeModalProject.year}</span>
                <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                  {activeModalProject.status === 'Completed'
                    ? t.projects.statusCompleted
                    : t.projects.statusInProgress}
                </span>
              </div>

              {/* Project Title */}
              <h3 className="text-xl sm:text-2xl font-extrabold font-outfit tracking-tight text-slate-900 dark:text-white mb-3">
                {modalTitle}
              </h3>

              {/* Optional Visual */}
              {activeModalProject.image && (
                <div className="aspect-[16/9] max-h-[220px] w-full rounded-2xl overflow-hidden mb-5 bg-slate-100 dark:bg-slate-800">
                  <img
                    src={activeModalProject.image}
                    alt={modalTitle}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}

              {/* Verified Problem & Solution Breakdown */}
              {modalProblem && (
                <div className="mb-4 p-4 rounded-2xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20 text-xs sm:text-[13px] leading-relaxed">
                  <div className="font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider text-[10px] font-mono mb-1 flex items-center gap-1.5">
                    <AlertCircle size={12} />
                    <span>{t.projects.problemTitle}</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">{modalProblem}</p>
                </div>
              )}

              {modalSolution && (
                <div className="mb-4 p-4 rounded-2xl bg-indigo-500/5 dark:bg-indigo-500/10 border border-indigo-500/20 text-xs sm:text-[13px] leading-relaxed">
                  <div className="font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wider text-[10px] font-mono mb-1 flex items-center gap-1.5">
                    <CheckCircle2 size={12} />
                    <span>{t.projects.solutionTitle}</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">{modalSolution}</p>
                </div>
              )}

              {/* Full Description */}
              <div className="space-y-2 text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                <p>{modalFullDescription}</p>
              </div>

              {/* Key Features */}
              <div className="mb-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5 flex items-center gap-1.5 font-mono">
                  <Layers size={13} />
                  <span>{t.projects.keyFeatures}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {modalFeatures.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 size={13} className="text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack (Strictly LTR for code readability) */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5 flex items-center gap-1.5 font-mono">
                  <Terminal size={13} />
                  <span>{t.projects.techStack}</span>
                </h4>
                <div className="flex flex-wrap gap-1.5" dir="ltr">
                  {activeModalProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-200/60 dark:border-slate-700 font-mono text-[11px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-slate-200 dark:border-slate-800">
                {activeModalProject.github && (
                  <a
                    href={activeModalProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-slate-800 text-white text-xs font-semibold rounded-xl hover:bg-slate-800 transition-colors"
                  >
                    <Github size={14} />
                    <span>{t.projects.viewRepo}</span>
                  </a>
                )}
                {activeModalProject.liveDemo && (
                  <a
                    href={activeModalProject.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white text-xs font-semibold rounded-xl hover:bg-indigo-500 transition-colors shadow-xs"
                  >
                    <ExternalLink size={14} />
                    <span>{t.projects.liveDemo}</span>
                  </a>
                )}
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-4 py-2 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ml-auto rtl:mr-auto rtl:ml-0 cursor-pointer"
                >
                  {t.projects.closeCaseStudy}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
