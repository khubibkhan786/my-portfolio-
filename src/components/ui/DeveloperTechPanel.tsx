import {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {Terminal, User, Layers, Copy, Check, ShieldCheck} from 'lucide-react';
import {cn} from '../../lib/utils';
import {useTheme} from '../../context/ThemeContext';

type TabId = 'profile' | 'tech' | 'focus';

interface TabItem {
  id: TabId;
  label: string;
  filename: string;
  icon: typeof Terminal;
}

const tabs: TabItem[] = [
  {id: 'profile', label: 'Profile', filename: 'Developer.ts', icon: User},
  {id: 'tech', label: 'Tech Focus', filename: 'TechnicalSkills.json', icon: Layers},
  {id: 'focus', label: 'Roadmap', filename: 'EngineeringRoadmap.sh', icon: Terminal},
];

export function DeveloperTechPanel() {
  const {theme} = useTheme();
  const isDark = theme === 'dark';
  const [activeTab, setActiveTab] = useState<TabId>('profile');
  const [copied, setCopied] = useState(false);

  const getCodeContent = () => {
    switch (activeTab) {
      case 'profile':
        return `// AGZ / Developer Profile
export const developer = {
  name: "Abdul Jalil Zwak",
  title: "Software Developer",
  education: "Computer Science · Information Systems",
  status: "CS Student & Developer (Class of 2026)",
  focus: "Building practical web & mobile applications",
  workflow: "Product planning, architecture, clean code & testing",
  interests: [
    "Practical Software Engineering",
    "Modern Web (React 19 & TypeScript)",
    "Native Android (Kotlin & Room DB)",
    "AI-Integrated Applications"
  ]
};`;
      case 'tech':
        return `{\n  "core_capabilities": [\n    "Software Development (OOP, Clean Architecture, Git)",\n    "Database & Data Management (Relational Schemas, SQL, Room DB)",\n    "Web & Mobile Development (React 19, TypeScript, Kotlin, AI Integration)"\n  ],\n  "tools": [\n    "Git & GitHub", "Android Studio", "VS Code"\n  ]\n}`;
      case 'focus':
        return `$ cat ./software-engineering-roadmap.md
01. Core Programming & OOP ....... Java, OOP concepts, algorithms, structured code
02. Relational Databases ......... SQL, MySQL, table schemas, query design
03. Modern Web & Frontend ........ React 19, TypeScript, responsive UX & APIs
04. Mobile & Practical AI ........ Kotlin Android, Room DB, AI API integration
05. Full-Stack Engineering ....... Multi-platform systems, secure backend APIs`;
    }
  };

  const copyContent = () => {
    navigator.clipboard.writeText(getCodeContent());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-[540px] select-none text-left" dir="ltr">
      {/* Outer Glow Halo - Restrained & Efficient */}
      <div
        className={cn(
          'absolute -inset-1.5 rounded-3xl blur-xl pointer-events-none transition-opacity duration-300 opacity-40',
          isDark ? 'bg-indigo-600/15' : 'bg-indigo-300/30'
        )}
      />

      {/* Main Terminal Shell */}
      <div className="relative rounded-2xl overflow-hidden bg-[#0a0e17] text-slate-200 border border-slate-800 shadow-xl shadow-slate-950/30 backdrop-blur-md">
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-3.5 sm:px-4 py-2.5 sm:py-3 bg-[#111726] border-b border-slate-800/90 text-xs">
          {/* Window Action Dots */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56]/90 border border-[#e0443e]/50" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e]/90 border border-[#dea123]/50" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27c93f]/90 border border-[#1aab29]/50" />
            <span className="ml-1.5 font-mono text-[10.5px] sm:text-[11px] text-slate-400 font-medium tracking-tight">
              agz@workspace:~
            </span>
          </div>

          {/* Quick Copy Action */}
          <button
            onClick={copyContent}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Copy snippet to clipboard"
          >
            {copied ? (
              <>
                <Check size={12} className="text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Copied</span>
              </>
            ) : (
              <>
                <Copy size={12} />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 px-3 pt-2 bg-[#0c121e] border-b border-slate-800/80 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'relative flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 text-[11px] sm:text-xs font-mono rounded-t-lg transition-all duration-150 cursor-pointer whitespace-nowrap',
                  isActive
                    ? 'bg-[#0a0e17] text-white border-t border-x border-slate-700/80 font-semibold shadow-xs'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                )}
              >
                <Icon size={12} className={isActive ? 'text-indigo-400' : 'text-slate-500'} />
                <span>{tab.filename}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 ml-0.5 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto min-h-[260px] bg-[#0a0e17]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{opacity: 0, y: 3}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: -3}}
              transition={{duration: 0.15}}
            >
              {activeTab === 'profile' && (
                <div className="space-y-1 text-slate-300">
                  <div className="text-slate-500 italic mb-2">
                    // AGZ Developer Profile
                  </div>
                  <div>
                    <span className="text-purple-400 font-semibold">export const </span>
                    <span className="text-sky-300">developer </span>
                    <span className="text-slate-400">= </span>
                    <span className="text-slate-300">{'{'}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">name: </span>
                    <span className="text-emerald-300">"Abdul Jalil Zwak"</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">role: </span>
                    <span className="text-emerald-300">"Software Developer"</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">education: </span>
                    <span className="text-emerald-300">"Computer Science · Information Systems"</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">status: </span>
                    <span className="text-emerald-300">"CS Student & Developer (Class of 2026)"</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">headline: </span>
                    <span className="text-amber-300">"Building Practical Web & Mobile Applications"</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">interests: </span>
                    <span className="text-sky-300">["Web Apps", "Native Android", "Databases", "AI Integration"]</span>
                  </div>
                  <div>
                    <span className="text-slate-300">{'}'};</span>
                  </div>
                </div>
              )}

              {/* Tab 2: Tech Focus */}
              {activeTab === 'tech' && (
                <div className="space-y-1 text-slate-300">
                  <div className="text-slate-500 italic mb-2">
                    // Technical Skills Breakdown
                  </div>
                  <div>
                    <span className="text-slate-400">{'{'}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-sky-300">"using_in_projects"</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-emerald-300">["React 19", "TypeScript", "Kotlin", "Tailwind CSS", "JavaScript"]</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-sky-300">"currently_learning"</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-amber-300">["SQL & Relational Databases", "MySQL", "Software Engineering", "Java (OOP)"]</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-sky-300">"tools"</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-slate-300">["Git & GitHub", "Android Studio", "VS Code"]</span>
                  </div>
                  <div>
                    <span className="text-slate-400">{'}'}</span>
                  </div>
                </div>
              )}

              {/* Tab 3: Current Focus (5 Stages) */}
              {activeTab === 'focus' && (
                <div className="space-y-1.5 text-xs text-slate-300 font-mono">
                  <div className="text-emerald-400 flex items-center gap-1.5 mb-2">
                    <span className="text-slate-500">$</span>
                    <span>cat ./software-engineering-roadmap.md</span>
                  </div>

                  <div className="space-y-1.5 text-slate-300 text-[11px] leading-relaxed">
                    <div className="flex items-center justify-between gap-2 p-1.5 rounded-lg bg-slate-900/60 border border-slate-800">
                      <span className="text-slate-200">1. Core Programming & OOP (Java)</span>
                      <span className="text-[10px] font-bold text-sky-400 bg-sky-950/70 px-2 py-0.5 rounded border border-sky-800/60 shrink-0">
                        FOUNDATIONS
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-2 p-1.5 rounded-lg bg-slate-900/60 border border-slate-800">
                      <span className="text-slate-200">2. Relational Databases & SQL (MySQL)</span>
                      <span className="text-[10px] font-bold text-amber-400 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800/60 shrink-0">
                        LEARNING
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-2 p-1.5 rounded-lg bg-slate-900/60 border border-slate-800">
                      <span className="text-slate-200">3. Modern Web & Frontend (React 19, TS)</span>
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-800/60 shrink-0">
                        USING
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-2 p-1.5 rounded-lg bg-slate-900/60 border border-slate-800">
                      <span className="text-slate-200">4. Mobile & Practical AI (Kotlin, APIs)</span>
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-800/60 shrink-0">
                        USING
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-2 p-1.5 rounded-lg bg-slate-900/60 border border-slate-800">
                      <span className="text-slate-200">5. Full-Stack Software Engineering</span>
                      <span className="text-[10px] font-bold text-indigo-400 bg-indigo-950/70 px-2 py-0.5 rounded border border-indigo-800/60 shrink-0">
                        PLANNED
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 text-slate-400 text-[11px] flex items-center gap-1.5">
                    <ShieldCheck size={12} className="text-emerald-400 shrink-0" />
                    <span>Real coursework & practical implementation path</span>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Prompt status line */}
          <div className="flex items-center gap-2 mt-4 pt-3 border-t border-slate-800/70 text-slate-500 text-xs">
            <span className="text-cyan-400 font-bold">agz@paktia-cs:~$</span>
            <span className="inline-block w-2 h-4 bg-cyan-400/80 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
