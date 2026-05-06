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
        primary: {
          DEFAULT: "#1B4FFF",
          50: "#EEF2FF",
          100: "#E0E7FF",
          500: "#1B4FFF",
          600: "#1240E8",
          700: "#0D30C1",
        },
        accent: {
          DEFAULT: "#00C853",
          light: "#E8F5E9",
        },
        warning: {
          DEFAULT: "#FFB300",
          light: "#FFF8E1",
        },
        danger: {
          DEFAULT: "#E53935",
          light: "#FFEBEE",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
