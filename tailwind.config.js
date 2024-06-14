/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      lg: {'max': '1999.99px'},
      md: {'max': '991.99'},
      sm: {'max': '767.99'},
      xs: {'max': '479.99'},
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Monserrat", "sans-serif"]
      },
      backgroundImage: {
        heroGradient:
            "linear-gradient(94.59deg, #4923B4 2.39%, #E878CF 97.66%)"
      },
      colors: {
        blueviolet: "#5027B5",
        lightgray: "#666768",
      }
    },
  },
  plugins: [],
}

