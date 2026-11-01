/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#faf8f5',
        surface: '#ffffff',
        blush: {
          DEFAULT: '#f4ece7',
          light: '#faf3ef',
          dark: '#e8dcd5',
          border: '#efdad5',
        },
        beige: '#efe5dd',
        line: '#e7dbd4',
        ink: {
          DEFAULT: '#222222',
          light: '#3d3d3d',
          subtle: '#5e5652',
        },
        muted: {
          DEFAULT: '#796e67',
          light: '#8c766e',
          dark: '#58443e',
        },
        accent: {
          rose: '#cf9388',
          gold: '#b88a44',
        },
        whatsapp: {
          DEFAULT: '#25d366',
          dark: '#1ebe5d',
        },
      },
      fontFamily: {
        brand: ['"Vastago Grotesk"', '"Vástago Grotesk"', '"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['"Vastago Grotesk"', '"Vástago Grotesk"', '"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Vastago Grotesk"', '"Vástago Grotesk"', '"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
