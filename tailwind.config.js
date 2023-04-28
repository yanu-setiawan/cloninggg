/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mulish: ["var(--font-mulish)", "sans-serif"],
      },
      backgroundImage: {},
      colors: {
        tickitz: {
          primary: "3D405B",
          secondary: "F4F1DE",
          warning: "F2CC8F",
          error: "E07A5F",
          success: "81B29A",
          darkTitle: "#14142B",
          label: "#6E7191",
          basic: "#4E4B66",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};
