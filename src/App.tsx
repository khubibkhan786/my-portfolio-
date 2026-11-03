import {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {ThemeProvider, useTheme} from './context/ThemeContext';
import {LanguageProvider} from './context/LanguageContext';
import {Navbar} from './components/ui/Navbar';
import {Hero} from './components/sections/Hero';
import {About} from './components/sections/About';
import {Skills} from './components/sections/Skills';
import {FutureRoadmap} from './components/sections/FutureRoadmap';
import {Services} from './components/sections/Services';
import {WorkProcess} from './components/sections/WorkProcess';
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
      {/* Minimal Brand Reveal on Initial Load */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.35, ease: [0.16, 1, 0.3, 1]}}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#07090e] text-white select-none"
          >
            <motion.div
              initial={{opacity: 0, y: 8}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.3}}
              className="flex flex-col items-center gap-3.5"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700/80 flex items-center justify-center font-mono font-bold text-sm shadow-xl text-white">
                <span className="font-outfit font-black text-white">AG</span>
                <span className="font-outfit font-black bg-gradient-to-tr from-indigo-400 to-sky-300 bg-clip-text text-transparent">Z</span>
              </div>
              <div className="text-xs font-bold tracking-widest font-mono uppercase text-slate-300">
                ABDUL JALIL ZWAK
              </div>
              <div className="w-28 h-[2px] bg-slate-800 rounded-full overflow-hidden mt-1">
                <motion.div
                  className="w-full h-full bg-gradient-to-r from-indigo-500 via-sky-400 to-indigo-500"
                  initial={{x: '-100%'}}
                  animate={{x: '0%'}}
                  transition={{duration: 0.5, ease: 'easeInOut'}}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={`min-h-screen relative transition-colors duration-300 selection:bg-indigo-500/20 selection:text-indigo-600 dark:selection:text-indigo-300 overflow-x-hidden ${
          isDark ? 'bg-[#07090e] text-slate-100' : 'bg-[#f8fafc] text-slate-900'
        }`}
      >
        {/* Subtle Low-Overhead Floating Geometric Particles */}
        <FloatingParticles />

        <div className="relative z-10">
          <AmbientCursor />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <FutureRoadmap />
            <Services />
            <WorkProcess />
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
    const timer = setTimeout(() => {
      setLoading(false);
    }, 550);
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
