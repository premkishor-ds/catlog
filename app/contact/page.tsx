import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import siteData from '@/data/site.json'

export const metadata: Metadata = {
  title: `Contact ${siteData.photographer.businessName} | Photography & Videography Services in ${siteData.photographer.location.city}`,
  description: `Get in touch with ${siteData.photographer.name} for professional photography and videography services in ${siteData.photographer.location.city}, ${siteData.photographer.location.state}. Book your session today.`,
  keywords: `contact photographer ${siteData.photographer.location.city}, book photography session, videography services ${siteData.photographer.location.state}`,
  openGraph: {
    title: `Contact ${siteData.photographer.businessName}`,
    description: `Get in touch for professional photography and videography services`,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: `Contact ${siteData.photographer.businessName}`,
    description: `Get in touch for professional photography and videography services`,
  },
  alternates: {
    canonical: 'https://sharmavisualarts.com/contact',
  },
}

export default function ContactPage() {

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: siteData.photographer.businessName,
      image: 'https://sharmavisualarts.com/logo.jpg',
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteData.photographer.location.address.split(',')[0],
        addressLocality: siteData.photographer.location.city,
        addressRegion: siteData.photographer.location.state,
        postalCode: siteData.photographer.location.address.split(',')[2]?.trim() || '',
        addressCountry: siteData.photographer.location.country,
      },
      telephone: siteData.photographer.location.phone,
      email: siteData.photographer.location.email,
      priceRange: '$$',
      areaServed: siteData.photographer.location.serviceAreas.map(area => ({
        '@type': 'City',
        name: area,
      })),
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
              Get In Touch
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Ready to capture your story? Let&apos;s discuss your photography or videography project. 
              I&apos;m here to help bring your vision to life.
            </p>
          </header>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-gray-900">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
                  <p className="text-gray-700">{siteData.photographer.location.address}</p>
                  <p className="text-gray-700">
                    {siteData.photographer.location.city}, {siteData.photographer.location.state} {siteData.photographer.location.country}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                  <a href={`tel:${siteData.photographer.location.phone}`} className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
                    {siteData.photographer.location.phone}
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                  <a href={`mailto:${siteData.photographer.location.email}`} className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
                    {siteData.photographer.location.email}
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Service Areas</h3>
                  <p className="text-gray-700">{siteData.photographer.location.serviceAreas.join(', ')}</p>
                </div>
              </div>

              <div className="mt-8 bg-primary-50 rounded-lg p-6 border border-primary-100 relative">
                <div className="absolute inset-0 bg-primary-50/90" />
                <div className="relative z-10">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-primary-500 rounded-full" />
                  Business Hours
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>By Appointment</span>
                  </li>
                </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6 text-gray-900">Send a Message</h2>
              <ContactForm />
            </section>
          </div>
        </div>
      </article>
    </>
  )
}

