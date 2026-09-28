import {motion} from 'framer-motion';
import {Code2, Database, Laptop, Cpu, BookOpen, CheckCircle, ArrowRight} from 'lucide-react';
import {skillGroups, learningSkills} from '../../data/skills';

const categoryIcons: Record<string, React.ReactNode> = {
  Programming: <Code2 size={20} className="text-indigo-600 dark:text-indigo-400" />,
  Database: <Database size={20} className="text-sky-600 dark:text-sky-400" />,
  Development: <Laptop size={20} className="text-emerald-600 dark:text-emerald-400" />,
  'AI & Automation': <Cpu size={20} className="text-purple-600 dark:text-purple-400" />,
};

export function Skills() {
  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: {opacity: 0, y: 18, scale: 0.98},
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {duration: 0.45, ease: [0.16, 1, 0.3, 1] as const},
    },
  };

  return (
    <section id="skills" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/60 dark:bg-[#07090e] relative overflow-hidden transition-colors duration-300">
      {/* Section-Specific Atmospheric Gradient Background (Emerald & Cyan Tech Theme) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 -right-20 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-emerald-500/15 via-sky-500/10 to-transparent dark:from-emerald-600/15 dark:via-sky-600/10 dark:to-transparent blur-[85px]" />
        <div className="absolute -bottom-24 -left-20 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-indigo-500/15 via-purple-500/10 to-transparent dark:from-indigo-600/15 dark:via-purple-600/10 dark:to-transparent blur-[85px]" />
        <div className="absolute inset-0 bg-tech-grid-light dark:bg-tech-grid-dark opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{opacity: 0, y: 18}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{ once: false, amount: 0.2 }}
          transition={{duration: 0.45, ease: [0.16, 1, 0.3, 1]}}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-14"
        >
          <span className="inline-flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-xs mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
            02 — TECHNICAL TOOLKIT
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-outfit tracking-tight text-slate-900 dark:text-white leading-tight">
            Current Skills & Competencies
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-xs sm:text-sm">
            Technologies and concepts I actively utilize to design, build, and deploy practical solutions.
          </p>
        </motion.div>

        {/* 4 Primary Skill Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.category}
              variants={cardVariants}
              whileHover={{y: -3, transition: {duration: 0.2}}}
              className="group p-5 sm:p-6 rounded-2xl bg-white/90 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 hover:border-indigo-500/40 dark:hover:border-indigo-500/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {categoryIcons[group.category] || (
                    <Code2 size={20} className="text-indigo-600 dark:text-indigo-400" />
                  )}
                </div>

                <h3 className="text-base font-bold font-outfit text-slate-900 dark:text-white mb-1">
                  {group.category}
                </h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-4">
                  {group.items.length} tools & competencies
                </p>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((skill) => (
                    <span
                      key={skill.name}
                      className="text-[11px] font-medium text-slate-700 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-800/80 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 hover:text-indigo-600 dark:hover:text-indigo-400 px-2.5 py-1 rounded-lg border border-slate-200/70 dark:border-slate-700/70 transition-colors"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1.5 text-[10px] font-mono text-slate-400 dark:text-slate-500">
                <CheckCircle size={12} className="text-emerald-500" />
                <span>Active Capability</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Distinct "Currently Learning" Blueprint Section */}
        <motion.div
          initial={{opacity: 0, y: 24}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{ once: false, amount: 0.2 }}
          transition={{duration: 0.5, ease: [0.16, 1, 0.3, 1] as const}}
          className="mt-12 sm:mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-500/5 via-sky-500/5 to-purple-500/5 dark:from-indigo-950/30 dark:via-slate-900/40 dark:to-purple-950/20 border-2 border-dashed border-indigo-300/60 dark:border-indigo-800/50 relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-600/10 dark:bg-indigo-400/10 border border-indigo-600/20 dark:border-indigo-400/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <BookOpen size={18} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold font-outfit text-slate-900 dark:text-white">
                    Currently Learning
                  </h3>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300">
                    In Progress
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  Future skill targets I am actively studying and experimenting with in coursework
                </p>
              </div>
            </div>

            <span className="text-xs text-indigo-600 dark:text-indigo-400 font-mono flex items-center gap-1">
              <span>Growing toward full-stack capability</span>
              <ArrowRight size={13} />
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {learningSkills.map((skill) => (
              <div
                key={skill}
                className="p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-indigo-100 dark:border-indigo-900/40 text-center shadow-2xs hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors"
              >
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 block truncate">
                  {skill}
                </span>
                <span className="text-[9px] text-indigo-600/80 dark:text-indigo-400/80 font-mono mt-0.5 block">
                  Target
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
