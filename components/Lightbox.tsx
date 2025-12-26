import { useEffect, useState } from 'react'
import Image from 'next/image'
import { createPortal } from 'react-dom'

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
    time?: string
  }
}

interface LightboxProps {
  photo: Photo
  onClose: () => void
}

export default function Lightbox({ photo, onClose }: LightboxProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
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

  if (!mounted) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-7xl w-full h-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full max-h-[90vh]">
          <Image
            src={photo.url}
            alt={photo.alt}
            fill
            className="object-contain transition-opacity duration-300"
            sizes="100vw"
            priority
            onLoadingComplete={(img) => img.classList.remove('opacity-0')}
          />
          {/* Low-res placeholder / Blur effect */}
          <div className="absolute inset-0 -z-10">
             <Image
                src={photo.thumbnail}
                alt={photo.alt}
                fill
                className="object-contain blur-xl"
                sizes="100vw"
             />
          </div>
        </div>
        
        <div className="mt-4 text-white text-center max-w-2xl">
          <h2 className="text-2xl font-bold mb-2">{photo.title}</h2>
          <p className="text-gray-300 mb-1">{photo.description}</p>
          <p className="text-sm text-gray-400 mb-4">
            {photo.location} • {new Date(photo.date).toLocaleDateString()}
            {photo.details?.time && ` • ${photo.details.time}`}
          </p>
          
          {photo.details && (
            <div className="grid grid-cols-5 gap-4 mb-6 text-sm">
              <div className="flex flex-col items-center">
                <svg className="w-6 h-6 mb-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">{photo.details.camera}</span>
                <span className="text-xs text-gray-500">Camera</span>
              </div>
              <div className="flex flex-col items-center">
                <svg className="w-6 h-6 mb-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="text-gray-300">{photo.details.lens}</span>
                <span className="text-xs text-gray-500">Lens</span>
              </div>
              <div className="flex flex-col items-center">
                <svg className="w-6 h-6 mb-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span className="text-gray-300">{photo.details.aperture}</span>
                <span className="text-xs text-gray-500">Aperture</span>
              </div>
              <div className="flex flex-col items-center">
                <svg className="w-6 h-6 mb-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-300">{photo.details.shutterSpeed}</span>
                <span className="text-xs text-gray-500">Shutter</span>
              </div>
              <div className="flex flex-col items-center">
                <svg className="w-6 h-6 mb-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-gray-300">ISO {photo.details.iso}</span>
                <span className="text-xs text-gray-500">ISO</span>
              </div>
            </div>
          )}
          <button
            onClick={handleDownload}
            className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-200 transition-colors"
          >
            Download Image
          </button>
        </div>
      </div>

      <button
        onClick={onClose}
        className="fixed top-6 right-6 z-[9999] text-white bg-black/50 hover:bg-primary-600 rounded-full p-3 backdrop-blur-md transition-all duration-300 shadow-xl border border-white/20 group"
        aria-label="Close lightbox"
      >
        <svg className="w-8 h-8 group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>,
    document.body
  )
}

