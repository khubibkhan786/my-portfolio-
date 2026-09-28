import {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import {Code2, Globe, Database, Cpu, Zap, Sparkles, Terminal, CheckCircle2, ArrowRight} from 'lucide-react';
import {cn} from '../../lib/utils';
import {useTheme} from '../../context/ThemeContext';

interface TechNode {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: typeof Code2;
  color: string;
  badge: string;
}

const techNodes: TechNode[] = [
  {
    id: 'java',
    name: 'Java',
    category: 'Core Language',
    description: 'Programming foundation & Android application logic',
    icon: Code2,
    color: 'from-amber-500 to-orange-600',
    badge: 'Foundation',
  },
  {
    id: 'web',
    name: 'Web Dev',
    category: 'Frontend & UI',
    description: 'Modern responsive web development with React & TypeScript',
    icon: Globe,
    color: 'from-sky-500 to-blue-600',
    badge: 'Modern UI',
  },
  {
    id: 'sql',
    name: 'Database',
    category: 'Relational Data',
    description: 'Data modeling, schema design, and MySQL queries',
    icon: Database,
    color: 'from-emerald-500 to-teal-600',
    badge: 'Data Systems',
  },
  {
    id: 'ai',
    name: 'AI Tools',
    category: 'AI Integration',
    description: 'AI-assisted development, prompt engineering & prototyping',
    icon: Cpu,
    color: 'from-purple-500 to-indigo-600',
    badge: 'Assisted Dev',
  },
  {
    id: 'automation',
    name: 'Automation',
    category: 'Productivity',
    description: 'Workflow automation and repetitive task scripting',
    icon: Zap,
    color: 'from-indigo-500 to-violet-600',
    badge: 'Efficiency',
  },
];

const codeSnippetLines = [
  {text: '// Building practical digital solutions', type: 'comment'},
  {text: 'const student = new Developer("Abdul Jalil Zwak");', type: 'code'},
  {text: 'const focus = ["Software", "Web", "SQL", "AI"];', type: 'code'},
  {text: 'student.learn({ discipline: true });', type: 'call'},
  {text: 'student.buildSolution();', type: 'call'},
  {text: '/* Continuous improvement every day */', type: 'comment'},
];

export function DeveloperTechPanel() {
  const {theme} = useTheme();
  const isDark = theme === 'dark';
  const [activeNodeId, setActiveNodeId] = useState<string>('java');
  const [codeLineIndex, setCodeLineIndex] = useState<number>(3);

  // Auto-advance code typing preview gently
  useEffect(() => {
    const timer = setInterval(() => {
      setCodeLineIndex((prev) => (prev < codeSnippetLines.length ? prev + 1 : 2));
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const activeNode = techNodes.find((n) => n.id === activeNodeId) || techNodes[0];

  return (
    <div className="relative w-full max-w-[500px] flex flex-col gap-4 select-none">
      {/* Background Soft Glow */}
      <div
        className={cn(
          'absolute -inset-4 rounded-3xl blur-3xl pointer-events-none transition-opacity duration-700 opacity-60',
          isDark ? 'bg-indigo-600/15' : 'bg-indigo-200/50'
        )}
      />

      {/* Main Developer Technology Ecosystem Glass Panel */}
      <div className="relative rounded-3xl p-4 sm:p-6 bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-xl shadow-indigo-500/5 dark:shadow-2xl dark:shadow-black/60 backdrop-blur-2xl transition-all">
        {/* Header bar of the panel */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-200/70 dark:border-slate-800/80">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-800 dark:text-slate-200">
              Technology Ecosystem
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] font-mono text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-1 rounded-full border border-indigo-200/60 dark:border-indigo-800/60">
            <Sparkles size={11} />
            <span>Interactive Nodes</span>
          </div>
        </div>

        {/* Central Hub Title */}
        <div className="text-center mb-6">
          <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 block mb-1">
            Focus & Competencies
          </span>
          <h3 className="text-xl sm:text-2xl font-bold font-syne text-slate-900 dark:text-white">
            Building Digital Solutions
          </h3>
        </div>

        {/* Interactive Technology Nodes Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-5">
          {techNodes.map((node) => {
            const Icon = node.icon;
            const isActive = activeNodeId === node.id;

            return (
              <button
                key={node.id}
                onClick={() => setActiveNodeId(node.id)}
                onMouseEnter={() => setActiveNodeId(node.id)}
                className={cn(
                  'group/node relative p-3 sm:p-3.5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between cursor-pointer',
                  isActive
                    ? 'bg-indigo-50/90 dark:bg-indigo-950/50 border-indigo-500 dark:border-indigo-500/80 shadow-md shadow-indigo-500/10 ring-1 ring-indigo-500/30 -translate-y-0.5'
                    : 'bg-slate-50/70 dark:bg-slate-800/50 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-100/80 dark:hover:bg-slate-800/80'
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={cn(
                      'w-8 h-8 rounded-xl flex items-center justify-center transition-transform duration-200',
                      isActive
                        ? 'bg-indigo-600 text-white shadow-sm scale-105'
                        : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 group-hover/node:scale-105'
                    )}
                  >
                    <Icon size={16} />
                  </div>
                  <span
                    className={cn(
                      'text-[9px] font-mono px-1.5 py-0.5 rounded-md font-semibold uppercase tracking-wider',
                      isActive
                        ? 'bg-indigo-200/60 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200'
                        : 'text-slate-400 dark:text-slate-500 bg-slate-200/50 dark:bg-slate-800/80'
                    )}
                  >
                    {node.badge}
                  </span>
                </div>

                <div>
                  <div className="text-sm font-bold font-syne text-slate-900 dark:text-white">
                    {node.name}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium truncate">
                    {node.category}
                  </div>
                </div>
              </button>
            );
          })}

          {/* Central Philosophy Pill in Grid */}
          <div className="p-3 sm:p-3.5 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-sky-500/10 border border-indigo-200/70 dark:border-indigo-800/60 flex flex-col justify-between">
            <div className="text-[10px] font-mono text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-wider">
              Goal
            </div>
            <div className="text-xs font-bold font-syne text-slate-900 dark:text-white leading-tight">
              Software Dev
            </div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400 flex items-center gap-1 font-mono">
              <CheckCircle2 size={11} className="text-emerald-500" />
              <span>Continuous</span>
            </div>
          </div>
        </div>

        {/* Live Active Node Narrative Display */}
        <motion.div
          key={activeNode.id}
          initial={{opacity: 0, y: 6}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.25}}
          className="p-3.5 rounded-2xl bg-slate-100/80 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 flex items-start gap-3"
        >
          <div className="w-8 h-8 rounded-xl bg-indigo-600/10 dark:bg-indigo-400/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
            <activeNode.icon size={16} />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-900 dark:text-white">
                {activeNode.name}
              </span>
              <span className="text-slate-300 dark:text-slate-700">·</span>
              <span className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400">
                {activeNode.category}
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-snug">
              {activeNode.description}
            </p>
          </div>
        </motion.div>
      </div>

      {/* 4. Sleek Code Window inside / beside the Tech Panel */}
      <div className="relative rounded-2xl p-4 bg-[#0a0d14] text-slate-200 border border-slate-800/90 shadow-xl overflow-hidden font-mono text-xs">
        {/* Terminal Header */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80 text-[11px]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-slate-400 text-[10px]">solution.ts</span>
          </div>
          <div className="flex items-center gap-1 text-[10px] text-slate-500">
            <Terminal size={12} />
            <span>TypeScript</span>
          </div>
        </div>

        {/* Code Content */}
        <div className="space-y-1 leading-relaxed">
          {codeSnippetLines.slice(0, codeLineIndex).map((line, idx) => {
            if (line.type === 'comment') {
              return (
                <div key={idx} className="text-slate-500 italic">
                  {line.text}
                </div>
              );
            }
            if (line.type === 'call') {
              return (
                <div key={idx} className="text-indigo-300 pl-2">
                  <span className="text-sky-400">solution</span>
                  <span className="text-slate-400">.</span>
                  <span className="text-emerald-400">{line.text.replace('student.', '')}</span>
                </div>
              );
            }
            return (
              <div key={idx} className="text-slate-300">
                <span className="text-purple-400">const </span>
                <span className="text-amber-300">
                  {line.text.replace('const ', '').split('=')[0]}
                </span>
                <span className="text-slate-400">= </span>
                <span className="text-sky-300">
                  {line.text.split('=')[1] || ''}
                </span>
              </div>
            );
          })}
        </div>

        {/* Pulse cursor */}
        <div className="flex items-center gap-1 mt-2 text-emerald-400 text-[11px]">
          <span className="animate-pulse">▋</span>
          <span className="text-slate-500 text-[10px]">ready</span>
        </div>
      </div>
    </div>
  );
}
