/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        oceanBlue: '#0077b6',
        turquoise: '#00b4d8',
        lightCyan: '#90e0ef',
        deepBlue: '#03045e',
        vibrantAccent: '#ffb703',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
