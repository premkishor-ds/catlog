import type { Metadata } from 'next'
import GalleryFilter from '@/components/GalleryFilter'
import siteData from '@/data/site.json'

export const metadata: Metadata = {
  title: `Photography Gallery | ${siteData.photographer.businessName} | ${siteData.photographer.location.city} Photographer`,
  description: `Explore our professional photography gallery featuring wedding, travel, sports, event, portrait, and product photography. High-quality images from ${siteData.photographer.location.city}, ${siteData.photographer.location.state}.`,
  keywords: `photography gallery, ${siteData.photographer.location.city} photographer portfolio, wedding photography gallery, travel photography, sports photography, event photography`,
  openGraph: {
    title: `Photography Gallery | ${siteData.photographer.businessName}`,
    description: `Explore our professional photography gallery featuring stunning images across all categories`,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Photography Gallery | ${siteData.photographer.businessName}`,
    description: `Explore our professional photography gallery`,
  },
  alternates: {
    canonical: 'https://sharmavisualarts.com/gallery',
  },
}

export default function GalleryPage() {
  return (
    <article className="py-20 bg-white relative">
      <div className="absolute inset-0 bg-white/95" />
      <div className="container mx-auto px-4 relative z-10">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            Photography Gallery
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore our complete collection of professional photography work. Search by keywords, filter by category, 
            and scroll to view more photos. Click on any image to view in full size and download.
          </p>
        </header>

        <GalleryFilter />
      </div>
    </article>
  )
}

