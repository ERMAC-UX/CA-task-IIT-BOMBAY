/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#060608',
          900: '#0A0A0D',
          850: '#0F0F14',
          800: '#14141B',
          700: '#1E1E26',
        },
        parchment: {
          50: '#FAF7F0',
          100: '#F4EFE6',
          200: '#E8DECD',
          300: '#D5C4A9',
          400: '#B8A17E',
        },
        gold: {
          300: '#EBD49B',
          400: '#D8BC7D',
          500: '#C5A869',
          600: '#A88C4B',
          700: '#7E6631',
        },
        crimson: {
          500: '#A32835',
          600: '#8B1E28',
          700: '#6E141E',
        },
        bronze: {
          400: '#A08055',
          500: '#8C6D46',
          600: '#6B4E2B',
        }
      },
      fontFamily: {
        serif: ['"Cinzel"', '"Playfair Display"', 'Georgia', 'serif'],
        manuscript: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 60s linear infinite',
        'spin-reverse-slow': 'spin-reverse 90s linear infinite',
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backgroundImage: {
        'renaissance-radial': 'radial-gradient(circle at 50% 50%, rgba(197, 168, 105, 0.08) 0%, rgba(10, 10, 13, 0) 70%)',
        'parchment-glow': 'radial-gradient(ellipse at top, rgba(244, 239, 230, 0.05) 0%, rgba(10, 10, 13, 1) 80%)',
      }
    },
  },
  plugins: [],
}
