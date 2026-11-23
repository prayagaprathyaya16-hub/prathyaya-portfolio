import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

export function Navigation({
  activeSection = 'home',
  onNavigate,
  theme = 'light',
  onToggleTheme
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'works', label: 'WORKS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleItemClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 md:px-8 h-16 flex items-center justify-between">
        
        {/* Left Side: Brand Logo & Status */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={() => handleItemClick('home')}
            className="flex items-center gap-2.5 sm:gap-3 group text-left cursor-pointer logo-anim"
            aria-label="Prathyaya MV Home"
          >
            {/* Minimal Square Monogram */}
            <div className="w-8 h-8 rounded-md bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center font-bold text-sm tracking-tight transition-transform group-hover:scale-105 shrink-0">
              P
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-xs sm:text-sm tracking-tight text-zinc-900 dark:text-white leading-tight">
                PRATHYAYA MV
              </span>
              <span className="font-mono text-[9px] sm:text-[10px] text-zinc-500 dark:text-zinc-400 tracking-wider uppercase truncate max-w-[130px] sm:max-w-none">
                Fashion Technologist · NIFT
              </span>
            </div>
          </button>
        </div>

        {/* Center: Desktop Minimal Nav Items */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`relative py-1 text-xs font-mono tracking-widest uppercase cursor-pointer nav-link-anim ${
                  isActive
                    ? 'text-zinc-950 dark:text-white font-bold'
                    : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white font-medium'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-zinc-900 dark:bg-white transition-all" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Side: Accent Indicators, Theme Toggle & Contact Button */}
        <div className="flex items-center gap-3.5">
          {/* Subtle Creative 4-Color Accent Dots (Blue, Green, Red, Yellow) */}
          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
            <span className="w-2 h-2 rounded-full bg-blue-600 dot-anim" title="Blue Accent" />
            <span className="w-2 h-2 rounded-full bg-emerald-500 dot-anim" title="Green Accent" />
            <span className="w-2 h-2 rounded-full bg-red-500 dot-anim" title="Red Accent" />
            <span className="w-2 h-2 rounded-full bg-amber-400 dot-anim" title="Yellow Accent" />
          </div>

          {/* Theme Toggle Button (Light / Dark) */}
          <button
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            className="p-2 rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white btn-anim cursor-pointer"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-zinc-700" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 px-6 py-6 transition-colors">
          <div className="flex flex-col gap-3 mb-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`p-3 rounded-md text-left font-mono text-xs font-bold tracking-widest uppercase flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-zinc-100 dark:bg-zinc-900 text-zinc-950 dark:text-white border border-zinc-300 dark:border-zinc-700'
                      : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-60" />
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
            <span className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
              Prathyaya MV · NIFT B.FTech
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              AVAILABLE FOR ROLES
            </span>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navigation;