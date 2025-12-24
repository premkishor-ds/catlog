import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Luxe Lens Studio',
    short_name: 'Luxe Lens',
    description: 'Professional Photography & Videography Services',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#d4af37',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
