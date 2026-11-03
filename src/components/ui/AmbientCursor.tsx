import {useEffect, useRef, useState, memo} from 'react';
import {motion, useMotionValue, useSpring} from 'framer-motion';

export const AmbientCursor = memo(function AmbientCursor() {
  const [enabled, setEnabled] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth, lightweight spring parameters
  const springConfig = {damping: 25, stiffness: 220, mass: 0.3};
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable completely on touch devices, coarse pointers, or reduced-motion
    if (
      typeof window === 'undefined' ||
      !window.matchMedia('(pointer: fine)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    setEnabled(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (cursorRef.current && cursorRef.current.style.opacity !== '0.35') {
        cursorRef.current.style.opacity = '0.35';
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '0';
      }
    };

    window.addEventListener('mousemove', handleMouseMove, {passive: true});
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <motion.div
      ref={cursorRef}
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
        opacity: 0,
      }}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-50 w-7 h-7 rounded-full bg-gradient-to-r from-indigo-500 to-sky-400 blur-[8px] dark:from-indigo-400 dark:to-cyan-400 transition-opacity duration-300"
    />
  );
});
