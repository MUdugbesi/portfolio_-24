/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Poppins": ["Poppins", 'sans-serif'],
        "Roboto": ["Roboto", "sans-serif"],
        "IBM": ["IBM Plex Sans", "sans-serif"],
        "Lato": ["Lato", "sans-serif"]
      }
    },
  },
  plugins: [import("tailwindcss-animate")],
}

