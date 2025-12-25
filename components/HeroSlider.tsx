'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Photo {
  id: string
  url: string
  alt: string
  title: string
  category: string
}

interface HeroSliderProps {
  photos: Photo[]
}

export default function HeroSlider({ photos }: HeroSliderProps) {
  const [startIndex, setStartIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Ensure we have exactly 12 photos or handle whatever is passed
  const displayPhotos = photos.slice(0, 12)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % displayPhotos.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, displayPhotos.length])

  // Get the 3 visible photos handling wrap-around
  const visiblePhotos = [
    displayPhotos[startIndex % displayPhotos.length],
    displayPhotos[(startIndex + 1) % displayPhotos.length],
    displayPhotos[(startIndex + 2) % displayPhotos.length],
  ]

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % displayPhotos.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + displayPhotos.length) % displayPhotos.length)
    setIsAutoPlaying(false)
  }

  return (
    <section className="relative bg-white pt-20 pb-12 overflow-hidden">
        {/* Main Header Overlay */}
      <div className="container mx-auto px-4 mb-10 text-center relative z-10">
         <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            Capturing Life&apos;s <span className="text-primary-600">Moments</span>
         </h1>
         <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional photography & videography services for your most important days.
         </p>
         <div className="mt-8">
            <Link
                href="/contact"
                className="bg-primary-600 text-white px-8 py-3 rounded-full font-bold hover:bg-primary-700 transition-all transform hover:-translate-y-1 inline-block shadow-lg hover:shadow-primary-500/30"
            >
                Book Your Shoot
            </Link>
         </div>
      </div>

      <div className="relative h-[400px] md:h-[500px] w-full group">
        <div className="absolute inset-0 flex items-center justify-center gap-4 px-4">
            {visiblePhotos.map((photo, index) => (
            <div 
                key={`${photo.id}-${index}`}
                className={`relative h-full flex-1 min-w-0 transition-all duration-700 ease-in-out
                    ${index === 1 ? 'block' : 'hidden md:block'} 
                `}
            >
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                    <Image
                        src={photo.url}
                        alt={photo.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority={index === 1} // Prioritize center image
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90">
                        <div className="absolute bottom-6 left-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                            <p className="text-xs font-bold uppercase tracking-wider text-primary-400 mb-1">{photo.category}</p>
                            <p className="text-xl font-bold">{photo.title}</p>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>

        {/* Navigation Arrows */}
        <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 hover:bg-primary-600 text-white backdrop-blur-md transition-all md:-left-4 md:group-hover:left-8"
            aria-label="Previous slide"
        >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
        </button>
        <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 hover:bg-primary-600 text-white backdrop-blur-md transition-all md:-right-4 md:group-hover:right-8"
            aria-label="Next slide"
        >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </button>
      </div>
    </section>
  )
}
