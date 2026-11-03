import {motion} from 'framer-motion';
import {
  Lightbulb,
  Compass,
  Code2,
  CheckCircle2,
  Rocket,
  ShieldCheck,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import {useLanguage} from '../../context/LanguageContext';
import {cn} from '../../lib/utils';

export function WorkProcess() {
  const {t, language, isRtl} = useLanguage();

  const processStages = [
    {
      step: 1,
      title: language === 'ps' ? 'د اړتیاوو او مفکورې پوهاوی' : language === 'fa' ? 'درک نیازمندی‌ها و ایده' : 'Understanding Requirements',
      description: language === 'ps'
        ? 'د اصلي موخو، د کاروونکو د اړتیاوو او د پروژې د حدودو دقیق تحلیل او روښانه کول.'
        : language === 'fa'
        ? 'بررسی دقیق اهداف، تحلیل نیازهای کاربران و مشخص کردن محدوده و کارکردهای اصلی پروژه.'
        : 'Clarifying the core problem, user expectations, platform requirements, and functional scope.',
      icon: <Lightbulb size={20} className="text-amber-500" />,
      color: 'from-amber-500/20 to-amber-500/5',
      border: 'group-hover:border-amber-500/40',
    },
    {
      step: 2,
      title: language === 'ps' ? 'پلان او جوړښتي ډیزاین' : language === 'fa' ? 'برنامه‌ریزی و طراحی معماری' : 'Planning & Design',
      description: language === 'ps'
        ? 'د کارن مخ د بهیرونو، د ډېټابېس د جوړښت او د برخو د اړیکو منظمه نقشه جوړول.'
        : language === 'fa'
        ? 'طراحی جریان‌های کاربری، چیدمان رابط کاربری، اسکیمای دیتابیس و معماری ماژولار.'
        : 'Structuring user flows, UI layouts, database schemas, and component architecture.',
      icon: <Compass size={20} className="text-indigo-500" />,
      color: 'from-indigo-500/20 to-indigo-500/5',
      border: 'group-hover:border-indigo-500/40',
    },
    {
      step: 3,
      title: language === 'ps' ? 'پراختیا او عملي کوډ لیکل' : language === 'fa' ? 'توسعه و پیاده‌سازی کد' : 'Development & Implementation',
      description: language === 'ps'
        ? 'د معاصرو معیارونو سره سم د پاک، منظم، چټک او باوري کوډ پلي کول.'
        : language === 'fa'
        ? 'نگارش کدهای استاندارد، ماژولار و تایپ‌سیف با ابزارهای نوین مهندسی نرم‌افزار.'
        : 'Writing clean, structured, and type-safe code using modern engineering best practices.',
      icon: <Code2 size={20} className="text-sky-500" />,
      color: 'from-sky-500/20 to-sky-500/5',
      border: 'group-hover:border-sky-500/40',
    },
    {
      step: 4,
      title: language === 'ps' ? 'ازموینه، ټېسټ او سمون' : language === 'fa' ? 'تست، ارزیابی و بهینه‌سازی' : 'Testing & Refinement',
      description: language === 'ps'
        ? 'په بېلابېلو وسیلو کې ازموینه، د چټکتیا اندازه کول، د ستونزو هوارول او د جزئیاتو ښایست.'
        : language === 'fa'
        ? 'بررسی ریسپانسیو در دستگاه‌های مختلف، رفع خطاها، بهینه‌سازی سرعت و روان‌سازی تعاملات.'
        : 'Validating responsiveness, debugging issues, optimizing performance, and polishing interactions.',
      icon: <CheckCircle2 size={20} className="text-emerald-500" />,
      color: 'from-emerald-500/20 to-emerald-500/5',
      border: 'group-hover:border-emerald-500/40',
    },
    {
      step: 5,
      title: language === 'ps' ? 'وروستۍ سپارښتنه او ملاتړ' : language === 'fa' ? 'تحویل نهایی و پشتیبانی' : 'Delivery & Support',
      description: language === 'ps'
        ? 'د بشپړ محصول خپرول، روښانه لارښود وړاندې کول او د اوږدمهاله کارکړنې ډاډ ورکول.'
        : language === 'fa'
        ? 'استقرار برنامه، ارائه مستندات شفاف و اطمینان از عملکرد پایدار و قابل‌اتکای سامانه.'
        : 'Deploying production code, providing clear documentation, and ensuring ongoing dependability.',
      icon: <Rocket size={20} className="text-purple-500" />,
      color: 'from-purple-500/20 to-purple-500/5',
      border: 'group-hover:border-purple-500/40',
    },
  ];

  return (
    <section
      id="process"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white/40 dark:bg-[#07090e] relative overflow-hidden transition-colors duration-300"
    >
      {/* Restrained Glow */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/2 -left-20 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-indigo-500/8 via-sky-500/6 to-transparent blur-[85px]" />
        <div className="absolute -bottom-10 -right-20 w-[380px] h-[380px] rounded-full bg-gradient-to-tl from-emerald-500/8 via-indigo-500/6 to-transparent blur-[85px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{opacity: 0, y: 14}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.2}}
          transition={{duration: 0.45, ease: [0.16, 1, 0.3, 1]}}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold text-xs tracking-wider uppercase mb-2.5">
            <ShieldCheck size={14} />
            <span>
              {language === 'ps' ? '۰۵ — د کار بهیر' : language === 'fa' ? '۰۵ — فرآیند کاری' : '05 — WORK PROCESS'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-outfit tracking-tight text-slate-900 dark:text-white leading-tight">
            {language === 'ps'
              ? 'د کار منظم او باوري بهیر'
              : language === 'fa'
              ? 'فرآیند منظم و قابل‌اتکای توسعه'
              : 'Structured & Reliable Work Process'}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            {language === 'ps'
              ? 'یو شفاف پینځه پړاویز بهیر چې د هرې پروژې لپاره روښانتیا، لوړ کیفیت او ډاډمنه سپارښتنه تضمینوي.'
              : language === 'fa'
              ? 'روندی شفاف در پنج مرحله برای تضمین وضوح، کیفیت فنی و تحویل مطمئن در تمام پروژه‌ها.'
              : 'A transparent five-stage progression ensuring clarity, technical quality, and dependable delivery.'}
          </p>
        </motion.div>

        {/* 5 Stages Visual Grid with Connecting Line */}
        <div className="relative">
          {/* Subtle Horizontal Connecting Track for Large Screens */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-amber-400/30 via-sky-400/30 to-purple-400/30 pointer-events-none z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            {processStages.map((stage, idx) => {
              const numberFormatted = `0${stage.step}`;

              return (
                <motion.div
                  key={stage.step}
                  initial={{opacity: 0, y: 14}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true, amount: 0.15}}
                  transition={{duration: 0.4, delay: idx * 0.08}}
                  className={cn(
                    'group relative p-5 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between text-left rtl:text-right',
                    stage.border
                  )}
                >
                  <div>
                    {/* Top Row: Stage Step Badge + Simple Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                        {stage.icon}
                      </div>

                      <span className="font-mono text-xs font-black text-slate-400 dark:text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {numberFormatted}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-sm font-bold font-outfit text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {stage.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {stage.description}
                    </p>
                  </div>

                  {/* Visual Step Indicator Indicator */}
                  <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400 dark:text-slate-500">
                    <span>
                      {language === 'ps' ? `پړاو ${numberFormatted}` : language === 'fa' ? `مرحله ${numberFormatted}` : `Stage ${numberFormatted}`}
                    </span>
                    {idx < 4 ? (
                      isRtl ? (
                        <ArrowLeft size={13} className="text-slate-300 dark:text-slate-600 hidden lg:block" />
                      ) : (
                        <ArrowRight size={13} className="text-slate-300 dark:text-slate-600 hidden lg:block" />
                      )
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Call to Action for Consultation / Collaboration */}
        <motion.div
          initial={{opacity: 0, y: 10}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.2}}
          transition={{duration: 0.4}}
          className="mt-10 p-5 sm:p-6 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-left rtl:text-right"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                {language === 'ps' ? 'منظم کار او پر وخت سپارل' : language === 'fa' ? 'توسعه اصولی و تحویل به‌موقع' : 'Transparent Workflow & Reliable Delivery'}
              </div>
              <div className="text-[11.5px] text-slate-500 dark:text-slate-400">
                {language === 'ps'
                  ? 'له پیل څخه تر پایه هر ګام په پوره روښانتیا او دوامدارې اړیکې پر مخ ځي.'
                  : language === 'fa'
                  ? 'تمامی مراحل با هماهنگی پیوسته، نظارت کیفی و وضوح کامل پیش می‌رود.'
                  : 'Every step is handled with transparent communication and rigorous code quality.'}
              </div>
            </div>
          </div>

          <a
            href="#contact"
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-xs shrink-0 cursor-pointer"
          >
            {t.nav.letsTalk}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
