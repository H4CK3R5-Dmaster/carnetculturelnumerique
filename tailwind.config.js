/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "classique": "#07393C"
      },
      margin:{
        "300px":"300px",
        "700px":"700px",
        "500px":"500px"
      },
      screen: {
        "320px":"320px",
        "400px":"400px"
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}