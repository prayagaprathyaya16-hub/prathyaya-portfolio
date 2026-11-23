import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { projectsData, filterCategories } from '../../data/content';

export function Works({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [cloTooltipOpen, setCloTooltipOpen] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const carouselRef = useRef(null);

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  const updateScrollState = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    updateScrollState();
  }, [filteredProjects]);

  const handleFilterChange = (catId) => {
    setActiveFilter(catId);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  const handleScrollLeft = () => {
    if (!carouselRef.current) return;
    const cardWidth = carouselRef.current.querySelector('.work-card')?.offsetWidth || 380;
    carouselRef.current.scrollBy({ left: -(cardWidth + 24), behavior: 'smooth' });
  };

  const handleScrollRight = () => {
    if (!carouselRef.current) return;
    const cardWidth = carouselRef.current.querySelector('.work-card')?.offsetWidth || 380;
    carouselRef.current.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
  };

  const handleCardClick = (project) => {
    if (project.isComingSoon) {
      setCloTooltipOpen(true);
      return;
    }
    onSelectProject(project);
  };

  return (
    <section id="works" className="relative py-16 sm:py-24 lg:py-36 border-b border-zinc-200 dark:border-zinc-800 transition-colors">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header with Left & Right Scroll Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
          <div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white uppercase">
              FEATURED WORKS
            </h2>
            <p className="font-sans text-sm sm:text-base lg:text-lg text-zinc-600 dark:text-zinc-400 mt-2 max-w-2xl">
              Scroll horizontally through projects. Tap any card to inspect technical specs.
            </p>
          </div>

          {/* Left / Right Scroll Buttons */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <span className="font-mono text-xs text-zinc-500 mr-2 hidden sm:inline-block">
              {filteredProjects.length} WORKS AVAILABLE
            </span>

            <button
              onClick={handleScrollLeft}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className={`w-9 sm:w-10 h-9 sm:h-10 rounded-md border flex items-center justify-center transition-colors ${
                canScrollLeft
                  ? 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer'
                  : 'border-zinc-100 dark:border-zinc-900 text-zinc-300 dark:text-zinc-700 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={handleScrollRight}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className={`w-9 sm:w-10 h-9 sm:h-10 rounded-md border flex items-center justify-center transition-colors ${
                canScrollRight
                  ? 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer'
                  : 'border-zinc-100 dark:border-zinc-900 text-zinc-300 dark:text-zinc-700 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Clean Filter Bar */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-8 sm:mb-10 pb-4 border-b border-zinc-200 dark:border-zinc-800">
          {filterCategories.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleFilterChange(cat.id)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-mono text-[11px] sm:text-xs uppercase tracking-wider btn-anim cursor-pointer ${
                  isActive
                    ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-bold'
                    : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Horizontally Scrollable Works Carousel */}
        <div className="relative">
          <div
            ref={carouselRef}
            onScroll={updateScrollState}
            className="flex gap-4 sm:gap-6 overflow-x-auto pb-8 sm:pb-10 pt-2 snap-x snap-mandatory scroll-smooth no-scrollbar"
          >
            {filteredProjects.map((project) => {
              const isOngoing = project.isComingSoon;

              return (
                <div
                  key={project.id}
                  onClick={() => handleCardClick(project)}
                  className="work-card group relative w-[84vw] max-w-[400px] sm:w-[360px] md:w-[400px] flex-shrink-0 snap-center rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 hover-lift-sm hover:border-zinc-400 dark:hover:border-zinc-700 cursor-pointer flex flex-col justify-between"
                >
                  {/* Top Header: Work Name & Category */}
                  <div className="p-4 sm:p-6 pb-3 sm:pb-4">
                    <div className="flex items-center justify-between gap-3 mb-2.5 sm:mb-3">
                      <span className="font-mono text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">
                        {project.categoryLabel}
                      </span>
                      <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                        {project.badge}
                      </span>
                    </div>

                    {/* Work Name Along with Image */}
                    <h3 className="text-lg sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-white leading-snug mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                      {project.tagline || project.subtitle}
                    </p>
                  </div>

                  {/* Clean Image Frame */}
                  <div className="px-4 sm:px-6 py-2">
                    <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800">
                      <img
                        src={project.thumbnail}
                        alt={project.thumbnailAlt || project.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                      />

                      {/* Work In Progress Badge if ongoing */}
                      {isOngoing && (
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
                          <span className="font-mono text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded bg-white text-zinc-950">
                            ONGOING RESEARCH
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bottom Action Strip: Touch to Open Work */}
                  <div className="p-4 sm:p-6 pt-3 sm:pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between mt-2">
                    <span className="font-mono text-[11px] sm:text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">
                      {isOngoing ? 'RESEARCH PREVIEW' : 'TOUCH TO OPEN WORK'}
                    </span>
                    <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-full border border-zinc-200 dark:border-zinc-700 flex items-center justify-center group-hover:bg-zinc-950 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-zinc-950 transition-colors shrink-0">
                      {isOngoing ? <Eye className="w-3.5 h-3.5" /> : <ArrowUpRight className="w-3.5 sm:w-4 h-3.5 sm:h-4" />}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Guidance Note */}
          <div className="flex items-center justify-between text-xs text-zinc-500 mt-2 px-1">
            <span>← Scroll horizontally to view all works</span>
            <span>Tap any card to open project →</span>
          </div>
        </div>

      </div>

      {/* CLO 3D Ongoing Tooltip Modal */}
      {cloTooltipOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="relative max-w-md w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 text-center shadow-card-dark">
            <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest block mb-2">
              RESEARCH WORK IN PROGRESS
            </span>

            <h3 className="text-2xl font-bold text-zinc-950 dark:text-white mb-3">
              CLO 3D SIMULATION PROJECT
            </h3>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              Digital 3D draping, avatar kinematics, and fabric physics simulation are currently underway in the NIFT CAD labs. Full project documentation coming soon with interactive turntable renders.
            </p>

            <button
              onClick={() => setCloTooltipOpen(false)}
              className="w-full py-3 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-mono text-xs font-semibold tracking-widest uppercase rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Works;