/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'crepeMyrtle': '#e193c5',
      'atomicPink' : '#e87bf9',
      'nimbusCloud' : '#d4d4d8',
      'pianoBlack' : '#18181b',
      'lightPastelPurple' : '#ab92e1',
      'white' : '#ffffff',
      'lavender' : '#b57edc'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
