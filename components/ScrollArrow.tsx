'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

export default function ScrollArrow() {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  // Controlla lo scroll: se scendi oltre 100px, la freccia svanisce
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100 && !isHidden) {
      setIsHidden(true);
    } else if (latest <= 100 && isHidden) {
      setIsHidden(false);
    }
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: isHidden ? 0 : 1,
        y: [0, 10, 0] // Movimento fluido su e giù
      }}
      transition={{
        opacity: { duration: 0.3 }, // Dissolvenza rapida ma morbida
        y: { 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }
      }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-20"
      onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
    >
      {/* Icona SVG minimale e sottile */}
      <svg 
        width="36" 
        height="36" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5" // Tratto sottile ed elegante
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="text-white/70 hover:text-white transition-colors"
      >
        <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
      </svg>
    </motion.div>
  );
}