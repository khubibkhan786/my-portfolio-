import {motion} from 'framer-motion';
import {AppWindow, Globe, Bot, Zap, ArrowUpRight, Target, ShieldCheck, Sparkles} from 'lucide-react';
import {services, futureGrowth} from '../../data/services';
import {cn} from '../../lib/utils';

const iconMap: Record<string, React.ReactNode> = {
  AppWindow: <AppWindow size={22} className="text-indigo-600 dark:text-indigo-400" />,
  Globe: <Globe size={22} className="text-sky-600 dark:text-sky-400" />,
  Bot: <Bot size={22} className="text-purple-600 dark:text-purple-400" />,
  Zap: <Zap size={22} className="text-amber-600 dark:text-amber-400" />,
};

export function Services() {
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
    hidden: {opacity: 0, y: 22, scale: 0.98},
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {duration: 0.5, ease: [0.16, 1, 0.3, 1] as const},
    },
  };

  return (
    <section id="services" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/30 dark:bg-[#07090e] relative overflow-hidden transition-colors duration-300">
      {/* Section-Specific Atmospheric Gradient Background (Violet & Electric Indigo Theme) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/3 -left-20 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-purple-500/15 via-indigo-500/10 to-transparent dark:from-purple-600/15 dark:via-indigo-600/10 dark:to-transparent blur-[85px]" />
        <div className="absolute -bottom-20 -right-20 w-[420px] h-[420px] rounded-full bg-gradient-to-tl from-sky-500/15 via-indigo-500/10 to-transparent dark:from-cyan-600/15 dark:via-indigo-600/10 dark:to-transparent blur-[85px]" />
        <div className="absolute inset-0 bg-tech-grid-light dark:bg-tech-grid-dark opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{opacity: 0, y: 18}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{ once: false, amount: 0.2 }}
          transition={{duration: 0.45, ease: [0.16, 1, 0.3, 1]}}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-4 sm:gap-6"
        >
          <div>
            <span className="inline-flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-xs mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
              03 — SERVICES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-outfit tracking-tight text-slate-900 dark:text-white leading-tight">
              Practical Development Services
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 max-w-md text-xs sm:text-sm leading-relaxed">
            I craft lightweight applications and responsive web experiences tailored to specific needs,
            enhanced with modern automation.
          </p>
        </motion.div>

        {/* 4 Premium Service Cards with Clear Primary / Secondary Hierarchy */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12 sm:mb-14"
        >
          {services.map((service, idx) => {
            const indexString = `0${idx + 1}`;
            const isPrimary = idx < 2;

            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{y: -4, transition: {duration: 0.2}}}
                className={cn(
                  'group p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-lg',
                  isPrimary
                    ? 'bg-gradient-to-b from-indigo-500/[0.04] to-transparent dark:from-indigo-950/20 dark:to-slate-900/60 border-indigo-200/90 dark:border-indigo-900/60 hover:border-indigo-500'
                    : 'bg-slate-50/70 dark:bg-slate-900/70 border-slate-200/90 dark:border-slate-800/90 hover:border-slate-300 dark:hover:border-slate-700'
                )}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center shadow-2xs group-hover:scale-105 group-hover:border-indigo-500/40 transition-all">
                      {iconMap[service.icon] || (
                        <AppWindow size={22} className="text-indigo-600 dark:text-indigo-400" />
                      )}
                    </div>
                    <div className="flex items-center gap-1.5">
                      {isPrimary && (
                        <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-semibold">
                          Core
                        </span>
                      )}
                      <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {indexString}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold font-outfit text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                  <span className="text-[11px]">Available for Projects</span>
                  <ArrowUpRight
                    size={14}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Future Horizon: Growing Toward Section */}
        <motion.div
          initial={{opacity: 0, y: 24}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{ once: false, amount: 0.2 }}
          transition={{duration: 0.5, ease: [0.16, 1, 0.3, 1] as const}}
          className="p-6 sm:p-9 rounded-3xl bg-slate-900 dark:bg-slate-900/90 text-white border border-slate-800 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-500/15 blur-[120px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-2">
                <Target size={13} />
                <span>Future Horizon</span>
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold font-outfit mb-1.5">
                Growing Toward Complex Systems
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                As I advance in my Computer Science degree, I am intentionally building the foundations
                required for large-scale production architectures.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {futureGrowth.map((capability) => (
                <div
                  key={capability}
                  className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-200 backdrop-blur-md flex items-center gap-1.5"
                >
                  <ShieldCheck size={14} className="text-indigo-400 shrink-0" />
                  <span>{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
