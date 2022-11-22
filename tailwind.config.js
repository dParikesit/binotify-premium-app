/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    "./src/**/*.{html,js}"
  ],
  theme: {
    colors: {
      'green': {
          '100': '#1DB954',
          '200': '#00A573',
          '300': '#008F84',
          '400': '#007784',
          '500': '#005F74',
          '600': '#2F4858'
      },
      'white': '#FFFFFF',
      'gray': {
        '100': '#B7B7B7',
        '200': '#828282'}
  },
    extend: {},
  },
  plugins: [],
}
