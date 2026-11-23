import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable <StatNote> sticky note component
 * - Big display number + handwritten label
 * - Washi tape accent on top
 */
export function StatNote({
  value,
  label,
  color = 'sticky-yellow',
  rotation = '1deg',
  className = '',
  tapeColor = 'sticky-sky',
  size = 'md'
}) {
  const bgClasses = {
    'sticky-yellow': 'bg-sticky-yellow text-ink border-amber-300',
    'sticky-mint': 'bg-sticky-mint text-ink border-emerald-300',
    'sticky-pink': 'bg-sticky-pink text-ink border-rose-300',
    'sticky-sky': 'bg-sticky-sky text-ink border-sky-300',
    'mustard': 'bg-mustard text-ink border-amber-500',
    'cream': 'bg-cream text-ink border-ink/20',
  };

  const tapeColors = {
    'sticky-yellow': 'tape-yellow',
    'sticky-pink': 'tape-pink',
    'sticky-mint': 'tape-mint',
    'sticky-sky': 'tape-sky',
    'mustard': 'tape-mustard',
  };

  const bg = bgClasses[color] || bgClasses['sticky-yellow'];
  const tapeClass = tapeColors[tapeColor] || 'tape-sky';

  return (
    <motion.div
      initial={{ rotate: rotation }}
      whileHover={{ y: -4, rotate: '0deg', scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={`relative p-4 sm:p-5 border border-ink/20 shadow-sticky rounded-[2px] flex flex-col items-center text-center select-none ${bg} ${className}`}
    >
      {/* Washi tape at top */}
      <div
        className={`absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-4 washi-tape ${tapeClass} -rotate-2 pointer-events-none z-10`}
      />

      <span className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-ink leading-none mt-1">
        {value}
      </span>
      <span className="font-hand text-base sm:text-lg text-ink/80 font-bold mt-1.5 leading-tight">
        {label}
      </span>
    </motion.div>
  );
}

export default StatNote;
