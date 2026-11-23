import React, { useState } from 'react';

/**
 * Robust image loader with tactile notebook placeholder fallback.
 * Guarantees zero layout shifts with explicit aspect ratio bounding boxes.
 */
export function Img({
  src,
  alt = 'Portfolio image',
  aspect = '4:5',
  className = '',
  imgClassName = '',
  onClick,
  showLabel = true,
  loading = 'lazy'
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Aspect ratio class map
  const aspectClassMap = {
    '1:1': 'aspect-square',
    '3:4': 'aspect-[3/4]',
    '4:5': 'aspect-[4/5]',
    '4:3': 'aspect-[4/3]',
    '16:9': 'aspect-[16/9]',
    '21:9': 'aspect-[21/9]',
    '3:2': 'aspect-[3/2]',
    '2:3': 'aspect-[2/3]'
  };

  const aspectClass = aspectClassMap[aspect] || 'aspect-[4/5]';
  const fileName = src ? src.split('/').pop() : 'image.jpg';

  return (
    <div
      onClick={onClick}
      className={`relative w-full ${aspectClass} overflow-hidden bg-[#e8e4d9] ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${imgClassName}`}
        />
      ) : null}

      {/* Tactile Ruled/Hatched Paper Placeholder when image file is missing or loading fails */}
      {hasError && (
        <div className="absolute inset-0 hatched-placeholder border-2 border-dashed border-[#1A1A1A]/30 p-3 flex flex-col items-center justify-center text-center select-none group-hover:border-ink/60 transition-colors">
          {/* Subtle paper tape accent */}
          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-12 h-3.5 washi-tape tape-yellow -rotate-2" />
          
          <div className="my-auto flex flex-col items-center">
            {/* Hand-drawn sketch camera icon */}
            <svg
              className="w-8 h-8 text-ink/50 mb-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
              <circle cx="12" cy="13" r="3" />
            </svg>
            
            {showLabel && (
              <>
                <p className="font-hand text-base sm:text-lg font-bold text-ink/80 leading-tight break-all max-w-[90%]">
                  [{fileName}]
                </p>
                <span className="font-mono text-[10px] tracking-widest uppercase text-ink/60 bg-white/70 px-1.5 py-0.5 rounded border border-ink/20 mt-1">
                  Ratio: {aspect}
                </span>
                <span className="font-hand text-xs text-accent-maroon/70 mt-1">
                  (drop photo into folder)
                </span>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Img;
