/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Georgia', 'Times New Roman', 'serif'],
        body: ['Segoe UI', 'Arial', 'Helvetica', 'sans-serif']
      },
      colors: {
        ink: '#0b0b0b',
        clay: '#a77b67',
        sand: '#f9f3ee'
      },
      boxShadow: {
        soft: '0 18px 40px rgba(0, 0, 0, 0.12)'
      }
    }
  },
  plugins: []
};
