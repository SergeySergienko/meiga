/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      minHeight: {
        600: '600px',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        accent: ['BebasNeue', 'sans-serif'],
      },
      transitionDuration: {
        2500: '2500ms',
      },
    },
  },
  plugins: [],
};
