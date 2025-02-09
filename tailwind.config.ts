import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Optional: Enables dark mode based on class
  theme: {
    extend: {
      colors: {
        blue: {
          100: '#d2e7ff',
          200: '#a5cfff',
          300: '#78b7ff',
          400: '#4b9fff',
          450: '#298dff',
          500: '#0076ff',
          600: '#186ccc',
          700: '#125199',
          800: '#0c3666',
          900: '#061b33',
        },
        red: {
          500: '#f22a2a',
        },
        neutral: {
          100: '#fff',
          200: '#ebebeb',
          300: '#d4d4d4',
          400: '#a3a3a4',
          500: '#787878',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#141414',
          950: '#0b0b0b',
        },
        alpha: {
          w10: '#ffffffe6',
          w15: '#1f1a1ad9',
          w20: '#ffffffcc',
          w30: '#ffffffb3',
          w40: '#ffffff99',
          w50: '#ffffff80',
          w60: '#ffffff66',
          w70: '#ffffff4d',
          w80: '#ffffff33',
          w90: '#ffffff1a',
          b10: '#000000e6',
          b15: '#000000d9',
          b20: '#000000cc',
          b30: '#000000b3',
          b40: '#00000099',
          b50: '#00000080',
          b60: '#00000066',
          b70: '#0000004d',
          b80: '#00000033',
          b90: '#0000001a',
        },
        primary: {
          darker: '#186ccc', // Can be customized to match the "primary" tone from your theme
        },
      },
      backgroundColor: {
        themeBg: '#101010',
      },
      textColor: {
        contrastText: '#fff',
      },
      outline: {
        focus: '4px solid rgba(0,125,250,.6)',
      },
    },
  },
  plugins: [],
} satisfies Config;
