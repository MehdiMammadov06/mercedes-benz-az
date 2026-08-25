/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        mb: {
          black: '#000000',
          ink: '#1A1A1A',
          blue: '#0078D6',
          'blue-dark': '#0064B4',
          silver: '#F4F4F4',
          grey: '#767676',
          'grey-light': '#E5E5E5',
          border: '#D9D9D9',
        },
      },
      fontFamily: {
        // Mercedes "MB Corpo S Text" əvəzinə pulsuz alternativ
        sans: ['Inter', 'system-ui', 'sans-serif'],
        // Mercedes "MB Corpo A Title" əvəzinə pulsuz alternativ (başlıqlar üçün)
        display: ['"Source Serif 4"', 'Georgia', 'serif'],
      },
      maxWidth: {
        site: '1440px',
      },
      transitionTimingFunction: {
        mb: 'cubic-bezier(0.275, 0.0, 0.185, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.275, 0.0, 0.185, 1) both',
        'fade-in': 'fade-in 0.6s ease-out both',
      },
    },
  },
  plugins: [],
};
