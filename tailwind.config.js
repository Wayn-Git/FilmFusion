/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-light': '#ffffff',
        'background-dark': '#1a1a1a',
        'text-light': '#1a1a1a',
        'text-dark': '#ffffff',
        'primary': '#3b82f6',
        'primary-dark': '#2563eb',
      },
    },
  },
  plugins: [],
} 