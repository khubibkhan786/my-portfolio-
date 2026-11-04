import {motion} from 'framer-motion';
import {ArrowRight, Mail, Code2} from 'lucide-react';
import {DeveloperTechPanel} from '../ui/DeveloperTechPanel';
import {useTheme} from '../../context/ThemeContext';
import {useLanguage} from '../../context/LanguageContext';
import {cn} from '../../lib/utils';

export function Hero() {
  const {theme} = useTheme();
  const {t, language, isRtl} = useLanguage();
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
      className="relative min-h-[88vh] lg:min-h-[92vh] flex items-center pt-20 sm:pt-28 pb-12 lg:py-24 overflow-hidden transition-colors duration-300"
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
        {/* Balanced Grid: Aligned items-start with Code Card elevated to match headline level */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-start pt-1 sm:pt-2">
          {/* LEFT: Expressive Natural Headline, Developer Identity & Clear CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 flex flex-col justify-start text-left rtl:text-right"
          >
            {/* Developer Identity & Academic Description with Strict Mobile Isolation */}
            <motion.div
              variants={itemVariants}
              className="mb-3.5 sm:mb-4 flex flex-col items-start gap-2 sm:gap-2.5 max-w-full"
            >
              {/* Row 1: Active Status Badge + Full Developer Name */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-white/[0.08] shadow-[0_2px_8px_rgba(15,23,42,0.04)] dark:shadow-none self-start">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <bdi
                  dir={isRtl ? 'rtl' : 'ltr'}
                  className="font-bold text-slate-900 dark:text-slate-100 tracking-tight text-xs sm:text-sm whitespace-nowrap"
                >
                  {t.hero.statusBadge}
                </bdi>
              </div>

              {/* Row 2: Academic Specialization in a Separate, Balanced Text Block with Isolated English Terms */}
              <div
                className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-full"
                dir={isRtl ? 'rtl' : 'ltr'}
              >
                {language === 'ps' ? (
                  <>
                    <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                      <span>د</span>
                      <bdi
                        dir="ltr"
                        className="font-mono font-semibold text-slate-800 dark:text-slate-200 px-1.5 py-0.5 rounded-md bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 text-[11px] sm:text-xs tracking-tight"
                      >
                        Computer Science
                      </bdi>
                      <span>محصل</span>
                    </span>
                    <span aria-hidden="true" className="text-slate-300 dark:text-slate-700 select-none">
                      ·
                    </span>
                    <span className="whitespace-nowrap font-medium text-slate-700 dark:text-slate-200">
                      معلوماتي سیستمونه
                    </span>
                  </>
                ) : language === 'fa' ? (
                  <>
                    <span className="whitespace-nowrap">دانشجوی کامپیوتر ساینس</span>
                    <span aria-hidden="true" className="text-slate-300 dark:text-slate-700 select-none">
                      ·
                    </span>
                    <span className="whitespace-nowrap font-medium text-slate-700 dark:text-slate-200">
                      سیستم‌های معلوماتی
                    </span>
                  </>
                ) : (
                  <>
                    <span className="whitespace-nowrap font-medium text-slate-800 dark:text-slate-200">
                      Computer Science
                    </span>
                    <span aria-hidden="true" className="text-slate-300 dark:text-slate-700 select-none">
                      ·
                    </span>
                    <span className="whitespace-nowrap">Information Systems Specialization</span>
                  </>
                )}
              </div>
            </motion.div>

            {/* Sub-label: Role */}
            <motion.div
              variants={itemVariants}
              className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2.5 flex items-center gap-2"
            >
              <Code2 size={14} className="shrink-0" />
              <span>{t.hero.role}</span>
            </motion.div>

            {/* Main Headline - Natural, attractive, confident, and professional */}
            <motion.h1
              variants={itemVariants}
              className="text-[clamp(1.9rem,5.2vw,3.35rem)] font-extrabold font-outfit tracking-tight text-slate-900 dark:text-white leading-[1.18] sm:leading-[1.14] mb-3.5 sm:mb-4 text-balance break-normal"
            >
              {t.hero.headlinePre}{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-sky-500 to-indigo-500 dark:from-indigo-400 dark:via-sky-300 dark:to-cyan-300 bg-clip-text text-transparent inline-block">
                {t.hero.headlineHighlight}
              </span>{' '}
              {t.hero.headlinePost}
            </motion.h1>

            {/* Supporting Description - Reduced to one concise, natural supporting sentence */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base lg:text-[16.5px] text-slate-600 dark:text-slate-300 leading-relaxed mb-6 sm:mb-8 max-w-xl text-balance font-normal"
            >
              {t.hero.description}
            </motion.p>

            {/* Action Buttons - Prominent, Clear & Mobile Optimized */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white font-semibold text-xs sm:text-sm rounded-xl transition-all duration-200 shadow-md shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5 group cursor-pointer w-full sm:w-auto text-center"
              >
                <span>{t.hero.viewWork}</span>
                <ArrowRight
                  className={cn(
                    'mx-1.5 transition-transform duration-200 shrink-0',
                    isRtl
                      ? 'rotate-180 group-hover:-translate-x-1'
                      : 'group-hover:translate-x-1'
                  )}
                  size={15}
                />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-slate-900/90 hover:bg-slate-50 dark:hover:bg-slate-800 active:scale-[0.98] text-slate-800 dark:text-slate-200 font-semibold text-xs sm:text-sm rounded-xl border border-slate-200/90 dark:border-white/[0.08] shadow-xs hover:-translate-y-0.5 transition-all duration-200 cursor-pointer w-full sm:w-auto text-center"
              >
                <Mail className={isRtl ? 'ml-2 shrink-0' : 'mr-2 shrink-0'} size={15} />
                <span>{t.hero.contactMe}</span>
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT: Shifted upward on desktop to align directly with the headline */}
          <motion.div
            initial={{opacity: 0, scale: 0.98, y: 10}}
            animate={{opacity: 1, scale: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1]}}
            className="lg:col-span-6 flex justify-center lg:justify-end w-full min-w-0 lg:-mt-2 xl:-mt-3"
            dir="ltr"
          >
            <DeveloperTechPanel />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
