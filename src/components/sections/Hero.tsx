import {motion} from 'framer-motion';
import {ArrowRight, Mail, Code2, Terminal, Cpu, CheckCircle2, Sparkles, Smartphone} from 'lucide-react';
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
        delayChildren: 0.04,
      },
    },
  };

  const itemVariants = {
    hidden: {opacity: 0, y: 16},
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center pt-24 pb-14 sm:py-20 lg:py-24 overflow-hidden transition-colors duration-300"
    >
      {/* Technology-Inspired Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        <div
          className={cn(
            'absolute -top-28 -left-28 w-[500px] h-[500px] rounded-full blur-[140px] transition-colors duration-700 pointer-events-none',
            isDark ? 'bg-indigo-600/15' : 'bg-indigo-200/45'
          )}
        />
        <div
          className={cn(
            'absolute top-1/4 -right-24 w-[460px] h-[460px] rounded-full blur-[140px] transition-colors duration-700 pointer-events-none',
            isDark ? 'bg-cyan-600/12' : 'bg-sky-200/35'
          )}
        />
        <div
          className={cn(
            'absolute -bottom-36 left-1/3 w-[400px] h-[400px] rounded-full blur-[130px] transition-colors duration-700 pointer-events-none',
            isDark ? 'bg-emerald-600/10' : 'bg-emerald-200/25'
          )}
        />

        <div className={`absolute inset-0 ${isDark ? 'bg-tech-grid-dark' : 'bg-tech-grid-light'} opacity-25`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          {/* LEFT: Controlled Responsive Typography & Hero Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 flex flex-col justify-center text-left rtl:text-right"
          >
            {/* Identity & Status */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2 mb-4 sm:mb-5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 text-xs font-semibold tracking-wider text-slate-800 dark:text-slate-200 shadow-2xs backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-bold text-indigo-600 dark:text-indigo-400">
                  {t.hero.statusBadge}
                </span>
              </span>

              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                {t.hero.subline}
              </span>
            </motion.div>

            {/* Sub-label */}
            <motion.div
              variants={itemVariants}
              className="text-xs sm:text-sm font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2 font-mono"
            >
              {t.hero.role}
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-[clamp(1.9rem,4.4vw,3.25rem)] font-extrabold font-outfit tracking-tight text-slate-900 dark:text-white leading-[1.14] mb-4 sm:mb-5 text-balance break-words"
            >
              {t.hero.headlinePre}{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-500 dark:from-indigo-400 dark:via-sky-300 dark:to-emerald-300 bg-clip-text text-transparent inline-block">
                {t.hero.headlineHighlight}
              </span>{' '}
              {t.hero.headlinePost}
            </motion.h1>

            {/* Supporting Description */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6 sm:mb-8 max-w-xl text-balance font-normal"
            >
              {t.hero.description}
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 sm:gap-4 mb-7 sm:mb-9">
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
                className="inline-flex items-center justify-center px-6 py-3 bg-white/90 dark:bg-slate-900/90 hover:bg-slate-50 dark:hover:bg-slate-800/90 active:scale-[0.98] text-slate-800 dark:text-slate-200 font-semibold text-xs sm:text-sm rounded-xl border border-slate-200/90 dark:border-slate-800 shadow-xs hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <Mail className={isRtl ? 'ml-2' : 'mr-2'} size={15} />
                <span>{t.hero.contactMe}</span>
              </a>
            </motion.div>

            {/* RahimDev-Inspired Deliverables Metrics Ribbon */}
            <motion.div
              variants={itemVariants}
              className="pt-5 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-3 gap-3 max-w-lg"
            >
              <div className="p-2.5 rounded-xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/80">
                <div className="text-base sm:text-lg font-black font-outfit text-indigo-600 dark:text-indigo-400">
                  {t.hero.metrics.metric1Value}
                </div>
                <div className="text-[11px] text-slate-600 dark:text-slate-400 truncate">
                  {t.hero.metrics.metric1Label}
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/80">
                <div className="text-base sm:text-lg font-black font-outfit text-emerald-600 dark:text-emerald-400">
                  {t.hero.metrics.metric2Value}
                </div>
                <div className="text-[11px] text-slate-600 dark:text-slate-400 truncate">
                  {t.hero.metrics.metric2Label}
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/80">
                <div className="text-base sm:text-lg font-black font-outfit text-sky-600 dark:text-sky-400">
                  {t.hero.metrics.metric3Value}
                </div>
                <div className="text-[11px] text-slate-600 dark:text-slate-400 truncate">
                  {t.hero.metrics.metric3Label}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Interactive Developer Technology Panel (Strictly LTR for code consistency) */}
          <motion.div
            initial={{opacity: 0, scale: 0.96, y: 15}}
            animate={{opacity: 1, scale: 1, y: 0}}
            transition={{duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1]}}
            className="lg:col-span-6 flex justify-center lg:justify-end w-full min-w-0 overflow-hidden"
            dir="ltr"
          >
            <DeveloperTechPanel />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
