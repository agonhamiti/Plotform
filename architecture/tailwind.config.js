/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ['General Sans', 'sans-serif'],
      },
      colors: {
        black: {
          DEFAULT: '#000',
          100: '#010103',
          200: '#0E0E10',
          300: '#1C1C21',
          500: '#3A3A49',
          600: '#1A1A1A',
          'black-200': '#333',
          'black-300': '#444',
          'black-500': '#555',
        },
        white: {
          DEFAULT: '#FFFFFF',
          800: '#E4E4E6',
          700: '#D6D9E9',
          600: '#AFB0B6',
          500: '#62646C',
        },
        'gray-gradient': '#BEC1CF',
        'light-gray': '#D5D8EA',
        'dark-gray': '#afb0b6',
      },
      backgroundImage: {
        terminal: "url('/assets/terminal.png')",
      },
      animation: {
        'bounce-large': 'bounce-large 1s infinite', // Custom bounce animation for the container
        'bounce-dot': 'bounce-dot 1s infinite',   // Custom bounce animation for the dot
      },
      keyframes: {
        'bounce-large': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(18px)' }, // Container bounce downward
        },
        'bounce-dot': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(20px)' }, // Increased downward bounce for the dot (20px)
        },
      },
    },
  },
  plugins: [],
};
