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
          DEFAULT: '#1E40AF', // Primary Blue (Trust)
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1E40AF', // Main primary
          800: '#1E3A8A',
          900: '#1E293B',
        },
        cta: {
          DEFAULT: '#F97316', // CTA Orange (Action)
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316', // Main CTA
          600: '#EA580C',
          700: '#C2410C',
        },
        text: {
          primary: '#0F172A', // Primary Text (Dark)
          secondary: '#475569', // Secondary Text (Gray)
        },
        bg: {
          section: '#F1F5F9', // Section Background (Light Gray)
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

