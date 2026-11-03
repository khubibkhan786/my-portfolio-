import {motion} from 'framer-motion';
import {
  Globe,
  Layout,
  Smartphone,
  Database,
  Wrench,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  FileCode2
} from 'lucide-react';
import {useLanguage} from '../../context/LanguageContext';
import {cn} from '../../lib/utils';

export function Services() {
  const {t, isRtl} = useLanguage();

  const servicesData = [
    {
      title: t.services.s1Title,
      description: t.services.s1Desc,
      icon: <Globe size={22} className="text-sky-600 dark:text-sky-400" />,
      badge: 'Web',
    },
    {
      title: t.services.s2Title,
      description: t.services.s2Desc,
      icon: <FileCode2 size={22} className="text-indigo-600 dark:text-indigo-400" />,
      badge: 'Portfolio',
    },
    {
      title: t.services.s3Title,
      description: t.services.s3Desc,
      icon: <Layout size={22} className="text-purple-600 dark:text-purple-400" />,
      badge: 'UI/UX',
    },
    {
      title: t.services.s4Title,
      description: t.services.s4Desc,
      icon: <Wrench size={22} className="text-amber-600 dark:text-amber-400" />,
      badge: 'Optimization',
    },
    {
      title: t.services.s5Title,
      description: t.services.s5Desc,
      icon: <Database size={22} className="text-emerald-600 dark:text-emerald-400" />,
      badge: 'Databases',
    },
    {
      title: t.services.s6Title,
      description: t.services.s6Desc,
      icon: <Smartphone size={22} className="text-emerald-600 dark:text-emerald-400" />,
      badge: 'Android',
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
        <motion.div
          initial={{opacity: 0, y: 14}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.2}}
          transition={{duration: 0.45, ease: [0.16, 1, 0.3, 1]}}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-4 sm:gap-6"
        >
          <div>
            <span className="inline-flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-xs mb-2.5 font-outfit">
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
          viewport={{once: true, amount: 0.15}}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12 sm:mb-14"
        >
          {servicesData.map((service, idx) => {
            const indexString = `0${idx + 1}`;

            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="group relative flex flex-col justify-between"
              >
                <div className="card-soft-underglow" />

                <div className="relative z-10 p-5 sm:p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between shadow-xs group-hover:shadow-lg group-hover:-translate-y-1 bg-white/95 dark:bg-slate-900/95 border-slate-200/90 dark:border-slate-800 group-hover:border-indigo-500/50 backdrop-blur-sm h-full text-left rtl:text-right">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center shadow-2xs group-hover:scale-105 group-hover:border-indigo-500/40 transition-all">
                        {service.icon}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] uppercase px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 font-semibold border border-indigo-200/60 dark:border-indigo-800/60">
                          {service.badge}
                        </span>
                        <span className="text-xs font-bold text-slate-400 dark:text-slate-500">
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

                  <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                    <span className="text-[11px] font-medium">{t.services.productionQuality}</span>
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

        {/* 7-Step Responsible Delivery Process Container */}
        <motion.div
          initial={{opacity: 0, y: 14}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.15}}
          transition={{duration: 0.45}}
          className="p-6 sm:p-8 rounded-3xl bg-white/95 dark:bg-slate-900/95 border border-slate-200/90 dark:border-slate-800 shadow-sm"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200/80 dark:border-slate-800 text-left rtl:text-right">
            <div>
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-1 font-outfit">
                <ShieldCheck size={16} />
                <span>{t.services.processTitle}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                {t.services.processSubtitle}
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl transition-colors shadow-xs shrink-0 self-start md:self-auto cursor-pointer"
            >
              <span>{t.nav.letsTalk}</span>
              <ArrowUpRight size={13} className={isRtl ? 'rotate-[-90deg]' : ''} />
            </a>
          </div>

          {/* 7 Steps Horizontal/Grid Stepper */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
            {t.services.processSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-800 flex flex-col justify-between text-left rtl:text-right"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold text-[10px] flex items-center justify-center">
                    {idx + 1}
                  </span>
                  {idx < 6 && (
                    <span className="hidden lg:block text-slate-300 dark:text-slate-700 text-xs">
                      →
                    </span>
                  )}
                </div>
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-snug">
                  {step.replace(/^\d+\.\s*/, '')}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
