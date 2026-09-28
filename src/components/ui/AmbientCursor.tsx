import {useEffect, useState} from 'react';
import {motion, useMotionValue, useSpring} from 'framer-motion';

export function AmbientCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointerFine, setIsPointerFine] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = {damping: 28, stiffness: 280, mass: 0.4};
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on desktop with fine mouse pointer
    if (window.matchMedia('(pointer: fine)').matches) {
      setIsPointerFine(true);
    } else {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, {passive: true});
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isPointerFine) return null;

  return (
    <motion.div
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        opacity: isVisible ? 0.35 : 0,
        scale: isVisible ? 1 : 0.4,
      }}
      transition={{duration: 0.2}}
      className="pointer-events-none fixed top-0 left-0 z-50 w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-sky-400 blur-[8px] dark:from-indigo-400 dark:to-cyan-400"
    />
  );
}
