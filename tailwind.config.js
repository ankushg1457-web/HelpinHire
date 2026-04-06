/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0B1F3B',
        slate: '#5B6473',
        action: '#F97316',
        cloud: '#F3F5F8',
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        soft: '0 10px 30px rgba(11, 31, 59, 0.15)',
      },
    },
  },
  plugins: [],
}
