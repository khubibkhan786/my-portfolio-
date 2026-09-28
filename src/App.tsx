import {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {ThemeProvider, useTheme} from './context/ThemeContext';
import {LanguageProvider} from './context/LanguageContext';
import {Navbar} from './components/ui/Navbar';
import {Hero} from './components/sections/Hero';
import {About} from './components/sections/About';
import {Skills} from './components/sections/Skills';
import {Services} from './components/sections/Services';
import {Projects} from './components/sections/Projects';
import {Journey} from './components/sections/Journey';
import {Contact} from './components/sections/Contact';
import {Footer} from './components/ui/Footer';
import {AmbientCursor} from './components/ui/AmbientCursor';
import {FloatingParticles} from './components/ui/FloatingParticles';
import {ScrollToTop} from './components/ui/ScrollToTop';
import {FloatingActionHub} from './components/ui/FloatingActionHub';

function PortfolioContent({loading}: {loading: boolean}) {
  const {theme} = useTheme();
  const isDark = theme === 'dark';

  return (
    <>
      {/* 22. Minimal Premium Initial Reveal Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.45, ease: [0.16, 1, 0.3, 1]}}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#07090e] text-white"
          >
            <motion.div
              initial={{opacity: 0, y: 10}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.4}}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center font-mono font-bold text-sm shadow-lg shadow-indigo-600/40 text-white">
                AGZ
              </div>
              <div className="text-sm font-extrabold tracking-widest font-syne uppercase">
                ABDUL JALIL ZWAK
              </div>
              <div className="w-36 h-[2px] bg-slate-800 rounded-full overflow-hidden mt-1">
                <motion.div
                  className="w-full h-full bg-gradient-to-r from-indigo-500 to-sky-400"
                  initial={{x: '-100%'}}
                  animate={{x: '0%'}}
                  transition={{duration: 0.65, ease: 'easeInOut'}}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={`min-h-screen relative transition-colors duration-300 selection:bg-indigo-500/20 selection:text-indigo-600 dark:selection:text-indigo-300 overflow-x-hidden ${
          isDark ? 'bg-[#07090e] text-slate-100' : 'bg-transparent text-slate-900'
        }`}
      >
        {/* Global Complex Multi-Tone Ambient Gradient Mesh - LIGHT MODE ONLY */}
        {!isDark && (
          <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
            <div className="absolute -top-[12%] -left-[10%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-br from-indigo-200/50 via-purple-100/35 to-transparent blur-[110px]" />
            <div className="absolute top-[8%] -right-[12%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-bl from-sky-200/55 via-cyan-100/30 to-transparent blur-[110px]" />
            <div className="absolute top-[48%] -left-[8%] w-[48vw] h-[48vw] rounded-full bg-gradient-to-tr from-violet-200/40 via-indigo-100/35 to-transparent blur-[120px]" />
            <div className="absolute -bottom-[8%] -right-[10%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-tl from-indigo-200/50 via-sky-200/40 to-transparent blur-[115px]" />
            <div className="absolute inset-0 bg-tech-grid-light opacity-30" />
          </div>
        )}

        {/* Decorative Floating Geometric Particles (Modern Tech Aesthetic) */}
        <FloatingParticles />

        <div className="relative z-10">
          <AmbientCursor />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Services />
            <Projects />
            <Journey />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
          <FloatingActionHub />
        </div>
      </div>
    </>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Brief, ultra-smooth initial splash screen (0.75s)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <PortfolioContent loading={loading} />
      </LanguageProvider>
    </ThemeProvider>
  );
}
