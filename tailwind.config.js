/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          75: '#282929',
          60: '#999999' // Add your custom gray-75 color here
        },
        black: {
          6: "#0F0F0F",
          10: "#1A1A1A",
          15: "#262626",
          100: '#141414'

        },
        'black-12': '#1F1F1F',
        'black-home': "#1E1E1E",
        'red-45': '#E50000'
      },
      fontFamily: {
        mono: ['manrope', 'monospace'], // Add Manrope font
      },
    },
  },
  plugins: [],
}

