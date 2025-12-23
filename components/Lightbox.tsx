'use client'

import { useEffect } from 'react'
import Image from 'next/image'

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
}

interface LightboxProps {
  photo: Photo
  onClose: () => void
}

export default function Lightbox({ photo, onClose }: LightboxProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = photo.downloadUrl
    link.download = `${photo.title.replace(/\s+/g, '-')}.jpg`
    link.click()
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
        aria-label="Close lightbox"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      <div
        className="relative max-w-7xl w-full h-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full max-h-[90vh]">
          <Image
            src={photo.url}
            alt={photo.alt}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>
        
        <div className="mt-4 text-white text-center max-w-2xl">
          <h2 className="text-2xl font-bold mb-2">{photo.title}</h2>
          <p className="text-gray-300 mb-1">{photo.description}</p>
          <p className="text-sm text-gray-400 mb-4">{photo.location} • {new Date(photo.date).toLocaleDateString()}</p>
          
          <button
            onClick={handleDownload}
            className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-200 transition-colors"
          >
            Download Image
          </button>
        </div>
      </div>
    </div>
  )
}

