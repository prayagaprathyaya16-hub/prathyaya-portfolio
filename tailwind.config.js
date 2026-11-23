/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0A',
        charcoal: '#171717',
        // Minimal monochrome palette
        surface: {
          light: '#FFFFFF',
          'light-subtle': '#F4F4F5',
          dark: '#09090B',
          'dark-subtle': '#18181B'
        },
        // The 4 clean accent colors requested by user: blue, green, red, yellow
        accent: {
          blue: '#2563EB',
          'blue-subtle': '#DBEAFE',
          'blue-dark': '#1D4ED8',
          green: '#10B981',
          'green-subtle': '#D1FAE5',
          'green-dark': '#047857',
          red: '#EF4444',
          'red-subtle': '#FEE2E2',
          'red-dark': '#B91C1C',
          yellow: '#F59E0B',
          'yellow-subtle': '#FEF3C7',
          'yellow-dark': '#D97706'
        },
        // Backwards compatibility tokens
        mustard: '#F59E0B',
        cream: '#FAFAFA',
        'accent-blue': '#2563EB',
        'accent-maroon': '#EF4444'
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
        pixel: ['"Space Mono"', 'monospace'],
        hand: ['"Inter"', 'sans-serif']
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.06)',
        'card-dark': '0 4px 20px -2px rgba(0, 0, 0, 0.4)',
        'elevated': '0 12px 32px -4px rgba(0, 0, 0, 0.1)',
        'elevated-dark': '0 12px 32px -4px rgba(0, 0, 0, 0.6)'
      }
    },
  },
  plugins: [],
}