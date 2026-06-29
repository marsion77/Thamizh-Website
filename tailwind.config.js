/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        oceanBlue: '#0ea5e9',
        turquoise: '#38bdf8',
        lightCyan: '#e0f2fe',
        deepBlue: '#0369a1',
        vibrantAccent: '#ff5a5f', // Bright Coral (Main highlight)
        accentLime: '#a3e635',    // Neon Lime Green
        accentOrange: '#f97316',  // Vivid Orange
        accentPink: '#ec4899',    // Hot Pink
        accentCyan: '#06b6d4',    // Cyan
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
