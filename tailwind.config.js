/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Homemade Apple', ' cursive', ],
      'sans-serif':['Gruppo', 'sans-serif'],
      'sans':['Kristi', 'cursive'],

    },
    extend: {
      backgroundImage: {
        'botanique': "url('/assets/botanique.png')",
        'home':"url('./assets/home.jpg')"
    },
  },
  plugins: [
    
  ],
}
}