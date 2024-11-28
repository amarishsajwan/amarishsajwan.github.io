/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,
      // or have default horizontal padding
      padding: "30px",

      // default breakpoints but with 40px removed
      screens: {
        "2xl": { max: "1400px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1200px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "992px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "576px" },
        // => @media (max-width: 639px) { ... }
      },
      // screens: {
      //   sm: '576px',
      //   md: '768px',
      //   lg: '992px',
      //   xl: '1200px',
      //   "2xl": '1400px'
      // },
    },
    extend: {},
  },
  plugins: [],
};
