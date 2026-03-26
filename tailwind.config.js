/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'dark': {
          'bg': '#0a0a0f',
          'surface': '#1a1a23',
          'surface-light': '#25252f',
          'text': '#e8e8e8',
          'text-muted': '#a8a8b8'
        },
        'accent': {
          'cyan': '#00f5ff',
          'purple': '#9d00ff'
        }
      },
      fontFamily: {
        'heading': ['Space Grotesk', 'sans-serif'],
        'mono': ['DM Mono', 'monospace']
      },
      animation: {
        'typewriter': 'typewriter 1s steps(40, end)',
        'glitch': 'glitch 0.3s infinite',
        'float': 'float 4s ease-in-out infinite',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
        'pulse-button': 'pulse-button 2s ease-in-out infinite'
      },
      keyframes: {
        typewriter: {
          '0%': { color: '#00f5ff' },
          '100%': { color: '#00f5ff' }
        },
        glitch: {
          '0%': { clipPath: 'inset(40% 0 61% 0)', transform: 'translate(-2px, -2px)' },
          '20%': { clipPath: 'inset(92% 0 1% 0)', transform: 'translate(2px, 2px)' },
          '40%': { clipPath: 'inset(43% 0 1% 0)', transform: 'translate(-2px, 2px)' },
          '60%': { clipPath: 'inset(25% 0 58% 0)', transform: 'translate(2px, -2px)' },
          '80%': { clipPath: 'inset(54% 0 7% 0)', transform: 'translate(-2px, -2px)' },
          '100%': { clipPath: 'inset(58% 0 43% 0)', transform: 'translate(2px, 2px)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotateZ(0deg)' },
          '50%': { transform: 'translateY(20px) rotateZ(2deg)' }
        },
        'pulse-button': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(0, 245, 255, 0.4)' },
          '50%': { boxShadow: '0 0 0 10px rgba(0, 245, 255, 0.1)' }
        }
      },
      backdropBlur: {
        'sm': '4px',
        'md': '10px',
        'lg': '20px'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
