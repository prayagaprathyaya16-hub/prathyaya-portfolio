import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Works from './components/sections/Works';
import Contact from './components/sections/Contact';
import CaseStudyModal from './components/sections/CaseStudyModal';
import { projectsData } from './data/content';

export function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Theme state: dark or light (defaults to system preference or saved preference)
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved;
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light';
  });

  // Apply dark class to document element on theme change
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Sync hash routing with selected project and section
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('works/')) {
        const slug = hash.replace('works/', '');
        const found = projectsData.find((p) => p.slug === slug);
        if (found) {
          setSelectedProject(found);
          setActiveSection('works');
          return;
        }
      }
      if (['home', 'about', 'works', 'contact'].includes(hash)) {
        setActiveSection(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Run on initial mount

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Scroll section spy
  useEffect(() => {
    const sections = ['home', 'about', 'works', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    window.location.hash = sectionId;
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    window.location.hash = `works/${project.slug}`;
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    window.location.hash = 'works';
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('home');
    window.location.hash = 'home';
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-250 flex flex-col font-sans">
      {/* Sticky Minimal Navigation with Theme Toggle */}
      <Navigation
        activeSection={activeSection}
        onNavigate={handleNavigate}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content with clean grid alignment and generous breathing space */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-3.5 sm:px-6 md:px-8 lg:px-12 overflow-x-hidden">
        <Hero
          onNavigate={handleNavigate}
          onSelectProject={handleSelectProject}
        />
        <About />
        <Works onSelectProject={handleSelectProject} />
        <Contact onScrollTop={handleScrollTop} />
      </main>

      {/* Full-Screen Animated Case Study Modal */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          allProjects={projectsData.filter((p) => !p.isComingSoon)}
          onClose={handleCloseProject}
          onSelectProject={handleSelectProject}
        />
      )}
    </div>
  );
}

export default App;