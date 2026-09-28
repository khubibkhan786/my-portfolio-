import {useState, useEffect} from 'react';
import {motion, AnimatePresence, useScroll, useSpring} from 'framer-motion';
import {Sun, Moon, Menu, X, ArrowUpRight} from 'lucide-react';
import {useTheme} from '../../context/ThemeContext';
import {cn} from '../../lib/utils';

const navLinks = [
  {name: 'Home', href: '#home'},
  {name: 'About', href: '#about'},
  {name: 'Skills', href: '#skills'},
  {name: 'Services', href: '#services'},
  {name: 'Projects', href: '#projects'},
  {name: 'Journey', href: '#journey'},
  {name: 'Contact', href: '#contact'},
];

export function Navbar() {
  const {theme, toggleTheme} = useTheme();
  const isDark = theme === 'dark';
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Subtle page scroll progress indicator at top of screen
  const {scrollYProgress} = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      const heroEl = document.getElementById('home');
      const heroThreshold = heroEl ? heroEl.offsetTop + heroEl.offsetHeight - 90 : 500;
      setIsPastHero(scrollY > heroThreshold);

      const scrollPosition = scrollY + 160;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const sectionId = navLinks[i].href.substring(1);
        const element = document.getElementById(sectionId);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, {passive: true});
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 2.5px Minimal Page Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-[2.5px] bg-gradient-to-r from-indigo-500 via-sky-400 to-indigo-600 origin-left pointer-events-none"
        style={{scaleX}}
      />

      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 py-3',
          !scrolled && 'bg-transparent border-b border-transparent',
          scrolled && !isPastHero && 'bg-white/70 dark:bg-[#07090e]/70 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800/60 shadow-xs',
          isPastHero && 'bg-white/90 dark:bg-[#07090e]/90 backdrop-blur-2xl border-b border-slate-200/90 dark:border-slate-800/90 shadow-md shadow-slate-900/5 dark:shadow-black/30'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          {/* 1. Compact Premium Modern Typographic Logo: AGZ */}
          <a
            href="#home"
            className="group flex items-center gap-2 sm:gap-2.5 focus:outline-hidden select-none"
            aria-label="AGZ Portfolio Home"
          >
            <div className="relative flex items-center">
              {/* Subtle ambient accent glow on hover */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500/20 via-sky-400/20 to-purple-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Premium Faceted Monogram Emblem */}
              <div className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white dark:from-slate-900 dark:via-slate-900/95 dark:to-slate-950 border border-slate-700/60 dark:border-slate-800 shadow-sm shadow-slate-950/20 group-hover:border-indigo-500/60 transition-all duration-300">
                <span className="font-outfit font-black tracking-tight text-sm sm:text-base leading-none text-white">
                  AG
                </span>
                <span className="font-outfit font-black tracking-tight text-sm sm:text-base leading-none bg-gradient-to-tr from-indigo-400 via-sky-300 to-indigo-200 bg-clip-text text-transparent">
                  Z
                </span>
                {/* Tech Status Micro-Dot */}
                <span className="relative flex h-1.5 w-1.5 ml-0.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-60"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]"></span>
                </span>
              </div>
            </div>
          </a>

          {/* 2. Desktop & Laptop Horizontal Navigation with Segment Indicator */}
          <nav className="hidden md:flex items-center gap-0.5 lg:gap-1 bg-slate-100/80 dark:bg-slate-900/80 p-1 rounded-full border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-2xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    'relative px-3 lg:px-3.5 py-1.5 text-xs font-semibold rounded-full transition-colors duration-200 whitespace-nowrap',
                    isActive
                      ? 'text-indigo-600 dark:text-white'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-white dark:bg-slate-800 rounded-full shadow-xs"
                      transition={{type: 'spring', stiffness: 400, damping: 32}}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* 3. Action Controls: Theme Switcher & Let's Talk CTA */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Animated Light/Dark Mode Switch */}
            <button
              onClick={toggleTheme}
              className="relative p-2 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors shadow-2xs active:scale-95 cursor-pointer"
              aria-label="Toggle visual theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                  <motion.div
                    key="moon"
                    initial={{opacity: 0, rotate: -30, scale: 0.8}}
                    animate={{opacity: 1, rotate: 0, scale: 1}}
                    exit={{opacity: 0, rotate: 30, scale: 0.8}}
                    transition={{duration: 0.2}}
                  >
                    <Sun size={17} className="text-amber-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{opacity: 0, rotate: 30, scale: 0.8}}
                    animate={{opacity: 1, rotate: 0, scale: 1}}
                    exit={{opacity: 0, rotate: -30, scale: 0.8}}
                    transition={{duration: 0.2}}
                  >
                    <Moon size={17} className="text-slate-700" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Quick Contact Link on Desktop */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 lg:px-4 lg:py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl transition-all duration-200 shadow-md shadow-indigo-600/20 active:scale-98"
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={13} />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              className="md:hidden p-2 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 active:scale-95 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{opacity: 0, height: 0}}
              animate={{opacity: 1, height: 'auto'}}
              exit={{opacity: 0, height: 0}}
              transition={{duration: 0.25, ease: [0.16, 1, 0.3, 1]}}
              className="md:hidden bg-white/95 dark:bg-[#07090e]/95 backdrop-blur-2xl border-b border-slate-200 dark:border-slate-800 overflow-hidden mt-2.5 rounded-2xl shadow-xl"
            >
              <div className="flex flex-col gap-1 p-4">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      className={cn(
                        'px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between',
                        isActive
                          ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-semibold'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100/70 dark:hover:bg-slate-900'
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{link.name}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                      )}
                    </a>
                  );
                })}
                <div className="pt-3 mt-1 border-t border-slate-200 dark:border-slate-800">
                  <a
                    href="#contact"
                    className="w-full inline-flex items-center justify-center py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition-colors shadow-xs"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
