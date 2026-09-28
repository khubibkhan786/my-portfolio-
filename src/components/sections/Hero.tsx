import {motion} from 'framer-motion';
import {ArrowRight, Mail, Code2, Terminal, Cpu, Globe2} from 'lucide-react';
import {DeveloperTechPanel} from '../ui/DeveloperTechPanel';
import {useTheme} from '../../context/ThemeContext';

export function Hero() {
  const {theme} = useTheme();
  const isDark = theme === 'dark';

  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.09,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: {opacity: 0, y: 18, filter: 'blur(3px)'},
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[88vh] flex items-center pt-24 pb-14 sm:py-20 lg:py-24 overflow-hidden transition-colors duration-300"
    >
      {/* 3. Subtle Technology-Inspired Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Soft atmospheric glows */}
        <div
          className={`absolute -top-28 -left-28 w-[480px] h-[480px] rounded-full blur-[140px] transition-colors duration-700 pointer-events-none ${
            isDark ? 'bg-indigo-600/12' : 'bg-indigo-200/45'
          }`}
        />
        <div
          className={`absolute top-1/4 -right-24 w-[420px] h-[420px] rounded-full blur-[140px] transition-colors duration-700 pointer-events-none ${
            isDark ? 'bg-sky-600/10' : 'bg-sky-200/35'
          }`}
        />
        <div
          className={`absolute -bottom-36 left-1/3 w-[380px] h-[380px] rounded-full blur-[130px] transition-colors duration-700 pointer-events-none ${
            isDark ? 'bg-purple-600/10' : 'bg-purple-200/30'
          }`}
        />

        {/* Minimal Technical Grid */}
        <div className={`absolute inset-0 ${isDark ? 'bg-tech-grid-dark' : 'bg-tech-grid-light'}`} />

        {/* Minimal Architectural Coordinate Meta */}
        <div className="absolute top-20 right-8 hidden xl:flex flex-col items-end gap-1 text-[10px] font-mono text-slate-400/80 dark:text-slate-600 tracking-widest uppercase">
          <span>PORTFOLIO // 2026</span>
          <span>DEV // CS & IS</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          {/* LEFT: Controlled Responsive Typography & Hero Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 flex flex-col justify-center text-left"
          >
            {/* Identity Label */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2.5 mb-4 sm:mb-5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 text-xs font-semibold tracking-wider text-slate-800 dark:text-slate-200 shadow-2xs backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-mono uppercase tracking-wider text-[11px] font-bold text-indigo-600 dark:text-indigo-400">
                  Abdul Jalil Zwak
                </span>
              </span>

              <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                <Globe2 size={13} className="text-slate-400" />
                <span>Information Systems · 2026</span>
              </span>
            </motion.div>

            {/* 2. Responsive Clamp-Based Main Headline with Modern Outfit Font */}
            <motion.h1
              variants={itemVariants}
              className="text-[clamp(1.85rem,4.2vw,3.25rem)] font-extrabold font-outfit tracking-tight text-slate-900 dark:text-white leading-[1.12] mb-4 sm:mb-5 text-balance break-words"
            >
              Computer Science Student &{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500 dark:from-indigo-400 dark:via-sky-300 dark:to-cyan-300 bg-clip-text text-transparent inline-block">
                Aspiring Software Developer
              </span>
            </motion.h1>

            {/* Supporting Description */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6 sm:mb-8 max-w-xl text-balance font-normal"
            >
              I build practical digital solutions through software development, modern web
              technologies, AI tools, and automation.
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 sm:gap-4 mb-7 sm:mb-9">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white font-semibold text-xs sm:text-sm rounded-xl transition-all duration-200 shadow-md shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5 group cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                  size={16}
                />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-white/90 dark:bg-slate-900/90 hover:bg-slate-50 dark:hover:bg-slate-800/90 active:scale-[0.98] text-slate-800 dark:text-slate-200 font-semibold text-xs sm:text-sm rounded-xl border border-slate-200/90 dark:border-slate-800 shadow-xs hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <Mail className="mr-2" size={15} />
                <span>Contact Me</span>
              </a>
            </motion.div>

            {/* Technical Pillars Ribbon */}
            <motion.div
              variants={itemVariants}
              className="pt-5 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-3 gap-2.5 sm:gap-4 max-w-lg"
            >
              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0 shadow-2xs">
                  <Code2 size={15} />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white truncate">Software</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 truncate">Java & Android</div>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-sky-50 dark:bg-sky-950/60 border border-sky-100 dark:border-sky-900/60 flex items-center justify-center text-sky-600 dark:text-sky-400 shrink-0 shadow-2xs">
                  <Terminal size={15} />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white truncate">Web Dev</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 truncate">Frontend</div>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-purple-50 dark:bg-purple-950/60 border border-purple-100 dark:border-purple-900/60 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0 shadow-2xs">
                  <Cpu size={15} />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white truncate">AI Tools</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 truncate">Automation</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Interactive Developer Technology Panel */}
          <motion.div
            initial={{opacity: 0, scale: 0.96, y: 15}}
            animate={{opacity: 1, scale: 1, y: 0}}
            transition={{duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1]}}
            className="lg:col-span-6 flex justify-center lg:justify-end w-full min-w-0 overflow-hidden"
          >
            <DeveloperTechPanel />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
