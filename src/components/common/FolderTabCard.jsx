import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

/**
 * Reusable <FolderTabCard> component
 * - Tactile file-folder aesthetic with top corner folder tab
 * - Elevates forward on hover
 */
export function FolderTabCard({
  number = '01',
  tabLabel,
  dateOrMeta,
  title,
  tagline,
  colorTheme = 'charcoal', // 'charcoal' | 'mustard' | 'cream' | 'mint'
  className = '',
  onClick,
  children
}) {
  const themes = {
    charcoal: {
      card: 'bg-charcoal text-cream border-ink',
      tab: 'bg-charcoal text-cream border-ink',
      badge: 'bg-mustard text-ink',
      textMuted: 'text-cream/70',
      arrowBtn: 'bg-mustard text-ink hover:bg-white',
    },
    mustard: {
      card: 'bg-mustard text-ink border-ink',
      tab: 'bg-mustard text-ink border-ink',
      badge: 'bg-charcoal text-cream',
      textMuted: 'text-ink/80',
      arrowBtn: 'bg-charcoal text-cream hover:bg-ink',
    },
    cream: {
      card: 'bg-cream text-ink border-ink',
      tab: 'bg-cream text-ink border-ink',
      badge: 'bg-sticky-pink text-ink',
      textMuted: 'text-ink/70',
      arrowBtn: 'bg-ink text-cream hover:bg-charcoal',
    },
    mint: {
      card: 'bg-sticky-mint text-ink border-ink',
      tab: 'bg-sticky-mint text-ink border-ink',
      badge: 'bg-charcoal text-cream',
      textMuted: 'text-ink/80',
      arrowBtn: 'bg-ink text-cream hover:bg-mustard hover:text-ink',
    }
  };

  const theme = themes[colorTheme] || themes.charcoal;
  const label = tabLabel || `PROJECT ${number}`;

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      onClick={onClick}
      className={`group relative pt-6 rounded-t-lg rounded-b-sm border-2 shadow-sketch-lg hover:shadow-sketch-xl transition-all duration-300 ${theme.card} ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
    >
      {/* Folder Tab at Top Left */}
      <div
        className={`absolute -top-7 left-3 px-4 py-1 rounded-t-md border-t-2 border-x-2 font-mono text-xs font-bold tracking-widest uppercase flex items-center gap-1.5 shadow-[-2px_-2px_0px_rgba(0,0,0,0.1)] ${theme.tab}`}
      >
        <span className="w-2 h-2 rounded-full bg-accent-blue" />
        {label}
      </div>

      <div className="p-5 sm:p-7 flex flex-col justify-between h-full">
        <div>
          {/* Top metadata line */}
          <div className="flex items-center justify-between gap-2 mb-3">
            {dateOrMeta && (
              <span className={`font-mono text-xs tracking-wider uppercase ${theme.textMuted}`}>
                {dateOrMeta}
              </span>
            )}
            <span className={`px-2 py-0.5 rounded text-[11px] font-mono font-bold ${theme.badge}`}>
              NO. {number}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl tracking-tight leading-tight mb-2">
            {title}
          </h3>

          {/* Tagline */}
          {tagline && (
            <p className={`font-hand text-lg sm:text-xl font-medium leading-snug mb-4 ${theme.textMuted}`}>
              "{tagline}"
            </p>
          )}

          {children}
        </div>

        {/* View Project Action */}
        <div className="pt-4 mt-4 border-t border-current/20 flex items-center justify-between">
          <span className="font-mono text-xs font-bold tracking-widest uppercase">
            VIEW PROJECT
          </span>
          <div
            className={`w-9 h-9 rounded-full flex items-center justify-center font-bold transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 shadow-sketch ${theme.arrowBtn}`}
          >
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default FolderTabCard;
