'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import videosData from '@/data/home_videos.json'
import VideoPlayer from './VideoPlayer'
import Skeleton from './Skeleton'

export default function VideographyPortfolio() {
  const [selectedVideo, setSelectedVideo] = useState<typeof videosData.videos[0] | null>(null)
  return (
    <section className="bg-primary-50 py-24">
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold mb-4 tracking-wide uppercase">
              Cinematic Films
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
              Motion & Emotion
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              Relive the moments with our high-end cinematic videography.
            </p>
          </div>
          <Link
            href="/videography"
            className="group flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 transition-colors"
          >
            View Film Gallery
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {/* Show 16 videos for 4x4 grid */}
          {/* Show 16 videos for 4x4 grid */}
          {[...videosData.videos, ...videosData.videos, ...videosData.videos].slice(0, 16).map((video, index) => (
            <VideoItem 
              key={`${video.id}-${index}`} 
              video={video} 
              onClick={() => setSelectedVideo(video)} 
            />
          ))}
        </div>
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => setSelectedVideo(null)}>
          <div className="max-w-6xl w-full" onClick={e => e.stopPropagation()}>
             <div className="relative">
                <VideoPlayer
                  video={selectedVideo}
                  onClose={() => setSelectedVideo(null)}
                />
             </div>
             <div className="mt-6 text-white text-center">
                <h2 className="text-2xl font-bold mb-2">{selectedVideo.title}</h2>
                <p className="text-gray-300 max-w-2xl mx-auto mb-4">{selectedVideo.description}</p>
                <div className="flex justify-center gap-6 text-sm text-gray-400 mb-6">
                   <span>📍 {selectedVideo.location}</span>
                   <span>📅 {new Date(selectedVideo.date).toLocaleDateString()}</span>
                   <span>⏱️ {selectedVideo.duration}</span>
                </div>
                <a 
                   href={selectedVideo.downloadUrl} 
                   download={`${selectedVideo.title.replace(/\s+/g, '-')}.mp4`}
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
      )}
    </section>
  )
}

function VideoItem({ video, onClick }: { video: typeof videosData.videos[0], onClick: () => void }) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div
       onClick={onClick}
       className="group relative block overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 aspect-video cursor-pointer bg-gray-200"
    >
       {isLoading && <Skeleton className="absolute inset-0 z-10" />}
       <Image
          src={video.thumbnail}
          alt={video.alt}
          fill
          className={`object-cover group-hover:scale-110 transition-all duration-700 ${
            isLoading ? 'scale-110 blur-xl grayscale' : 'scale-100 blur-0 grayscale-0'
          }`}
          sizes="(max-width: 768px) 50vw, 25vw"
          onLoad={() => setIsLoading(false)}
       />
       <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
       
       {/* Play Button */}
       <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/40">
             <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
             </svg>
          </div>
       </div>

       <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
          <p className="text-primary-300 text-sm font-bold uppercase tracking-wide mb-1 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              {video.category}
          </p>
          <p className="text-white text-xl font-bold leading-tight">{video.title}</p>
          <p className="text-gray-300 text-sm mt-1 line-clamp-1 opacity-80">{video.location}</p>
       </div>
    </div>
  )
}
