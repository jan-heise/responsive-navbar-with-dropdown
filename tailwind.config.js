module.exports = {
  theme: {
    extend: {
      colors: {
        'black-transparent': {
          '20': 'rgba(0,0,0,0.2)',
          '40': 'rgba(0,0,0,0.4)',
          '60': 'rgba(0,0,0,0.6)',
          '80': 'rgba(0,0,0,0.8)',
        },
        fontFamily: {
          sans: ['Inter var'],
        },
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
  ],
}
