import Link from 'next/link'
import siteData from '@/data/site.json'

export default function CTASection() {
  return (
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
  )
}
