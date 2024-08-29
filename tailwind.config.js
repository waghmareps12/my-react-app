module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          800: '#1e40af',
          900: '#1e3a8a',
        },
        green: {
          100: '#dcfce7',
          600: '#16a34a',
        },
        purple: {
          100: '#f3e8ff',
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['even', 'odd'],
    },
  },
  plugins: [],
}