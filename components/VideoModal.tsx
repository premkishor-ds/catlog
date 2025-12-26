'use client'

import { useState, useEffect } from 'react'
import VideoPlayer from './VideoPlayer'

interface Video {
  id: string
  title: string
  description: string
  category: string
  location: string
  thumbnail: string
  url: string
  videoUrl?: string
  alt: string
  duration: string
  date: string
  downloadUrl: string
}

interface VideoModalProps {
  video: Video
  onClose: () => void
}

export default function VideoModal({ video, onClose }: VideoModalProps) {
  const [isClosing, setIsClosing] = useState(false)

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
        onClose()
    }, 300)
  }

  return (
    <div 
        className={`fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 ${isClosing ? 'animate-zoom-out' : 'animate-zoom-in'}`} 
        onClick={handleClose}
    >
      <div className="max-w-6xl w-full" onClick={e => e.stopPropagation()}>
         <div className="relative">
            <VideoPlayer
              video={video}
              onClose={handleClose}
            />
         </div>
         <div className="mt-6 text-white text-center">
            <h2 className="text-2xl font-bold mb-2">{video.title}</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-4">{video.description}</p>
            <div className="flex justify-center gap-6 text-sm text-gray-400 mb-6">
               <span>📍 {video.location}</span>
               <span>📅 {new Date(video.date).toLocaleDateString()}</span>
               <span>⏱️ {video.duration}</span>
            </div>
            <a 
               href={video.downloadUrl} 
               download={`${video.title.replace(/\s+/g, '-')}.mp4`}
               className="inline-flex items-center gap-2 bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors font-semibold"
               onClick={(e) => e.stopPropagation()}
            >
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
               </svg>
               Download Video
            </a>
         </div>
      </div>
    </div>
  )
}
