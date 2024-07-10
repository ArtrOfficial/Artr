/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        customPurple: '#564592',
        lightPurple: '#724CF9',
        lilac: '#EAE8FF',
        gray: '#D9D9D9',
        darkGray: '#787878',
        royalBlue: '#4367C2',
        color: '#D9D2FF',
        brightPurple: '#806FF4',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'custom-lg': '0 2px 6px rgba(86, 69, 146, 0.5), 0 2px 6px rgba(86, 69, 146, 0.5)',
      },
    },
  },
  plugins: [],
};
