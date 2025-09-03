/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          teal: '#00ff88',
          purple: '#8b5cf6',
          blue: '#3b82f6',
          pink: '#ec4899',
          cyan: '#06b6d4',
        },
        glow: {
          teal: 'rgba(0, 255, 136, 0.5)',
          purple: 'rgba(139, 92, 246, 0.5)',
          blue: 'rgba(59, 130, 246, 0.5)',
        }
      },
      backgroundImage: {
        'neon-gradient': 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
        'neon-radial': 'radial-gradient(circle at center, rgba(0, 255, 136, 0.1) 0%, transparent 70%)',
      },
      boxShadow: {
        'neon-teal': '0 0 20px rgba(0, 255, 136, 0.3)',
        'neon-purple': '0 0 20px rgba(139, 92, 246, 0.3)',
        'neon-blue': '0 0 20px rgba(59, 130, 246, 0.3)',
        'neon-glow': '0 0 30px rgba(0, 255, 136, 0.5), 0 0 60px rgba(139, 92, 246, 0.3)',
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%': { boxShadow: '0 0 20px rgba(0, 255, 136, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(0, 255, 136, 0.6)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
