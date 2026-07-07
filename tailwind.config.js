/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Inter Tight', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 80px rgba(0, 0, 0, 0.22)',
        line: 'inset 0 0 0 1px rgba(255, 255, 255, 0.08)',
      },
      colors: {
        ink: '#07080d',
        paper: '#f7f8fb',
        mint: '#7dd3c7',
        coral: '#ff8a70',
        signal: '#d7ff6b',
      },
    },
  },
  plugins: [],
};
