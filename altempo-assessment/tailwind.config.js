/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#36dcdc',
          dark: '#2cc8c8',
          text: '#023838',
        },
        bg: {
          primary: '#18243e',
          secondary: '#f6f7f9',
          accent: '#7505e0',
        },
        text: {
          primary: '#18243e',
          secondary: '#888fa8',
          light: '#ffffff',
          muted: '#6b7280',
        },
        hover: '#2cc8c8',
        border: '#e5e7eb',
      },
    },
  },
  plugins: [],
} 