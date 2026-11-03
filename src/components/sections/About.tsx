import {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {GraduationCap, Code, ChevronDown, ChevronUp, Compass, FileDown, BookOpen, CheckCircle2} from 'lucide-react';
import {useLanguage} from '../../context/LanguageContext';

export function About() {
  const [expanded, setExpanded] = useState(false);
  const {t, isRtl} = useLanguage();

  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: {opacity: 0, y: 14},
    visible: {
      opacity: 1,
      y: 0,
      transition: {duration: 0.45, ease: [0.16, 1, 0.3, 1] as const},
    },
  };

  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/40 dark:bg-[#07090e] relative overflow-hidden transition-colors duration-300"
    >
      {/* Restrained Ambient Atmosphere */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-20 -left-16 w-[380px] h-[380px] rounded-full bg-gradient-to-br from-indigo-500/10 via-sky-500/8 to-transparent dark:from-indigo-600/10 dark:via-cyan-600/8 dark:to-transparent blur-[75px]" />
        <div className="absolute -bottom-20 -right-16 w-[360px] h-[360px] rounded-full bg-gradient-to-tl from-purple-500/10 via-indigo-500/8 to-transparent dark:from-purple-600/10 dark:via-indigo-600/8 dark:to-transparent blur-[75px]" />
        <div className="absolute inset-0 bg-tech-grid-light dark:bg-tech-grid-dark opacity-15" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: false, amount: 0.15}}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
        >
          {/* LEFT COLUMN: Section Heading, Personal Biography & Core Academic Pillars */}
          <motion.div variants={itemVariants} className="lg:col-span-7 text-left rtl:text-right">
            {/* Unboxed Section Tag - Natural Sans-Serif */}
            <div className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold text-xs tracking-wider uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
              <span>{t.about.tag}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-outfit tracking-tight text-slate-900 dark:text-white mb-4 leading-tight text-balance">
              {t.about.headlinePre}{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-sky-500 to-indigo-500 dark:from-indigo-400 dark:via-sky-300 dark:to-cyan-300 bg-clip-text text-transparent">
                {t.about.headlineHighlight}
              </span>{' '}
              {t.about.headlinePost}
            </h2>

            {/* Natural, Scannable Personal Biography */}
            <div className="space-y-3.5 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              <p>{t.about.intro1}</p>
              <p>{t.about.intro2}</p>
            </div>

            {/* 3 Structured Academic & Focus Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-6 sm:mt-7">
              <div className="p-4 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:border-indigo-500/40 transition-colors">
                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 mb-1.5">
                  <GraduationCap size={16} />
                  <span className="text-xs font-bold uppercase tracking-wider">{t.about.educationTitle}</span>
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">{t.about.educationDegree}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-snug">{t.about.educationSub}</div>
              </div>

              <div className="p-4 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:border-indigo-500/40 transition-colors">
                <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 mb-1.5">
                  <Code size={16} />
                  <span className="text-xs font-bold uppercase tracking-wider">{t.about.focusTitle}</span>
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">{t.about.focusDomain}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-snug">{t.about.focusSub}</div>
              </div>

              <div className="p-4 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:border-indigo-500/40 transition-colors">
                <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 mb-1.5">
                  <Compass size={16} />
                  <span className="text-xs font-bold uppercase tracking-wider">{t.about.learningTitle}</span>
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">{t.about.learningDomain}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-snug">{t.about.learningSub}</div>
              </div>
            </div>

            {/* Development Principles Accordion & Resume CTA */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setExpanded(!expanded)}
                className="inline-flex items-center gap-2 px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-semibold text-xs sm:text-sm hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors shadow-2xs cursor-pointer"
                aria-expanded={expanded}
              >
                <span>{expanded ? t.about.showLess : t.about.showPrinciples}</span>
                {expanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs sm:text-sm transition-colors cursor-pointer border border-slate-200/80 dark:border-slate-700"
              >
                <FileDown size={15} className="text-indigo-600 dark:text-indigo-400" />
                <span>{t.about.requestResume}</span>
              </a>
            </div>

            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{opacity: 0, height: 0}}
                  animate={{opacity: 1, height: 'auto'}}
                  exit={{opacity: 0, height: 0}}
                  transition={{duration: 0.25, ease: [0.16, 1, 0.3, 1] as const}}
                  className="overflow-hidden mt-4"
                >
                  <div className="p-5 sm:p-6 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-slate-200/90 dark:border-slate-800 shadow-xs space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <h4 className="font-outfit font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                      {t.about.principlesHeading}
                    </h4>
                    <p className="leading-relaxed">
                      {t.about.principlesP1}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
                      {t.about.principlesList.map((principle, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800/60 px-3 py-2 rounded-xl border border-slate-200/70 dark:border-slate-700/70 text-slate-800 dark:text-slate-200 font-medium"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 shrink-0" />
                          <span>{principle}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-slate-500 dark:text-slate-400 pt-1 leading-relaxed">
                      {t.about.principlesP2}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* RIGHT COLUMN: Authentic Developer Identity Card & Academic Direction */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-4 w-full">
            {/* Compact, Refined Profile Glance Card */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white/95 dark:bg-slate-900/95 border border-slate-200/90 dark:border-slate-800 shadow-sm backdrop-blur-xl relative overflow-hidden group hover:border-indigo-500/40 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shrink-0 bg-slate-200 dark:bg-slate-800">
                  <img
                    src="/src/assets/images/profile_portrait_1790485035149.jpg"
                    alt="Abdul Jalil Zwak"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-outfit text-slate-900 dark:text-white">
                    Abdul Jalil Zwak
                  </h3>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold mt-0.5">
                    {t.about.profileRole}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {t.about.profileUniversity}
                  </p>
                </div>
              </div>
            </div>

            {/* Academic & Engineering Direction Card (Authentic & Personal, No Misplaced Project Showcase) */}
            <div className="group relative">
              <div className="card-soft-underglow" />
              <div className="relative z-10 p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-indigo-50/70 via-white/95 to-sky-50/50 dark:from-slate-900/95 dark:via-slate-900/95 dark:to-indigo-950/40 border border-indigo-200/70 dark:border-indigo-900/60 shadow-sm group-hover:shadow-lg transition-all duration-300 backdrop-blur-xl text-left rtl:text-right">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                    {t.about.directionTitle}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                    <span>{t.about.directionBadge}</span>
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {t.about.directionDesc}
                </p>

                {/* Primary Development Interests List */}
                <div className="pt-3 border-t border-slate-200/70 dark:border-slate-800/80">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2.5">
                    {t.about.interestsTitle}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {t.about.interests.map((interest, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-2 rounded-xl bg-white/80 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-xs text-slate-700 dark:text-slate-200 font-medium"
                      >
                        <CheckCircle2 size={13} className="text-indigo-600 dark:text-indigo-400 shrink-0" />
                        <span className="truncate">{interest}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
