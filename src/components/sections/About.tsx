import {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {GraduationCap, Code, Sparkles, ChevronDown, ChevronUp, Compass, FileDown, Layers, ArrowUpRight} from 'lucide-react';
import {cn} from '../../lib/utils';

export function About() {
  const [expanded, setExpanded] = useState(false);

  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {opacity: 0, y: 16},
    visible: {
      opacity: 1,
      y: 0,
      transition: {duration: 0.45, ease: [0.16, 1, 0.3, 1] as const},
    },
  };

  return (
    <section id="about" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/40 dark:bg-[#07090e] relative overflow-hidden transition-colors duration-300">
      {/* Soft Ambient Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 -left-20 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-indigo-500/10 via-sky-500/8 to-transparent dark:from-indigo-600/10 dark:via-cyan-600/8 dark:to-transparent blur-[90px]" />
        <div className="absolute -bottom-20 -right-20 w-[420px] h-[420px] rounded-full bg-gradient-to-tl from-purple-500/10 via-indigo-500/8 to-transparent dark:from-purple-600/10 dark:via-indigo-600/8 dark:to-transparent blur-[90px]" />
        <div className="absolute inset-0 bg-tech-grid-light dark:bg-tech-grid-dark opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start"
        >
          {/* LEFT: Section Heading, Concise Introduction & Information Grid */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <span className="inline-flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-xs mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
              01 — ABOUT & FOCUS
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-outfit tracking-tight text-slate-900 dark:text-white mb-4 leading-tight text-balance">
              Building practical software with curiosity &{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500 dark:from-indigo-400 dark:via-sky-300 dark:to-cyan-300 bg-clip-text text-transparent">
                disciplined craftsmanship.
              </span>
            </h2>

            {/* Concise, Scannable Introduction */}
            <div className="space-y-3 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              <p>
                I’m Abdul Jalil Zwak, a Computer Science student with a dedicated focus on software development and practical digital technologies.
              </p>
              <p>
                I prioritize building real-world solutions: native Android applications, responsive web interfaces, and automated scripts that solve everyday challenges with reliable code.
              </p>
            </div>

            {/* Scannable 4-Column Information Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 sm:mt-7">
              <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 mb-1.5">
                  <GraduationCap size={16} />
                  <span className="text-xs font-bold uppercase tracking-wider">Education</span>
                </div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">Computer Science</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Information Systems · 2026</div>
              </div>

              <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
                <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 mb-1.5">
                  <Code size={16} />
                  <span className="text-xs font-bold uppercase tracking-wider">Focus</span>
                </div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">Software Development</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Java, Kotlin, React & SQL</div>
              </div>

              <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 mb-1.5">
                  <Layers size={16} />
                  <span className="text-xs font-bold uppercase tracking-wider">Currently Building</span>
                </div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">Islamic Companion</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Android · Kotlin · Offline-first</div>
              </div>

              <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
                <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 mb-1.5">
                  <Compass size={16} />
                  <span className="text-xs font-bold uppercase tracking-wider">Learning</span>
                </div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">Full-Stack Architecture</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">APIs, Coroutines & Cloud Services</div>
              </div>
            </div>

            {/* Read More Accordion & CV Download Button */}
            <div className="mt-6 sm:mt-7 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setExpanded(!expanded)}
                className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-800 dark:text-slate-200 font-medium text-xs sm:text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shadow-2xs cursor-pointer"
              >
                <span>{expanded ? 'Show Less' : 'My Engineering Principles'}</span>
                {expanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-medium text-xs sm:text-sm transition-colors cursor-pointer border border-slate-200/80 dark:border-slate-700"
              >
                <FileDown size={15} className="text-indigo-600 dark:text-indigo-400" />
                <span>Request Resume / CV</span>
              </a>
            </div>

            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{opacity: 0, height: 0}}
                  animate={{opacity: 1, height: 'auto'}}
                  exit={{opacity: 0, height: 0}}
                  transition={{duration: 0.3, ease: [0.16, 1, 0.3, 1] as const}}
                  className="overflow-hidden mt-4"
                >
                  <div className="p-5 sm:p-6 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <h4 className="font-outfit font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                      Core Foundations Over Ephemeral Hype
                    </h4>
                    <p>
                      I believe in understanding core computer science principles: solid object-oriented structure in Java, relational data normalization in SQL, and modular component hierarchy in modern web applications.
                    </p>
                    <p>
                      I embrace modern AI automation tools as productivity amplifiers for testing and fast prototyping, while keeping complete ownership of code quality, architecture, and maintainability.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* RIGHT: Profile Card & Dedicated Currently Building Spotlight Card */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-4 w-full">
            {/* Profile Glance Card */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 shadow-sm backdrop-blur-xl relative overflow-hidden group hover:border-indigo-500/40 transition-colors">
              <div className="flex items-center gap-3.5">
                <div className="w-14 h-14 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shrink-0 bg-slate-200 dark:bg-slate-800">
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
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                    Software Developer
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Nangarhar University · CS & IS
                  </p>
                </div>
              </div>
            </div>

            {/* 18. CURRENTLY BUILDING Dedicated Feature Card */}
            <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-indigo-50/80 via-white/80 to-sky-50/50 dark:from-slate-900/90 dark:via-slate-900/90 dark:to-indigo-950/40 border border-indigo-200/70 dark:border-indigo-900/50 shadow-sm backdrop-blur-xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-indigo-600 dark:text-indigo-400">
                  Currently Building
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  In Development
                </span>
              </div>

              <h4 className="text-base sm:text-lg font-bold font-outfit text-slate-900 dark:text-white">
                Islamic Companion
              </h4>

              <div className="text-xs text-slate-500 dark:text-slate-400 my-1 font-mono">
                Android · Kotlin · Offline-first
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mt-2">
                A focused spiritual mindfulness app engineered with local Room database persistence, accurate prayer timetables, clean typography, and zero background tracking.
              </p>

              <div className="mt-4 pt-3 border-t border-slate-200/70 dark:border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-slate-400 text-[11px]">Target: Native Android</span>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-1 font-semibold text-indigo-600 dark:text-indigo-400 hover:underline text-xs"
                >
                  <span>View in Projects</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
