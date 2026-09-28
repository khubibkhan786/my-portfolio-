import {motion} from 'framer-motion';
import {Calendar, Sparkles, Milestone, ArrowRight} from 'lucide-react';
import {journeySteps} from '../../data/journey';

export function Journey() {
  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const stepVariants = {
    hidden: {opacity: 0, y: 24, scale: 0.98},
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {duration: 0.5, ease: [0.16, 1, 0.3, 1] as const},
    },
  };

  return (
    <section id="journey" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/40 dark:bg-[#07090e] relative overflow-hidden transition-colors duration-300">
      {/* Section-Specific Atmospheric Gradient Background (Warm Amber & Indigo Pathway Theme) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 -right-20 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-indigo-500/15 via-purple-500/10 to-transparent dark:from-indigo-600/15 dark:via-purple-600/10 dark:to-transparent blur-[85px]" />
        <div className="absolute -bottom-24 -left-20 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-amber-500/12 via-indigo-500/10 to-transparent dark:from-amber-600/10 dark:via-indigo-600/10 dark:to-transparent blur-[85px]" />
        <div className="absolute inset-0 bg-tech-grid-light dark:bg-tech-grid-dark opacity-30" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{opacity: 0, y: 18}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{ once: false, amount: 0.2 }}
          transition={{duration: 0.45, ease: [0.16, 1, 0.3, 1]}}
          className="text-center max-w-2xl mx-auto mb-14 sm:mb-16"
        >
          <span className="inline-flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-xs mb-2.5">
            <Milestone size={13} />
            <span>05 — PATH & MILESTONES</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-outfit tracking-tight text-slate-900 dark:text-white leading-tight">
            My Learning Journey
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-xs sm:text-sm">
            From foundational digital literacy to Computer Science and software engineering.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Connecting Guide Line */}
          <div className="absolute left-5 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-indigo-500/40 via-sky-500/30 to-purple-500/20 dark:from-indigo-500/50 dark:via-sky-500/30 dark:to-purple-500/20" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="space-y-8 sm:space-y-12"
          >
            {journeySteps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const isCurrent = step.year === '2026';
              const isNext = step.year === 'Next';

              return (
                <motion.div
                  key={step.year}
                  variants={stepVariants}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Step Card Content */}
                  <div className="flex-1 w-full pl-11 md:pl-0">
                    <div
                      className={`p-5 sm:p-6 rounded-2xl transition-all duration-300 relative ${
                        isCurrent
                          ? 'bg-white dark:bg-slate-900 border-2 border-indigo-500/80 shadow-lg shadow-indigo-500/5'
                          : isNext
                          ? 'bg-gradient-to-br from-indigo-500/5 to-purple-500/5 dark:from-indigo-950/20 dark:to-purple-950/20 border border-dashed border-indigo-300 dark:border-indigo-800'
                          : 'bg-white/80 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 shadow-2xs'
                      }`}
                    >
                      {/* Milestone Header */}
                      <div className="flex items-center gap-2 mb-2.5">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold ${
                            isCurrent
                              ? 'bg-indigo-600 text-white shadow-xs'
                              : isNext
                              ? 'bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          <Calendar size={11} />
                          <span>{step.year}</span>
                        </span>

                        {isCurrent && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Current Focus
                          </span>
                        )}

                        {isNext && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-purple-600 dark:text-purple-400">
                            <Sparkles size={11} />
                            Upcoming Horizon
                          </span>
                        )}
                      </div>

                      <h3 className="text-base sm:text-lg font-bold font-outfit text-slate-900 dark:text-white mb-1.5">
                        {step.title}
                      </h3>

                      <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Node Marker on Center Line */}
                  <div className="absolute left-5 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                        isCurrent
                          ? 'bg-indigo-600 text-white ring-4 ring-indigo-200 dark:ring-indigo-900/60 shadow-md shadow-indigo-600/30'
                          : isNext
                          ? 'bg-purple-600 text-white ring-4 ring-purple-200 dark:ring-purple-900/60'
                          : 'bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {isCurrent ? (
                        <Sparkles size={14} />
                      ) : isNext ? (
                        <ArrowRight size={14} />
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-indigo-500" />
                      )}
                    </div>
                  </div>

                  {/* Spacer for Alternate Grid Symmetry */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
