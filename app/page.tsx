import type { Metadata } from 'next'
import siteData from '@/data/site.json'
import photosData from '@/data/photos.json'
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
const sliderPhotos = photosData.photos.slice(0, 12)

export default function Home() {
  return (
    <>
      <HeroSlider photos={sliderPhotos} />
      <BenefitsSection />
      <PhotographyPortfolio />
      <VideographyPortfolio />
      <TestimonialsSection />
    </>
  )
}
