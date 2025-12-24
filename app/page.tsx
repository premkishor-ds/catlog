import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import siteData from '@/data/site.json'
import photosData from '@/data/photos.json'
import HeroSlider from '@/components/HeroSlider'

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

// Top 12 photos for the slider
const sliderPhotos = photosData.photos.slice(0, 12)

export default function Home() {
  return (
    <>
      <HeroSlider photos={sliderPhotos} />

      {/* Social Proof / Testimonials */}
      {/* Social Proof / Testimonials */}
      <section className="bg-bg-section py-20 bg-pattern-dots">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">
              Trusted by Clients
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 relative border border-gray-100">
                <div className="absolute top-8 right-8 text-primary-100">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21L14.017 18C14.017 16.0547 14.3314 14.6593 14.9603 13.8139C15.5891 12.9685 16.8906 12.1818 18.8647 11.454L18.8647 8.5C16.9412 8.5 15.3529 7.89091 14.1 6.67273C12.8471 5.45455 12.2206 3.89091 12.2206 1.98182L9.27941 1.98182C9.27941 2.5 9.22059 3.01818 9.10294 3.53636C8.98529 4.05455 8.92647 4.54545 8.92647 5.00909C8.92647 7.02727 9.48529 8.95455 10.6029 10.7909C11.7206 12.6273 13.75 14.0909 16.6912 15.1818V21H14.017ZM5.15294 21L5.15294 18C5.15294 16.0547 5.46745 14.6593 6.09628 13.8139C6.7251 12.9685 8.02667 12.1818 10 11.454L10 8.5C8.07706 8.5 6.48882 7.89091 5.23529 6.67273C3.98235 5.45455 3.35588 3.89091 3.35588 1.98182L0.414706 1.98182C0.414706 2.5 0.355882 3.01818 0.238235 3.53636C0.120588 4.05455 0.0617647 4.54545 0.0617647 5.00909C0.0617647 7.02727 0.620588 8.95455 1.73824 10.7909C2.85588 12.6273 4.88529 14.0909 7.82647 15.1818V21H5.15294Z" />
                  </svg>
                </div>
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-text-secondary mb-6 italic leading-relaxed relative z-10">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-text-primary">{testimonial.name}</p>
                    <p className="text-sm text-text-secondary">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
              Why Choose Us?
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              We deliver exceptional photography and videography services that exceed expectations,
              combining artistic vision with professional execution.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 border border-gray-100 shadow-sm hover:shadow-xl group">
                <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
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
      <section className="bg-bg-section py-24 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
                Captured Moments
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                Explore our portfolio of stunning photography and videography, showcasing love, life, and brands from across India.
              </p>
            </div>
            <Link
              href="/gallery"
              className="group flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 transition-colors"
            >
              View Full Gallery
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
            {photosData.photos.slice(0, 8).map((photo, index) => (
              <Link
                key={photo.id}
                href="/gallery"
                className={`relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 ${
                  index === 0 || index === 7 ? 'md:col-span-2 md:row-span-2 aspect-square md:aspect-auto' : 'aspect-square'
                }`}
              >
                <Image
                  src={photo.thumbnail}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-bold text-lg mb-1">{photo.title}</p>
                    <p className="text-sm text-white/80 capitalize">{photo.category}</p>
                  </div>
                </div>
              </Link>
            ))}
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
