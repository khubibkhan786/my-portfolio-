import {useState, useMemo} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {
  Code2,
  CheckCircle2,
  BookOpen,
  Terminal,
  Database,
  Smartphone,
  Globe,
  Layers,
  Cpu,
  GitBranch,
  Monitor
} from 'lucide-react';
import {
  practicalSkills,
  currentlyLearningSkills,
  SkillItem,
  SkillStatus
} from '../../data/skills';
import {useLanguage} from '../../context/LanguageContext';
import {cn} from '../../lib/utils';

type SkillFilter = 'all' | 'practical' | 'learning';

export function Skills() {
  const {t, language, isRtl} = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<SkillFilter>('all');

  const getTechIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'react 19':
      case 'react':
        return <Globe size={20} className="text-sky-500" />;
      case 'typescript':
        return <Code2 size={20} className="text-indigo-500" />;
      case 'kotlin':
        return <Smartphone size={20} className="text-purple-500" />;
      case 'tailwind css':
      case 'tailwind css 4':
        return <Layers size={20} className="text-cyan-500" />;
      case 'javascript (es6+)':
      case 'javascript':
        return <Code2 size={20} className="text-amber-500" />;
      case 'git & github':
        return <GitBranch size={20} className="text-rose-500" />;
      case 'android studio':
        return <Smartphone size={20} className="text-emerald-500" />;
      case 'vs code':
        return <Monitor size={20} className="text-sky-600" />;
      case 'sql & relational databases':
      case 'sql':
      case 'mysql':
        return <Database size={20} className="text-emerald-500" />;
      case 'software engineering principles':
        return <Cpu size={20} className="text-indigo-500" />;
      case 'java & oop':
      case 'java':
        return <Terminal size={20} className="text-orange-500" />;
      default:
        return <Code2 size={20} className="text-indigo-400" />;
    }
  };

  const getStatusBadge = (status: SkillStatus) => {
    if (status === 'practical') {
      return {
        label: language === 'ps' ? 'عملي کارول' : language === 'fa' ? 'کاربرد عملی' : 'Using',
        bg: 'bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border-emerald-200/70 dark:border-emerald-800/60',
        dot: 'bg-emerald-500',
      };
    }
    return {
      label: language === 'ps' ? 'روانه زده کړه' : language === 'fa' ? 'در حال یادگیری' : 'Learning',
      bg: 'bg-sky-50 dark:bg-sky-950/70 text-sky-700 dark:text-sky-300 border-sky-200/70 dark:border-sky-800/60',
      dot: 'bg-sky-500',
    };
  };

  const allSkills = useMemo(() => {
    return [...practicalSkills, ...currentlyLearningSkills];
  }, []);

  const filteredSkills = useMemo(() => {
    if (selectedFilter === 'all') return allSkills;
    return allSkills.filter((s) => s.status === selectedFilter);
  }, [allSkills, selectedFilter]);

  const filterTabs = [
    {
      id: 'all' as SkillFilter,
      label: t.skills.filterAll,
      count: allSkills.length,
    },
    {
      id: 'practical' as SkillFilter,
      label: language === 'ps' ? 'عملي کارول (په پروژو کې)' : language === 'fa' ? 'کاربرد عملی (پروژه‌ها)' : 'Using (In Projects)',
      count: practicalSkills.length,
    },
    {
      id: 'learning' as SkillFilter,
      label: language === 'ps' ? 'روانه زده کړه (پوهنتون)' : language === 'fa' ? 'در حال یادگیری (دانشگاه)' : 'Learning (University)',
      count: currentlyLearningSkills.length,
    },
  ];

  return (
    <section
      id="skills"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-[#07090e] relative overflow-hidden transition-colors duration-300"
    >
      {/* Restrained Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 -right-20 w-[380px] h-[380px] rounded-full bg-gradient-to-br from-indigo-500/10 via-sky-500/8 to-transparent dark:from-indigo-600/10 dark:via-sky-600/8 dark:to-transparent blur-[80px]" />
        <div className="absolute -bottom-24 -left-20 w-[360px] h-[360px] rounded-full bg-gradient-to-tr from-emerald-500/10 via-purple-500/8 to-transparent dark:from-emerald-600/10 dark:via-purple-600/8 dark:to-transparent blur-[80px]" />
        <div className="absolute inset-0 bg-tech-grid-light dark:bg-tech-grid-dark opacity-15" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{opacity: 0, y: 14}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.2}}
          transition={{duration: 0.45, ease: [0.16, 1, 0.3, 1]}}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-12"
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

        {/* 2 Clear Distinct Categories Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-8 sm:mb-10">
          {/* Using Summary Card */}
          <div
            onClick={() => setSelectedFilter('practical')}
            className={cn(
              'p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer text-left rtl:text-right',
              selectedFilter === 'practical'
                ? 'bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-500/50 shadow-xs ring-1 ring-emerald-500/30'
                : 'bg-white/80 dark:bg-slate-900/80 border-slate-200/80 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-800'
            )}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                <CheckCircle2 size={16} />
                <span>{language === 'ps' ? 'عملي کارول (Using)' : language === 'fa' ? 'کاربرد عملی (Using)' : 'Using (In Projects)'}</span>
              </span>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300">
                {practicalSkills.length}
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {language === 'ps'
                ? 'هغه ټکنالوژۍ چې په رښتینو پروژو او جوړو شویو کاریالونو کې په عملي ډول کارول شوې دي.'
                : language === 'fa'
                ? 'فناوری‌هایی که در پروژه‌های کاربردی و نرم‌افزارهای ساخته‌شده عملاً پیاده‌سازی شده‌اند.'
                : 'Technologies applied in real software builds with verified implementation ownership.'}
            </p>
          </div>

          {/* Learning Summary Card */}
          <div
            onClick={() => setSelectedFilter('learning')}
            className={cn(
              'p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer text-left rtl:text-right',
              selectedFilter === 'learning'
                ? 'bg-sky-50/80 dark:bg-sky-950/40 border-sky-500/50 shadow-xs ring-1 ring-sky-500/30'
                : 'bg-white/80 dark:bg-slate-900/80 border-slate-200/80 dark:border-slate-800 hover:border-sky-300 dark:hover:border-sky-800'
            )}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 flex items-center gap-2">
                <BookOpen size={16} />
                <span>{language === 'ps' ? 'روانه زده کړه (Learning)' : language === 'fa' ? 'در حال یادگیری (Learning)' : 'Learning (University)'}</span>
              </span>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300">
                {currentlyLearningSkills.length}
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {language === 'ps'
                ? 'هغه مضامین او ډېټابېسونه چې د پکتیا پوهنتون په تدریسي نصاب او عملي لابراتوار کې تر مطالعې لاندې دي.'
                : language === 'fa'
                ? 'مباحث پایگاه داده و مهندسی که در دروس دانشگاه پکتیا و تمرینات هفتگی در حال فراگیری هستند.'
                : 'Subjects actively studied through university coursework, lab exercises, and software engineering classes.'}
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {filterTabs.map((tab) => {
            const isActive = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={cn(
                  'px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer flex items-center gap-2',
                  isActive
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold shadow-xs'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/60'
                )}
              >
                <span>{tab.label}</span>
                <span
                  className={cn(
                    'text-[10px] px-1.5 py-0.2 rounded-full font-bold',
                    isActive
                      ? 'bg-slate-700 text-white dark:bg-slate-200 dark:text-slate-900'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                  )}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Compact, Scan-Friendly Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const badge = getStatusBadge(skill.status);

              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{opacity: 0, scale: 0.95}}
                  animate={{opacity: 1, scale: 1}}
                  exit={{opacity: 0, scale: 0.95}}
                  transition={{duration: 0.25}}
                  className="p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:shadow-md hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-all flex flex-col justify-between text-left rtl:text-right"
                >
                  <div>
                    {/* Top Row: Icon + Status Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center">
                        {getTechIcon(skill.name)}
                      </div>
                      <span
                        className={cn(
                          'inline-flex items-center gap-1.5 text-[10.5px] font-semibold px-2 py-0.5 rounded-full border',
                          badge.bg
                        )}
                      >
                        <span className={cn('w-1.5 h-1.5 rounded-full', badge.dot)} />
                        {badge.label}
                      </span>
                    </div>

                    {/* Skill Title */}
                    <h3 className="text-sm font-bold font-outfit text-slate-900 dark:text-white mb-1.5">
                      {skill.name}
                    </h3>

                    {/* Concise 1-Sentence Description */}
                    <p className="text-[12px] text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                      {skill.description}
                    </p>
                  </div>

                  {/* Evidence / Academic Context */}
                  {skill.evidence && (
                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                      <span className="truncate">{skill.evidence}</span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
