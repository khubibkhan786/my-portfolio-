import {motion} from 'framer-motion';
import {AppWindow, Globe, Database, Layout, ArrowUpRight, ShieldCheck, Zap} from 'lucide-react';
import {useLanguage} from '../../context/LanguageContext';
import {cn} from '../../lib/utils';

export function Services() {
  const {t, isRtl} = useLanguage();

  const servicesData = [
    {
      title: t.services.softwareTitle,
      description: t.services.softwareDesc,
      icon: <AppWindow size={22} className="text-indigo-600 dark:text-indigo-400" />,
      badge: 'Core',
    },
    {
      title: t.services.webTitle,
      description: t.services.webDesc,
      icon: <Globe size={22} className="text-sky-600 dark:text-sky-400" />,
      badge: 'Core',
    },
    {
      title: t.services.databaseTitle,
      description: t.services.databaseDesc,
      icon: <Database size={22} className="text-emerald-600 dark:text-emerald-400" />,
      badge: 'Data',
    },
    {
      title: t.services.uiTitle,
      description: t.services.uiDesc,
      icon: <Layout size={22} className="text-purple-600 dark:text-purple-400" />,
      badge: 'UI/UX',
    },
  ];

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
    hidden: {opacity: 0, y: 16, scale: 0.98},
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {duration: 0.45, ease: [0.16, 1, 0.3, 1] as const},
    },
  };

  return (
    <section id="services" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/30 dark:bg-[#07090e] relative overflow-hidden transition-colors duration-300">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/3 -left-20 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-purple-500/10 via-indigo-500/8 to-transparent dark:from-purple-600/10 dark:via-indigo-600/8 dark:to-transparent blur-[85px]" />
        <div className="absolute -bottom-20 -right-20 w-[420px] h-[420px] rounded-full bg-gradient-to-tl from-sky-500/10 via-indigo-500/8 to-transparent dark:from-cyan-600/10 dark:via-indigo-600/8 dark:to-transparent blur-[85px]" />
        <div className="absolute inset-0 bg-tech-grid-light dark:bg-tech-grid-dark opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{opacity: 0, y: 16}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{ once: false, amount: 0.2 }}
          transition={{duration: 0.45, ease: [0.16, 1, 0.3, 1]}}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-4 sm:gap-6"
        >
          <div>
            <span className="inline-flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-xs mb-2.5 font-mono">
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

        {/* 4 Service Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10 sm:mb-12"
        >
          {servicesData.map((service, idx) => {
            const indexString = `0${idx + 1}`;

            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{y: -4, transition: {duration: 0.2}}}
                className="group p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-lg bg-white/80 dark:bg-slate-900/80 border-slate-200/90 dark:border-slate-800 hover:border-indigo-500/50"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center shadow-2xs group-hover:scale-105 group-hover:border-indigo-500/40 transition-all">
                      {service.icon}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 font-semibold border border-indigo-200/60 dark:border-indigo-800/60">
                        {service.badge}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">
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
                  <span className="text-[11px] font-mono">{t.services.productionQuality}</span>
                  <ArrowUpRight
                    size={15}
                    className={cn(
                      'transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5',
                      isRtl ? 'rotate-[-90deg]' : ''
                    )}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* RahimDev-Style Production Guarantee Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-indigo-50/60 dark:bg-slate-900/60 border border-indigo-200/70 dark:border-indigo-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
            <ShieldCheck size={18} className="text-emerald-500 shrink-0" />
            <span>{t.services.futureVision}</span>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 font-semibold text-indigo-600 dark:text-indigo-400 hover:underline shrink-0"
          >
            <span>{t.nav.letsTalk}</span>
            <ArrowUpRight size={13} className={isRtl ? 'rotate-[-90deg]' : ''} />
          </a>
        </div>
      </div>
    </section>
  );
}
