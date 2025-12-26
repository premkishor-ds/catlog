import type { Metadata } from 'next'
import siteData from '@/data/site.json'
import sliderPhotosData from '@/data/slider_photos.json'
import HeroSlider from '@/components/HeroSlider'
import BenefitsSection from '@/components/BenefitsSection'
import PhotographyPortfolio from '@/components/PhotographyPortfolio'
import VideographyPortfolio from '@/components/VideographyPortfolio'
import TestimonialsSection from '@/components/TestimonialsSection'


export const metadata: Metadata = {
  title: `${siteData.photographer.businessName} | Professional Photography & Videography Services`,
  description: `Award-winning ${siteData.photographer.location.city} photographer and videographer specializing in weddings, travel, sports, events, portraits, and product photography. Serving ${siteData.photographer.location.city}, ${siteData.photographer.location.state} and worldwide.`,
  keywords: `photographer ${siteData.photographer.location.city}, videographer ${siteData.photographer.location.city}, wedding photographer ${siteData.photographer.location.city}, ${siteData.photographer.location.state} photographer, professional photography services`,
  openGraph: {
    title: `${siteData.photographer.businessName} | Professional Photography & Videography`,
    description: `Award-winning photographer and videographer in ${siteData.photographer.location.city}, ${siteData.photographer.location.state}`,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteData.photographer.businessName} | Professional Photography`,
    description: `Professional photography and videography services in ${siteData.photographer.location.city}`,
  },
  alternates: {
    canonical: 'https://sharmavisualarts.com',
  },
}

// Top 12 photos for the slider
const sliderPhotos = sliderPhotosData.photos

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'PhotographyBusiness',
    name: siteData.photographer.businessName,
    image: 'https://sharmavisualarts.com/hero-image.jpg',
    description: siteData.photographer.bio,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteData.photographer.location.address,
      addressLocality: siteData.photographer.location.city,
      addressRegion: siteData.photographer.location.state,
      postalCode: '10001',
      addressCountry: siteData.photographer.location.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.7128,
      longitude: -74.0060
    },
    url: 'https://sharmavisualarts.com',
    telephone: siteData.photographer.location.phone,
    priceRange: '$$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday'
        ],
        opens: '09:00',
        closes: '18:00'
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSlider photos={sliderPhotos} />
      <BenefitsSection />
      <PhotographyPortfolio />
      <VideographyPortfolio />
      <TestimonialsSection />
    </>
  )
}
