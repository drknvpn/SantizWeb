/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Pacifico', 'cursive'],
        body: ['Montserrat', 'sans-serif'],
      },
      colors: {
        brand: {
          400: '#FF4081',
          500: '#E91E63',
          600: '#FF1744',
        },
      },
      animation: {
        twinkle: 'twinkle 3s ease-in-out infinite',
        'twinkle-slow': 'twinkle 5s ease-in-out infinite',
        'twinkle-fast': 'twinkle 1.5s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s ease forwards',
        glow: 'glow 2s ease-in-out infinite alternate',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.4)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { textShadow: '0 0 10px #E91E63, 0 0 20px #E91E63' },
          '100%': { textShadow: '0 0 20px #FF1744, 0 0 40px #FF1744, 0 0 60px #FF1744' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
      boxShadow: {
        brand: '0 0 20px rgba(233, 30, 99, 0.5)',
        'brand-lg': '0 0 40px rgba(233, 30, 99, 0.6)',
        'brand-xl': '0 0 60px rgba(233, 30, 99, 0.8)',
      },
    },
  },
  plugins: [],
};
