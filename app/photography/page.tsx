import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import siteData from '@/data/site.json'
import PhotographyPortfolio from '@/components/PhotographyPortfolio'

export const metadata: Metadata = {
  title: `Professional Photography Services | ${siteData.photographer.businessName}`,
  description: `Explore our range of professional photography services in ${siteData.photographer.location.city}, ${siteData.photographer.location.state}. Wedding, Travel, Sports, Events, Product, and Portrait photography by ${siteData.photographer.name}.`,
  keywords: `professional photography services, wedding photography ${siteData.photographer.location.city}, independent photographer, ${siteData.photographer.location.city} photography services`,
}

const categories = [
  { 
    name: 'Wedding Photography', 
    slug: 'wedding', 
    icon: '💍',
    description: 'Capturing your special day with elegance, emotion, and timeless beauty.'
  },
  { 
    name: 'Travel Photography', 
    slug: 'travel', 
    icon: '✈️', 
    description: 'Documenting breathtaking landscapes, vibrant cultures, and unforgettable adventures.'
  },
  { 
    name: 'Sports Photography', 
    slug: 'sports', 
    icon: '⚽', 
    description: 'Freezing moments of athletic excellence, passion, and determination.'
  },
  { 
    name: 'Party & Events', 
    slug: 'party', 
    icon: '🎉', 
    description: 'Celebrating life&apos;s memorable moments with vibrant, energetic event photography.'
  },
  { 
    name: 'Indoor Photography', 
    slug: 'indoor', 
    icon: '🏠', 
    description: 'Professional studio and indoor photography sessions with perfect lighting.'
  },
  { 
    name: 'Product Photography', 
    slug: 'product', 
    icon: '📦', 
    description: 'Showcasing your products with style and precision to elevate your brand.'
  },
  { 
    name: 'Portrait Photography', 
    slug: 'portrait', 
    icon: '📸', 
    description: 'Artistic and professional portraits that capture your personality and essence.'
  },
]

export default function PhotographyPage() {
  return (
    <article className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <header className="text-center mb-8 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
            Professional Photography Services
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            We offer a wide range of photography services tailored to your needs. 
            From intimate portraits to grand wedding celebrations, we capture it all with passion and expertise 
            in {siteData.photographer.location.city}, {siteData.photographer.location.state}.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
          {categories.map((category) => (
            <Link 
              key={category.slug}
              href={`/photography/${category.slug}`}
              className="group block bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl hover:border-primary-100 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-3xl md:text-4xl mb-4 md:mb-6 bg-primary-50 w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-primary-600 transition-colors">
                {category.name}
              </h2>
              <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                {category.description}
              </p>
              <div className="text-primary-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all text-sm md:text-base">
                View Portfolio
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </section>

        {/* Featured Portfolio Section */}
        <section className="bg-gray-50 -mx-4 px-4 py-12 md:py-16">
           <div className="container mx-auto">
             <PhotographyPortfolio />
           </div>
        </section>

        {/* CTA */}
        <section className="mt-12 md:mt-20 text-center">
          <div className="bg-primary-900 text-white rounded-3xl p-6 md:p-12 relative overflow-hidden">
             {/* Decorative circles */}
             <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary-800 rounded-full opacity-50 blur-3xl" />
             <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-primary-800 rounded-full opacity-50 blur-3xl" />
             
             <div className="relative z-10 max-w-2xl mx-auto">
               <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Book Your Session?</h2>
               <p className="text-primary-100 text-lg mb-8">
                 Whether it&apos;s a wedding, a corporate event, or a personal portrait, we&apos;re here to create beautiful visual memories for you.
               </p>
               <Link
                 href="/contact"
                 className="inline-block bg-white text-primary-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
               >
                 Get in Touch Today
               </Link>
             </div>
          </div>
        </section>
      </div>
    </article>
  )
}
