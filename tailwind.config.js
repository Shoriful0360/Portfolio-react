/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   darkMode: 'class',
  theme: {
    extend: {
      colors:{
        pri:'#FF014F',
        shado:'#ABAEB1'
      },
     
    },
  },
  plugins: [
    require('daisyui'),
  ],
}