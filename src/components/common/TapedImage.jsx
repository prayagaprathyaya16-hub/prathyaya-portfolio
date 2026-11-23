import React from 'react';
import { motion } from 'framer-motion';
import Img from './Img';

/**
 * Reusable <TapedImage> component
 * - Clean presentation photo with washi tape strip accents on corners
 */
export function TapedImage({
  src,
  alt = 'Photograph',
  aspect = '16:9',
  className = '',
  imgClassName = '',
  tapeColor = 'sticky-sky',
  onClick,
  rotation = '0deg',
}) {
  const tapeColorClasses = {
    'sticky-yellow': 'tape-yellow',
    'sticky-pink': 'tape-pink',
    'sticky-mint': 'tape-mint',
    'sticky-sky': 'tape-sky',
    'mustard': 'tape-mustard',
  };

  const tapeClass = tapeColorClasses[tapeColor] || 'tape-sky';

  return (
    <motion.div
      initial={{ rotate: rotation }}
      whileHover={{ y: -3, scale: 1.01 }}
      onClick={onClick}
      className={`relative p-2 bg-white shadow-polaroid border border-ink/10 rounded-[2px] ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
    >
      {/* Corner tape 1: top-left */}
      <div
        className={`absolute -top-2.5 -left-3 w-14 h-4 washi-tape ${tapeClass} -rotate-45 z-20 pointer-events-none shadow-sm`}
      />
      
      {/* Corner tape 2: bottom-right */}
      <div
        className={`absolute -bottom-2.5 -right-3 w-14 h-4 washi-tape ${tapeClass} -rotate-45 z-20 pointer-events-none shadow-sm`}
      />

      <div className="overflow-hidden rounded-[1px] bg-[#EFECE6]">
        <Img
          src={src}
          alt={alt}
          aspect={aspect}
          imgClassName={imgClassName}
        />
      </div>
    </motion.div>
  );
}

export default TapedImage;
