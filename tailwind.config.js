/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "./src/**/*.js"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "white": "#fff",
      "black": "#000",
      "blue": {
        "100": "#C8F0F1",
        "200": "#29ABE2",
        "300": "#035279",
        "400": "#023047",
      },
      "orange": "#E79B25"
    },
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '48.6pt',
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
    extend: {
      
    },
  },
  plugins: [],
}

