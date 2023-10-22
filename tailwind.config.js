/** @type {import('tailwindcss').Config} */
export default {
  // The 'content' option specifies the files to scan for classes
  content: [
    "./app.vue",                       // App.vue in the root directory
    "./components/**/*.{vue,js,ts}",   // Vue components
    "./layouts/**/*.{vue,js,ts}",      // Layouts
    "./pages/**/*.{vue,js,ts}",        // Nuxt pages/views
    "./plugins/**/*.{js,ts}",          // JS/TS plugins
    "./static/**/*.html",              // Static HTML files
    "./**/*.html",                     // Any other HTML files at the root or nested
  ],
  theme: {
    extend: { 
      colors: {
        'versa-black': '#111111',
        'versa-gray-light': '#F3F4F5',
        'versa-white': '#fff',
        'versa-dark-white': '#E4E6EF',
        'versa-blue': '#007BFF',
        'versa-skyblue': '#B2D7FF',
      },
      fontFamily: {
        'satoshi': ['Satoshi', 'sans-serif']
      },
      minWidth: {
        '1/4': '25%',
      }
    },
  },
  plugins: [],
}

