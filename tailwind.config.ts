import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        // Conversion-focused color palette
        primary: {
          DEFAULT: '#d4af37', // Metallic Gold (True Gold, no orange)
          50: '#f9f7f1',      // Champagne/Cream
          100: '#f2ecd9',
          200: '#e6d8ae',
          300: '#d9c482',
          400: '#ccb058',
          500: '#d4af37',     // Classic Gold
          600: '#96661c',     // Darkened for contrast (passes AA with white)
          700: '#785016',     // Darker Bronze
          800: '#5c3d0f',     // Deep Bronze
          900: '#422c0b',     // Very Deep Bronze
          950: '#352910',
        },
        cta: {
          DEFAULT: '#b48325', // Deep Bronze (No Orange)
          50: '#fbf7ed',
          100: '#f5ebd4',
          200: '#edd5a3',
          300: '#e0b86b',
          400: '#cf9d3e',
          500: '#96661c', // Main CTA (Darkened for contrast)
          600: '#96661c', // Darkened (matches primary-600)
          700: '#785016', // Darkened (matches primary-700)
          800: '#5c3d0f',
          900: '#422c0b',
        },
        text: {
          primary: '#0F172A', // Primary Text (Dark)
          secondary: '#475569', // Secondary Text (Gray)
        },
        bg: {
          section: '#f9f7f1', // Section Background (Warm Cream/Champagne)
        },
        success: '#22C55E', // Success / Highlight
      },
      fontFamily: {
        heading: ['Inter', 'Poppins', 'DM Sans', 'sans-serif'],
        body: ['Inter', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

