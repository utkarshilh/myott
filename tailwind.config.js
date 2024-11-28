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
          75: '#282929', // Add your custom gray-75 color here
        },
      },
      fontFamily: {
        mono: ['manrope', 'monospace'], // Add Manrope font
      },
    },
  },
  plugins: [],
}

