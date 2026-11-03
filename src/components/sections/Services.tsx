import {motion} from 'framer-motion';
import {
  Globe,
  Sparkles,
  Smartphone,
  Layout,
  Database,
  Wrench,
  ArrowUpRight,
  Cpu,
  Layers
} from 'lucide-react';
import {useLanguage} from '../../context/LanguageContext';
import {cn} from '../../lib/utils';

export function Services() {
  const {t, language, isRtl} = useLanguage();

  const servicesData = [
    {
      id: 'web-dev',
      title: language === 'ps' ? 'ځواب ویونکې او عصري وېبپاڼې' : language === 'fa' ? 'وبسایت‌های مدرن و واکنش‌گرا' : 'Modern & Responsive Websites',
      description: language === 'ps'
        ? 'د HTML5، عصري CSS او React په مرسته د چټکو، ښکلو او ګرځنده ته جوړو وېبپاڼو ودانول.'
        : language === 'fa'
        ? 'ساخت وبسایت‌های مدرن، پرسرعت و بهینه‌سازی‌شده برای تمامی اندازه‌های صفحه نمایش.'
        : 'Fast, accessible, mobile-first websites built with semantic HTML5, modern CSS, and React.',
      icon: <Globe size={22} className="text-sky-600 dark:text-sky-400" />,
      badge: language === 'ps' ? 'وېب ډیزاین' : language === 'fa' ? 'وب' : 'Web',
      themeClass: 'group-hover:border-sky-500/50',
      badgeClass: 'bg-sky-50 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border-sky-200/60 dark:border-sky-800/60',
      iconBoxClass: 'bg-sky-50/80 dark:bg-sky-950/50 border-sky-200/70 dark:border-sky-800/60',
      topAccent: 'via-sky-500/40',
      glowColor: 'group-hover:shadow-sky-500/10',
    },
    {
      id: 'ai-web',
      title: language === 'ps' ? 'له AI سره مدغم وېب اپلیکیشنونه' : language === 'fa' ? 'برنامه‌های وب یکپارچه با هوش مصنوعی' : 'AI-Integrated Web Applications',
      description: language === 'ps'
        ? 'د هوښیارو APIs په مرسته د عملي وېب کاریالونو جوړول؛ د متن د ارزونې، اتومات بهیرونو او د سمارټ مرستیالانو لپاره.'
        : language === 'fa'
        ? 'توسعه برنامه‌های وب با اتصال اصولی به API مدل‌های هوشمند جهت پردازش متن، فیلترسازی هوشمند و خودکارسازی فرآیندها.'
        : 'Building responsive web interfaces integrated with practical AI APIs for intelligent text processing, natural search filtering, and smart automated workflows.',
      icon: (
        <div className="relative">
          <Globe size={20} className="text-indigo-600 dark:text-indigo-400" />
          <Sparkles size={11} className="text-amber-500 absolute -top-1.5 -right-1.5 animate-pulse" />
        </div>
      ),
      badge: 'AI + Web',
      themeClass: 'group-hover:border-indigo-500/60 ring-1 ring-indigo-500/10',
      badgeClass: 'bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border-indigo-200/80 dark:border-indigo-800/80',
      iconBoxClass: 'bg-indigo-50/80 dark:bg-indigo-950/50 border-indigo-200/70 dark:border-indigo-800/60',
      topAccent: 'via-indigo-500/50',
      glowColor: 'group-hover:shadow-indigo-500/15',
    },
    {
      id: 'ai-mobile',
      title: language === 'ps' ? 'له AI سره مدغم انډروایډ کاریالونه' : language === 'fa' ? 'اپلیکیشن‌های موبایل یکپارچه با هوش مصنوعی' : 'AI-Integrated Mobile Applications',
      description: language === 'ps'
        ? 'په کوټلین کې بومي انډروایډ کاریالونه د هوښیارو اسانتیاوو، افلاین Room ډېټابېس او د ګټورو سمارټ مرستندویانو سره.'
        : language === 'fa'
        ? 'طراحی اپلیکیشن‌های بومی اندروید با کاتلین، بهره‌گیری از قابلیت‌های هوشمند کاربردی، ذخیره‌سازی آفلاین Room و رابط کاربری روان.'
        : 'Engineering native Android applications with practical on-device intelligence, offline-first local databases, and voice or assistant feature integration.',
      icon: (
        <div className="relative">
          <Smartphone size={20} className="text-emerald-600 dark:text-emerald-400" />
          <Cpu size={11} className="text-teal-500 absolute -top-1.5 -right-1.5" />
        </div>
      ),
      badge: 'AI + Mobile',
      themeClass: 'group-hover:border-emerald-500/60 ring-1 ring-emerald-500/10',
      badgeClass: 'bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border-emerald-200/80 dark:border-emerald-800/80',
      iconBoxClass: 'bg-emerald-50/80 dark:bg-emerald-950/50 border-emerald-200/70 dark:border-emerald-800/60',
      topAccent: 'via-emerald-500/40',
      glowColor: 'group-hover:shadow-emerald-500/15',
    },
    {
      id: 'ui-design',
      title: language === 'ps' ? 'د کارن مخ (UI) عملي تطبیق' : language === 'fa' ? 'پیاده‌سازی رابط کاربری مدرن' : 'Clean UI Implementation',
      description: language === 'ps'
        ? 'د طرحو، مفکورو او وایرفریمونو اړول په پاک، منظم، لاسرسي وړ او ښکلي کوډ.'
        : language === 'fa'
        ? 'تبدیل طرح‌های گرافیکی و ایده‌ها به رابط‌های کاربری تمیز، استاندارد، ماژولار و دسترس‌پذیر.'
        : 'Translating design concepts and wireframes into pixel-perfect, accessible, and intuitive user interfaces.',
      icon: <Layout size={22} className="text-purple-600 dark:text-purple-400" />,
      badge: 'UI/UX',
      themeClass: 'group-hover:border-purple-500/50',
      badgeClass: 'bg-purple-50 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 border-purple-200/60 dark:border-purple-800/60',
      iconBoxClass: 'bg-purple-50/80 dark:bg-purple-950/50 border-purple-200/70 dark:border-purple-800/60',
      topAccent: 'via-purple-500/40',
      glowColor: 'group-hover:shadow-purple-500/10',
    },
    {
      id: 'databases',
      title: language === 'ps' ? 'د ډېټابېس لرونکي عملي کاریالونه' : language === 'fa' ? 'برنامه‌های متصل به دیتابیس' : 'Database-Connected Apps',
      description: language === 'ps'
        ? 'د اړوند ډېټابېس جدولونو جوړول، په SQL او MySQL کې د معلوماتو خوندي کول او د هغوی منظم مدیریت.'
        : language === 'fa'
        ? 'طراحی ساختار رابطه‌ای، تنظیم جداول در MySQL و SQLite و ایجاد جریان‌های داده امن و ساختارمند.'
        : 'Designing relational schemas, setting up MySQL/SQLite tables, and creating structured CRUD data flows.',
      icon: <Database size={22} className="text-teal-600 dark:text-teal-400" />,
      badge: 'Databases',
      themeClass: 'group-hover:border-teal-500/50',
      badgeClass: 'bg-teal-50 dark:bg-teal-950/80 text-teal-700 dark:text-teal-300 border-teal-200/60 dark:border-teal-800/60',
      iconBoxClass: 'bg-teal-50/80 dark:bg-teal-950/50 border-teal-200/70 dark:border-teal-800/60',
      topAccent: 'via-teal-500/40',
      glowColor: 'group-hover:shadow-teal-500/10',
    },
    {
      id: 'optimization',
      title: language === 'ps' ? 'د سافټویر سمون او د سرعت ښه والی' : language === 'fa' ? 'بهینه‌سازی و ارتقای برنامه‌ها' : 'App Improvements & Refinement',
      description: language === 'ps'
        ? 'د کوډ پاکول، په موبایل کې د نیمګړتیاوو اصلاح، د پورته کېدو د چټکتیا لوړول او د کاروونکي د تجربې ښه کول.'
        : language === 'fa'
        ? 'بازنویسی کد، افزایش سرعت بارگذاری، رفع خطاهای ریسپانسیو و ارتقای تجربه کلی کاربری.'
        : 'Refactoring codebases, optimizing load speeds, resolving responsive layout bugs, and enhancing overall user experience.',
      icon: <Wrench size={22} className="text-rose-500" />,
      badge: 'Optimization',
      themeClass: 'group-hover:border-rose-500/50',
      badgeClass: 'bg-rose-50 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 border-rose-200/60 dark:border-rose-800/60',
      iconBoxClass: 'bg-rose-50/80 dark:bg-rose-950/50 border-rose-200/70 dark:border-rose-800/60',
      topAccent: 'via-rose-500/40',
      glowColor: 'group-hover:shadow-rose-500/10',
    },
  ];

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
    hidden: {opacity: 0, y: 14},
    visible: {
      opacity: 1,
      y: 0,
      transition: {duration: 0.4, ease: [0.16, 1, 0.3, 1] as const},
    },
  };

  return (
    <section
      id="services"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/30 dark:bg-[#07090e] relative overflow-hidden transition-colors duration-300"
    >
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/3 -left-20 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-purple-500/10 via-indigo-500/8 to-transparent dark:from-purple-600/10 dark:via-indigo-600/8 dark:to-transparent blur-[85px]" />
        <div className="absolute -bottom-20 -right-20 w-[420px] h-[420px] rounded-full bg-gradient-to-tl from-sky-500/10 via-indigo-500/8 to-transparent dark:from-cyan-600/10 dark:via-indigo-600/8 dark:to-transparent blur-[85px]" />
        <div className="absolute inset-0 bg-tech-grid-light dark:bg-tech-grid-dark opacity-15" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Repeating Section Header */}
        <motion.div
          initial={{opacity: 0, y: 14}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: false, amount: 0.2}}
          transition={{duration: 0.45, ease: [0.16, 1, 0.3, 1]}}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-4 sm:gap-6"
        >
          <div>
            <span className="inline-flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-xs mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
              {t.services.tag}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-outfit tracking-tight text-slate-900 dark:text-white leading-tight">
              {t.services.headline}
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 max-w-md text-xs sm:text-sm leading-relaxed">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* 6 Practical Service Cards in 3-col Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: false, amount: 0.15}}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {servicesData.map((service, idx) => {
            const indexString = `0${idx + 1}`;

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="group relative flex flex-col justify-between"
              >
                <div
                  className={cn(
                    'relative z-10 p-5 sm:p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between bg-white dark:bg-[#0c121e]/90 border-slate-200/90 dark:border-white/[0.08] shadow-[0_2px_12px_rgba(15,23,42,0.04)] hover:shadow-[0_10px_28px_rgba(15,23,42,0.08)] dark:hover:shadow-[0_10px_28px_rgba(0,0,0,0.5)] hover:-translate-y-1 backdrop-blur-sm h-full text-left rtl:text-right overflow-hidden',
                    service.themeClass
                  )}
                >
                  {/* Subtle top accent line */}
                  <div
                    className={cn(
                      'absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300',
                      service.topAccent
                    )}
                  />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={cn(
                          'w-11 h-11 rounded-xl border flex items-center justify-center shadow-2xs group-hover:scale-105 transition-all duration-200',
                          service.iconBoxClass
                        )}
                      >
                        {service.icon}
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={cn(
                            'text-[10px] uppercase px-2 py-0.5 rounded-md font-semibold border',
                            service.badgeClass
                          )}
                        >
                          {service.badge}
                        </span>
                        <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">
                          {indexString}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-base font-bold font-outfit text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                    <span className="text-[11px] font-medium">
                      {language === 'ps' ? 'عملي او ډاډمن تطبیق' : language === 'fa' ? 'پیاده‌سازی اصولی و مطمئن' : 'Practical & Reliable Build'}
                    </span>
                    <ArrowUpRight
                      size={14}
                      className={cn(
                        'transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5',
                        isRtl ? 'rotate-[-90deg]' : ''
                      )}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
