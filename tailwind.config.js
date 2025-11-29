/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B5CF6',
        secondary: '#6D28D9',
        accent: {
          green: '#10B981',
          blue: '#3B82F6',
          yellow: '#F59E0B',
        },
        text: {
          primary: '#8B5CF6',
          secondary: '#7C3AED',
          light: '#A78BFA',
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
