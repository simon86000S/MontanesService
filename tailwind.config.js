/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Courier Prime', 'monospace' ]
      
      

    },
    extend: {
      backgroundImage: {
        'botanique': "url('/assets/botanique.png')",
        'home':"url('./assets/home.jpg')"
    },
  },
  plugins: [
    require('taos/plugin'),
    
  ],
  
   
  
}
}