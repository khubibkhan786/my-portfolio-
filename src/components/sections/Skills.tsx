import {motion} from 'framer-motion';
import {Code2, Smartphone, Globe, Database, Wrench, Compass, BookOpen} from 'lucide-react';
import {verifiedSkillCategories, learningRoadmapGroups} from '../../data/skills';
import {useLanguage} from '../../context/LanguageContext';

const categoryIcons: Record<string, React.ReactNode> = {
  'Programming Languages': <Code2 size={18} className="text-indigo-600 dark:text-indigo-400" />,
  'Android Development': <Smartphone size={18} className="text-emerald-600 dark:text-emerald-400" />,
  'Web Development': <Globe size={18} className="text-sky-600 dark:text-sky-400" />,
  Databases: <Database size={18} className="text-indigo-600 dark:text-indigo-400" />,
  'Development Tools': <Wrench size={18} className="text-amber-600 dark:text-amber-400" />,
};

const categoryTranslations: Record<string, {ps: string; fa: string; taglinePs?: string; taglineFa?: string}> = {
  'Programming Languages': {
    ps: 'د پروګرامینګ ژبې',
    fa: 'زبان‌های برنامه‌نویسی',
    taglinePs: 'هغه اساسي ژبې چې په پوهنتون او پروژو کې کارول شوې دي',
    taglineFa: 'زبان‌های اصلی آموخته‌شده و به‌کاررفته در پروژه‌ها',
  },
  'Android Development': {
    ps: 'د انډروایډ پرمختیا',
    fa: 'توسعه اندروید',
    taglinePs: 'د موبایل بومي اپلیکیشن جوړونه او افلاین سیستمونه',
    taglineFa: 'توسعه بومی اپلیکیشن موبایل با عملکرد آفلاین',
  },
  'Web Development': {
    ps: 'د وېب پرمختیا',
    fa: 'توسعه وب',
    taglinePs: 'د عصري او ځواب ویونکو وېب مخپاڼو جوړول',
    taglineFa: 'طراحی رابط‌های کاربری مدرن و واکنش‌گرا',
  },
  Databases: {
    ps: 'ډېټابېسونه',
    fa: 'پایگاه‌های داده',
    taglinePs: 'د اړیکیزو معلوماتو ډیزاین او ذخیره کول',
    taglineFa: 'مدل‌سازی داده‌های رابطه‌ای و ذخیره‌سازی محلی',
  },
  'Development Tools': {
    ps: 'کاري وسایل او اوزارونه',
    fa: 'ابزارهای کاری و توسعه',
    taglinePs: 'د پروژو د مدیریت او کوډ لیکنې ورځنی چاپېریال',
    taglineFa: 'محیط کاری روزمره، کنترل نسخه و ابزارهای ساخت',
  },
};

const roadmapTranslations: Record<string, {title: {ps: string; fa: string}; badge: {ps: string; fa: string}; desc: {ps: string; fa: string}}> = {
  foundations: {
    title: {ps: 'اساسي بنسټونه', fa: 'مبانی پایه‌ای تثبیت‌شده'},
    badge: {ps: 'اصلي', fa: 'اصلی'},
    desc: {
      ps: 'هغه ټکنالوژۍ چې په درسونو او عملي پروژو کې په بشپړ ډول تمرین شوې دي.',
      fa: 'فناوری‌هایی که از طریق دروس دانشگاهی و پروژه‌های عملی تمرین شده‌اند.',
    },
  },
  developing: {
    title: {ps: 'د ودې په حال کې', fa: 'در حال تقویت و توسعه'},
    badge: {ps: 'روان', fa: 'جاری'},
    desc: {
      ps: 'هغه مهارتونه چې په اوسنیو وېب او اکاډمیکو کارونو کې تر تمرین لاندې دي.',
      fa: 'مهارت‌هایی که در پروژه‌های جاری وب و دانشگاهی در حال تقویت هستند.',
    },
  },
  future: {
    title: {ps: 'راتلونکي اهداف', fa: 'اهداف آموزشی پیش‌رو'},
    badge: {ps: 'پلان', fa: 'برنامه‌ریزی'},
    desc: {
      ps: 'د راتلونکو سمسترونو لپاره پلان شوي سافټویر انجینري اهداف.',
      fa: 'حوزه‌های توسعه هدف‌گذاری‌شده برای ترم‌های آتی دانشگاه.',
    },
  },
};

export function Skills() {
  const {t, language, isRtl} = useLanguage();

  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
      },
    },
  };

  const cardVariants = {
    hidden: {opacity: 0, y: 12},
    visible: {
      opacity: 1,
      y: 0,
      transition: {duration: 0.4, ease: [0.16, 1, 0.3, 1] as const},
    },
  };

  return (
    <section
      id="skills"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-[#07090e] relative overflow-hidden transition-colors duration-300"
    >
      {/* Restrained Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 -right-20 w-[380px] h-[380px] rounded-full bg-gradient-to-br from-indigo-500/10 via-sky-500/8 to-transparent dark:from-indigo-600/10 dark:via-sky-600/8 dark:to-transparent blur-[80px]" />
        <div className="absolute -bottom-24 -left-20 w-[360px] h-[360px] rounded-full bg-gradient-to-tr from-emerald-500/10 via-purple-500/8 to-transparent dark:from-emerald-600/10 dark:via-purple-600/8 dark:to-transparent blur-[80px]" />
        <div className="absolute inset-0 bg-tech-grid-light dark:bg-tech-grid-dark opacity-15" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading - Natural Sans-Serif Typography */}
        <motion.div
          initial={{opacity: 0, y: 14}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.2}}
          transition={{duration: 0.45, ease: [0.16, 1, 0.3, 1]}}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold text-xs tracking-wider uppercase mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
            <span>{t.skills.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-outfit tracking-tight text-slate-900 dark:text-white leading-tight">
            {t.skills.headline}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            {t.skills.subtitle}
          </p>
        </motion.div>

        {/* 5 Compact, Consistent Verified Skill Category Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.1}}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {verifiedSkillCategories.map((group) => {
            const translation = categoryTranslations[group.category];
            const localizedCategoryName =
              language !== 'en' && translation ? translation[language as 'ps' | 'fa'] : group.category;
            const localizedTagline =
              language === 'ps' && translation?.taglinePs
                ? translation.taglinePs
                : language === 'fa' && translation?.taglineFa
                ? translation.taglineFa
                : group.tagline;

            return (
              <motion.div
                key={group.category}
                variants={cardVariants}
                className="group relative flex flex-col justify-between"
              >
                <div className="card-soft-underglow" />

                <div className="relative z-10 p-5 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-slate-200/90 dark:border-slate-800 shadow-xs group-hover:border-indigo-500/50 group-hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full backdrop-blur-sm">
                  <div>
                    {/* Header: Icon + Name + Tagline */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center shrink-0">
                        {categoryIcons[group.category] || (
                          <Code2 size={18} className="text-indigo-600 dark:text-indigo-400" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-base font-bold font-outfit text-slate-900 dark:text-white truncate">
                          {localizedCategoryName}
                        </h3>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                          {localizedTagline}
                        </p>
                      </div>
                    </div>

                    {/* Skill Items List */}
                    <div className="space-y-2 mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                      {group.items.map((item) => (
                        <div
                          key={item.name}
                          className="p-2.5 rounded-xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                        >
                          <div className="text-xs font-bold text-slate-900 dark:text-slate-100">
                            {item.name}
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                            {item.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500">
                    <span>{group.items.length} skills</span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-medium">Verified Evidence</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Compact, Scannable 3-Group Learning Roadmap */}
        <motion.div
          initial={{opacity: 0, y: 14}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.15}}
          transition={{duration: 0.45, ease: [0.16, 1, 0.3, 1]}}
          className="mt-10 sm:mt-12 group relative"
        >
          <div className="card-soft-underglow" />

          <div className="relative z-10 p-5 sm:p-6 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-slate-200/90 dark:border-slate-800 shadow-xs group-hover:border-indigo-500/50 transition-all duration-300 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                  <Compass size={16} />
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

              <span className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold self-start sm:self-auto">
                {t.skills.inStudyBadge}
              </span>
            </div>

            {/* 3 Clear Roadmap Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              {learningRoadmapGroups.map((group) => {
                const tr = roadmapTranslations[group.id];
                const localizedTitle =
                  language !== 'en' && tr ? tr.title[language as 'ps' | 'fa'] : group.title;
                const localizedBadge =
                  language !== 'en' && tr ? tr.badge[language as 'ps' | 'fa'] : group.badge;
                const localizedDesc =
                  language !== 'en' && tr ? tr.desc[language as 'ps' | 'fa'] : group.description;

                return (
                  <div
                    key={group.id}
                    className="p-4 rounded-xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-800 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <h4 className="text-xs font-bold font-outfit text-slate-900 dark:text-white">
                          {localizedTitle}
                        </h4>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-indigo-100/70 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60">
                          {localizedBadge}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-3 leading-relaxed">
                        {localizedDesc}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 px-2 py-1 rounded-md border border-slate-200/80 dark:border-slate-700/80 font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
