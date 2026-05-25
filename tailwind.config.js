/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0f1419',
        darkCard: '#1a1f2e',
        gold: '#d4af37',
        lightGold: '#e8c547',
        blue: '#0ea5e9',
        lightBlue: '#38bdf8',
      },
    },
  },
  plugins: [],
}
