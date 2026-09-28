import {useState} from 'react';
import {motion} from 'framer-motion';
import {Mail, Send, Copy, Check, Github, Linkedin, Sparkles} from 'lucide-react';
import {useTheme} from '../../context/ThemeContext';

export function Contact() {
  const {theme} = useTheme();
  const isDark = theme === 'dark';
  const [copied, setCopied] = useState(false);
  const emailAddress = 'a.zwak.khan@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-[#07090e] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300"
    >
      {/* Dynamic Atmospheric Glow (Proper Light & Dark adaptation) */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[650px] h-[550px] sm:h-[650px] blur-[150px] pointer-events-none rounded-full transition-colors duration-700 ${
          isDark
            ? 'bg-gradient-to-tr from-indigo-600/20 via-sky-600/15 to-purple-600/15'
            : 'bg-gradient-to-tr from-indigo-200/50 via-sky-100/40 to-purple-100/35'
        }`}
      />

      {/* Subtle Technical Grid */}
      <div className={`absolute inset-0 pointer-events-none ${isDark ? 'bg-tech-grid-dark' : 'bg-tech-grid-light'}`} />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{opacity: 0, scale: 0.95, y: 24}}
          whileInView={{opacity: 1, scale: 1, y: 0}}
          viewport={{ once: false, amount: 0.2 }}
          transition={{duration: 0.5, ease: [0.16, 1, 0.3, 1] as const}}
          className="p-6 sm:p-12 md:p-14 rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 backdrop-blur-2xl shadow-xl shadow-indigo-500/5 dark:shadow-2xl relative"
        >
          {/* Top Decorative Icon */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800/60 flex items-center justify-center mx-auto mb-6 sm:mb-7 shadow-xs text-indigo-600 dark:text-indigo-400">
            <Mail size={28} />
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles size={12} />
            <span>06 — LET'S COLLABORATE</span>
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-outfit mb-4 sm:mb-6 leading-tight text-slate-900 dark:text-white text-balance tracking-tight">
            Have an idea or a <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500 dark:from-indigo-400 dark:via-sky-300 dark:to-indigo-300 bg-clip-text text-transparent">
              project in mind?
            </span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed text-balance">
            Let's turn it into something real. I'm always open to discussing new projects, practical
            software solutions, or collaborative learning opportunities.
          </p>

          {/* Action CTAs: Direct Mail & Copy Email with Instant Feedback */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
            <a
              href={`mailto:${emailAddress}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all duration-200 shadow-md shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Contact Me</span>
              <Send size={15} />
            </a>

            <button
              onClick={copyEmail}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs sm:text-sm rounded-xl border border-slate-200/90 dark:border-slate-700 shadow-2xs hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check size={15} className="text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400">Email Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy size={15} className="text-slate-500 dark:text-slate-400" />
                  <span>Copy: {emailAddress}</span>
                </>
              )}
            </button>
          </div>

          {/* Verified Social Profile Placeholders */}
          <div className="pt-6 sm:pt-8 border-t border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-500 dark:text-slate-400">
            <a
              href={`mailto:${emailAddress}`}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1.5"
            >
              <Mail size={14} />
              <span>{emailAddress}</span>
            </a>
            <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">·</span>
            <span className="text-slate-400 dark:text-slate-500 flex items-center gap-1">
              <Github size={14} />
              <span>GitHub (Coming Soon)</span>
            </span>
            <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">·</span>
            <span className="text-slate-400 dark:text-slate-500 flex items-center gap-1">
              <Linkedin size={14} />
              <span>LinkedIn (Coming Soon)</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
