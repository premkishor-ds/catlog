import type { Metadata } from 'next'
import Image from 'next/image'
import siteData from '@/data/site.json'

export const metadata: Metadata = {
  title: `About ${siteData.photographer.name} | Professional Photographer & Videographer in ${siteData.photographer.location.city}`,
  description: `Learn about ${siteData.photographer.name}, an award-winning photographer and videographer based in ${siteData.photographer.location.city}, ${siteData.photographer.location.state}. ${siteData.photographer.bio}`,
  keywords: `about ${siteData.photographer.name}, photographer ${siteData.photographer.location.city}, videographer bio, professional photographer ${siteData.photographer.location.state}`,
  openGraph: {
    title: `About ${siteData.photographer.name} | ${siteData.photographer.businessName}`,
    description: siteData.photographer.bio,
    type: 'profile',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: `About ${siteData.photographer.name}`,
    description: siteData.photographer.bio,
  },
  alternates: {
    canonical: 'https://sharmavisualarts.com/about',
  },
}

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteData.photographer.name,
    jobTitle: 'Professional Photographer & Videographer',
    description: siteData.photographer.bio,
    image: 'https://sharmavisualarts.com/about-image.jpg',
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteData.photographer.location.city,
      addressRegion: siteData.photographer.location.state,
      addressCountry: siteData.photographer.location.country,
    },
    knowsAbout: siteData.photographer.skills,
    memberOf: {
      '@type': 'Organization',
      name: siteData.photographer.businessName,
    },
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
              About {siteData.photographer.name}
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {siteData.photographer.tagline}
            </p>
          </header>

          <section className="max-w-4xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                  alt={`${siteData.photographer.name}, professional photographer`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 className="text-3xl font-semibold mb-4 text-gray-900">My Story</h2>
                <p className="text-gray-700 mb-4">{siteData.photographer.bio}</p>
                <p className="text-gray-700">{siteData.photographer.style}</p>
              </div>
            </div>
          </section>

          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-center text-gray-900">
              Skills & Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {siteData.photographer.skills.map((skill, index) => {
                const getColorClasses = (idx: number) => {
                  const mod = idx % 3
                  if (mod === 0) return {
                    bg: 'bg-primary-50',
                    border: 'border-primary-200',
                    icon: 'text-primary-600'
                  }
                  if (mod === 1) return {
                    bg: 'bg-accent-50',
                    border: 'border-accent-200',
                    icon: 'text-accent-600'
                  }
                  return {
                    bg: 'bg-warm-50',
                    border: 'border-warm-200',
                    icon: 'text-warm-600'
                  }
                }
                const colors = getColorClasses(index)
                return (
                  <div key={index} className={`${colors.bg} ${colors.border} rounded-lg p-6 border hover:shadow-lg transition-all`}>
                    <div className="flex items-start">
                      <svg className={`w-6 h-6 ${colors.icon} mr-3 flex-shrink-0 mt-1`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-gray-700 font-medium">{skill}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-center text-gray-900">
              Professional Equipment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {siteData.photographer.equipment.map((item, index) => {
                const getColorClasses = (idx: number) => {
                  const mod = idx % 3
                  if (mod === 0) return {
                    bg: 'bg-primary-50',
                    border: 'border-primary-200',
                    text: 'text-primary-700'
                  }
                  if (mod === 1) return {
                    bg: 'bg-accent-50',
                    border: 'border-accent-200',
                    text: 'text-accent-700'
                  }
                  return {
                    bg: 'bg-warm-50',
                    border: 'border-warm-200',
                    text: 'text-warm-700'
                  }
                }
                const colors = getColorClasses(index)
                return (
                  <div key={index} className={`text-center ${colors.bg} ${colors.border} rounded-lg p-4 border hover:shadow-md transition-all`}>
                    <p className={`${colors.text} font-medium`}>{item}</p>
                  </div>
                )
              })}
            </div>
          </section>

          <section className="max-w-4xl mx-auto bg-primary-50 rounded-xl p-8 border border-primary-100 shadow-lg bg-pattern-waves relative">
            <div className="absolute inset-0 bg-primary-50/90" />
            <div className="relative z-10">
            <h2 className="text-3xl font-semibold mb-6 text-center text-gray-900 flex items-center justify-center gap-3">
              <div className="w-1 h-10 bg-primary-500 rounded-full" />
              Why Work With Me?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Experience</h3>
                <p className="text-gray-700">
                  Over 10 years of professional photography and videography experience, 
                  working with clients from weddings to commercial brands.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Artistic Vision</h3>
                <p className="text-gray-700">
                  A unique blend of documentary authenticity and artistic elegance, 
                  creating images and videos that tell compelling stories.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Professional Quality</h3>
                <p className="text-gray-700">
                  State-of-the-art equipment and meticulous attention to detail ensure 
                  every project meets the highest standards of quality.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Client-Focused</h3>
                <p className="text-gray-700">
                  Your vision is my priority. I work closely with clients to understand 
                  their needs and deliver results that exceed expectations.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <a
                href="/contact"
                className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 inline-block"
              >
                Let's Work Together
              </a>
            </div>
            </div>
          </section>
        </div>
      </article>
    </>
  )
}

