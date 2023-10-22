/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      'dark': '#000000',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'teal' : '#2dd4bf',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'light-gray': '#d3dce6',
      'primary': '#0f172a',
      'secondary': '#262333',
      'yellow': '#feae28',
      'beige': '#FAF0E6',
      'white': '#FFFFFF'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'none': '0',
        'sm': '5px',
        DEFAULT: '10px',
        'lg': '20px',
        'full': '100vmax',
      },
      width: {
        'sm': '25%',
        'md': '50%',
        'lg': '75%',
        'full': '100%'
      },
      textColor: {
        'dark': '#000000',
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'teal' : '#2dd4bf',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'light-gray': '#d3dce6',
        'primary': '#0f172a',
        'secondary': '#262333',
        'yellow': '#feae28',
        'beige': '#FAF0E6',
        'white': '#FFFFFF'
      }
    }
  },
  plugins: [],
}