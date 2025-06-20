/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}" ,
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {},
  },
  darkMode : 'selector',
  plugins: [require('flowbite/plugin')],
}

// "./node_modules/flowbite/**/*.js"
// require('flowbite/plugin')