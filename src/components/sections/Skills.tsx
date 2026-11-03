import {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {
  Terminal,
  Database,
  Smartphone,
  ChevronDown,
  Sparkles,
  CheckCircle2,
  Code2
} from 'lucide-react';
import {simplifiedSkillCategories, SimplifiedSkillCategory} from '../../data/skills';
import {useLanguage} from '../../context/LanguageContext';
import {cn} from '../../lib/utils';

export function Skills() {
  const {t, language, isRtl} = useLanguage();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const getCategoryIcon = (iconName: string, active: boolean) => {
    const iconClass = cn(
      'transition-colors duration-200',
      active ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-400'
    );

    switch (iconName) {
      case 'Terminal':
        return <Terminal size={22} className={iconClass} />;
      case 'Database':
        return <Database size={22} className={iconClass} />;
      case 'Smartphone':
        return <Smartphone size={22} className={iconClass} />;
      default:
        return <Code2 size={22} className={iconClass} />;
    }
  };

  const getCategoryAccent = (id: string) => {
    switch (id) {
      case 'software-dev':
        return {
          badge: 'bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border-indigo-200/80 dark:border-indigo-800/60',
          activeRing: 'border-indigo-500/60 dark:border-indigo-500/60 ring-1 ring-indigo-500/20',
          glow: 'from-indigo-500/15 via-transparent to-transparent',
          iconBox: 'bg-indigo-50/80 dark:bg-indigo-950/60 border-indigo-200/70 dark:border-indigo-800/60',
          topAccent: 'bg-indigo-500/60',
        };
      case 'databases':
        return {
          badge: 'bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border-emerald-200/80 dark:border-emerald-800/60',
          activeRing: 'border-emerald-500/60 dark:border-emerald-500/60 ring-1 ring-emerald-500/20',
          glow: 'from-emerald-500/15 via-transparent to-transparent',
          iconBox: 'bg-emerald-50/80 dark:bg-emerald-950/60 border-emerald-200/70 dark:border-emerald-800/60',
          topAccent: 'bg-emerald-500/60',
        };
      case 'web-mobile':
      default:
        return {
          badge: 'bg-sky-50 dark:bg-sky-950/70 text-sky-700 dark:text-sky-300 border-sky-200/80 dark:border-sky-800/60',
          activeRing: 'border-sky-500/60 dark:border-sky-500/60 ring-1 ring-sky-500/20',
          glow: 'from-sky-500/15 via-transparent to-transparent',
          iconBox: 'bg-sky-50/80 dark:bg-sky-950/60 border-sky-200/70 dark:border-sky-800/60',
          topAccent: 'bg-sky-500/60',
        };
    }
  };

  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {opacity: 0, y: 14},
    visible: {
      opacity: 1,
      y: 0,
      transition: {duration: 0.4, ease: [0.16, 1, 0.3, 1] as const},
    },
  };

  return (
    <section
      id="skills"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-[#07090e] relative overflow-hidden transition-colors duration-300"
    >
      {/* Restrained Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 -right-20 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-indigo-500/10 via-sky-500/8 to-transparent dark:from-indigo-600/10 dark:via-sky-600/8 dark:to-transparent blur-[85px]" />
        <div className="absolute -bottom-24 -left-20 w-[380px] h-[380px] rounded-full bg-gradient-to-tr from-emerald-500/10 via-purple-500/8 to-transparent dark:from-emerald-600/10 dark:via-purple-600/8 dark:to-transparent blur-[85px]" />
        <div className="absolute inset-0 bg-tech-grid-light dark:bg-tech-grid-dark opacity-15" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading - Repeating viewport animation */}
        <motion.div
          initial={{opacity: 0, y: 14}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: false, amount: 0.2}}
          transition={{duration: 0.45, ease: [0.16, 1, 0.3, 1]}}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-14"
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

        {/* 3 Main Categories - Compact by default, click to expand verified details */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: false, amount: 0.15}}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10 items-start"
        >
          {simplifiedSkillCategories.map((category: SimplifiedSkillCategory, idx) => {
            const isExpanded = expandedId === category.id;
            const accent = getCategoryAccent(category.id);
            const indexFormatted = `0${idx + 1}`;

            const localizedTitle =
              (language !== 'en' && category.translations?.[language as 'ps' | 'fa']?.title) ||
              category.title;
            const localizedSummary =
              (language !== 'en' && category.translations?.[language as 'ps' | 'fa']?.shortSummary) ||
              category.shortSummary;
            const localizedDetails =
              (language !== 'en' && category.translations?.[language as 'ps' | 'fa']?.verifiedDetails) ||
              category.verifiedDetails;

            return (
              <motion.div
                key={category.id}
                variants={cardVariants}
                layout
                className={cn(
                  'rounded-2xl transition-all duration-300 relative overflow-hidden bg-white dark:bg-[#0c121e]/90 border backdrop-blur-sm text-left rtl:text-right group',
                  isExpanded
                    ? cn(accent.activeRing, 'shadow-lg shadow-indigo-500/5')
                    : 'border-slate-200/90 dark:border-white/[0.08] shadow-[0_2px_12px_rgba(15,23,42,0.04)] hover:border-slate-300 dark:hover:border-white/[0.16] hover:shadow-[0_8px_24px_rgba(15,23,42,0.07)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)]'
                )}
              >
                {/* Subtle top accent line */}
                <div
                  className={cn(
                    'absolute top-0 inset-x-8 h-[2px] transition-opacity duration-300 opacity-60 group-hover:opacity-100',
                    accent.topAccent
                  )}
                />

                {/* Subtle underglow on active */}
                {isExpanded && (
                  <div
                    className={cn(
                      'absolute top-0 inset-x-0 h-28 bg-gradient-to-b pointer-events-none opacity-40',
                      accent.glow
                    )}
                  />
                )}

                <div className="p-5 sm:p-6 relative z-10 flex flex-col justify-between h-full">
                  <div>
                    {/* Header Row: Icon + Index + Accent Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={cn(
                          'w-11 h-11 rounded-xl border flex items-center justify-center shadow-2xs group-hover:scale-105 transition-all duration-200',
                          accent.iconBox
                        )}
                      >
                        {getCategoryIcon(category.icon, isExpanded)}
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500">
                        {indexFormatted}
                      </span>
                    </div>

                    {/* Category Title */}
                    <h3 className="text-base sm:text-lg font-bold font-outfit text-slate-900 dark:text-white mb-2 leading-snug">
                      {localizedTitle}
                    </h3>

                    {/* Short Concise Summary */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {localizedSummary}
                    </p>
                  </div>

                  {/* Toggle Button for Expansion */}
                  <button
                    type="button"
                    onClick={() => setExpandedId(isExpanded ? null : category.id)}
                    className={cn(
                      'w-full py-2.5 px-3 rounded-xl border text-xs font-semibold flex items-center justify-between transition-all duration-200 cursor-pointer',
                      isExpanded
                        ? 'bg-slate-900 text-white dark:bg-slate-800 dark:text-white border-transparent shadow-xs'
                        : 'bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80 hover:bg-slate-100 dark:hover:bg-slate-800'
                    )}
                    aria-expanded={isExpanded}
                  >
                    <span>{isExpanded ? t.skills.hideDetails : t.skills.viewDetails}</span>
                    <ChevronDown
                      size={15}
                      className={cn(
                        'transition-transform duration-300',
                        isExpanded ? 'rotate-180' : ''
                      )}
                    />
                  </button>

                  {/* Expandable Verified Implementation Details */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        key="details"
                        initial={{opacity: 0, height: 0}}
                        animate={{opacity: 1, height: 'auto'}}
                        exit={{opacity: 0, height: 0}}
                        transition={{duration: 0.3, ease: [0.16, 1, 0.3, 1]}}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-3">
                          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            {t.skills.verifiedAreasTitle}
                          </div>

                          <div className="space-y-2.5">
                            {localizedDetails.map((detail, dIdx) => (
                              <div
                                key={dIdx}
                                className="p-2.5 rounded-xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800/60 text-left rtl:text-right"
                              >
                                <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mb-1">
                                  <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                                  <span>{detail.area}</span>
                                </div>
                                <div className="text-[11.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                                  {detail.description}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* 4. Current Learning: One Natural Statement (No technology lists, No syllabus) */}
        <motion.div
          initial={{opacity: 0, y: 12}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: false, amount: 0.2}}
          transition={{duration: 0.4}}
          className="p-5 sm:p-6 rounded-2xl bg-white/95 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-2xs flex flex-col sm:flex-row items-center gap-4 text-left rtl:text-right"
        >
          <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200/80 dark:border-indigo-800/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
            <Sparkles size={20} />
          </div>

          <div className="flex-1">
            <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1">
              {t.skills.learningTitle}
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {t.skills.learningNote}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
