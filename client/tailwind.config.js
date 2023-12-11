/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui', ],
      'serif': ['ui-serif', 'Georgia', ],
      'mono': ['ui-monospace', 'SFMono-Regular', ],
      'display': ['Oswald', ],
      'body': ['"Open Sans"', ],
      'oleo-script': ["Oleo Script", 'cursive'],
    },
    extend: {}
  },
  plugins: [],
}

