module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        space: '#0b0c10',
        purple: '#6a0dad',
        nebula: '#0f4c81',
        starlight: '#f8f9fa',
        cosmic: '#aaaaaa',
      },
      fontFamily: {
        heading: ['Orbitron', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
        subBody: ['Nunito', 'sans-serif'],
        newGen: ["Oxanium", 'sans-serif'],
      },
      animation: {
        'slow-rotate': 'rotate 300s linear infinite',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}