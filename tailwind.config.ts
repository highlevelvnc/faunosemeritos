import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  safelist: [
    "bg-navy-900",
    "bg-navy-950",
    "text-ice",
    "text-electric",
    "border-border",
    "ring-ring",
    "shadow-glass",
    "shadow-glow",
  ],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
    },

    extend: {
      /* ================= COLORS ================= */
      colors: {
        navy: {
          50: "#e6f0ff",
          100: "#cce0ff",
          200: "#99c2ff",
          300: "#66a3ff",
          400: "#3385ff",
          500: "#0066ff",
          600: "#0052cc",
          700: "#003d99",
          800: "#001f4d",
          900: "#000d1a",
          950: "#0a1628",
        },
        ice: "#f0f4f8",
        graphite: {
          50: "#f8f9fa",
          100: "#e9ecef",
          200: "#dee2e6",
          300: "#ced4da",
          400: "#adb5bd",
          500: "#6c757d",
          600: "#495057",
          700: "#343a40",
          800: "#212529",
          900: "#1a1d20",
        },
        electric: "#00d4ff",

        /* TOKENS FUNCIONAIS */
        border: "rgba(255,255,255,0.10)",
        ring: "rgba(0,212,255,0.40)",
      },

      /* ================= FONTS ================= */
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
      },

      /* ================= BACKGROUNDS ================= */
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },

      backgroundSize: {
        grid: "50px 50px",
      },

      /* ================= SHADOWS ================= */
      boxShadow: {
        glass:
          "0 8px 32px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.08)",
        glow:
          "0 0 25px rgba(0,212,255,0.35), 0 0 60px rgba(0,212,255,0.15)",
      },

      dropShadow: {
        text: "0 2px 12px rgba(0,0,0,0.35)",
      },

      /* ================= ANIMATIONS ================= */
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-down": "slideDown 0.6s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": {
            boxShadow: "0 0 20px rgba(0,212,255,0.3)",
          },
          "100%": {
            boxShadow: "0 0 40px rgba(0,212,255,0.6)",
          },
        },
      },
    },
  },

  plugins: [],
};

export default config;
