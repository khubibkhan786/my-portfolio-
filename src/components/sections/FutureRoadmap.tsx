import {motion} from 'framer-motion';
import {
  Compass,
  ArrowRight,
  Database,
  Code2,
  Server,
  Smartphone,
  Sparkles,
  Layers,
  HelpCircle,
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
        return <Database size={18} className="text-emerald-600 dark:text-emerald-400" />;
      case 3:
        return <Layers size={18} className="text-indigo-600 dark:text-indigo-400" />;
      case 4:
        return <Server size={18} className="text-purple-600 dark:text-purple-400" />;
      case 5:
        return <Smartphone size={18} className="text-emerald-600 dark:text-emerald-400" />;
      case 6:
        return <Sparkles size={18} className="text-amber-500" />;
      case 7:
        return <Compass size={18} className="text-indigo-600 dark:text-indigo-400" />;
      default:
        return <Compass size={18} />;
    }
  };

  const getStageLocalized = (stageNumber: number) => {
    const key = `s${stageNumber}` as keyof typeof t.roadmap.stages;
    const titleKey = `${key}Title` as keyof typeof t.roadmap.stages;
    const subtitleKey = `${key}Subtitle` as keyof typeof t.roadmap.stages;
    const descKey = `${key}Desc` as keyof typeof t.roadmap.stages;

    return {
      title: t.roadmap.stages[titleKey] || '',
      subtitle: t.roadmap.stages[subtitleKey] || '',
      desc: t.roadmap.stages[descKey] || ''
    };
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
          viewport={{once: true, amount: 0.2}}
          transition={{duration: 0.45, ease: [0.16, 1, 0.3, 1]}}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold text-xs tracking-wider uppercase mb-2.5">
            <Compass size={13} />
            <span>{t.roadmap.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-outfit tracking-tight text-slate-900 dark:text-white leading-tight">
            {t.roadmap.headline}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            {t.roadmap.subtitle}
          </p>
        </motion.div>

        {/* 7 Stages Responsive Stepper Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 mb-12">
          {softwareEngineeringRoadmap.map((stage, idx) => {
            const localized = getStageLocalized(stage.stageNumber);
            const isStage4 = stage.stageNumber === 4;

            return (
              <motion.div
                key={stage.id}
                initial={{opacity: 0, y: 14}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0.15}}
                transition={{duration: 0.4, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1]}}
                className={cn(
                  'p-5 sm:p-6 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:border-indigo-500/40 hover:shadow-md transition-all flex flex-col justify-between text-left rtl:text-right relative overflow-hidden',
                  isStage4 ? 'lg:col-span-12 bg-gradient-to-br from-white via-purple-50/20 to-white dark:from-slate-900 dark:via-purple-950/20 dark:to-slate-900 border-purple-300/60 dark:border-purple-900/60' : 'lg:col-span-6'
                )}
              >
                <div>
                  {/* Top Bar: Stage Number + Icon + Status Badge */}
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center shrink-0">
                        {getStageIcon(stage.stageNumber)}
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block font-outfit">
                          {t.roadmap.stagePrefix} 0{stage.stageNumber}
                        </span>
                        <h3 className="text-base font-bold font-outfit text-slate-900 dark:text-white leading-tight">
                          {localized.title || stage.title}
                        </h3>
                      </div>
                    </div>

                    <span
                      className={cn(
                        'px-2.5 py-0.5 rounded-full text-[10.5px] font-semibold border shrink-0',
                        stage.status === 'foundational'
                          ? 'bg-sky-50 dark:bg-sky-950/70 text-sky-700 dark:text-sky-300 border-sky-200/70 dark:border-sky-800/60'
                          : stage.status === 'current'
                          ? 'bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border-emerald-200/70 dark:border-emerald-800/60'
                          : 'bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border-indigo-200/70 dark:border-indigo-800/60'
                      )}
                    >
                      {stage.status === 'foundational'
                        ? t.roadmap.foundationalBadge
                        : stage.status === 'current'
                        ? t.roadmap.currentBadge
                        : t.roadmap.futureBadge}
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-2">
                    {localized.subtitle || stage.subtitle}
                  </p>

                  <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {localized.desc || stage.description}
                  </p>

                  {/* Stage 4: Open Backend Path Callout */}
                  {isStage4 && (
                    <div className="p-3.5 rounded-xl bg-purple-50/80 dark:bg-purple-950/40 border border-purple-200/80 dark:border-purple-800/60 mb-4 text-xs space-y-1.5">
                      <div className="flex items-center gap-1.5 font-bold text-purple-900 dark:text-purple-300 font-outfit">
                        <HelpCircle size={14} className="text-purple-600 dark:text-purple-400 shrink-0" />
                        <span>{t.roadmap.backendDecisionTitle}</span>
                      </div>
                      <p className="text-[12px] text-purple-800 dark:text-purple-300/90 leading-relaxed">
                        {t.roadmap.stages.s4Decision}
                      </p>
                    </div>
                  )}

                  {/* Skills Tag List */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {stage.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100/90 dark:bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-200/70 dark:border-slate-700/70"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Closing Vision Banner */}
        <motion.div
          initial={{opacity: 0, y: 12}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.2}}
          transition={{duration: 0.45}}
          className="p-5 sm:p-6 rounded-2xl bg-indigo-50/70 dark:bg-slate-900/80 border border-indigo-200/80 dark:border-indigo-900/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left rtl:sm:text-right"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <Compass size={20} />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold font-outfit text-slate-900 dark:text-white">
                {t.roadmap.closingStatement}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                Paktia University Information Systems · Abdul Jalil Zwak
              </div>
            </div>
          </div>

          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl transition-colors shadow-xs shrink-0 cursor-pointer"
          >
            <span>{t.hero.viewWork}</span>
            <ArrowRight size={13} className={isRtl ? 'rotate-180' : ''} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
