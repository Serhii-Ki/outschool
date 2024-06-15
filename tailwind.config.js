/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      lg: {'max': '1199.99px'},
      md: {'max': '991.99px'},
      sm: {'max': '767.99px'},
      xs: {'max': '479.99px'},
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

