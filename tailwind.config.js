module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#fc6203',
        secondary: '',
        Base: '#EDEADE',
        hovers: [],
      },
    },
    screens: {
      sm: { min: '370px', max: '420px' },
      lg: { min: '421px', max: '999px' },
      md: { min: '1000px', max: '1120px' },
      xl: { min: '1121px' },
    },
  },
  plugins: [],
};
