import type { Metadata } from 'next'
import VideoGrid from '@/components/VideoGrid'
import siteData from '@/data/site.json'
import videosData from '@/data/videos.json'

export const metadata: Metadata = {
  title: `Cinematic Videography Services in ${siteData.photographer.location.city} | ${siteData.photographer.businessName}`,
  description: `Professional cinematic videography services in ${siteData.photographer.location.city}, ${siteData.photographer.location.state}. Wedding films, travel documentaries, sports highlights, event coverage, and commercial video production.`,
  keywords: `videographer ${siteData.photographer.location.city}, cinematic videography, wedding videographer, video production ${siteData.photographer.location.city}, commercial videography, ${siteData.photographer.location.state} videographer`,
  openGraph: {
    title: `Cinematic Videography Services | ${siteData.photographer.businessName}`,
    description: `Professional videography services in ${siteData.photographer.location.city}, ${siteData.photographer.location.state}`,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Cinematic Videography | ${siteData.photographer.businessName}`,
    description: `Professional videography services in ${siteData.photographer.location.city}`,
  },
  alternates: {
    canonical: 'https://sharmavisualarts.com/videography',
  },
}

export default function VideographyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Cinematic Videography',
    provider: {
      '@type': 'Photographer',
      name: siteData.photographer.name,
      address: {
        '@type': 'PostalAddress',
        addressLocality: siteData.photographer.location.city,
        addressRegion: siteData.photographer.location.state,
        addressCountry: siteData.photographer.location.country,
      },
    },
    areaServed: {
      '@type': 'City',
      name: siteData.photographer.location.city,
    },
    description: 'Professional cinematic videography services including wedding films, travel documentaries, sports highlights, and commercial video production.',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 text-gray-900">
              Cinematic Videography in {siteData.photographer.location.city}, {siteData.photographer.location.state}
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Professional videography services that tell your story with cinematic elegance. 
              From wedding films to travel documentaries, sports highlights to commercial productions, 
              we create videos that captivate and inspire.
            </p>
          </header>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900">
              Video Portfolio
            </h2>
            <VideoGrid videos={videosData.videos} />
          </section>

          <section className="mt-16 bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Our Videography Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Wedding Videography</h3>
                <p className="text-gray-700">
                  Cinematic wedding films that capture the emotion, beauty, and magic of your special day. 
                  From ceremony to reception, we create timeless memories.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Travel Documentaries</h3>
                <p className="text-gray-700">
                  Epic travel videos that showcase breathtaking landscapes, vibrant cultures, and unforgettable adventures. 
                  Perfect for travel brands and content creators.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Sports Highlights</h3>
                <p className="text-gray-700">
                  Dynamic sports videography capturing the intensity, passion, and excellence of athletic competition. 
                  Professional highlights and behind-the-scenes content.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Event Coverage</h3>
                <p className="text-gray-700">
                  Comprehensive event videography with cinematic storytelling. Corporate events, parties, 
                  and celebrations captured with style and professionalism.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Commercial Video</h3>
                <p className="text-gray-700">
                  Professional commercial videography for brands and businesses. Product showcases, 
                  promotional videos, and marketing content that drives results.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Portrait Sessions</h3>
                <p className="text-gray-700">
                  Behind-the-scenes and artistic portrait session videos. Showcasing the creative process 
                  and capturing the essence of your portrait experience.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="/contact"
                className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 inline-block"
              >
                Book Your Videography Project
              </a>
            </div>
          </section>
        </div>
      </article>
    </>
  )
}

