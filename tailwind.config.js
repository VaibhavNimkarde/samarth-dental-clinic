/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#FAF9F6',
        ivory: '#F9F8F5',
        clinic: {
          teal: '#0B6A62',
          'teal-dark': '#074D47',
          'teal-light': '#E6F4F1',
          'teal-surface': '#F0F8F6',
          amber: '#D97706',
          'amber-light': '#FEF3C7',
          purple: '#6D28D9',
          'purple-light': '#F3E8FF',
          mint: '#059669',
          'mint-light': '#ECFDF5',
          sky: '#0284C7',
          'sky-light': '#E0F2FE',
          pink: '#DB2777',
          'pink-light': '#FDF2F8',
          charcoal: '#1A1D1F',
          muted: '#626D77'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif']
      },
      boxShadow: {
        'card': '0 10px 30px -5px rgba(0,0,0,0.04), 0 2px 8px -1px rgba(0,0,0,0.02)',
        'card-hover': '0 20px 40px -10px rgba(0,0,0,0.07), 0 6px 16px -2px rgba(0,0,0,0.04)',
        'pill': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'glow-teal': '0 0 40px -5px rgba(11, 106, 98, 0.25)',
        'glow-soft': '0 0 60px 10px rgba(254, 240, 138, 0.2)'
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem'
      }
    },
  },
  plugins: [],
}
