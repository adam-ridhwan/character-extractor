/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "hsl(214 59.4% 15.3%)",
        customGreen: "hsl(155 46.7% 10.9%)",
        customRed: "hsl(356 43.4% 16.4%)",
        customYellow: "hsl(45 100% 8.7%)",
      },
    },
  },
  plugins: [],
};
