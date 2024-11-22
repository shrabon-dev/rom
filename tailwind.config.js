/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem', // Default padding for all screens
           
        },
        center: true, // This automatically adds mx-auto to the container
      },
      fontFamily: {
        peckham: ['var(--font-PeckhamPress-sans)'],
        roboto: ["Roboto","sans-serif"],
        inter: ["Inter","sans-serif"],
      },
      colors: {
        secondary: "#808080",
        third: "#35FCFB",
      },
    },
  },
  plugins: [],
};
