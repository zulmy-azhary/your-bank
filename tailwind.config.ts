import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        shades: {
          green: {
            60: "#CAFF33",
            65: "#D1FF4C",
            70: "#D8FF66",
            80: "#E5FF99",
            90: "#F2FFCC",
            95: "#F8FFE5",
            97: "#FBFFF0",
            99: "#FEFFFA",
          },
          white: {
            90: "#E4E4E7",
            95: "#F1F1F3",
            97: "#F7F7F8",
            99: "#FCFCFD",
          },
          grey: {
            10: "#191919",
            11: "#1C1C1C",
            15: "#262626",
            20: "#333333",
            30: "#4C4C4D",
            35: "#59595A",
            40: "#656567",
            60: "#98989A",
            70: "#B3B3B3",
            75: "#BFBFBF",
          },
        },
      },
      backgroundImage: {
        "gradient-150": "linear-gradient(150deg, var(--tw-gradient-stops))",
      },
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1920px",
      "3xl": "2560px",
    },
  },
  plugins: [],
};
export default config;
