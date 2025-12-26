'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import photosData from '@/data/home_photos.json'
import Lightbox from './Lightbox'
import Skeleton from './Skeleton'

export default function PhotographyPortfolio() {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photosData.photos[0] | null>(null)
  return (
    <section className="bg-bg-section py-24 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent" />
      <div className="container mx-auto px-4 relative mb-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
              Photography Portfolio
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              Explore our portfolio of stunning photography reflecting our passion for storytelling.
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
      </div>
        
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-1">
          {/* Repeat photos to ensure we fill the 6x4 grid (24 items) if needed */}
          {[...photosData.photos, ...photosData.photos].slice(0, 24).map((photo, index) => (
            <PhotoItem 
              key={`${photo.id}-${index}`} 
              photo={photo} 
              onClick={() => setSelectedPhoto(photo)} 
            />
          ))}
        </div>
      </div>

      {selectedPhoto && (
        <Lightbox
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </section>
  )
}

function PhotoItem({ photo, onClick }: { photo: typeof photosData.photos[0], onClick: () => void }) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div
      onClick={onClick}
      className="relative group overflow-hidden block aspect-square cursor-pointer bg-gray-100"
    >
      {isLoading && <Skeleton className="absolute inset-0 z-10" />}
      <Image
        src={photo.thumbnail}
        alt={photo.alt}
        fill
        className={`object-cover group-hover:scale-110 transition-all duration-700 ${
          isLoading ? 'scale-110 blur-xl grayscale' : 'scale-100 blur-0 grayscale-0'
        }`}
        sizes="(max-width: 768px) 33vw, 16vw"
        onLoad={() => setIsLoading(false)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <p className="font-bold text-lg mb-1">{photo.title}</p>
          <p className="text-sm text-white/80 capitalize">{photo.category}</p>
        </div>
      </div>
    </div>
  )
}
