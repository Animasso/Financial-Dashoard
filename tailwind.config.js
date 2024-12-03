/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        doto: ["Doto", "sans-serif"],
      },
      textAlign: {
        "text-align": "-webkit-center", // Ajoute cette classe personnalisée
      },
    },
  },
  plugins: [],
};
