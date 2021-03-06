module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        header: '0px 2px 8px rgba(69, 71, 82, 0.08);',
        arrow:
          '0 3px 5px -1px rgb(0, 0, 0, 0.2), 0, 6px, 10px, 0 rgb(0, 0, 0, 0.14), 0, 1px, 18px, 0 rgb(0, 0, 0, 0.12);',
      },
      colors: {
        BrandBlue: '#4A6FFF',
        DarkGray: '#454752',
        PrimaryGray: '#676A7A',
        MidGray: '#9A9FB8',
        LightGray: '#FAFBFF',
        Green: '#61CF9F',
        Yellow: '#FFC75E',
      },
      maxWidth: {
        siteContainer: '1232px',
      },
    },
  },
  plugins: [],
};
