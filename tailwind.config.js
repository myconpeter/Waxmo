/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {},

    fontFamily: {
      signature: ['Great Vibes'],
      Roboto: ['Roboto Condensed']


    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'overLay': '#044a0e',
      'darkGreen': '#28783d',
      'lightGray': '#fafaf7',
      'darkGray': '#adaca6',
      'danger': '#c91006',
      'lightBlack': '#272928',
      'iconColor': "#0ec92d",

      'white': "#FFFFFF",
      'black': "#000000"


    }
  },
  plugins: [],
}

