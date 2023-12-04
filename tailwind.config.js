
module.exports = {
  content: [
    './app/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    
    extend: {
      fontFamily: {
        sans: ['var(--font-exo_2)', 'sans-serif'],
        orbitron: ['var(--font-orbitron)', 'sans-serif']
      },
    },
  },
  plugins: [],
}

