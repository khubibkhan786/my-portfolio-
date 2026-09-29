import {useState, useEffect, useRef} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {MessageSquare, Mail, Github, Linkedin, ArrowUpRight, X, Sparkles} from 'lucide-react';
import {useLanguage} from '../../context/LanguageContext';
import {cn} from '../../lib/utils';

export function FloatingActionHub() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const {t, isRtl} = useLanguage();

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const quickLinks = [
    {
      title: 'LinkedIn',
      subtitle: 'Professional profile',
      icon: <Linkedin size={16} className="text-sky-500" />,
      href: 'https://linkedin.com',
      isExternal: true,
    },
    {
      title: 'GitHub',
      subtitle: 'Code repositories',
      icon: <Github size={16} className="text-purple-500" />,
      href: 'https://github.com',
      isExternal: true,
    },
    {
      title: t.hero.contactMe,
      subtitle: t.contact.draftShortcut,
      icon: <Sparkles size={16} className="text-emerald-500" />,
      href: '#contact',
      isExternal: false,
    },
  ];

  const handleActionClick = (href: string, isExternal: boolean) => {
    setIsOpen(false);
    if (!isExternal) {
      const el = document.getElementById(href.replace('#', ''));
      if (el) {
        el.scrollIntoView({behavior: 'smooth'});
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        'fixed bottom-6 z-40 select-none transition-all duration-300',
        isRtl ? 'right-6 sm:right-8' : 'left-6 sm:left-8'
      )}
    >
      {/* Expanded Quick Connect Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{opacity: 0, scale: 0.85, y: 16}}
            animate={{opacity: 1, scale: 1, y: 0}}
            exit={{opacity: 0, scale: 0.85, y: 16}}
            transition={{duration: 0.22, ease: [0.16, 1, 0.3, 1]}}
            className={cn(
              'absolute bottom-16 mb-2 w-72 p-3 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-slate-200/90 dark:border-slate-800/90 shadow-2xl shadow-indigo-500/10 dark:shadow-black/60 overflow-hidden',
              isRtl ? 'right-0' : 'left-0'
            )}
          >
            {/* Header with availability status */}
            <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-slate-100 dark:border-slate-800/80 px-1">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[11px] font-semibold tracking-wider uppercase text-emerald-600 dark:text-emerald-400">
                  {t.hero.statusBadge}
                </span>
              </div>
              <span className="text-[10px] text-slate-500 dark:text-slate-400">AGZ Hub</span>
            </div>

            {/* Action Items List */}
            <div className="space-y-1">
              {quickLinks.map((item, idx) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  target={item.isExternal ? '_blank' : undefined}
                  rel={item.isExternal ? 'noopener noreferrer' : undefined}
                  onClick={(e) => {
                    if (!item.isExternal) {
                      e.preventDefault();
                      handleActionClick(item.href, false);
                    } else {
                      setIsOpen(false);
                    }
                  }}
                  initial={{opacity: 0, x: isRtl ? 10 : -10}}
                  animate={{opacity: 1, x: 0}}
                  transition={{delay: idx * 0.04, duration: 0.2}}
                  className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate max-w-[145px]">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className={cn(
                      'text-slate-400 group-hover:text-indigo-500 transition-all',
                      isRtl ? 'rotate-[-90deg]' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                    )}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{scale: 1.04, y: -2}}
        whileTap={{scale: 0.95}}
        aria-expanded={isOpen}
        aria-label="Open quick connect menu"
        className="relative flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800/90 text-slate-800 dark:text-slate-200 shadow-lg shadow-indigo-500/10 dark:shadow-2xl dark:shadow-black/60 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-colors cursor-pointer group focus:outline-hidden focus:ring-2 focus:ring-indigo-500/40"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>

        <div className="text-indigo-600 dark:text-indigo-400">
          {isOpen ? <X size={17} /> : <MessageSquare size={17} />}
        </div>

        <span className="text-xs font-semibold tracking-tight text-slate-700 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors hidden sm:inline">
          {isOpen ? '✕' : t.nav.letsTalk}
        </span>
      </motion.button>
    </div>
  );
}
