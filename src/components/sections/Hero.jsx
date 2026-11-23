import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause, ArrowUpRight } from 'lucide-react';
import { profileData, projectsData } from '../../data/content';

export function Hero({ onNavigate, onSelectProject }) {
  const { name, tagline, heroSnapshots, heroPolaroids } = profileData;
  const snapshots = heroSnapshots && heroSnapshots.length > 0 ? heroSnapshots : heroPolaroids;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);

  // Slideshow auto-advance interval
  useEffect(() => {
    if (isPaused || !snapshots || snapshots.length === 0) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % snapshots.length;
        scrollToIndex(next);
        return next;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, snapshots]);

  const scrollToIndex = (index) => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const cards = container.querySelectorAll('.snapshot-card');
    if (cards[index]) {
      const card = cards[index];
      const targetLeft = card.offsetLeft - container.offsetLeft;
      container.scrollTo({
        left: targetLeft,
        behavior: 'smooth'
      });
    }
  };

  const handlePrev = () => {
    const prev = (activeIndex - 1 + snapshots.length) % snapshots.length;
    setActiveIndex(prev);
    scrollToIndex(prev);
  };

  const handleNext = () => {
    const next = (activeIndex + 1) % snapshots.length;
    setActiveIndex(next);
    scrollToIndex(next);
  };

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const cards = container.querySelectorAll('.snapshot-card');
    if (!cards.length) return;

    const scrollLeft = container.scrollLeft;
    let closestIndex = 0;
    let minDiff = Infinity;

    cards.forEach((card, idx) => {
      const diff = Math.abs(card.offsetLeft - container.offsetLeft - scrollLeft);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = idx;
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  };

  const handleSnapshotClick = (item) => {
    if (item.projectId && onSelectProject) {
      const found = projectsData.find((p) => p.id === item.projectId);
      if (found) {
        onSelectProject(found);
        return;
      }
    }
    onNavigate('works');
  };

  return (
    <section id="home" className="relative pt-16 sm:pt-24 pb-20 sm:pb-32 border-b border-zinc-200 dark:border-zinc-800 transition-colors">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Minimal Pill Tags (using the 4 clean accent colors) */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 sm:mb-12">
          <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono font-medium border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            GARMENT CONSTRUCTION
          </span>
          <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono font-medium border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            2D CAD & OPTITEX
          </span>
          <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono font-medium border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            APPAREL TECH
          </span>
          <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono font-medium border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            EDITORIAL DESIGN
          </span>
        </div>

        {/* Hero Headline Block with Clean Breathing Space */}
        <div className="space-y-4 sm:space-y-8 mb-10 sm:mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-4xl min-[480px]:text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-zinc-950 dark:text-white uppercase leading-[0.95] break-words"
          >
            {name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="max-w-3xl"
          >
            <p className="font-sans text-base sm:text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed">
              {tagline}
            </p>
          </motion.div>
        </div>

        {/* Action Buttons: Clean Minimal Black/White */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-16 sm:mb-28 w-full sm:w-auto"
        >
          <button
            onClick={() => onNavigate('works')}
            className="w-full sm:w-auto justify-center px-6 sm:px-8 py-3.5 bg-zinc-950 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-zinc-950 font-mono text-xs sm:text-sm font-semibold tracking-widest uppercase rounded-md transition-all cursor-pointer flex items-center gap-2 group btn-anim"
          >
            <span>VIEW WORKS</span>
            <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto justify-center px-6 sm:px-8 py-3.5 bg-transparent hover:bg-zinc-100 text-zinc-900 border border-zinc-300 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-900 font-mono text-xs sm:text-sm font-semibold tracking-widest uppercase rounded-md transition-all cursor-pointer flex items-center gap-2 btn-anim"
          >
            <span>CONTACT ME</span>
          </button>
        </motion.div>

        {/* Featured Garment Snapshots (Clean Minimal Slideshow + Scrollable Cards) */}
        <div className="pt-10">
          
          {/* Header Row with Controls */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
                FEATURED GARMENT SNAPSHOTS
              </h2>
            </div>

            {/* Slideshow Controls: Prev, Play/Pause, Next */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous snapshot"
                className="w-9 h-9 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsPaused(!isPaused)}
                aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
                className="px-3 h-9 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white font-mono text-xs font-medium uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {isPaused ? (
                  <Play className="w-3.5 h-3.5 fill-current text-emerald-500" />
                ) : (
                  <Pause className="w-3.5 h-3.5 fill-current text-zinc-500" />
                )}
                <span>{isPaused ? 'PLAY' : 'PAUSE'}</span>
              </button>

              <button
                onClick={handleNext}
                aria-label="Next snapshot"
                className="w-9 h-9 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Horizontally Scrollable Slideshow Row */}
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            className="flex gap-5 sm:gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth no-scrollbar"
          >
            {snapshots.map((item, idx) => (
              <div
                key={item.id || idx}
                onClick={() => handleSnapshotClick(item)}
                className="snapshot-card group relative w-[82vw] max-w-[380px] sm:w-[340px] md:w-[380px] h-[390px] sm:h-[480px] rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 snap-center flex-shrink-0 cursor-pointer transition-all duration-300 hover:shadow-card dark:hover:shadow-card-dark"
              >
                {/* Full-bleed Photo */}
                <img
                  src={item.src}
                  alt={item.alt || item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Top Clean Tag Badge */}
                <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-10">
                  <span className="font-mono text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-white border border-white/20">
                    {item.tag || `NO. 0${idx + 1}`}
                  </span>
                </div>

                {/* Bottom Blur Overlay with Text Aligned to Bottom-Right Corner */}
                <div className="absolute inset-x-0 bottom-0 h-40 sm:h-52 bg-gradient-to-t from-black/95 via-black/60 to-transparent backdrop-blur-[6px] p-4 sm:p-6 flex flex-col justify-end items-end text-right">
                  <span className="font-mono text-[9px] sm:text-[10px] font-semibold uppercase tracking-widest text-emerald-400 mb-1">
                    {item.tag || 'GARMENT DESIGN'}
                  </span>

                  <h3 className="font-sans text-lg sm:text-2xl font-bold tracking-tight text-white uppercase leading-tight">
                    {item.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-zinc-300 font-normal mt-1 max-w-[240px] sm:max-w-[280px] leading-snug line-clamp-2">
                    {item.subtitle || item.caption}
                  </p>

                  <div className="mt-2.5 sm:mt-3 inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] font-medium uppercase tracking-wider text-white/90 group-hover:text-white transition-colors">
                    <span>EXPLORE PROJECT</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Minimal Pagination Dots */}
          <div className="flex items-center justify-center gap-1.5 mt-2">
            {snapshots.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveIndex(idx);
                  scrollToIndex(idx);
                }}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  activeIndex === idx
                    ? 'w-6 bg-zinc-900 dark:bg-white'
                    : 'w-1.5 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-500'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;