/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4169E1',
        secondary: '#2F4F9F',
        accent: {
          green: '#10B981',
          blue: '#3B82F6',
          yellow: '#F59E0B',
        },
        text: {
          primary: '#4169E1',
          secondary: '#2F5FD1',
          light: '#6B8FFF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
}
