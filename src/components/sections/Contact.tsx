import {useState} from 'react';
import {motion} from 'framer-motion';
import {Mail, Send, Copy, Check, Github, Linkedin, Sparkles, MessageSquare} from 'lucide-react';
import {useTheme} from '../../context/ThemeContext';
import {useLanguage} from '../../context/LanguageContext';

export function Contact() {
  const {theme} = useTheme();
  const {t} = useLanguage();
  const isDark = theme === 'dark';
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [statusNotice, setStatusNotice] = useState('');

  const handleDraftSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject && !message) {
      setStatusNotice('Please write a subject or message.');
      setTimeout(() => setStatusNotice(''), 3000);
      return;
    }
    const fullText = `Subject: ${subject || 'Project Inquiry'}\n\n${message}`;
    navigator.clipboard.writeText(fullText);
    setCopiedDraft(true);
    setStatusNotice(t.contact.emailCopied);
    setTimeout(() => {
      setCopiedDraft(false);
      setStatusNotice('');
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-[#07090e] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300"
    >
      {/* Dynamic Atmospheric Glow */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[650px] h-[550px] sm:h-[650px] blur-[150px] pointer-events-none rounded-full transition-colors duration-700 ${
          isDark
            ? 'bg-gradient-to-tr from-indigo-600/15 via-sky-600/10 to-purple-600/10'
            : 'bg-gradient-to-tr from-indigo-200/40 via-sky-100/30 to-purple-100/25'
        }`}
      />

      {/* Subtle Technical Grid */}
      <div className={`absolute inset-0 pointer-events-none ${isDark ? 'bg-tech-grid-dark' : 'bg-tech-grid-light'} opacity-20`} />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{opacity: 0, scale: 0.98, y: 16}}
          whileInView={{opacity: 1, scale: 1, y: 0}}
          viewport={{ once: false, amount: 0.2 }}
          transition={{duration: 0.45, ease: [0.16, 1, 0.3, 1] as const}}
          className="p-6 sm:p-10 md:p-12 rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 backdrop-blur-2xl shadow-xl relative"
        >
          {/* Top Icon */}
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800/60 flex items-center justify-center mx-auto mb-5 text-indigo-600 dark:text-indigo-400 shadow-xs">
            <Mail size={24} />
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3 font-mono">
            <Sparkles size={11} />
            <span>{t.contact.tag}</span>
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-outfit mb-3 leading-tight text-slate-900 dark:text-white text-balance tracking-tight">
            {t.contact.headline}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-6 max-w-xl mx-auto leading-relaxed text-balance">
            {t.contact.subtitle}
          </p>

          {/* Quick Direct Actions: LinkedIn & GitHub */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all duration-200 shadow-md shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5 cursor-pointer"
            >
              <Linkedin size={15} />
              <span>Connect on LinkedIn</span>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs sm:text-sm rounded-xl border border-slate-200/90 dark:border-slate-700 shadow-2xs hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <Github size={15} />
              <span>Explore GitHub</span>
            </a>
          </div>

          {/* Message Draft Form */}
          <form
            onSubmit={handleDraftSubmit}
            className="p-4 sm:p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 text-left rtl:text-right max-w-lg mx-auto mb-8 space-y-3"
          >
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              <MessageSquare size={13} className="text-indigo-600 dark:text-indigo-400 shrink-0" />
              <span>{t.contact.draftShortcut}</span>
            </div>

            <div>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder={t.contact.subjectPlaceholder}
                className="w-full px-3 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            <div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t.contact.messagePlaceholder}
                rows={3}
                className="w-full px-3 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:ring-1 focus:ring-indigo-500 resize-none"
              />
            </div>

            {statusNotice && (
              <div className="text-[11.5px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 p-2 rounded-lg">
                {statusNotice}
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-1">
              <span className="text-[11px] text-slate-500 dark:text-slate-400">
                {t.contact.emailClientNote}
              </span>
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl transition-colors shrink-0 cursor-pointer flex items-center gap-1.5"
              >
                {copiedDraft ? (
                  <>
                    <Check size={13} />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>Copy Draft</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Social Profiles */}
          <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-500 dark:text-slate-400 font-mono">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Github size={14} />
              <span>GitHub</span>
            </a>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center gap-1.5"
            >
              <Linkedin size={14} />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
