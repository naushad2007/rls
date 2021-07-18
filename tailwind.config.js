const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './modals/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    container: {
      center: true,
    },
    extend: {
      cursor: {
        'context-menu': 'context-menu',
      },
      colors: {
        primary: {
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const flexCentered = {
        '.flex-centered': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      };

      addUtilities(flexCentered);
    }),
  ],
};
