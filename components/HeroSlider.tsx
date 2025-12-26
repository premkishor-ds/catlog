'use client'

import { useState, useEffect, useCallback } from 'react'
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
  const [currentSlide, setCurrentSlide] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Use a fixed set of 12 photos
  const displayPhotos = photos.slice(0, 12)
  
  // Clone first and last slide for infinite loop illusion
  // For 3-up display, we ideally need more clones, but with 1-up/3-up logic:
  // We will simply render ALL slides + clones.
  // Clones: We need 1 clone at start (last slide) and 1 at end (first slide) for single-step sliding.
  // Actually for 3-up view, we need enough clones to fill the screen if we slide to the edge.
  // Safest is to clone the last 3 to the start, and first 3 to the end.
  const clonesBefore = displayPhotos.slice(-3)
  const clonesAfter = displayPhotos.slice(0, 3)
  const allSlides = [...clonesBefore, ...displayPhotos, ...clonesAfter]
  
  // Initial index should be 3 (after the 3 clones)
  // We initialize state lazily to avoid hydration mismatch if helpful, 
  // but here 3 is constant so useState(3) is fine.
  // EXCEPT: We used useState(1) above. Let's fix that.
  
  // We need to handle the initial render carefully.
  const [idx, setIdx] = useState(3)

  const handleNext = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setIdx((prev) => prev + 1)
  }, [isTransitioning])

  const handlePrev = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setIdx((prev) => prev - 1)
  }, [isTransitioning])

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      handleNext()
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, handleNext])

  const onTransitionEnd = () => {
    setIsTransitioning(false)
    // Check for loop points
    // Total Real Slides = 12.
    // Start Index = 3.
    // End Index = 3 + 12 - 1 = 14.
    // Clones at end start at 15.
    
    // If we are at index 15 (first clone after real), jump to 3
    if (idx >= displayPhotos.length + 3) {
      setIdx(3)
    }
    // If we are at index 2 (last clone before real), jump to 14
    if (idx <= 2) {
      setIdx(displayPhotos.length + 2)
    }
  }

  // Calculate transform percentage
  // There are (12 + 6) = 18 slides total.
  // Width of one slide = 100% / visibleCount? 
  // No, easiest is: Container width is 100%. 
  // Track width = 100% * 18 items? No.
  // Track is flex.
  // Item width: Mobile 100%, Desktop 33.333%.
  // We translate by - (idx * 100%) on mobile, - (idx * 33.333%) on desktop.
  
  return (
    <section className="relative bg-white pt-20 pb-12 overflow-hidden">
        {/* Main Header Overlay - code unchanged... */}
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

      <div className="relative h-[400px] md:h-[500px] w-full group overflow-hidden">
        <style>{`
          .slider-track {
            --slide-width: 100%;
          }
          @media (min-width: 768px) {
            .slider-track {
              --slide-width: 33.333333%;
            }
          }
        `}</style>
        <div 
          className={`flex h-full w-full ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''} slider-track`}
          style={{ transform: `translateX(calc(var(--slide-width) * -${idx}))` }}
          onTransitionEnd={onTransitionEnd}
        >
            {allSlides.map((photo, index) => (
                <div 
                    key={`${photo.id}-${index}`}
                    className="relative h-full flex-shrink-0 w-full md:w-1/3 px-2"
                >
                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src={photo.url}
                            alt={photo.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 33vw"
                            priority={index >= idx && index < idx + 3} 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90">
                            <div className="absolute bottom-6 left-6 text-white">
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
            onClick={() => { handlePrev(); setIsAutoPlaying(false); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 hover:bg-primary-600 text-white backdrop-blur-md transition-all hover:scale-110"
            aria-label="Previous slide"
        >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
        </button>
        <button
            onClick={() => { handleNext(); setIsAutoPlaying(false); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 hover:bg-primary-600 text-white backdrop-blur-md transition-all hover:scale-110"
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
