'use client'

import { useState } from 'react'
import VideoPlayer from './VideoPlayer'

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

interface VideoGridProps {
  videos: Video[]
}

export default function VideoGrid({ videos }: VideoGridProps) {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="space-y-2">
            <VideoPlayer
              video={video}
              onClose={() => setSelectedVideo(null)}
            />
            <div>
              <p className="font-semibold text-lg">{video.title}</p>
              <p className="text-sm text-gray-600">{video.location}</p>
            </div>
          </div>
        ))}
      </div>
      
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <div className="max-w-6xl w-full">
            <VideoPlayer
              video={selectedVideo}
              onClose={() => setSelectedVideo(null)}
            />
          </div>
        </div>
      )}
    </>
  )
}

