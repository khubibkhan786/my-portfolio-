import {useMemo} from 'react';
import {motion} from 'framer-motion';

interface Particle {
  id: number;
  type: 'diamond' | 'ring' | 'square' | 'cross' | 'dot';
  size: number;
  x: number; // percentage
  y: number; // percentage
  duration: number;
  delay: number;
  colorClass: string;
}

export function FloatingParticles() {
  // Deterministic set of floating geometric shapes for stability
  const particles: Particle[] = useMemo(() => [
    {id: 1, type: 'diamond', size: 14, x: 8, y: 18, duration: 22, delay: 0, colorClass: 'border-indigo-400/30 text-indigo-400/30'},
    {id: 2, type: 'ring', size: 18, x: 88, y: 12, duration: 26, delay: 1, colorClass: 'border-sky-400/30'},
    {id: 3, type: 'cross', size: 12, x: 22, y: 35, duration: 19, delay: 2, colorClass: 'text-violet-400/35'},
    {id: 4, type: 'square', size: 12, x: 78, y: 38, duration: 24, delay: 3, colorClass: 'border-indigo-400/25'},
    {id: 5, type: 'dot', size: 6, x: 45, y: 22, duration: 18, delay: 1.5, colorClass: 'bg-cyan-400/35'},
    {id: 6, type: 'diamond', size: 16, x: 12, y: 62, duration: 25, delay: 2.5, colorClass: 'border-purple-400/30 text-purple-400/30'},
    {id: 7, type: 'cross', size: 14, x: 92, y: 68, duration: 21, delay: 0.5, colorClass: 'text-sky-400/35'},
    {id: 8, type: 'ring', size: 22, x: 32, y: 78, duration: 27, delay: 4, colorClass: 'border-indigo-400/25'},
    {id: 9, type: 'square', size: 10, x: 68, y: 82, duration: 20, delay: 2, colorClass: 'border-cyan-400/30'},
    {id: 10, type: 'dot', size: 5, x: 82, y: 52, duration: 16, delay: 3.5, colorClass: 'bg-indigo-400/40'},
    {id: 11, type: 'cross', size: 11, x: 52, y: 92, duration: 23, delay: 1, colorClass: 'text-violet-400/30'},
    {id: 12, type: 'diamond', size: 12, x: 62, y: 15, duration: 24, delay: 3, colorClass: 'border-sky-400/30'},
    {id: 13, type: 'ring', size: 16, x: 5, y: 88, duration: 28, delay: 2, colorClass: 'border-purple-400/25'},
    {id: 14, type: 'dot', size: 6, x: 28, y: 48, duration: 17, delay: 0.8, colorClass: 'bg-sky-400/35'},
  ], []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[1] overflow-hidden select-none"
    >
      {particles.map((p) => {
        // Floating keyframes
        const yOffset = p.id % 2 === 0 ? -35 : -45;
        const xOffset = p.id % 3 === 0 ? 20 : -20;
        const rotateOffset = p.type === 'cross' || p.type === 'square' || p.type === 'diamond' ? 180 : 0;

        return (
          <motion.div
            key={p.id}
            className="absolute flex items-center justify-center will-change-transform opacity-30 dark:opacity-25"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
            }}
            animate={{
              y: [0, yOffset, 0],
              x: [0, xOffset, 0],
              rotate: [0, rotateOffset, 360],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          >
            {p.type === 'diamond' && (
              <div
                className={`w-full h-full border border-dashed rounded-xs rotate-45 ${p.colorClass}`}
              />
            )}
            {p.type === 'ring' && (
              <div className={`w-full h-full rounded-full border border-solid ${p.colorClass}`} />
            )}
            {p.type === 'square' && (
              <div className={`w-full h-full border border-solid rounded-xs ${p.colorClass}`} />
            )}
            {p.type === 'cross' && (
              <svg
                width={p.size}
                height={p.size}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className={p.colorClass}
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            )}
            {p.type === 'dot' && (
              <div className={`w-full h-full rounded-full shadow-xs ${p.colorClass}`} />
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
