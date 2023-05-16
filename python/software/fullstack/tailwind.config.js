import('tailwindcss').Config;

module.exports = {
  content: [
    './frontend/**/*.js',
    './frontend/**/*.jsx',
    './templates/**/*.html',
  ],
  safelist: [
    'alert-success',
    'alert-info',
    'alert-error',
    'alert-warning',
  ],
  theme: {
    extend: {
      aspectRatio: {
        '3/2': '3 / 2',
      },
    },
    container: {
      center: true,
      // padding: '2rem',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
  ],
}

