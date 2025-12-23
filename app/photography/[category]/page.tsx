import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ImageGallery from '@/components/ImageGallery'
import siteData from '@/data/site.json'
import photosData from '@/data/photos.json'

const categoryMap: Record<string, { name: string; description: string; keywords: string }> = {
  wedding: {
    name: 'Wedding Photography',
    description: 'Capturing your special day with elegance, emotion, and timeless beauty. Professional wedding photography services in Mumbai, Maharashtra and across India.',
    keywords: 'wedding photographer Mumbai, wedding photography India, wedding photographer Maharashtra, Indian wedding photographer, bridal photography, wedding day photography, Mumbai wedding photographer',
  },
  travel: {
    name: 'Travel Photography',
    description: 'Documenting breathtaking landscapes, vibrant cultures, and unforgettable adventures across India and the world. Professional travel photography services.',
    keywords: 'travel photographer India, travel photography, landscape photography, adventure photography, destination photography, Indian travel photographer',
  },
  sports: {
    name: 'Sports Photography',
    description: 'Freezing moments of athletic excellence, passion, and determination. Professional sports photography capturing the intensity of competition.',
    keywords: 'sports photographer Mumbai, sports photography India, action photography, athletic photography, sports event photography, Mumbai sports photographer',
  },
  party: {
    name: 'Party & Event Photography',
    description: 'Celebrating life\'s memorable moments with vibrant, energetic event photography. From corporate events to birthday celebrations and festivals.',
    keywords: 'event photographer Mumbai, party photographer, corporate event photography, celebration photography, event photography India, Mumbai event photographer',
  },
  indoor: {
    name: 'Indoor Photography',
    description: 'Professional studio and indoor photography sessions. Perfect lighting, controlled environment, and stunning results.',
    keywords: 'indoor photographer Mumbai, studio photography, indoor portrait photography, studio session photography, Mumbai studio photographer',
  },
  product: {
    name: 'Product Photography',
    description: 'Showcasing your products with style and precision. Professional product photography that elevates your brand and drives sales.',
    keywords: 'product photographer Mumbai, product photography India, commercial photography, e-commerce photography, product photography Maharashtra, Mumbai product photographer',
  },
  portrait: {
    name: 'Portrait Photography',
    description: 'Artistic and professional portraits that capture your personality and essence. From headshots to artistic portraits.',
    keywords: 'portrait photographer Mumbai, portrait photography India, professional headshots, artistic portraits, portrait photography Maharashtra, Mumbai portrait photographer',
  },
}

export async function generateStaticParams() {
  return Object.keys(categoryMap).map((category) => ({
    category,
  }))
}

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const category = categoryMap[params.category]
  if (!category) {
    return {}
  }

  const city = siteData.photographer.location.city
  const state = siteData.photographer.location.state
  const title = `${category.name} Services in ${city}, ${state} | ${siteData.photographer.businessName}`
  const description = `${category.description} Serving ${city}, ${state} and worldwide.`

  return {
    title,
    description,
    keywords: `${category.keywords}, photographer ${city}, ${state} photographer`,
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `https://sharmavisualarts.com/photography/${params.category}`,
    },
  }
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = categoryMap[params.category]
  if (!category) {
    notFound()
  }

  const categoryPhotos = photosData.photos.filter((photo) => photo.category === params.category)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: category.name,
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
    description: category.description,
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
              {category.name} in {siteData.photographer.location.city}, {siteData.photographer.location.state}
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {category.description}
            </p>
          </header>

          {categoryPhotos.length > 0 ? (
            <>
              <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-6 text-gray-900">
                  {category.name} Portfolio
                </h2>
                <ImageGallery photos={categoryPhotos} columns={3} />
              </section>
            </>
          ) : (
            <section className="text-center py-12">
              <p className="text-gray-600 text-lg">More {category.name.toLowerCase()} images coming soon!</p>
            </section>
          )}

          <section className="mt-16 bg-primary-50 rounded-xl p-8 border border-primary-100 shadow-lg bg-pattern-waves relative">
            <div className="absolute inset-0 bg-primary-50/90" />
            <div className="relative z-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 flex items-center gap-3">
              <div className="w-1 h-8 bg-primary-500 rounded-full" />
              Why Choose Our {category.name} Services?
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Professional equipment and years of experience</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Artistic vision and attention to detail</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Fast turnaround and high-quality deliverables</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Serving {siteData.photographer.location.city} and {siteData.photographer.location.serviceAreas.join(', ')}</span>
              </li>
            </ul>
            <div className="mt-8">
              <a
                href="/contact"
                className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 inline-block"
              >
                Book Your {category.name} Session
              </a>
            </div>
            </div>
          </section>
        </div>
      </article>
    </>
  )
}

