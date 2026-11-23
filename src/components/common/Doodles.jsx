import React from 'react';
import { motion } from 'framer-motion';

/**
 * Hand-drawn SVG doodles with optional Framer Motion path animations
 */

export function DoodleArrow({ className = '', direction = 'down', color = '#1A1A1A' }) {
  return (
    <svg
      className={`inline-block overflow-visible ${className}`}
      viewBox="0 0 60 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d={
          direction === 'down'
            ? "M 10 5 Q 30 15 35 32 M 22 25 L 35 34 L 42 21"
            : direction === 'right'
            ? "M 5 20 Q 30 10 50 20 M 38 10 L 52 20 L 40 30"
            : "M 50 10 Q 30 20 15 30 M 26 34 L 14 31 L 18 19"
        }
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0.2 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />
    </svg>
  );
}

export function DoodleStar({ className = '', size = 24, color = '#F2C230' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`inline-block ${className}`}
    >
      <path
        d="M12 2 L14.5 8.5 L21 9.5 L16 14.5 L17.5 21 L12 17.5 L6.5 21 L8 14.5 L3 9.5 L9.5 8.5 Z"
        fill={color}
        stroke="#1A1A1A"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DoodleCircle({ className = '', color = '#2F4BFF' }) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      fill="none"
    >
      <motion.path
        d="M 10 50 C 10 20, 85 10, 92 45 C 98 75, 18 92, 12 55 C 8 35, 75 25, 88 32"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="4 2"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />
    </svg>
  );
}

export function DoodleUnderline({ className = '', color = '#F2C230' }) {
  return (
    <svg
      className={`w-full h-3 overflow-visible ${className}`}
      viewBox="0 0 200 12"
      fill="none"
    >
      <motion.path
        d="M 2 8 C 50 2, 120 12, 198 5"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />
    </svg>
  );
}

export function DoodleFrame({ className = '', color = '#5A0414' }) {
  return (
    <svg
      className={`absolute -inset-2.5 w-[calc(100%+20px)] h-[calc(100%+20px)] pointer-events-none ${className}`}
      viewBox="0 0 200 100"
      preserveAspectRatio="none"
      fill="none"
    >
      <path
        d="M 4 8 C 50 3, 150 5, 194 6 C 196 35, 195 75, 194 94 C 145 96, 45 93, 6 92 C 5 65, 3 35, 4 8 Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SmileyBadge({ className = '', size = 56 }) {
  return (
    <motion.div
      whileHover={{ rotate: 18, scale: 1.08 }}
      className={`relative inline-flex items-center justify-center rounded-full bg-mustard border-2 border-ink shadow-sketch select-none cursor-pointer ${className}`}
      style={{ width: size, height: size }}
      title="Have a nice day!"
    >
      <svg
        width={size * 0.65}
        height={size * 0.65}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11" cy="13" r="2.5" fill="#1A1A1A" />
        <circle cx="25" cy="13" r="2.5" fill="#1A1A1A" />
        <path
          d="M 9 20 C 13 28, 23 28, 27 20"
          stroke="#1A1A1A"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      {/* Tape on top of smiley */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-7 h-2.5 washi-tape tape-yellow -rotate-6" />
    </motion.div>
  );
}
