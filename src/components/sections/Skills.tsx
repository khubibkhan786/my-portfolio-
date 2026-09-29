import {motion} from 'framer-motion';
import {Code2, Database, Laptop, Cpu, BookOpen, Wrench, CheckCircle2} from 'lucide-react';
import {skillGroups, skillMaturityTiers} from '../../data/skills';
import {useLanguage} from '../../context/LanguageContext';

const categoryIcons: Record<string, React.ReactNode> = {
  Programming: <Code2 size={20} className="text-indigo-600 dark:text-indigo-400" />,
  'Web Development': <Laptop size={20} className="text-sky-600 dark:text-sky-400" />,
  Databases: <Database size={20} className="text-emerald-600 dark:text-emerald-400" />,
  'Tools & Workflow': <Wrench size={20} className="text-amber-600 dark:text-amber-400" />,
  'AI & Automation': <Cpu size={20} className="text-purple-600 dark:text-purple-400" />,
};

const categoryTranslations: Record<string, {ps: string; fa: string}> = {
  Programming: {ps: 'پروګرامینګ', fa: 'برنامه‌نویسی'},
  'Web Development': {ps: 'وېب پرمختیا', fa: 'توسعه وب'},
  Databases: {ps: 'ډېټابېسونه', fa: 'پایگاه داده'},
  'Tools & Workflow': {ps: 'کاري وسایل', fa: 'ابزارهای کاری'},
  'AI & Automation': {ps: 'مصنوعي هوښیارتیا او اتومات', fa: 'هوش مصنوعی و اتوماسیون'},
};

export function Skills() {
  const {t, language, isRtl} = useLanguage();

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
    hidden: {opacity: 0, y: 16, scale: 0.98},
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {duration: 0.45, ease: [0.16, 1, 0.3, 1] as const},
    },
  };

  return (
    <section id="skills" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/60 dark:bg-[#07090e] relative overflow-hidden transition-colors duration-300">
      {/* Soft Ambient Glow Background */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 -right-20 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-emerald-500/10 via-sky-500/8 to-transparent dark:from-emerald-600/10 dark:via-sky-600/8 dark:to-transparent blur-[85px]" />
        <div className="absolute -bottom-24 -left-20 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-indigo-500/10 via-purple-500/8 to-transparent dark:from-indigo-600/10 dark:via-purple-600/8 dark:to-transparent blur-[85px]" />
        <div className="absolute inset-0 bg-tech-grid-light dark:bg-tech-grid-dark opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{opacity: 0, y: 16}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{ once: false, amount: 0.2 }}
          transition={{duration: 0.45, ease: [0.16, 1, 0.3, 1]}}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-14"
        >
          <span className="inline-flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-xs mb-2.5 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
            {t.skills.tag}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-outfit tracking-tight text-slate-900 dark:text-white leading-tight">
            {t.skills.headline}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-xs sm:text-sm">
            {t.skills.subtitle}
          </p>
        </motion.div>

        {/* 5 Real Skill Categories with Project Evidence and Animated Progress Bars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skillGroups.map((group) => {
            const localizedCategoryName =
              language !== 'en' && categoryTranslations[group.category]
                ? categoryTranslations[group.category][language as 'ps' | 'fa']
                : group.category;

            return (
              <motion.div
                key={group.category}
                variants={cardVariants}
                className="group relative flex flex-col justify-between"
              >
                {/* Soft Ambient Hover Underglow ("نرم رنګ") */}
                <div className="card-soft-underglow" />

                <div className="relative z-10 p-5 sm:p-6 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-slate-200/90 dark:border-slate-800 group-hover:border-indigo-500/50 dark:group-hover:border-indigo-500/50 shadow-xs group-hover:shadow-2xl group-hover:shadow-indigo-500/10 group-hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between backdrop-blur-sm h-full">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center group-hover:scale-105 transition-transform">
                        {categoryIcons[group.category] || (
                          <Code2 size={20} className="text-indigo-600 dark:text-indigo-400" />
                        )}
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                        {group.items.length} {t.skills.competenciesSuffix}
                      </span>
                    </div>

                    <h3 className="text-base font-bold font-outfit text-slate-900 dark:text-white mb-3">
                      {localizedCategoryName}
                    </h3>

                    {/* Skill List with GPU-Accelerated Animated Proficiency Bars */}
                    <div className="space-y-2.5">
                      {group.items.map((skill) => {
                        const pct = skill.proficiency || 85;
                        return (
                          <div
                            key={skill.name}
                            className="p-2.5 rounded-xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                          >
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 font-mono truncate">
                                {skill.name}
                              </span>
                              <CheckCircle2 size={13} className="text-emerald-500/80 shrink-0" />
                            </div>

                            {/* Low-spec 60fps GPU Composited Progress Rail */}
                            <div
                              className="h-1.5 w-full bg-slate-200/70 dark:bg-slate-800 rounded-full overflow-hidden"
                              role="progressbar"
                              aria-valuenow={pct}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              aria-label={`${skill.name} proficiency`}
                            >
                              <motion.div
                                initial={{scaleX: 0}}
                                whileInView={{scaleX: pct / 100}}
                                viewport={{once: true, amount: 0.2}}
                                transition={{
                                  duration: 0.85,
                                  ease: [0.16, 1, 0.3, 1],
                                  delay: 0.05,
                                }}
                                style={{
                                  transformOrigin: isRtl ? 'right' : 'left',
                                  willChange: 'transform',
                                }}
                                className="h-full w-full rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400 dark:from-indigo-400 dark:via-sky-400 dark:to-emerald-400 transform-gpu"
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500">
                    <span>{t.skills.activeCapability}</span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-medium">{t.skills.appliedInCode}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Distinct Skill Maturity Matrix (Foundations · Developing · Learning Next) */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{ once: false, amount: 0.2 }}
          transition={{duration: 0.45, ease: [0.16, 1, 0.3, 1] as const}}
          className="mt-10 sm:mt-12 group relative"
        >
          {/* Soft Ambient Hover Underglow */}
          <div className="card-soft-underglow" />

          <div className="relative z-10 p-5 sm:p-7 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 group-hover:border-indigo-500/50 shadow-xs group-hover:shadow-2xl group-hover:shadow-indigo-500/10 transition-all duration-300 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                  <BookOpen size={16} />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold font-outfit text-slate-900 dark:text-white">
                    {t.skills.activeLearningTitle}
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {t.skills.activeLearningSubtitle}
                  </p>
                </div>
              </div>

              <span className="text-xs text-indigo-600 dark:text-indigo-400 font-mono self-start md:self-auto">
                {t.skills.inStudyBadge}
              </span>
            </div>

            {/* 3-Tier Grid: Current Foundations, Actively Developing, Learning Next */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {skillMaturityTiers.map((tier) => (
                <div
                  key={tier.id}
                  className="p-4 rounded-xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-800 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h4 className="text-xs font-bold font-outfit text-slate-900 dark:text-white">
                        {tier.title}
                      </h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-indigo-100/70 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 font-semibold border border-indigo-200/60 dark:border-indigo-800/60">
                        {tier.badge}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-3 leading-relaxed">
                      {tier.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {tier.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-mono text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 px-2 py-1 rounded-md border border-slate-200/80 dark:border-slate-700/80 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
