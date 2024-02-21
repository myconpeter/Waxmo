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
      'darkGreen': '#28783d',
      'lightGray': '#fafaf7',
      'darkGray': '#adaca6',
      'danger': '#c91006',

      'white': "#FFFFFF",
      'black': "#000000"

    }
  },
  plugins: [],
}

