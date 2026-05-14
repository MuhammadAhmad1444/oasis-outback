/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: { DEFAULT: '#FAF8F5', dark: '#F0EDE8' },
        navy:  { 800: '#142d5e', 900: '#0B1F3A', 950: '#071528' },
        ink:   '#1A1A1A',
        muted: '#6B6B6B',
        gold:  { light: '#D4B96A', DEFAULT: '#C9A84C', dark: '#A8891F' },
        border:'#E8E4DE',
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans:  ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
