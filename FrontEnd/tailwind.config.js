/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "todo": "url('./images/main.svg')"
      },
      fontFamily: {
        "poppins": 'Poppins'
      },
      backgroundColor: {
        "customCololr": '#D0E9BC'
      },


    },
  },
  plugins: [],
}

