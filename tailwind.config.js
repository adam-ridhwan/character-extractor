/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "hsl(216 50.0% 11.8%)",
        green: "hsl(155 44.2% 8.4%)",
        red: "hsl(357 34.4% 12.0%)",
        yellow: "hsl(46 100% 6.7%)",
      },
    },
  },
  plugins: [],
};
