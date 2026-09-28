import {useState, useRef, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {Globe, ChevronDown, Check} from 'lucide-react';
import {useLanguage} from '../../context/LanguageContext';
import {Language} from '../../data/translations';
import {cn} from '../../lib/utils';

interface LanguageOption {
  code: Language;
  label: string;
  nativeLabel: string;
  badge: string;
}

const languages: LanguageOption[] = [
  {code: 'en', label: 'English', nativeLabel: 'English', badge: 'EN'},
  {code: 'ps', label: 'Pashto', nativeLabel: 'پښتو', badge: 'پښتو'},
  {code: 'fa', label: 'Dari', nativeLabel: 'دری', badge: 'دری'},
];

export function LanguageSelector({variant = 'desktop'}: {variant?: 'desktop' | 'mobile'}) {
  const {language, setLanguage, isRtl} = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close when clicked outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentOption = languages.find((l) => l.code === language) || languages[0];

  if (variant === 'mobile') {
    return (
      <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700/80 w-full justify-between">
        {languages.map((item) => {
          const isActive = language === item.code;
          return (
            <button
              key={item.code}
              onClick={() => setLanguage(item.code)}
              className={cn(
                'flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold transition-all cursor-pointer text-center',
                isActive
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              )}
            >
              <span>{item.nativeLabel}</span>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div ref={dropdownRef} className="relative select-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors shadow-2xs active:scale-95 cursor-pointer text-xs font-medium',
          isOpen && 'border-indigo-500/50 dark:border-indigo-500/50'
        )}
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <Globe size={14} className="text-indigo-600 dark:text-indigo-400 shrink-0" />
        <span className="font-semibold text-xs tracking-tight">{currentOption.nativeLabel}</span>
        <ChevronDown
          size={12}
          className={cn('transition-transform duration-200 text-slate-400', isOpen && 'rotate-180')}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{opacity: 0, y: 6, scale: 0.95}}
            animate={{opacity: 1, y: 0, scale: 1}}
            exit={{opacity: 0, y: 6, scale: 0.95}}
            transition={{duration: 0.15}}
            className={cn(
              'absolute top-full mt-2 w-36 p-1.5 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-xl z-50',
              isRtl ? 'left-0' : 'right-0'
            )}
          >
            <div className="space-y-1">
              {languages.map((item) => {
                const isSelected = language === item.code;
                return (
                  <button
                    key={item.code}
                    onClick={() => {
                      setLanguage(item.code);
                      setIsOpen(false);
                    }}
                    className={cn(
                      'w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl text-xs font-medium transition-colors cursor-pointer',
                      isSelected
                        ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-300 font-semibold'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    )}
                  >
                    <span>{item.nativeLabel}</span>
                    {isSelected && <Check size={13} className="text-indigo-600 dark:text-indigo-400" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
