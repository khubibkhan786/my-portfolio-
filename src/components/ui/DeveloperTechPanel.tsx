import {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {Terminal, FileCode2, Layers, CheckCircle2, Copy, Check} from 'lucide-react';
import {cn} from '../../lib/utils';
import {useTheme} from '../../context/ThemeContext';

type TabId = 'developer' | 'stack' | 'status';

interface TabItem {
  id: TabId;
  label: string;
  filename: string;
  icon: typeof Terminal;
}

const tabs: TabItem[] = [
  {id: 'developer', label: 'Profile', filename: 'Developer.ts', icon: FileCode2},
  {id: 'stack', label: 'Stack', filename: 'Stack.json', icon: Layers},
  {id: 'status', label: 'Status', filename: 'Status.sh', icon: Terminal},
];

export function DeveloperTechPanel() {
  const {theme} = useTheme();
  const isDark = theme === 'dark';
  const [activeTab, setActiveTab] = useState<TabId>('developer');
  const [copied, setCopied] = useState(false);

  const getCodeContent = () => {
    switch (activeTab) {
      case 'developer':
        return `// AGZ / Student Developer Profile
export const student = {
  name: "Abdul Jalil Zwak",
  role: "Computer Science Student · Information Systems",
  university: "Paktia University (2026)",
  focus: ["Software Development", "Android", "Web", "SQL"],
  status: "Building real projects & developing core skills",
  principles: "Practical, clear, and reliable solutions"
};`;
      case 'stack':
        return `{\n  "languages": ["Java", "Kotlin", "JavaScript", "TypeScript"],\n  "frameworks": ["Android SDK", "React", "Tailwind CSS"],\n  "databases": ["SQL", "MySQL", "SQLite", "Room"],\n  "tools": ["Git", "GitHub", "Android Studio", "VS Code"],\n  "interests": ["Offline-First Apps", "Automation Scripts"]\n}`;
      case 'status':
        return `$ ./agz-status --check
[OK] لمونځ او اذکار (Android / Kotlin) ........ COMPLETED
[OK] د هوا حالاتو (Weather App / Web) ........ COMPLETED
[>>] Student Academic Portal (React / TS) .... IN DEV
[>>] Workflow Automation Toolkit (Node / AI) . IN DEV
[>>] AI Exam Prep Engine (AI / Web) .......... CONCEPT
[>>] Academic Data Sync Utility (Python / CLI) IN DEV`;
    }
  };

  const copyContent = () => {
    navigator.clipboard.writeText(getCodeContent());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-[520px] select-none">
      {/* Background Soft Glow - Minimal & non-distracting */}
      <div
        className={cn(
          'absolute -inset-2 rounded-3xl blur-2xl pointer-events-none transition-opacity duration-500 opacity-40',
          isDark ? 'bg-indigo-600/10' : 'bg-indigo-200/35'
        )}
      />

      {/* Main Terminal Window */}
      <div className="relative rounded-2xl overflow-hidden bg-[#0d1117] text-slate-200 border border-slate-800 shadow-2xl shadow-black/40 backdrop-blur-xl">
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-slate-800/90 text-xs">
          {/* Window Action Dots */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]/90 border border-[#e0443e]/50" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]/90 border border-[#dea123]/50" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]/90 border border-[#1aab29]/50" />
            <span className="ml-2 font-mono text-[11px] text-slate-400 font-medium">
              agz-workspace
            </span>
          </div>

          {/* Quick Copy Button */}
          <button
            onClick={copyContent}
            className="flex items-center gap-1.5 px-2 py-1 rounded-md text-[11px] font-mono text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 transition-colors cursor-pointer"
            aria-label="Copy snippet"
          >
            {copied ? (
              <>
                <Check size={12} className="text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy size={12} />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Interactive Tab Selectors */}
        <div className="flex items-center gap-1 px-3 pt-2 bg-[#0e131b] border-b border-slate-800/70 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'relative flex items-center gap-2 px-3 py-2 text-xs font-mono rounded-t-lg transition-all duration-150 cursor-pointer whitespace-nowrap',
                  isActive
                    ? 'bg-[#0d1117] text-white border-t border-x border-slate-700/80 font-medium shadow-xs'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                )}
              >
                <Icon size={13} className={isActive ? 'text-indigo-400' : 'text-slate-500'} />
                <span>{tab.filename}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 ml-0.5" />
                )}
              </button>
            );
          })}
        </div>

        {/* Code Content Body */}
        <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto min-h-[220px] bg-[#0d1117]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{opacity: 0, y: 4}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: -4}}
              transition={{duration: 0.15}}
            >
              {activeTab === 'developer' && (
                <div className="space-y-1 text-slate-300">
                  <div className="text-slate-500 italic mb-2">
                    // AGZ / Developer Profile
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
                    <span className="text-emerald-300">"CS Student · Information Systems"</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">university: </span>
                    <span className="text-emerald-300">"Paktia University (2026)"</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">focus: </span>
                    <span className="text-amber-300">["Software", "Android", "Web", "SQL"]</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">status: </span>
                    <span className="text-emerald-400 font-medium">"Building & Developing Skills"</span>
                  </div>
                  <div>
                    <span className="text-slate-300">{'}'};</span>
                  </div>
                </div>
              )}

              {activeTab === 'stack' && (
                <div className="space-y-1 text-slate-300">
                  <div className="text-slate-500 italic mb-2">
                    // Applied Technologies
                  </div>
                  <div>
                    <span className="text-slate-400">{'{'}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-sky-300">"languages"</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-amber-300">["Java", "Kotlin", "JavaScript", "TypeScript"]</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-sky-300">"web"</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-amber-300">["HTML5", "CSS3", "React", "Tailwind CSS"]</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-sky-300">"databases"</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-amber-300">["SQL", "MySQL", "SQLite", "Room"]</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-sky-300">"tools"</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-amber-300">["Git", "GitHub", "Android Studio", "VS Code"]</span>
                  </div>
                  <div>
                    <span className="text-slate-400">{'}'}</span>
                  </div>
                </div>
              )}

              {activeTab === 'status' && (
                <div className="space-y-1.5 text-xs text-slate-300 font-mono">
                  <div className="text-emerald-400 flex items-center gap-1.5">
                    <span className="text-slate-500">$</span>
                    <span>./status --inspect --all</span>
                  </div>
                  <div className="pt-1 space-y-1 text-slate-300">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">لمونځ او اذکار (Android / Kotlin)</span>
                      <span className="text-emerald-400 font-semibold text-[11px]">COMPLETED</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">د هوا حالاتو (Weather App / Web)</span>
                      <span className="text-emerald-400 font-semibold text-[11px]">COMPLETED</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Student Academic Portal</span>
                      <span className="text-amber-400 font-semibold text-[11px]">IN DEV</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Workflow Automation Toolkit</span>
                      <span className="text-indigo-400 font-semibold text-[11px]">IN DEV</span>
                    </div>
                  </div>
                  <div className="pt-2 text-slate-500 text-[11px] flex items-center gap-1.5">
                    <CheckCircle2 size={12} className="text-emerald-400" />
                    <span>Active student projects in steady development</span>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Interactive Prompt Line */}
          <div className="flex items-center gap-2 mt-4 pt-3 border-t border-slate-800/60 text-slate-500 text-xs">
            <span className="text-indigo-400">agz@dev:~$</span>
            <span className="animate-pulse text-indigo-400">▋</span>
          </div>
        </div>
      </div>
    </div>
  );
}
