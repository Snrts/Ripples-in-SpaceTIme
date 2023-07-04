/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "./src/**/*.js", "./node_modules/flowbite/**/*.js", "src/**/*.{html,js}"],
  theme: {
    
    
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      'xl': '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '44.6pt',
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.25em',
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1101px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '1920px',
    },
  
    extend: {
      colors: {
      transparent: "transparent",
      current: "currentColor",
      'white': '#fff',
      'black': "#000",
      'themeblue': {
        100: '#c8f0f1',
        200: '#035279',
        300: '#023047',
        // 400: '#023047',
      },
      "themeorange": '#E79B25'
      },
    //   cursor: {
    //     default: 'url(gal.cur), default'
    //     // default: 'url(bh.svg), default'
    // },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

