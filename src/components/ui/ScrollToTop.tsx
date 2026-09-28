import {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {ArrowUp} from 'lucide-react';
import {useLanguage} from '../../context/LanguageContext';
import {cn} from '../../lib/utils';

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const {isRtl} = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Appear once scrolled down past 350px
      setVisible(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll, {passive: true});
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{opacity: 0, scale: 0.75, y: 16}}
          animate={{opacity: 1, scale: 1, y: 0}}
          exit={{opacity: 0, scale: 0.75, y: 16}}
          whileHover={{scale: 1.08, y: -2}}
          whileTap={{scale: 0.94}}
          transition={{duration: 0.3, ease: [0.16, 1, 0.3, 1]}}
          aria-label="Scroll to top of page"
          className={cn(
            'fixed bottom-6 z-40 p-3 rounded-2xl bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800/90 text-slate-700 dark:text-slate-200 shadow-lg shadow-indigo-500/10 dark:shadow-2xl dark:shadow-black/60 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all cursor-pointer group focus:outline-hidden focus:ring-2 focus:ring-indigo-500/40',
            isRtl ? 'left-6 sm:left-8' : 'right-6 sm:right-8'
          )}
        >
          {/* Subtle hover background bloom */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-500/10 via-sky-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          
          <ArrowUp size={18} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
