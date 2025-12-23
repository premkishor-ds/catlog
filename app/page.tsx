import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import siteData from '@/data/site.json'
import photosData from '@/data/photos.json'

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

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Award-Winning Quality',
    description: 'Recognized excellence in photography and videography with industry awards and client satisfaction.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Fast Turnaround',
    description: 'Quick delivery without compromising quality. Get your photos and videos when you need them.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Professional Equipment',
    description: 'State-of-the-art cameras and equipment ensuring the highest quality results for every project.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: '10+ Years Experience',
    description: 'Extensive experience across weddings, events, commercial, and portrait photography.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'All India Coverage',
    description: `Serving ${siteData.photographer.location.city} and major cities across India. Available for destination shoots.`,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Client-Focused Approach',
    description: 'Your vision is our priority. We work closely with you to deliver exactly what you envision.',
  },
]

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Wedding Client',
    text: 'Absolutely stunning photos! Captured every moment perfectly. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Rajesh Kumar',
    role: 'Corporate Event',
    text: 'Professional, punctual, and delivered exceptional quality. Exceeded our expectations.',
    rating: 5,
  },
  {
    name: 'Anita Desai',
    role: 'Portrait Session',
    text: 'The best photographer in Mumbai! Made me feel so comfortable during the shoot.',
    rating: 5,
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 leading-tight">
              Professional Photography & Videography
              <span className="block text-primary-700 mt-2">in {siteData.photographer.location.city}</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
              Award-winning photographer capturing life&apos;s most precious moments. Specializing in weddings, events, portraits, and commercial photography.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="bg-cta-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cta-600 transition-colors shadow-lg hover:shadow-xl min-h-[44px] flex items-center justify-center w-full sm:w-auto"
              >
                Book Your Session Now
              </Link>
              <Link
                href="/gallery"
                className="border-2 border-primary-700 text-primary-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-50 transition-colors min-h-[44px] flex items-center justify-center w-full sm:w-auto"
              >
                View Our Work
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-text-secondary">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>500+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Award-Winning</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="bg-bg-section py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary text-center mb-12">
            Trusted by Clients Across India
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-cta-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-text-secondary mb-4 italic">&quot;{testimonial.text}&quot;</p>
                <div>
                  <p className="font-semibold text-text-primary">{testimonial.name}</p>
                  <p className="text-sm text-text-secondary">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              We deliver exceptional photography and videography services that exceed expectations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="text-primary-700 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="bg-bg-section py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Our Recent Work
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Explore our portfolio of stunning photography and videography
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {photosData.photos.slice(0, 8).map((photo) => (
              <Link
                key={photo.id}
                href="/gallery"
                className="relative aspect-square overflow-hidden rounded-lg group"
              >
                <Image
                  src={photo.thumbnail}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/gallery"
              className="inline-block border-2 border-primary-700 text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors min-h-[44px]"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-700 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Capture Your Story?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Let&apos;s create something beautiful together. Book your photography or videography session today.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-cta-500 text-white px-10 py-5 rounded-lg text-lg font-semibold hover:bg-cta-600 transition-colors shadow-xl hover:shadow-2xl min-h-[44px]"
            >
              Get Started Now
            </Link>
            <p className="text-white/80 text-sm mt-6">
              📞 Call us at{' '}
              <a href={`tel:${siteData.photographer.location.phone}`} className="underline hover:text-white">
                {siteData.photographer.location.phone}
              </a>
              {' '}or{' '}
              <a href={`mailto:${siteData.photographer.location.email}`} className="underline hover:text-white">
                email us
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
