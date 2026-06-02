import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // We map Tailwind colors to our CSS variables for seamless integration
        void: "var(--void)",
        space: "var(--space)",
        nebula: "var(--nebula)",
        dust: "var(--dust)",
        smoke: "var(--smoke)",
        ash: "var(--ash)",
        chalk: "var(--chalk)",
        white: "var(--white)",
        signal: "var(--signal)",
        "signal-dim": "var(--signal-dim)",
        "signal-glow": "var(--signal-glow)",
      },
    },
  },
  plugins: [],
};
export default config;
