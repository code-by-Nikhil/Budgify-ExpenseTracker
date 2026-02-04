/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  safelist: [
    'bg-indigo-500','bg-indigo-600','hover:bg-indigo-600','text-white','text-slate-300','text-slate-400','border-white/6','bg-white/6',
    'bg-slate-900','bg-slate-800','bg-red-700','bg-red-600','bg-green-600','rounded-xl','rounded-2xl'
  ],
  theme: {
    extend: {
      colors: {
        retro: {
          50: '#f5f3ff',
          100: '#ede9fe',
          300: '#c4b5fd',
          500: '#7c3aed',
          600: '#6d28d9',
        },
        accentStart: '#7c3aed',
        accentEnd: '#06b6d4',
        'bg-dark': '#000000'
      },
      backgroundImage: {
        'retro-accent': 'linear-gradient(90deg,var(--tw-gradient-stops))'
      },
      animation: {
        'micro-bounce': 'micro-bounce 3s ease-in-out infinite',
        'slow-spin': 'spin 40s linear infinite'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')],
}
