/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'welcome-page-background': "url('src/assets/welcomePage-backgroundImage.jpg')",

      }
    },
  },
  plugins: [],
}

