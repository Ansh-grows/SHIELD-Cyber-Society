/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#080E1C',
          900: '#0B1528',
          800: '#101E38', // primary dark navy from poster
          700: '#1A2F54',
          600: '#233F70',
        },
        accent: {
          blue: '#3D6FA6', // secondary blue accent from poster
          hover: '#315B8A',
          light: '#568AC4',
          subtle: '#EAF1F8',
        },
        shield: {
          gold: '#C5A059', // subtle bronze/gold accent from NIT Hamirpur crest
          goldLight: '#DFC286',
          bgLight: '#F4F6F9', // light cool-gray for alternating sections
          border: '#E5E9F0', // light dividers
          darkText: '#1F2937',
          mutedText: '#6B7280',
        }
      },
      fontFamily: {
        heading: ['Montserrat', 'Poppins', 'sans-serif'],
        body: ['Inter', 'Roboto', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.035em',
        tight: '-0.02em',
        widest: '0.15em',
        ultra: '0.25em',
      },
      boxShadow: {
        'card': '0 2px 8px -2px rgba(16, 30, 56, 0.06), 0 4px 16px -4px rgba(16, 30, 56, 0.08)',
        'card-hover': '0 8px 24px -4px rgba(16, 30, 56, 0.12), 0 4px 12px -2px rgba(61, 111, 166, 0.12)',
        'nav': '0 1px 3px 0 rgba(16, 30, 56, 0.08)',
      }
    },
  },
  plugins: [],
}
