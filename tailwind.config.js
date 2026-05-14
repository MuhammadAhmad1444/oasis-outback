/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg:      '#0A0A0A',
        surface: '#111111',
        raised:  '#1A1A1A',
        line:    '#252525',
        warm:    '#C8BFA8',
        muted:   '#7A7060',
        faint:   '#3A3428',
        cream:   '#F0EAD6',
        gold: {
          light:   '#E8C56A',
          DEFAULT: '#D4A847',
          dark:    '#A8891F',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['"Outfit"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
