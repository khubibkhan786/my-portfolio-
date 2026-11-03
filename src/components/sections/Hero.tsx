import {motion} from 'framer-motion';
import {ArrowRight, Mail, ArrowUpRight, GraduationCap, Code2} from 'lucide-react';
import {DeveloperTechPanel} from '../ui/DeveloperTechPanel';
import {useTheme} from '../../context/ThemeContext';
import {useLanguage} from '../../context/LanguageContext';
import {cn} from '../../lib/utils';

export function Hero() {
  const {theme} = useTheme();
  const {t, isRtl} = useLanguage();
  const isDark = theme === 'dark';

  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.02,
      },
    },
  };

  const itemVariants = {
    hidden: {opacity: 0, y: 14},
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-24 sm:pt-28 pb-16 lg:py-28 overflow-hidden transition-colors duration-300"
    >
      {/* Restrained, Low-Overhead Atmospheric Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        <div
          className={cn(
            'absolute -top-24 -left-20 w-[420px] h-[420px] rounded-full blur-[100px] pointer-events-none transition-colors duration-500',
            isDark ? 'bg-indigo-600/12' : 'bg-indigo-200/40'
          )}
        />
        <div
          className={cn(
            'absolute top-1/3 -right-20 w-[380px] h-[380px] rounded-full blur-[110px] pointer-events-none transition-colors duration-500',
            isDark ? 'bg-sky-600/10' : 'bg-sky-200/35'
          )}
        />
        <div className={`absolute inset-0 ${isDark ? 'bg-tech-grid-dark' : 'bg-tech-grid-light'} opacity-20`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-14 items-center">
          {/* LEFT: Expressive Headline, Developer Identity & Clear CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 flex flex-col justify-center text-left rtl:text-right"
          >
            {/* Academic Identity Kicker - Quiet, Unboxed Text (Zero-Pill Discipline) */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-3 sm:mb-4 text-xs font-medium">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20" />
              <span className="text-slate-900 dark:text-slate-200 font-semibold tracking-wide">
                Abdul Jalil Zwak
              </span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span className="text-slate-500 dark:text-slate-400">
                Paktia University
              </span>
            </motion.div>

            {/* Sub-label: Field of study */}
            <motion.div
              variants={itemVariants}
              className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2.5 flex items-center gap-2"
            >
              <Code2 size={14} className="shrink-0" />
              <span>{t.hero.role}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-[clamp(2.1rem,4.5vw,3.4rem)] font-extrabold font-outfit tracking-tight text-slate-900 dark:text-white leading-[1.12] mb-4 sm:mb-5 text-balance"
            >
              {t.hero.headlinePre}{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-sky-500 to-indigo-500 dark:from-indigo-400 dark:via-sky-300 dark:to-cyan-300 bg-clip-text text-transparent inline-block">
                {t.hero.headlineHighlight}
              </span>{' '}
              {t.hero.headlinePost}
            </motion.h1>

            {/* Supporting Description */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base lg:text-[17px] text-slate-600 dark:text-slate-300 leading-relaxed mb-6 sm:mb-8 max-w-xl text-balance font-normal"
            >
              {t.hero.description}
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white font-semibold text-xs sm:text-sm rounded-xl transition-all duration-200 shadow-md shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5 group cursor-pointer"
              >
                <span>{t.hero.viewWork}</span>
                <ArrowRight
                  className={cn(
                    'mx-1.5 transition-transform duration-200',
                    isRtl
                      ? 'rotate-180 group-hover:-translate-x-1'
                      : 'group-hover:translate-x-1'
                  )}
                  size={15}
                />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 active:scale-[0.98] text-slate-800 dark:text-slate-200 font-semibold text-xs sm:text-sm rounded-xl border border-slate-200/90 dark:border-slate-800 shadow-xs hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <Mail className={isRtl ? 'ml-2' : 'mr-2'} size={15} />
                <span>{t.hero.contactMe}</span>
              </a>
            </motion.div>

            {/* Verified Student Deliverables Ribbon */}
            <motion.div
              variants={itemVariants}
              className="pt-5 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-3 gap-2.5 sm:gap-3 max-w-lg"
            >
              <div className="p-3 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 text-center sm:text-left rtl:sm:text-right shadow-2xs">
                <div className="text-base sm:text-lg font-black font-outfit text-indigo-600 dark:text-indigo-400">
                  {t.hero.metrics.metric1Value}
                </div>
                <div className="text-[11px] text-slate-600 dark:text-slate-400 font-medium truncate mt-0.5">
                  {t.hero.metrics.metric1Label}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 text-center sm:text-left rtl:sm:text-right shadow-2xs">
                <div className="text-sm sm:text-base font-bold font-outfit text-emerald-600 dark:text-emerald-400 truncate">
                  {t.hero.metrics.metric2Value}
                </div>
                <div className="text-[11px] text-slate-600 dark:text-slate-400 font-medium truncate mt-0.5">
                  {t.hero.metrics.metric2Label}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 text-center sm:text-left rtl:sm:text-right shadow-2xs">
                <div className="text-base sm:text-lg font-black font-outfit text-sky-600 dark:text-sky-400">
                  {t.hero.metrics.metric3Value}
                </div>
                <div className="text-[11px] text-slate-600 dark:text-slate-400 font-medium truncate mt-0.5">
                  {t.hero.metrics.metric3Label}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Redesigned Developer Snapshot Panel (Strictly LTR for code) */}
          <motion.div
            initial={{opacity: 0, scale: 0.97, y: 12}}
            animate={{opacity: 1, scale: 1, y: 0}}
            transition={{duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1]}}
            className="lg:col-span-6 flex justify-center lg:justify-end w-full min-w-0"
            dir="ltr"
          >
            <DeveloperTechPanel />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
