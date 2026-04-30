/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        purple: {
          DEFAULT: '#7B5CF0',
          light: '#EEEDFE',
          mid: '#A78BFA',
          dark: '#6344d4',
        },
        ink: {
          DEFAULT: '#0D0D0D',
          soft: '#3D3D3D',
          muted: '#888888',
        },
        cream: {
          DEFAULT: '#FDFAF5',
          dark: '#F5F0E8',
        },
      },
    },
  },
  plugins: [],
}
