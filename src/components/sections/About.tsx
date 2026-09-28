import {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {GraduationCap, Code, Sparkles, ChevronDown, ChevronUp, Compass} from 'lucide-react';

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
    hidden: {opacity: 0, y: 20},
    visible: {
      opacity: 1,
      y: 0,
      transition: {duration: 0.5, ease: [0.16, 1, 0.3, 1] as const},
    },
  };

  return (
    <section id="about" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/40 dark:bg-[#07090e] relative overflow-hidden transition-colors duration-300">
      {/* Section-Specific Atmospheric Gradient Background */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 -left-20 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-indigo-500/15 via-sky-500/10 to-transparent dark:from-indigo-600/15 dark:via-cyan-600/10 dark:to-transparent blur-[85px]" />
        <div className="absolute -bottom-20 -right-20 w-[420px] h-[420px] rounded-full bg-gradient-to-tl from-purple-500/15 via-indigo-500/10 to-transparent dark:from-purple-600/15 dark:via-indigo-600/10 dark:to-transparent blur-[85px]" />
        <div className="absolute inset-0 bg-tech-grid-light dark:bg-tech-grid-dark opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start"
        >
          {/* LEFT: Section Label, Heading & Core Narrative */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <span className="inline-flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-xs mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
              01 — ABOUT
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-outfit tracking-tight text-slate-900 dark:text-white mb-5 leading-tight text-balance">
              Building practical software with curiosity &{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500 dark:from-indigo-400 dark:via-sky-300 dark:to-cyan-300 bg-clip-text text-transparent">
                consistent discipline
              </span>
            </h2>

            <div className="space-y-3.5 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              <p>
                I’m Abdul Jalil Zwak, a Computer Science student with a growing passion for software
                development and digital technologies.
              </p>
              <p>
                I’m currently focused on building practical applications and websites while
                strengthening my foundations in programming, databases, and modern web development.
              </p>
              <p>
                I also explore AI tools and automation to make development faster, smarter, and more
                efficient.
              </p>
              <p>
                My long-term goal is to become a skilled software developer capable of building
                complex, scalable, and full-stack applications that solve real-world problems.
              </p>
            </div>

            {/* Read More Accordion */}
            <div className="mt-6 sm:mt-7">
              <button
                onClick={() => setExpanded(!expanded)}
                className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-900 dark:text-white font-medium text-xs sm:text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shadow-2xs cursor-pointer"
              >
                <span>{expanded ? 'Show Less' : 'Read More About Me'}</span>
                {expanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
              </button>

              <AnimatePresence>
                {expanded && (
                  <motion.div
                    initial={{opacity: 0, height: 0}}
                    animate={{opacity: 1, height: 'auto'}}
                    exit={{opacity: 0, height: 0}}
                    transition={{duration: 0.35, ease: [0.16, 1, 0.3, 1] as const}}
                    className="overflow-hidden mt-5"
                  >
                    <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <h4 className="font-outfit font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                        My Approach to Engineering & Growth
                      </h4>
                      <p>
                        Rather than jumping directly to hype, I believe in mastering foundational
                        concepts: understanding object-oriented design in Java, relational
                        normalization and indexing in SQL, and clean modular component architecture in
                        modern web applications.
                      </p>
                      <p>
                        AI tools are an empowering accelerator in my toolkit. I utilize AI for rapid
                        prototyping, code validation, and workflow automation while ensuring every
                        architectural decision is understood, tested, and maintainable.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* RIGHT: Developer Identity Card with Exact Requested Factual Items */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-4 w-full">
            <div className="p-5 sm:p-6 rounded-3xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 shadow-sm backdrop-blur-xl relative overflow-hidden group hover:border-indigo-500/40 transition-colors">
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-indigo-500/30 shrink-0 bg-slate-200 dark:bg-slate-800">
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
                    CS Student & Aspiring Developer
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-mono">
                    Computer Science · 2026
                  </p>
                </div>
              </div>

              {/* Exact Requested Factual Information Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/60 shadow-2xs hover:border-indigo-400/50 transition-colors">
                  <div className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 mb-0.5">
                    <GraduationCap size={14} />
                    <span className="text-[10px] font-mono uppercase tracking-wider font-semibold">
                      Academics
                    </span>
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">Computer Science</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">Information Systems</div>
                </div>

                <div className="p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/60 shadow-2xs hover:border-sky-400/50 transition-colors">
                  <div className="flex items-center gap-1.5 text-sky-600 dark:text-sky-400 mb-0.5">
                    <Code size={14} />
                    <span className="text-[10px] font-mono uppercase tracking-wider font-semibold">
                      Building
                    </span>
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">Practical Digital</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">Solutions & Apps</div>
                </div>

                <div className="p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/60 shadow-2xs hover:border-purple-400/50 transition-colors">
                  <div className="flex items-center gap-1.5 text-purple-600 dark:text-purple-400 mb-0.5">
                    <Sparkles size={14} />
                    <span className="text-[10px] font-mono uppercase tracking-wider font-semibold">
                      Exploring
                    </span>
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">AI & Automation</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">Tools & Workflows</div>
                </div>

                <div className="p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/60 shadow-2xs hover:border-emerald-400/50 transition-colors">
                  <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 mb-0.5">
                    <Compass size={14} />
                    <span className="text-[10px] font-mono uppercase tracking-wider font-semibold">
                      Growing Toward
                    </span>
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">Full-Stack Dev</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">Software Engineering</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
