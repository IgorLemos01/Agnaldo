import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#183B5B",
          50: "#EBF1F7",
          100: "#C4D5E8",
          200: "#9DB9D9",
          300: "#769DCA",
          400: "#4F81BB",
          500: "#2E6399",
          600: "#245080",
          700: "#1B3D67",
          800: "#122A4E",
          900: "#091735",
        },
        secondary: {
          DEFAULT: "#7FA99B",
          50: "#F0F5F4",
          100: "#D5E5E1",
          200: "#BAD5CE",
          300: "#9FC5BB",
          400: "#84B5A8",
          500: "#7FA99B",
          600: "#618E82",
          700: "#4A7368",
          800: "#32584E",
          900: "#1B3D34",
        },
        gold: {
          DEFAULT: "#C8A96B",
          50: "#FBF5EB",
          100: "#F4E6CC",
          200: "#EDD7AD",
          300: "#E6C88E",
          400: "#DFB96F",
          500: "#C8A96B",
          600: "#B08A4A",
          700: "#8A6A37",
          800: "#644A24",
          900: "#3E2A11",
        },
        offwhite: "#F7F8FA",
        dark: "#2B2B2B",
      },
      fontFamily: {
        heading: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #183B5B 0%, #0F2840 60%, #0A1E30 100%)",
        "gradient-cta": "linear-gradient(135deg, #183B5B 0%, #1a4a6e 100%)",
        "gradient-gold": "linear-gradient(135deg, #C8A96B 0%, #E8C98B 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      boxShadow: {
        "glass": "0 8px 32px 0 rgba(24, 59, 91, 0.15)",
        "card": "0 4px 24px rgba(24, 59, 91, 0.08)",
        "card-hover": "0 12px 40px rgba(24, 59, 91, 0.18)",
        "gold": "0 4px 20px rgba(200, 169, 107, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
