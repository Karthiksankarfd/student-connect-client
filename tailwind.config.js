/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // primarycolor :"59 130 246"
      keyframes: {
        scrollY: {
          '0%': { transform: 'translateY(0%)' ,},
          '100%': { transform: 'translateY(-100%)' },
        },
        scrollX: {
          '0%': { transform: 'translateX(-50%)'  },
          '50%': { transform: 'translateX(50%)',  },
          '100%': { transform: 'translateX(-50%)'  },
        },
      },
      animation: {
        scrollY: 'scrollY 30s  infinite',
        scrollX: 'scrollX 1.5s ease-in-out infinite',
      },
    
    },
  },
  plugins: [],
}