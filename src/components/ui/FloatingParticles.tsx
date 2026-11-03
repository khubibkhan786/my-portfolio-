import {memo} from 'react';

// Lightweight, CSS-composited subtle ambient particles (low CPU overhead for Celeron N4000)
export const FloatingParticles = memo(function FloatingParticles() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[1] overflow-hidden select-none"
    >
      {/* 1. Subtle top-left geometric accent */}
      <div
        className="absolute w-3.5 h-3.5 border border-indigo-400/25 rotate-45 rounded-xs animate-subtle-float-1"
        style={{left: '9%', top: '16%'}}
      />

      {/* 2. Top-right soft ring */}
      <div
        className="absolute w-4 h-4 rounded-full border border-sky-400/25 animate-subtle-float-2"
        style={{left: '86%', top: '14%'}}
      />

      {/* 3. Mid-left cross */}
      <div
        className="absolute w-3 h-3 text-violet-400/30 animate-subtle-float-3"
        style={{left: '18%', top: '48%'}}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </div>

      {/* 4. Mid-right small square */}
      <div
        className="absolute w-3 h-3 border border-indigo-400/20 rounded-xs animate-subtle-float-1"
        style={{left: '82%', top: '56%'}}
      />

      {/* 5. Lower-left soft ring */}
      <div
        className="absolute w-5 h-5 rounded-full border border-purple-400/20 animate-subtle-float-2"
        style={{left: '12%', top: '82%'}}
      />

      {/* 6. Lower-right geometric accent */}
      <div
        className="absolute w-3.5 h-3.5 border border-cyan-400/25 rotate-45 rounded-xs animate-subtle-float-3"
        style={{left: '74%', top: '86%'}}
      />
    </div>
  );
});
