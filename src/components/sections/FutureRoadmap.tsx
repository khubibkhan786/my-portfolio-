import {motion} from 'framer-motion';
import {
  Compass,
  Database,
  Code2,
  Smartphone,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock
} from 'lucide-react';
import {softwareEngineeringRoadmap} from '../../data/skills';
import {useLanguage} from '../../context/LanguageContext';
import {cn} from '../../lib/utils';

export function FutureRoadmap() {
  const {t, language, isRtl} = useLanguage();

  const getStageIcon = (stageNumber: number) => {
    switch (stageNumber) {
      case 1:
        return <Code2 size={18} className="text-sky-600 dark:text-sky-400" />;
      case 2:
        return <Database size={18} className="text-amber-600 dark:text-amber-400" />;
      case 3:
        return <Layers size={18} className="text-indigo-600 dark:text-indigo-400" />;
      case 4:
        return <Smartphone size={18} className="text-emerald-600 dark:text-emerald-400" />;
      case 5:
        return <Compass size={18} className="text-purple-600 dark:text-purple-400" />;
      default:
        return <Compass size={18} />;
    }
  };

  const getStageBadge = (stageNumber: number, status: string) => {
    switch (stageNumber) {
      case 1:
        return {
          label: language === 'ps' ? 'بنسټونه' : language === 'fa' ? 'مبانی' : 'Foundations',
          style: 'bg-sky-50 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border-sky-200/80 dark:border-sky-800/60',
        };
      case 2:
        return {
          label: language === 'ps' ? 'روانه زده کړه' : language === 'fa' ? 'در حال یادگیری' : 'Learning',
          style: 'bg-amber-50 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 border-amber-200/80 dark:border-amber-800/60',
        };
      case 3:
      case 4:
        return {
          label: language === 'ps' ? 'عملي کارول' : language === 'fa' ? 'کاربرد عملی' : 'Active Build',
          style: 'bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border-emerald-200/80 dark:border-emerald-800/60',
        };
      case 5:
      default:
        return {
          label: language === 'ps' ? 'راتلونکی پړاو' : language === 'fa' ? 'هدف آتی' : 'Planned',
          style: 'bg-purple-50 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 border-purple-200/80 dark:border-purple-800/60',
        };
    }
  };

  // Localized stage copy
  const getStageDetails = (stageNumber: number) => {
    switch (stageNumber) {
      case 1:
        return {
          title: language === 'ps' ? 'د پروګرامینګ بنسټونه او OOP' : language === 'fa' ? 'مبانی برنامه‌نویسی و شی‌گرایی' : 'Core Programming & OOP',
          desc: language === 'ps' ? 'د جاوا ژبه، د شی‌ګرایۍ اصول، الګورېتمونه او د جوړښت لرونکي سافټویر اساسات.' : language === 'fa' ? 'مفاهیم شی‌گرایی، ساختار داده‌ها، الگوریتم‌ها و کدنویسی ساختارمند در جاوا.' : 'Java fundamentals, object-oriented concepts, algorithms, and structured coding hygiene.',
        };
      case 2:
        return {
          title: language === 'ps' ? 'اړوند ډېټابېسونه او SQL' : language === 'fa' ? 'پایگاه‌های داده رابطه‌ای و SQL' : 'Relational Databases & SQL',
          desc: language === 'ps' ? 'په MySQL او SQL کې د جدولونو ډیزاین، اړیکې، خوندي queries او د ډېټا نارملایزیشن.' : language === 'fa' ? 'طراحی اسکیما، نرمال‌سازی، تراکنش‌ها و کوئری‌های رابطه‌ای در MySQL و SQL.' : 'Relational modeling, schema design, table relationships, and SQL querying in MySQL.',
        };
      case 3:
        return {
          title: language === 'ps' ? 'عصري وېب او فرانت اینډ' : language === 'fa' ? 'توسعه وب مدرن و فرانت‌اند' : 'Modern Web & Frontend',
          desc: language === 'ps' ? 'په React 19، TypeScript او Tailwind کې د ځواب ویونکو او چټکو وېبپاڼو جوړول.' : language === 'fa' ? 'توسعه رابط‌های کاربری واکنش‌گرا و سریع با React 19، TypeScript و Tailwind CSS.' : 'Responsive, type-safe web interfaces and state architecture using React 19 & TypeScript.',
        };
      case 4:
        return {
          title: language === 'ps' ? 'موبایل او د AI عملي اسانتیاوې' : language === 'fa' ? 'موبایل و ابزارهای هوش مصنوعی' : 'Mobile & Practical AI Features',
          desc: language === 'ps' ? 'په کوټلین کې بومي انډروایډ اپلیکیشنونه، افلاین Room ډېټابېس او د AI APIs نښلول.' : language === 'fa' ? 'توسعه بومی اندروید با کاتلین، دیتابیس Room و اتصال به APIهای هوش مصنوعی.' : 'Native Android apps in Kotlin with offline Room storage and practical AI API integration.',
        };
      case 5:
      default:
        return {
          title: language === 'ps' ? 'بشپړ سټیک سافټویر انجینري' : language === 'fa' ? 'مهندسی نرم‌افزار فول‌استک' : 'Full-Stack Software Engineering',
          desc: language === 'ps' ? 'له وېب او موبایل څخه تر سرورونو، ډېټابېسونو او کلاوډ پورې د پوره محصولاتو وړاندې کول.' : language === 'fa' ? 'یکپارچه‌سازی فرانت‌اند، کلاینت موبایل، سرویس‌های سرور، دیتابیس و تست خودکار.' : 'Unifying web & mobile clients with secure backend services, databases, and deployment.',
        };
    }
  };

  return (
    <section
      id="roadmap"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/40 dark:bg-[#07090e] relative overflow-hidden transition-colors duration-300"
    >
      {/* Restrained Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/3 -left-20 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-indigo-500/10 via-purple-500/8 to-transparent dark:from-indigo-600/10 dark:via-purple-600/8 dark:to-transparent blur-[85px]" />
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-gradient-to-tl from-sky-500/10 via-emerald-500/8 to-transparent dark:from-sky-600/10 dark:via-emerald-600/8 dark:to-transparent blur-[85px]" />
        <div className="absolute inset-0 bg-tech-grid-light dark:bg-tech-grid-dark opacity-15" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{opacity: 0, y: 14}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: false, amount: 0.2}}
          transition={{duration: 0.45, ease: [0.16, 1, 0.3, 1]}}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold text-xs tracking-wider uppercase mb-2.5">
            <Compass size={14} />
            <span>{t.roadmap.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-outfit tracking-tight text-slate-900 dark:text-white leading-tight">
            {t.roadmap.headline}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            {t.roadmap.subtitle}
          </p>
        </motion.div>

        {/* 5 Compact Stages Grid with Visual Progression */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
          {softwareEngineeringRoadmap.map((stage, idx) => {
            const details = getStageDetails(stage.stageNumber);
            const badge = getStageBadge(stage.stageNumber, stage.status);
            const numberFormatted = `0${stage.stageNumber}`;

            return (
              <motion.div
                key={stage.id}
                initial={{opacity: 0, y: 14}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: false, amount: 0.15}}
                transition={{duration: 0.4, delay: idx * 0.06}}
                className="group relative p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:shadow-md hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-all flex flex-col justify-between text-left rtl:text-right"
              >
                <div>
                  {/* Top Bar: Number + Icon + Status Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-black text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/70 px-2 py-0.5 rounded-md border border-indigo-200/60 dark:border-indigo-800/60">
                        {numberFormatted}
                      </span>
                      <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                        {getStageIcon(stage.stageNumber)}
                      </div>
                    </div>

                    <span className={cn('text-[10px] font-bold px-2 py-0.5 rounded-full border', badge.style)}>
                      {badge.label}
                    </span>
                  </div>

                  {/* Stage Title */}
                  <h3 className="text-sm font-bold font-outfit text-slate-900 dark:text-white mb-1.5 leading-snug">
                    {details.title}
                  </h3>

                  {/* Concise Description */}
                  <p className="text-[12px] text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                    {details.desc}
                  </p>
                </div>

                {/* Tech Chips */}
                <div className="pt-2.5 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-1">
                  {stage.skills.slice(0, 3).map((sk) => (
                    <span
                      key={sk}
                      className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Minimal Bottom Anchor */}
        <div className="p-4 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 max-w-2xl mx-auto text-center text-xs text-slate-600 dark:text-slate-400 flex items-center justify-center gap-2">
          <Sparkles size={14} className="text-indigo-500 shrink-0" />
          <span>
            {language === 'ps'
              ? 'دوامداره زده کړه او مسلکي وده په اکاډمیک تدریسي بهیر او عملي پروژو کې.'
              : language === 'fa'
              ? 'رشد پیوسته از طریق مبانی دانشگاهی و ساخت پروژه‌های واقعی و کاربردی.'
              : 'Grounded progress driven by foundational coursework and practical project implementation.'}
          </span>
        </div>
      </div>
    </section>
  );
}
