'use client'

import { useState } from 'react'
import Image from 'next/image'
import Lightbox from './Lightbox'
import Skeleton from './Skeleton'

interface Photo {
  id: string
  title: string
  description: string
  category: string
  location: string
  url: string
  thumbnail: string
  alt: string
  downloadUrl: string
  date: string
  details?: {
    camera: string
    lens: string
    aperture: string
    shutterSpeed: string
    iso: number
  }
}

interface ImageGalleryProps {
  photos: Photo[]
  columns?: number
}

export default function ImageGallery({ photos, columns = 3 }: ImageGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)

  const gridColsClass = columns === 2 
    ? 'lg:grid-cols-2' 
    : columns === 4 
    ? 'lg:grid-cols-4' 
    : 'lg:grid-cols-3'

  return (
    <>
      <div className={`grid grid-cols-1 md:grid-cols-2 ${gridColsClass} gap-4`}>
        {photos.map((photo) => (
          <GalleryItem
            key={photo.id}
            photo={photo}
            onClick={() => setSelectedPhoto(photo)}
          />
        ))}
      </div>
      
      {selectedPhoto && (
        <Lightbox
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </>
  )
}

function GalleryItem({ photo, onClick }: { photo: Photo, onClick: () => void }) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div
      className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square bg-gray-100"
      onClick={onClick}
    >
      {isLoading && <Skeleton className="absolute inset-0 z-10" />}
      <Image
        src={photo.thumbnail}
        alt={photo.alt}
        fill
        className={`object-cover transition-all duration-700 group-hover:scale-110 ${
          isLoading ? 'scale-110 blur-xl grayscale' : 'scale-100 blur-0 grayscale-0'
        }`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        loading="lazy"
        onLoad={() => setIsLoading(false)}
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center px-4">
          <p className="font-semibold text-lg mb-1">{photo.title}</p>
          <p className="text-sm">{photo.location}</p>
        </div>
      </div>
    </div>
  )
}
      
      {selectedPhoto && (
        <Lightbox
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </>
  )
}

