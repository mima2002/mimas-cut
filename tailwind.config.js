module.exports ={
    
    theme: {
        screens: {
            'xs': '475px',
            'md': '7685px',
            'lg': '1024px',
            'xl': '1280px',
            'custom-breakpoint': '1440px'
            
            
        }
    }
}

module.exports = {
    Plugins: {
        tailwindcss: {},
        autoprefixer: {},
    },
      theme: {
        extend: {
          keyframes: {
            'slide-up': {
              '0%': { transform: 'translateY(50px)', opacity: '0' },
              '100%': { transform: 'translateY(0)', opacity: '1' },
            }
          },
          animation: {
            'slide-up-on-scroll': 'slide-up 0.5s ease-out forwards',
          }
        }
      },
      // ...
    }