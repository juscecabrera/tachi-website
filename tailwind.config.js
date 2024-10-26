/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // primary: '#038fd9'
        primary: '#FACC15'
      },
      fontFamily : {
        teachers: ['Teachers', 'sans-serif']
      },
      keyframes: {
        moveCarouselLR: {
          '100%': { transform: 'translateX(0%)' },
          '0%': { transform: 'translateX(-100%)' }, 
        },
        moveCarouselRL: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }, 
        },
      },
      animation: {
        'move-carousel-l-to-r': 'moveCarouselLR 30s linear infinite',
        'move-carousel-l-to-r-mobile': 'moveCarouselLR 8s linear infinite',
        'move-carousel-r-to-l': 'moveCarouselRL 30s linear infinite',
        'move-carousel-r-to-l-mobile': 'moveCarouselRL 8s linear infinite',
      },
    },
  },
  plugins: [],
};
