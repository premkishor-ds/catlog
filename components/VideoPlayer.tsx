'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Video {
  id: string
  title: string
  description: string
  category: string
  location: string
  thumbnail: string
  videoUrl: string
  duration: string
  alt: string
  downloadUrl: string
  date: string
}

interface VideoPlayerProps {
  video: Video
  onClose?: () => void
}

export default function VideoPlayer({ video, onClose }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = video.downloadUrl
    link.download = `${video.title.replace(/\s+/g, '-')}.mp4`
    link.click()
  }

  if (!isPlaying) {
    return (
      <div className="relative group cursor-pointer overflow-hidden rounded-lg aspect-video bg-black">
        <Image
          src={video.thumbnail}
          alt={video.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 80vw"
        />
        <div
          className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors"
          onClick={() => setIsPlaying(true)}
        >
          <div className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition-transform">
            <svg className="w-12 h-12 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
          {video.duration}
        </div>
        {onClose && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              onClose()
            }}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
            aria-label="Close video"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    )
  }

  return (
    <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
      <video
        src={video.videoUrl}
        controls
        autoPlay
        className="w-full h-full"
        onEnded={() => setIsPlaying(false)}
      />
      <div className="absolute bottom-4 left-4 right-4 text-white">
        <h3 className="text-lg font-semibold mb-1">{video.title}</h3>
        <p className="text-sm text-gray-300 mb-2">{video.description}</p>
        <button
          onClick={handleDownload}
          className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition-colors text-sm"
        >
          Download Video
        </button>
      </div>
    </div>
  )
}

