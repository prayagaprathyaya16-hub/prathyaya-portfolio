import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  X,
  ArrowLeft,
  ArrowRight,
  ZoomIn,
  CheckSquare,
  Cpu,
  FileSpreadsheet,
  BookOpen,
  Scissors
} from 'lucide-react';
import Img from '../common/Img';
import Lightbox from '../common/Lightbox';

export function CaseStudyModal({
  project,
  allProjects = [],
  onClose,
  onSelectProject
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    function handleKeyDown(e) {
      if (lightboxOpen) return;
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [lightboxOpen, onClose]);

  if (!project) return null;

  // Next / Previous navigation calculation
  const currentIndex = allProjects.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // Helper to render overview text with clean breathing room
  const renderOverviewParagraphs = (text) => {
    if (!text) return null;
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
    if (sentences.length <= 2) {
      return <p className="font-sans text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">{text}</p>;
    }
    const chunks = [];
    for (let i = 0; i < sentences.length; i += 2) {
      chunks.push(sentences.slice(i, i + 2).join(' ').trim());
    }
    return (
      <div className="space-y-4">
        {chunks.map((chunk, idx) => (
          <p key={idx} className="font-sans text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
            {chunk}
          </p>
        ))}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md p-2 sm:p-5 md:p-8 lg:p-10 flex items-start justify-center transition-colors">
      
      {/* Click outside backdrop */}
      <div className="fixed inset-0 cursor-pointer" onClick={onClose} />

      {/* Main Case Study Modal Container */}
      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-5xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl sm:rounded-2xl shadow-2xl my-2 sm:my-6 md:my-8 z-10 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Top Bar */}
        <div className="sticky top-0 z-30 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 truncate max-w-[180px] sm:max-w-none">
              PROJECT // {project.slug}
            </span>
            {project.isComingSoon && (
              <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                IN PROGRESS
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 sm:gap-2.5">
            <button
              onClick={onClose}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>RETURN</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close Project"
              className="p-1.5 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-14 space-y-10 sm:space-y-14 md:space-y-16">
          
          {/* Header Title & Tags */}
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-8 sm:pb-10">
            <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
              <span className="px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-mono text-[10px] sm:text-xs font-bold uppercase">
                PROJECT {project.id}
              </span>
              <span className="px-2.5 py-1 rounded bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-mono text-[10px] sm:text-xs font-bold uppercase">
                {project.categoryLabel}
              </span>
            </div>

            <h1 className="text-2xl min-[480px]:text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white uppercase leading-tight mb-2 sm:mb-3 break-words">
              {project.title}
            </h1>
            
            <p className="text-sm sm:text-xl text-zinc-600 dark:text-zinc-400 font-medium mb-6 sm:mb-8">
              {project.tagline}
            </p>

            {/* Metadata Grid */}
            {project.meta && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-6">
                <div className="p-3.5 sm:p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/40">
                  <span className="font-mono text-[10px] text-zinc-500 uppercase block font-semibold mb-1">TYPE</span>
                  <span className="font-sans text-xs sm:text-sm font-semibold text-zinc-900 dark:text-white leading-snug">{project.meta.type}</span>
                </div>
                <div className="p-3.5 sm:p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/40">
                  <span className="font-mono text-[10px] text-zinc-500 uppercase block font-semibold mb-1">TOOLS / SOFTWARE</span>
                  <span className="font-sans text-xs sm:text-sm font-semibold text-zinc-900 dark:text-white leading-snug">{project.meta.tools}</span>
                </div>
                <div className="p-3.5 sm:p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/40">
                  <span className="font-mono text-[10px] text-zinc-500 uppercase block font-semibold mb-1">PRIMARY FOCUS</span>
                  <span className="font-sans text-xs sm:text-sm font-semibold text-zinc-900 dark:text-white leading-snug">{project.meta.focus}</span>
                </div>
                <div className="p-3.5 sm:p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/40">
                  <span className="font-mono text-[10px] text-zinc-500 uppercase block font-semibold mb-1">STATUS & YEAR</span>
                  <span className="font-sans text-xs sm:text-sm font-semibold text-zinc-900 dark:text-white leading-snug">{project.meta.year}</span>
                </div>
              </div>
            )}
          </div>

          {/* Project Overview */}
          <div className="p-5 sm:p-8 md:p-10 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-900/30">
            
            <div className="max-w-4xl">
              {renderOverviewParagraphs(project.overview)}
            </div>

            {project.focusTags && (
              <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap gap-2 items-center">
                <span className="font-mono text-xs text-zinc-500 mr-2 uppercase">TAGS:</span>
                {project.focusTags.map((tag, idx) => (
                  <span key={idx} className="font-mono text-xs bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 px-3 py-1 rounded border border-zinc-200 dark:border-zinc-800 font-medium">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Process Timeline Steps */}
          {project.process && (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Scissors className="w-5 h-5 text-zinc-900 dark:text-white" />
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white uppercase">
                  PROCESS & EXECUTION PIPELINE
                </h3>
              </div>

              <div className="space-y-6">
                {project.process.map((step, idx) => (
                  <div key={idx} className="relative flex items-start gap-5 sm:gap-6 group">
                    {/* Step Number Circle */}
                    <div className="shrink-0 w-10 h-10 rounded-full border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 font-mono text-sm font-bold text-zinc-900 dark:text-white flex items-center justify-center transition-colors group-hover:border-zinc-900 dark:group-hover:border-white">
                      {step.step || idx + 1}
                    </div>

                    <div className="flex-1 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40">
                      <h4 className="text-lg font-bold text-zinc-950 dark:text-white mb-1.5">
                        {step.title}
                      </h4>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* OPTITEX MEASUREMENT SPECIFICATION TABLE */}
          {project.measurementTable && (
            <div className="p-8 sm:p-10 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-900/30">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <FileSpreadsheet className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-2xl font-bold text-zinc-950 dark:text-white uppercase">
                    MEASUREMENT SPECIFICATION CHART (BASE SIZE M)
                  </h3>
                </div>
                <span className="font-mono text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-3 py-1 rounded border border-blue-200 dark:border-blue-900">
                  MEASUREMENTS IN INCHES
                </span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                Graded master tech pack specifications across 5 standard commercial sizes (S through XXL).
              </p>

              <div className="overflow-x-auto border border-zinc-200 dark:border-zinc-800 rounded-xl">
                <table className="w-full text-left border-collapse min-w-[640px]">
                  <thead>
                    <tr className="bg-zinc-100 dark:bg-zinc-900 font-mono text-xs uppercase tracking-wider border-b border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300">
                      {project.measurementTable.columns.map((col, idx) => (
                        <th
                          key={idx}
                          className={`p-3.5 ${idx === 2 ? 'font-black text-blue-600 dark:text-blue-400' : ''}`}
                        >
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 font-mono text-xs sm:text-sm">
                    {project.measurementTable.rows.map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors"
                      >
                        <td className="p-3.5 font-sans font-medium text-zinc-900 dark:text-white">{row.point}</td>
                        <td className="p-3.5 text-center text-zinc-600 dark:text-zinc-400">{row.s}</td>
                        <td className="p-3.5 text-center font-bold text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/20">
                          {row.m}
                        </td>
                        <td className="p-3.5 text-center text-zinc-600 dark:text-zinc-400">{row.l}</td>
                        <td className="p-3.5 text-center text-zinc-600 dark:text-zinc-400">{row.xl}</td>
                        <td className="p-3.5 text-center text-zinc-600 dark:text-zinc-400">{row.xxl}</td>
                        <td className="p-3.5 text-center font-semibold text-zinc-500">{row.tol}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* IoT AUTOMATIC LIQUID FILLING SYSTEM */}
          {project.components && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-7 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-900/30">
                <div className="flex items-center gap-2 mb-4">
                  <Cpu className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <h4 className="text-lg font-bold text-zinc-950 dark:text-white">
                    HARDWARE BILL OF MATERIALS
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.components.map((comp, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 font-mono text-xs text-zinc-800 dark:text-zinc-200"
                    >
                      {comp}
                    </span>
                  ))}
                </div>
              </div>

              {project.objectives && (
                <div className="p-7 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-900/30">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <h4 className="text-lg font-bold text-zinc-950 dark:text-white">
                      PROJECT OBJECTIVES
                    </h4>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {project.objectives.map((obj, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold mt-0.5">✔</span>
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* FC IDM MAGAZINE SABYASACHI */}
          {project.processFlow && (
            <div className="p-8 sm:p-10 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-900/30">
              <div className="flex items-center gap-2.5 mb-6">
                <BookOpen className="w-5 h-5 text-red-500" />
                <h3 className="text-2xl font-bold text-zinc-950 dark:text-white uppercase">
                  EDITORIAL RESEARCH & CREATIVE WORKFLOW
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 text-center">
                {project.processFlow.map((flow, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex flex-col items-center justify-between"
                  >
                    <span className="font-mono text-[10px] text-red-500 font-bold">
                      STEP {flow.step}
                    </span>
                    <span className="text-sm font-bold text-zinc-950 dark:text-white my-1">
                      {flow.name}
                    </span>
                    <span className="font-mono text-[10px] text-zinc-500 leading-tight">
                      {flow.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Project Image Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-white uppercase">
                    PROJECT GALLERY
                  </h3>
                </div>
                <span className="font-mono text-xs text-zinc-500 hidden sm:inline-block">
                  Click any photo to zoom in Lightbox
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.gallery.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleOpenLightbox(index)}
                    className="group rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 transition-all cursor-zoom-in hover:shadow-card dark:hover:shadow-card-dark"
                  >
                    <div className="relative overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                      <Img
                        src={item.src}
                        alt={item.alt || item.title}
                        aspect={item.aspect || '4:5'}
                        imgClassName="group-hover:scale-103 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ZoomIn className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="p-4 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
                      <h5 className="font-semibold text-sm text-zinc-900 dark:text-white">
                        {item.title}
                      </h5>
                      {item.caption && (
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 line-clamp-2 leading-relaxed">
                          {item.caption}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Next / Previous Project Navigation */}
          <div className="pt-6 sm:pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
            {prevProject && (
              <button
                onClick={() => onSelectProject(prevProject)}
                className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white font-mono text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer w-full sm:w-auto"
              >
                <ArrowLeft className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate max-w-[220px] sm:max-w-[180px] md:max-w-xs">PREV: {prevProject.title}</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-zinc-950 font-mono text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer w-full sm:w-auto order-first sm:order-none"
            >
              CLOSE
            </button>

            {nextProject && (
              <button
                onClick={() => onSelectProject(nextProject)}
                className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white font-mono text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer w-full sm:w-auto"
              >
                <span className="truncate max-w-[220px] sm:max-w-[180px] md:max-w-xs">NEXT: {nextProject.title}</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </button>
            )}
          </div>

        </div>
      </motion.div>

      {/* Embedded Lightbox */}
      {project.gallery && (
        <Lightbox
          images={project.gallery}
          currentIndex={lightboxIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNext={() => setLightboxIndex((prev) => (prev + 1) % project.gallery.length)}
          onPrev={() => setLightboxIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length)}
        />
      )}
    </div>
  );
}

export default CaseStudyModal;