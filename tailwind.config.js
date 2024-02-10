/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        12: '0.75rem',
        16: '1rem',
        20: '1.25rem',
        50: '3.1rem'
      }, 
      colors: {
        primary: "#E94D77",
        secondary: "#C6E5D9",
      }
    },
  },
  plugins: [],
}

