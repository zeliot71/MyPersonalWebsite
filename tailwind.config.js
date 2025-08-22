/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark Neon Color System
        background: '#0B1220',
        surface: {
          DEFAULT: '#1A2233',
          secondary: '#2A2F3A',
        },
        text: {
          primary: '#F5F7FA',
          secondary: '#A8B2C1',
        },
        accent: {
          blue: '#4F8FF7',
          green: '#30E196',
          magenta: '#FF3D6E',
        },
        status: {
          success: '#30E196',
          warning: '#FFB347',
          error: '#FF4D4F',
        }
      },
      fontFamily: {
        'heading': ['Space Grotesk', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h2': ['1.75rem', { lineHeight: '1.3' }],
        'h3': ['1.25rem', { lineHeight: '1.4' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'component': '14px',
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(79, 143, 247, 0.3)',
        'neon-green': '0 0 20px rgba(48, 225, 150, 0.3)',
        'neon-magenta': '0 0 20px rgba(255, 61, 110, 0.3)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(79, 143, 247, 0.2)' },
          '100%': { boxShadow: '0 0 30px rgba(79, 143, 247, 0.4)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}