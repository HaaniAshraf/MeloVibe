/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxs': '320px',  
        'xs': '375px',  
        'sm': '425px',  
        'md': '768px',  
        'lg': '1024px', 
        'xl': '1440px', 
      }
    },
    fontFamily:{
      signature:['Dynalight']
    },
  },
  plugins: [],
}