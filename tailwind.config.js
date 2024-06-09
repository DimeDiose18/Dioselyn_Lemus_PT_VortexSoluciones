/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1440px'
    },
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
      'titles': ['Paytone One', 'sans']
    },
    colors: {
      'blacky': '#1E1E1E',
      'whity': '#EEEEEE', 
      'gray': '#bdbdbd',
      'sky': '#B6EAFF',
      'baby-blue': '#0DE2D8',
      'yellow': '#FFDE59',
      'orange': '#FF9D5A',
      'bg': '#e6e6fa',
      'red': '#FC337B',
      'screen': 'rgb(89 89 89 / 8%)',
      'p-card': '#878791'
      
    },
    keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(280px)' },
      }
    },
    extend: {
      animation: {
        wiggle: 'wiggle 15s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}

