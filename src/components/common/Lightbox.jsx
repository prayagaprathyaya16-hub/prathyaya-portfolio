import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Img from './Img';

/**
 * Accessible Lightbox for project galleries
 * - Minimal clean B&W theme matching the site
 * - Keyboard navigation (Esc to close, Arrow keys to step)
 * - Backdrop click to close
 * - Fully responsive on all devices from mobile to desktop
 */
export function Lightbox({
  images = [],
  currentIndex = 0,
  isOpen = false,
  onClose,
  onNext,
  onPrev
}) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-8 select-none">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-zoom-out"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.96, opacity: 0, y: 10 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.96, opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative max-w-5xl w-full max-h-[94vh] bg-white dark:bg-zinc-950 rounded-xl sm:rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-2xl flex flex-col overflow-hidden z-10"
        >
          {/* Top Bar */}
          <div className="h-12 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 px-4 sm:px-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="font-mono text-xs font-semibold text-zinc-600 dark:text-zinc-400 ml-2 tracking-wider">
                LIGHTBOX [{currentIndex + 1} / {images.length}]
              </span>
            </div>

            <button
              onClick={onClose}
              aria-label="Close Lightbox"
              className="p-1.5 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Image Display Area */}
          <div className="relative flex-1 bg-zinc-950 p-2 sm:p-6 flex items-center justify-center overflow-hidden min-h-[260px] sm:min-h-[460px]">
            <div className="max-w-4xl max-h-[65vh] w-full flex items-center justify-center">
              <Img
                src={currentImage.src}
                alt={currentImage.alt || currentImage.title}
                aspect={currentImage.aspect || '16:9'}
                className="max-h-[64vh] object-contain rounded-lg"
                imgClassName="object-contain"
              />
            </div>

            {/* Left Nav Button */}
            {images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onPrev();
                }}
                aria-label="Previous Image"
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-9 sm:w-11 h-9 sm:h-11 rounded-full bg-black/60 hover:bg-black text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-transform hover:scale-105 cursor-pointer"
              >
                <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6" />
              </button>
            )}

            {/* Right Nav Button */}
            {images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
                aria-label="Next Image"
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-9 sm:w-11 h-9 sm:h-11 rounded-full bg-black/60 hover:bg-black text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-transform hover:scale-105 cursor-pointer"
              >
                <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6" />
              </button>
            )}
          </div>

          {/* Bottom Caption Bar */}
          <div className="p-3.5 sm:p-4 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="overflow-hidden">
              <h4 className="font-sans text-sm sm:text-base text-zinc-950 dark:text-white font-bold leading-tight truncate">
                {currentImage.title}
              </h4>
              {currentImage.caption && (
                <p className="font-sans text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 line-clamp-1 leading-snug">
                  {currentImage.caption}
                </p>
              )}
            </div>
            <div className="flex items-center gap-2 shrink-0 text-xs font-mono text-zinc-400">
              <span className="hidden sm:inline-block">Press ESC or click outside to exit</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default Lightbox;
