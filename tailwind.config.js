/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-cyan': '#00f0ff',
        'neon-blue': '#0066ff',
        'neon-purple': '#8b5cf6',
        'neon-pink': '#ec4899',
        'dark-bg': '#0a0a0f',
        'dark-card': '#12121a',
        'dark-border': '#1e1e2e',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'neon': '0 0 20px rgba(0, 240, 255, 0.3)',
        'neon-strong': '0 0 40px rgba(0, 240, 255, 0.5)',
        'neumorphic': '8px 8px 16px #050508, -8px -8px 16px #151520',
        'neumorphic-inset': 'inset 4px 4px 8px #050508, inset -4px -4px 8px #151520',
      },
    },
  },
  plugins: [],
}
