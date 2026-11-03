import {motion} from 'framer-motion';
import {Smartphone, Globe, Database, Wrench, Terminal, BookOpen, Layers, CheckCircle2} from 'lucide-react';
import {skillGroups, skillRoadmapTiers} from '../../data/skills';
import {useLanguage} from '../../context/LanguageContext';
import {SkillStatus} from '../../types';

const categoryIcons: Record<string, React.ReactNode> = {
  'Android Development': <Smartphone size={20} className="text-emerald-600 dark:text-emerald-400" />,
  'Web Development': <Globe size={20} className="text-indigo-600 dark:text-indigo-400" />,
  Databases: <Database size={20} className="text-sky-600 dark:text-sky-400" />,
  'Development Tools': <Wrench size={20} className="text-amber-600 dark:text-amber-400" />,
  'Automation & Scripting': <Terminal size={20} className="text-purple-600 dark:text-purple-400" />,
};

const categoryTranslations: Record<string, {ps: string; fa: string}> = {
  'Android Development': {ps: 'د انډروایډ اپلیکیشن جوړول', fa: 'توسعه اپلیکیشن اندروید'},
  'Web Development': {ps: 'د وېب مخپاڼو پرمختیا', fa: 'توسعه وب و رابط کاربری'},
  Databases: {ps: 'د ډېټابېس سیستمونه', fa: 'سیستم‌های پایگاه داده'},
  'Development Tools': {ps: 'کاري چاپېریال او اوزارونه', fa: 'محیط توسعه و ابزارها'},
  'Automation & Scripting': {ps: 'اتوماسیون او د کار چټکول', fa: 'اتوماسیون و اسکریپت‌نویسی'},
};

// Truthful status badge styling
const statusStyles: Record<SkillStatus, {badge: string; text: string}> = {
  'Applied in Projects': {
    badge: 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border-emerald-200/70 dark:border-emerald-800/60',
    text: 'text-emerald-600 dark:text-emerald-400',
  },
  'Practical Experience': {
    badge: 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border-indigo-200/70 dark:border-indigo-800/60',
    text: 'text-indigo-600 dark:text-indigo-400',
  },
  'Active Coursework': {
    badge: 'bg-sky-50 dark:bg-sky-950/50 text-sky-700 dark:text-sky-300 border-sky-200/70 dark:border-sky-800/60',
    text: 'text-sky-600 dark:text-sky-400',
  },
  'Learning Foundations': {
    badge: 'bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border-amber-200/70 dark:border-amber-800/60',
    text: 'text-amber-600 dark:text-amber-400',
  },
  'Currently Learning': {
    badge: 'bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border-purple-200/70 dark:border-purple-800/60',
    text: 'text-purple-600 dark:text-purple-400',
  },
};

const statusTranslations: Record<SkillStatus, {ps: string; fa: string}> = {
  'Applied in Projects': {ps: 'په پروژو کې کارول شوی', fa: 'به‌کاررفته در پروژه‌ها'},
  'Practical Experience': {ps: 'عملي کاري تجربه', fa: 'تجربه عملی'},
  'Active Coursework': {ps: 'پوهنتوني درسي تمرین', fa: 'دروس دانشگاهی'},
  'Learning Foundations': {ps: 'اساسي بنسټونه', fa: 'مبانی پایه'},
  'Currently Learning': {ps: 'د زده کړې لاندې', fa: 'در حال یادگیری'},
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
    hidden: {opacity: 0, y: 16},
    visible: {
      opacity: 1,
      y: 0,
      transition: {duration: 0.45, ease: [0.16, 1, 0.3, 1] as const},
    },
  };

  return (
    <section
      id="skills"
      className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-[#07090e] relative overflow-hidden transition-colors duration-300"
    >
      {/* Restrained Ambient Gradient Lighting */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 -right-20 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-indigo-500/10 via-sky-500/8 to-transparent dark:from-indigo-600/10 dark:via-sky-600/8 dark:to-transparent blur-[80px]" />
        <div className="absolute -bottom-24 -left-20 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-emerald-500/10 via-purple-500/8 to-transparent dark:from-emerald-600/10 dark:via-purple-600/8 dark:to-transparent blur-[80px]" />
        <div className="absolute inset-0 bg-tech-grid-light dark:bg-tech-grid-dark opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{opacity: 0, y: 14}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.2}}
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
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-xs sm:text-sm leading-relaxed">
            {t.skills.subtitle}
          </p>
        </motion.div>

        {/* 5 Real Skill Category Cards - Organized with Truthful Status Labels & Real Project Association */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.15}}
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
                {/* Soft Ambient Hover Underglow */}
                <div className="card-soft-underglow" />

                <div className="relative z-10 p-5 sm:p-6 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-slate-200/90 dark:border-slate-800 group-hover:border-indigo-500/50 shadow-xs group-hover:shadow-xl group-hover:shadow-indigo-500/10 group-hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between backdrop-blur-sm h-full">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center group-hover:scale-105 transition-transform">
                        {categoryIcons[group.category] || (
                          <Layers size={18} className="text-indigo-600 dark:text-indigo-400" />
                        )}
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                        {group.items.length} {t.skills.competenciesSuffix}
                      </span>
                    </div>

                    <h3 className="text-base font-bold font-outfit text-slate-900 dark:text-white mb-1.5">
                      {localizedCategoryName}
                    </h3>

                    {group.description && (
                      <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                        {group.description}
                      </p>
                    )}

                    {/* Skill Cards List - Clean, Truthful Status Labels & Project Association (Zero Progress Bars) */}
                    <div className="space-y-2.5">
                      {group.items.map((skill) => {
                        const style = skill.status ? statusStyles[skill.status] : null;
                        const localizedStatus =
                          skill.status && language !== 'en' && statusTranslations[skill.status]
                            ? statusTranslations[skill.status][language as 'ps' | 'fa']
                            : skill.status;

                        return (
                          <div
                            key={skill.name}
                            className="p-3 rounded-xl bg-slate-50/90 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                          >
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-xs font-bold text-slate-900 dark:text-slate-100 font-mono">
                                {skill.name}
                              </span>

                              {skill.status && (
                                <span
                                  className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md border ${
                                    style?.badge || 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700'
                                  }`}
                                >
                                  {localizedStatus}
                                </span>
                              )}
                            </div>

                            {/* Project Association Evidence (Truthful) */}
                            {skill.projectAssociation && (
                              <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                                <span className="text-indigo-600 dark:text-indigo-400 font-medium">↳</span>
                                <span className="truncate">{skill.projectAssociation}</span>
                              </div>
                            )}

                            {/* Short truthful notes */}
                            {skill.notes && (
                              <div className="text-[10.5px] text-slate-400 dark:text-slate-500 mt-1 leading-snug">
                                {skill.notes}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 font-mono">
                    <span>{t.skills.activeCapability}</span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-medium">{t.skills.appliedInCode}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* 3-Tier Skill Roadmap Matrix (Established Foundations · Actively Developing · Targeted Roadmap) */}
        <motion.div
          initial={{opacity: 0, y: 16}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.2}}
          transition={{duration: 0.45, ease: [0.16, 1, 0.3, 1]}}
          className="mt-10 sm:mt-12 group relative"
        >
          <div className="card-soft-underglow" />

          <div className="relative z-10 p-5 sm:p-7 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-slate-200/90 dark:border-slate-800 group-hover:border-indigo-500/50 shadow-xs group-hover:shadow-xl group-hover:shadow-indigo-500/10 transition-all duration-300 backdrop-blur-sm">
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

              <span className="text-xs text-indigo-600 dark:text-indigo-400 font-mono self-start md:self-auto font-medium">
                {t.skills.inStudyBadge}
              </span>
            </div>

            {/* 3-Tier Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {skillRoadmapTiers.map((tier) => (
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
