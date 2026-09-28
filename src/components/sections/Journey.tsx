import {motion} from 'framer-motion';
import {Calendar, Sparkles, Milestone, ArrowRight} from 'lucide-react';
import {journeySteps} from '../../data/journey';

export function Journey() {
  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const stepVariants = {
    hidden: {opacity: 0, y: 16},
    visible: {
      opacity: 1,
      y: 0,
      transition: {duration: 0.45, ease: [0.16, 1, 0.3, 1] as const},
    },
  };

  return (
    <section id="journey" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/40 dark:bg-[#07090e] relative overflow-hidden transition-colors duration-300">
      {/* Subtle Atmospheric Gradient */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 -right-20 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-indigo-500/10 via-purple-500/8 to-transparent dark:from-indigo-600/10 dark:via-purple-600/8 dark:to-transparent blur-[85px]" />
        <div className="absolute -bottom-24 -left-20 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-amber-500/8 via-indigo-500/8 to-transparent dark:from-amber-600/8 dark:via-indigo-600/8 dark:to-transparent blur-[85px]" />
        <div className="absolute inset-0 bg-tech-grid-light dark:bg-tech-grid-dark opacity-20" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{opacity: 0, y: 16}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{ once: false, amount: 0.2 }}
          transition={{duration: 0.45, ease: [0.16, 1, 0.3, 1]}}
          className="text-center max-w-xl mx-auto mb-14 sm:mb-16"
        >
          <span className="inline-flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-xs mb-2.5">
            <Milestone size={13} />
            <span>05 — MILESTONES & PATH</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-outfit tracking-tight text-slate-900 dark:text-white leading-tight">
            My Learning Journey
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-xs sm:text-sm">
            Continuous progression from fundamentals to software engineering.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Slender Vertical Connecting Line */}
          <div className="absolute left-5 md:left-1/2 top-4 bottom-4 w-px -translate-x-1/2 bg-slate-200 dark:bg-slate-800" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="space-y-8 sm:space-y-10"
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
                          ? 'bg-white dark:bg-slate-900 border border-indigo-500/60 shadow-sm shadow-indigo-500/5'
                          : isNext
                          ? 'bg-white/80 dark:bg-slate-900/60 border border-dashed border-indigo-300 dark:border-indigo-800'
                          : 'bg-white/80 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 shadow-2xs'
                      }`}
                    >
                      {/* Milestone Header - Unboxed Typography */}
                      <div className="flex items-center gap-2 mb-2 text-xs text-slate-500 dark:text-slate-400">
                        <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400">
                          {step.year}
                        </span>

                        {isCurrent && (
                          <>
                            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              Current Focus
                            </span>
                          </>
                        )}

                        {isNext && (
                          <>
                            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-purple-600 dark:text-purple-400">
                              <Sparkles size={11} />
                              Next Milestone
                            </span>
                          </>
                        )}
                      </div>

                      <h3 className="text-base font-bold font-outfit text-slate-900 dark:text-white mb-1.5">
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
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                        isCurrent
                          ? 'bg-indigo-600 text-white shadow-sm ring-2 ring-indigo-300 dark:ring-indigo-900'
                          : isNext
                          ? 'bg-purple-600 text-white shadow-sm ring-2 ring-purple-300 dark:ring-purple-900'
                          : 'bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-400'
                      }`}
                    >
                      {isCurrent ? (
                        <span className="w-2 h-2 rounded-full bg-white" />
                      ) : isNext ? (
                        <ArrowRight size={11} />
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
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
