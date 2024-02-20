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

    fontFamily: {
      signature: ['Great Vibes']

    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'overLay': '#1f6938',
      'lightGray': '#fafaf7',
      'white': "#FFFFFF",
      'black': "#000000"

    }
  },
  plugins: [],
}

