import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, ArrowUpRight, Award } from 'lucide-react';
import { profileData } from '../../data/content';

export function About() {
  const {
    bioIntro,
    bioText,
    aboutPolaroids,
    education,
    skills,
    studentId,
    institution,
    department
  } = profileData;

  // Map skill categories cleanly to the 4 accent colors
  const getSkillAccent = (category) => {
    switch (category) {
      case 'CAD & Digital':
        return 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-900/50';
      case 'Garment Construction':
        return 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900/50';
      case 'Production Tech':
      case 'Apparel Tech':
        return 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900/50';
      case 'Design & Media':
        return 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-900/50';
      default:
        return 'text-zinc-700 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800';
    }
  };

  return (
    <section id="about" className="relative py-16 sm:py-24 lg:py-36 border-b border-zinc-200 dark:border-zinc-800 transition-colors">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header with Generous Clearance */}
        <div className="mb-10 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white uppercase">
            ABOUT PRATHYAYA
          </h2>
          <p className="font-sans text-base sm:text-xl text-zinc-600 dark:text-zinc-400 mt-2 max-w-2xl">
            Where precision pattern drafting meets computational apparel technology.
          </p>
        </div>

        {/* Bio Section: Two Column Grid with Clean Alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 sm:mb-24">
          
          {/* Left Column: Editorial Bio */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <h3 className="text-xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
              {bioIntro} I'm Prathyaya M V.
            </h3>

            <div className="space-y-4 sm:space-y-5 text-zinc-600 dark:text-zinc-300 font-sans leading-relaxed text-sm sm:text-base lg:text-lg">
              {bioText.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Structured Institution & Details Card */}
            <div className="pt-6 mt-6 sm:mt-8 border-t border-zinc-200 dark:border-zinc-800 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              <div className="p-4 rounded-lg bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider block mb-1">
                  AFFILIATION & DEGREE
                </span>
                <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                  {department}
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  {institution}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider block mb-1">
                  CURRENT STATUS
                </span>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                    Final Year · Available for Roles
                  </p>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  Pattern Engineering · CAD · Production
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Editorial Imagery */}
          <div className="lg:col-span-5 max-w-md mx-auto lg:max-w-none w-full">
            {aboutPolaroids.map((photo, index) => (
              <div
                key={index}
                className="group relative rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 transition-all hover:shadow-card dark:hover:shadow-card-dark"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                </div>
                <div className="p-4 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-zinc-900 dark:text-white">
                      {photo.caption}
                    </p>
                    <span className="font-mono text-[10px] text-zinc-500 tracking-wider uppercase">
                      ARCHIVE PHOTO
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Qualifications */}
        <div className="mb-16 sm:mb-24">
          <div className="flex items-center gap-2.5 mb-6 sm:mb-8">
            <GraduationCap className="w-5 h-5 text-zinc-900 dark:text-white" />
            <h3 className="text-xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white uppercase">
              EDUCATION & QUALIFICATIONS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {education.map((item, index) => (
              <div
                key={index}
                className="p-6 sm:p-7 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40 flex flex-col justify-between hover-lift-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-[10px] font-semibold text-zinc-500 uppercase tracking-widest">
                      {item.period}
                    </span>
                    <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                      {item.rollId}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-zinc-950 dark:text-white mb-1.5 leading-snug">
                    {item.degree}
                  </h4>

                  <p className="font-mono text-xs text-blue-600 dark:text-blue-400 font-medium mb-3">
                    {item.institution}
                  </p>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {item.highlight}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-500">
                  <span className="font-mono text-[10px] uppercase">VERIFIED STATUS</span>
                  <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Completed / Active
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills & Competencies */}
        <div className="p-5 sm:p-8 md:p-10 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/40">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div>
              <h3 className="text-xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white uppercase">
                TECHNICAL SKILLS & TOOLS
              </h3>
            </div>
            <span className="font-mono text-xs text-zinc-500">
              Pattern Making · 2D CAD · Apparel Technology
            </span>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            {skills.map((skill, index) => {
              const accentClass = getSkillAccent(skill.category);
              return (
                <div
                  key={index}
                  className={`px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg font-mono text-xs font-medium border skill-tag-anim ${accentClass}`}
                >
                  <span>{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;