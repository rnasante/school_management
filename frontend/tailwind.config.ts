import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config



// import type { Config } from "tailwindcss";

// const config = {
//   darkMode: ["class"],
//   content: [
//     "./pages/**/*.{ts,tsx}",
//     "./components/**/*.{ts,tsx}",
//     "./app/**/*.{ts,tsx}",
//     "./src/**/*.{ts,tsx}"
//   ],
//   prefix: "",
//   theme: {
//     container: {
//       center: true,
//       padding: "2rem",
//       screens: {
//         "2xl": "1400px"
//       }
//     },
//     extend: {
//       colors: {
       
//         "chrome-white": {
//           "50": "#f7f9ec",
//           "100": "#eaefd3",
//           "200": "#d9e3b3",
//           "300": "#c0d086",
//           "400": "#a7bc5f",
//           "500": "#89a141",
//           "600": "#6b7f31",
//           "700": "#516229",
//           "800": "#434f25",
//           "900": "#3a4423",
//           "950": "#1d240f"
//         },
//         rainee: {
//           "50": "#f3f5f0",
//           "100": "#e4e9de",
//           "200": "#ccd5c1",
//           "300": "#b3c0a4",
//           "400": "#8ea17a",
//           "500": "#71855d",
//           "600": "#586848",
//           "700": "#45513a",
//           "800": "#394331",
//           "900": "#333a2d",
//           "950": "#191e15"
//         },
//         comet: {
//           "50": "#f7f7f8",
//           "100": "#ededf1",
//           "200": "#d7d7e0",
//           "300": "#b4b4c5",
//           "400": "#8b8da5",
//           "500": "#6d6f8a",
//           "600": "#505168",
//           "700": "#47475d",
//           "800": "#3e3f4e",
//           "900": "#363644",
//           "950": "#25242d"
//         },
//         "steel-gray": {
//           "50": "#f2f3fb",
//           "100": "#e7e9f8",
//           "200": "#d4d7f1",
//           "300": "#babde7",
//           "400": "#9e9ddc",
//           "500": "#8c85cf",
//           "600": "#796cbf",
//           "700": "#685ba7",
//           "800": "#564b88",
//           "900": "#48426d",
//           "950": "#27233a"
//         },
//         'emerald-green': {
//           '50': '#f3faf3',
//           '100': '#e2f6e3',
//           '200': '#c7ebc9',
//           '300': '#9bda9e',
//           '400': '#67c16b',
//           '500': '#42a547',
//           '600': '#2e7d32',
//           '700': '#2a6b2d',
//           '800': '#265529',
//           '900': '#204724',
//           '950': '#0d260f',
//         },

//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",
//         primary: {
//           DEFAULT: "hsl(var(--primary))",
//           foreground: "hsl(var(--primary-foreground))"
//         },
//         secondary: {
//           DEFAULT: "hsl(var(--secondary))",
//           foreground: "hsl(var(--secondary-foreground))"
//         },
//         destructive: {
//           DEFAULT: "hsl(var(--destructive))",
//           foreground: "hsl(var(--destructive-foreground))"
//         },
//         muted: {
//           DEFAULT: "hsl(var(--muted))",
//           foreground: "hsl(var(--muted-foreground))"
//         },
//         accent: {
//           DEFAULT: "hsl(var(--accent))",
//           foreground: "hsl(var(--accent-foreground))"
//         },
//         popover: {
//           DEFAULT: "hsl(var(--popover))",
//           foreground: "hsl(var(--popover-foreground))"
//         },
//         card: {
//           DEFAULT: "hsl(var(--card))",
//           foreground: "hsl(var(--card-foreground))"
//         }
//       },
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)"
//       },
//       keyframes: {
//         "accordion-down": {
//           from: { height: "0" },
//           to: { height: "var(--radix-accordion-content-height)" }
//         },
//         "accordion-up": {
//           from: { height: "var(--radix-accordion-content-height)" },
//           to: { height: "0" }
//         },
//         "collapsible-down": {
//           from: { height: "0" },
//           to: { height: "var(--radix-collapsible-content-height)" }
//         },
//         "collapsible-up": {
//           from: { height: "var(--radix-collapsible-content-height)" },
//           to: { height: "0" }
//         }
//       },
//       animation: {
//         "accordion-down": "accordion-down 0.2s ease-out",
//         "accordion-up": "accordion-up 0.2s ease-out",
//         "collapsible-down": "collapsible-down 0.2s ease-out",
//         "collapsible-up": "collapsible-up 0.2s ease-out"
//       }
//     }
//   },
//   plugins: [require("tailwindcss-animate")]
// } satisfies Config;

// export default config;
