import React from 'react';
import { motion } from 'framer-motion';
import Img from './Img';

/**
 * Reusable <Polaroid> component
 * - Classic white frame with thick bottom caption strip
 * - Handwritten caption in font-hand ("Caveat")
 * - Customizable washi tape with jagged torn edges
 * - Interactive hover lift (-6px) and straightening micro-interaction
 */
export function Polaroid({
  src,
  caption,
  alt = 'Portfolio snapshot',
  aspect = '4:5',
  rotation = '-2deg',
  tapeColor = 'sticky-yellow',
  tapePosition = 'top',
  className = '',
  imgClassName = '',
  onClick,
  showPin = false
}) {
  const tapeColorClasses = {
    'sticky-yellow': 'tape-yellow',
    'sticky-pink': 'tape-pink',
    'sticky-mint': 'tape-mint',
    'sticky-sky': 'tape-sky',
    'mustard': 'tape-mustard',
  };

  const tapeClass = tapeColorClasses[tapeColor] || 'tape-yellow';

  return (
    <motion.div
      initial={{ rotate: rotation }}
      whileHover={{
        y: -6,
        rotate: typeof rotation === 'string' && rotation.startsWith('-') ? '-0.8deg' : '0.8deg',
        scale: 1.02,
        transition: { duration: 0.2, ease: 'easeOut' }
      }}
      onClick={onClick}
      className={`group relative bg-white p-3 pb-5 rounded-[2px] shadow-polaroid hover:shadow-polaroid-hover transition-shadow duration-300 border border-ink/10 select-none ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
      style={{ transformOrigin: 'center center' }}
    >
      {/* Washi Tape Accent */}
      {tapePosition === 'top' && (
        <div
          className={`absolute -top-3.5 left-1/2 -translate-x-1/2 w-20 h-5 washi-tape ${tapeClass} -rotate-1 shadow-sm z-20 pointer-events-none`}
        />
      )}
      {tapePosition === 'corner' && (
        <div
          className={`absolute -top-2.5 -left-3 w-16 h-5 washi-tape ${tapeClass} -rotate-45 shadow-sm z-20 pointer-events-none`}
        />
      )}

      {/* Push Pin */}
      {showPin && (
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-accent-maroon border border-white shadow-md z-20" />
      )}

      {/* Inner Image Frame */}
      <div className="relative overflow-hidden bg-[#EFECE6] border border-ink/10 rounded-[1px]">
        <Img
          src={src}
          alt={alt}
          aspect={aspect}
          imgClassName={`group-hover:scale-105 transition-transform duration-500 ${imgClassName}`}
        />
      </div>

      {/* Handwritten Caption Strip */}
      {caption && (
        <div className="pt-2.5 px-1 text-center">
          <p className="font-hand text-lg sm:text-xl font-bold text-ink leading-tight tracking-wide">
            {caption}
          </p>
        </div>
      )}
    </motion.div>
  );
}

export default Polaroid;
