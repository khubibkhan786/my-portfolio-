import {Github, Linkedin, Mail, ArrowUp} from 'lucide-react';

const footerLinks = [
  {name: 'Home', href: '#home'},
  {name: 'About', href: '#about'},
  {name: 'Skills', href: '#skills'},
  {name: 'Services', href: '#services'},
  {name: 'Projects', href: '#projects'},
  {name: 'Journey', href: '#journey'},
  {name: 'Contact', href: '#contact'},
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <footer className="bg-slate-100/70 dark:bg-[#07090e] border-t border-slate-200/80 dark:border-slate-800/80 py-10 sm:py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
        {/* AGZ Logo & Identity */}
        <div className="text-center md:text-left">
          <a
            href="#home"
            className="group inline-flex items-center gap-2 mb-2 focus:outline-hidden select-none"
            aria-label="AGZ Home"
          >
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900 text-white dark:bg-slate-900 border border-slate-700/60 dark:border-slate-800 shadow-2xs group-hover:border-indigo-500/60 transition-all duration-300">
              <span className="font-outfit font-black tracking-tight text-xs leading-none text-white">
                AG
              </span>
              <span className="font-outfit font-black tracking-tight text-xs leading-none bg-gradient-to-tr from-indigo-400 to-sky-300 bg-clip-text text-transparent">
                Z
              </span>
              <span className="w-1 h-1 rounded-full bg-cyan-400 ml-0.5" />
            </div>
            <span className="text-sm font-bold font-outfit text-slate-900 dark:text-white tracking-tight">
              Abdul Jalil Zwak
            </span>
          </a>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Computer Science & Software Development
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs font-semibold text-slate-600 dark:text-slate-400">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Links & Back to Top */}
        <div className="flex items-center gap-2.5">
          <a
            href="mailto:a.zwak.khan@gmail.com"
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-white dark:hover:bg-slate-900 transition-all shadow-2xs"
            aria-label="Email Abdul Jalil Zwak"
          >
            <Mail size={15} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-900 transition-all shadow-2xs"
            aria-label="GitHub profile"
          >
            <Github size={15} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-white dark:hover:bg-slate-900 transition-all shadow-2xs"
            aria-label="LinkedIn profile"
          >
            <Linkedin size={15} />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all ml-1 shadow-2xs cursor-pointer"
            aria-label="Scroll back to top"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-6 pt-5 border-t border-slate-200/60 dark:border-slate-800/80 text-center text-xs text-slate-400 dark:text-slate-500">
        © {currentYear} Abdul Jalil Zwak · All rights reserved.
      </div>
    </footer>
  );
}
