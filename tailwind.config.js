/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgPrimary': ' #F4F3F0',
        'btnBg': '#D2B48C',
      },
    },
  },
  plugins: [require("daisyui")],
}

