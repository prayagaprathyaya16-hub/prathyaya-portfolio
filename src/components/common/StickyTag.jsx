import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable <StickyTag> component
 * - Pastel torn-paper tag in yellow, mint, pink, sky, mustard
 * - Interactive hover wiggle
 */
export function StickyTag({
  children,
  color = 'sticky-yellow',
  rotation = '-1deg',
  className = '',
  onClick,
  active = false,
  size = 'md'
}) {
  const bgClasses = {
    'sticky-yellow': 'bg-sticky-yellow text-ink border-amber-300',
    'sticky-mint': 'bg-sticky-mint text-ink border-emerald-300',
    'sticky-pink': 'bg-sticky-pink text-ink border-rose-300',
    'sticky-sky': 'bg-sticky-sky text-ink border-sky-300',
    'mustard': 'bg-mustard text-ink border-amber-400',
    'charcoal': 'bg-charcoal text-cream border-ink',
    'white': 'bg-white text-ink border-ink/20',
  };

  const sizeClasses = {
    sm: 'text-xs px-2.5 py-1',
    md: 'text-xs sm:text-sm px-3.5 py-1.5',
    lg: 'text-sm sm:text-base px-4 py-2 font-medium',
  };

  const bg = bgClasses[color] || bgClasses['sticky-yellow'];
  const sz = sizeClasses[size] || sizeClasses.md;

  return (
    <motion.button
      type={onClick ? "button" : undefined}
      onClick={onClick}
      initial={{ rotate: rotation }}
      whileHover={{
        rotate: [0, -3, 3, -1, 0],
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.96 }}
      className={`relative inline-flex items-center justify-center font-mono font-bold tracking-wider uppercase border border-ink/30 shadow-sketch select-none rounded-[2px] ${bg} ${sz} ${
        active ? 'ring-2 ring-ink ring-offset-1 scale-105 !bg-mustard font-black' : ''
      } ${onClick ? 'cursor-pointer' : 'cursor-default'} ${className}`}
    >
      {/* Subtle top tape dot or pin */}
      <span className="relative z-10 flex items-center gap-1.5">
        {children}
      </span>
    </motion.button>
  );
}

export default StickyTag;
