const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        light: {
          elements: 'hsl(0, 0%, 100%)',
          background: 'hsl(0, 0%, 98%)',
          input: 'hsl(0, 0%, 52%)',
          text: 'hsl(200, 15%, 8%)',
        },
        dark: {
          elements: 'hsl(209, 23%, 22%)',
          background: 'hsl(207, 26%, 17%)',
          text: 'hsl(0, 0%, 100%)',
        },
      },
      fontFamily: {
        sans: ["'Nunito Sans', sans-serif", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
