import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        100: "#000000",
        200: "#282A3A",
      },
      secondary: {
        100: "#735F32",
        200: "#C69749",
      },
      white: "#FFFFFF",
    },
    extend: {
      screens: {
        xs: "480px",
      },
      fontFamily: {
        poppins: ["Poppins"],
        garamond: ["EB Garamond"],
      },
    },
    variants: {
      display: ["responsive", "group-hover", "group-focus"],
    },
    plugins: [],
  },
};
export default config;
