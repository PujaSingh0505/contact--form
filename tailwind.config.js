/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-radial': 'radial-gradient(48.12% 96.73% at 50% 50%, #2C3667 0%, #051344 100%)',
      },
    },
  },
  plugins: [],
}