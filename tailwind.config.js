/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'web-dark' : '#000010',
        'web' : '#000045',
        'head' : '#000011',
        'opacity' : 'rgba(0, 0, 34,40)',
      },
      height: {
        '50px':'50px'
      },
      animation: {
        'height-animate' : 'spin 3s linear infinite'
      },
    },
  },
  plugins: [],
}

