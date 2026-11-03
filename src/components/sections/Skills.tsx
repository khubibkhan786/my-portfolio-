import {useState, useMemo} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {
  Code2,
  CheckCircle2,
  BookOpen,
  Sparkles,
  Layers,
  Terminal,
  ExternalLink,
  ChevronRight,
  Info
} from 'lucide-react';
import {
  practicalSkills,
  currentlyLearningSkills,
  foundationalSkills,
  SkillItem,
  SkillStatus
} from '../../data/skills';
import {useLanguage} from '../../context/LanguageContext';
import {cn} from '../../lib/utils';

type SkillFilter = 'all' | 'practical' | 'learning' | 'foundational';

export function Skills() {
  const {t, language, isRtl} = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<SkillFilter>('all');

  // Localized status badge helper
  const getStatusBadge = (status: SkillStatus) => {
    switch (status) {
      case 'practical':
        return {
          label: language === 'ps' ? 'عملي تطبیق' : language === 'fa' ? 'کاربرد عملی' : 'Practical',
          bg: 'bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border-emerald-200/70 dark:border-emerald-800/60',
          dot: 'bg-emerald-500'
        };
      case 'learning':
        return {
          label: language === 'ps' ? 'روانه زده کړه' : language === 'fa' ? 'در حال یادگیری' : 'Learning',
          bg: 'bg-sky-50 dark:bg-sky-950/70 text-sky-700 dark:text-sky-300 border-sky-200/70 dark:border-sky-800/60',
          dot: 'bg-sky-500'
        };
      case 'foundational':
        return {
          label: language === 'ps' ? 'بنسټیزه پوهه' : language === 'fa' ? 'دانش پایه‌ای' : 'Foundational',
          bg: 'bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border-indigo-200/70 dark:border-indigo-800/60',
          dot: 'bg-indigo-500'
        };
      default:
        return {
          label: 'Planned',
          bg: 'bg-slate-100 text-slate-700 border-slate-200',
          dot: 'bg-slate-400'
        };
    }
  };

  const allSkills = useMemo(() => {
    return [
      ...practicalSkills,
      ...currentlyLearningSkills,
      ...foundationalSkills
    ];
  }, []);

  const filteredSkills = useMemo(() => {
    if (selectedFilter === 'all') return allSkills;
    return allSkills.filter((s) => s.status === selectedFilter);
  }, [allSkills, selectedFilter]);

  const filterTabs = [
    {
      id: 'all' as SkillFilter,
      label: t.skills.filterAll,
      count: allSkills.length
    },
    {
      id: 'practical' as SkillFilter,
      label: t.skills.categories.practical,
      count: practicalSkills.length
    },
    {
      id: 'learning' as SkillFilter,
      label: t.skills.categories.learning,
      count: currentlyLearningSkills.length
    },
    {
      id: 'foundational' as SkillFilter,
      label: t.skills.categories.foundational,
      count: foundationalSkills.length
    }
  ];

  return (
    <section
      id="skills"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-[#07090e] relative overflow-hidden transition-colors duration-300"
    >
      {/* Restrained Ambient Atmosphere */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 -right-20 w-[380px] h-[380px] rounded-full bg-gradient-to-br from-indigo-500/10 via-sky-500/8 to-transparent dark:from-indigo-600/10 dark:via-sky-600/8 dark:to-transparent blur-[80px]" />
        <div className="absolute -bottom-24 -left-20 w-[360px] h-[360px] rounded-full bg-gradient-to-tr from-emerald-500/10 via-purple-500/8 to-transparent dark:from-emerald-600/10 dark:via-purple-600/8 dark:to-transparent blur-[80px]" />
        <div className="absolute inset-0 bg-tech-grid-light dark:bg-tech-grid-dark opacity-15" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading - Natural Sans-Serif Typography */}
        <motion.div
          initial={{opacity: 0, y: 14}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.2}}
          transition={{duration: 0.45, ease: [0.16, 1, 0.3, 1]}}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold text-xs tracking-wider uppercase mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
            <span>{t.skills.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-outfit tracking-tight text-slate-900 dark:text-white leading-tight">
            {t.skills.headline}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            {t.skills.subtitle}
          </p>
        </motion.div>

        {/* 3 Categories Summary Banners */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-8">
          <div
            onClick={() => setSelectedFilter('practical')}
            className={cn(
              'p-4 rounded-2xl border transition-all duration-200 cursor-pointer text-left rtl:text-right',
              selectedFilter === 'practical'
                ? 'bg-emerald-50/70 dark:bg-emerald-950/40 border-emerald-400/60 shadow-xs'
                : 'bg-white/80 dark:bg-slate-900/80 border-slate-200/80 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-800'
            )}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 size={14} />
                <span>{t.skills.categories.practical}</span>
              </span>
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                {practicalSkills.length}
              </span>
            </div>
            <p className="text-[11.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
              {t.skills.categories.practicalDesc}
            </p>
          </div>

          <div
            onClick={() => setSelectedFilter('learning')}
            className={cn(
              'p-4 rounded-2xl border transition-all duration-200 cursor-pointer text-left rtl:text-right',
              selectedFilter === 'learning'
                ? 'bg-sky-50/70 dark:bg-sky-950/40 border-sky-400/60 shadow-xs'
                : 'bg-white/80 dark:bg-slate-900/80 border-slate-200/80 dark:border-slate-800 hover:border-sky-300 dark:hover:border-sky-800'
            )}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 flex items-center gap-1.5">
                <BookOpen size={14} />
                <span>{t.skills.categories.learning}</span>
              </span>
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                {currentlyLearningSkills.length}
              </span>
            </div>
            <p className="text-[11.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
              {t.skills.categories.learningDesc}
            </p>
          </div>

          <div
            onClick={() => setSelectedFilter('foundational')}
            className={cn(
              'p-4 rounded-2xl border transition-all duration-200 cursor-pointer text-left rtl:text-right',
              selectedFilter === 'foundational'
                ? 'bg-indigo-50/70 dark:bg-indigo-950/40 border-indigo-400/60 shadow-xs'
                : 'bg-white/80 dark:bg-slate-900/80 border-slate-200/80 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-800'
            )}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
                <Code2 size={14} />
                <span>{t.skills.categories.foundational}</span>
              </span>
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                {foundationalSkills.length}
              </span>
            </div>
            <p className="text-[11.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
              {t.skills.categories.foundationalDesc}
            </p>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-between gap-3 mb-6 overflow-x-auto pb-1">
          <div className="flex items-center gap-1.5 p-1 bg-white/90 dark:bg-slate-900/90 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-2xs">
            {filterTabs.map((tab) => {
              const isActive = selectedFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFilter(tab.id)}
                  className={cn(
                    'relative px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer',
                    isActive
                      ? 'text-indigo-600 dark:text-white'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillTab"
                      className="absolute inset-0 bg-slate-100 dark:bg-slate-800 rounded-xl border border-indigo-500/30 -z-10 shadow-2xs"
                      transition={{type: 'spring', stiffness: 500, damping: 35}}
                    />
                  )}
                  <span>{tab.label}</span>
                  <span className="ml-1.5 text-[11px] font-bold opacity-70">
                    ({tab.count})
                  </span>
                </button>
              );
            })}
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium shrink-0">
            <Info size={13} className="text-indigo-500" />
            <span>{t.skills.verifiedEvidence}</span>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const badge = getStatusBadge(skill.status);
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{opacity: 0, scale: 0.98}}
                  animate={{opacity: 1, scale: 1}}
                  exit={{opacity: 0, scale: 0.98}}
                  transition={{duration: 0.25}}
                  className="p-4 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:border-indigo-500/40 hover:shadow-md transition-all flex flex-col justify-between text-left rtl:text-right"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="text-sm sm:text-base font-bold font-outfit text-slate-900 dark:text-white">
                        {skill.name}
                      </h3>
                      <span
                        className={cn(
                          'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10.5px] font-semibold border',
                          badge.bg
                        )}
                      >
                        <span className={cn('w-1.5 h-1.5 rounded-full', badge.dot)} />
                        <span>{badge.label}</span>
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                      {skill.description}
                    </p>
                  </div>

                  {skill.evidence && (
                    <div className="pt-2.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                      <span className="truncate">{skill.evidence}</span>
                      {skill.projectAssociation && skill.projectAssociation.length > 0 && (
                        <a
                          href="#projects"
                          className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold shrink-0"
                        >
                          {language === 'ps' ? 'پروژه' : language === 'fa' ? 'پروژه' : 'Project'}
                        </a>
                      )}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
