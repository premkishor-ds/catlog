import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SWRegistration from '@/components/SWRegistration'
import siteData from '@/data/site.json'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  themeColor: '#d4af37',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://sharmavisualarts.com'),
  title: siteData.seo.defaultTitle,
  description: siteData.seo.defaultDescription,
  keywords: siteData.seo.keywords,
  authors: [{ name: siteData.photographer.name }],
  openGraph: {
    title: siteData.seo.defaultTitle,
    description: siteData.seo.defaultDescription,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteData.seo.defaultTitle,
    description: siteData.seo.defaultDescription,
  },
  manifest: '/manifest.json',

  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Luxe Lens',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Photographer',
    '@id': 'https://sharmavisualarts.com/#photographer',
    name: siteData.photographer.name,
    alternateName: siteData.photographer.businessName,
    description: siteData.photographer.bio,
    image: 'https://sharmavisualarts.com/og-image.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteData.photographer.location.address.split(',')[0],
      addressLocality: siteData.photographer.location.city,
      addressRegion: siteData.photographer.location.state,
      addressCountry: siteData.photographer.location.country,
    },
    telephone: siteData.photographer.location.phone,
    email: siteData.photographer.location.email,
    areaServed: siteData.photographer.location.serviceAreas.map(area => ({
      '@type': 'City',
      name: area,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Photography Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Wedding Photography',
            description: 'Professional wedding photography services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Travel Photography',
            description: 'Travel and landscape photography services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sports Photography',
            description: 'Sports event photography services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Event Photography',
            description: 'Party and event photography services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Portrait Photography',
            description: 'Portrait and indoor photography services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Product Photography',
            description: 'Commercial product photography services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cinematic Videography',
            description: 'Professional videography services',
          },
        },
      ],
    },
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <SWRegistration />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

