'use client'

import { useState, useMemo, useEffect, useCallback } from 'react'
import ImageGallery from './ImageGallery'
import photosData from '@/data/photos.json'

const categories = [
  { value: 'all', label: 'All Categories' },
  { value: 'wedding', label: 'Wedding' },
  { value: 'travel', label: 'Travel' },
  { value: 'sports', label: 'Sports' },
  { value: 'party', label: 'Party & Events' },
  { value: 'indoor', label: 'Indoor' },
  { value: 'product', label: 'Product' },
  { value: 'portrait', label: 'Portrait' },
]

const PHOTOS_PER_PAGE = 12

export default function GalleryFilter() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [displayedCount, setDisplayedCount] = useState(PHOTOS_PER_PAGE)
  const [isLoading, setIsLoading] = useState(false)

  // Filter photos based on category and search query
  const filteredPhotos = useMemo(() => {
    let photos = photosData.photos

    // Filter by category
    if (selectedCategory !== 'all') {
      photos = photos.filter((photo) => photo.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      photos = photos.filter(
        (photo) =>
          photo.title.toLowerCase().includes(query) ||
          photo.description.toLowerCase().includes(query) ||
          photo.location.toLowerCase().includes(query) ||
          photo.category.toLowerCase().includes(query)
      )
    }

    return photos
  }, [selectedCategory, searchQuery])

  // Reset displayed count when filters change
  useEffect(() => {
    setDisplayedCount(PHOTOS_PER_PAGE)
  }, [selectedCategory, searchQuery])

  // Photos to display (for pagination/infinite scroll)
  const displayedPhotos = useMemo(() => {
    return filteredPhotos.slice(0, displayedCount)
  }, [filteredPhotos, displayedCount])

  // Check if there are more photos to load
  const hasMore = displayedCount < filteredPhotos.length

  // Load more photos
  const loadMore = useCallback(() => {
    if (isLoading || !hasMore) return
    
    setIsLoading(true)
    // Simulate loading delay for better UX
    setTimeout(() => {
      setDisplayedCount((prev) => prev + PHOTOS_PER_PAGE)
      setIsLoading(false)
    }, 300)
  }, [isLoading, hasMore])

  // Infinite scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.offsetHeight - 1000) {
        if (hasMore && !isLoading) {
          loadMore()
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasMore, isLoading, loadMore])

  return (
    <>
      {/* Search Bar */}
      <section className="mb-8">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search photos by title, description, location, or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 pl-12 border-2 border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-lg transition-all"
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-primary-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                aria-label="Clear search"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-6 py-2 rounded-lg transition-all font-medium ${
                selectedCategory === category.value
                  ? 'bg-primary-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600 border border-gray-200 hover:border-primary-300'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </section>

      {/* Results Count */}
      <section className="mb-6 text-center">
        <p className="text-gray-600">
          Showing <span className="font-semibold text-gray-900">{displayedPhotos.length}</span> of{' '}
          <span className="font-semibold text-gray-900">{filteredPhotos.length}</span> photos
          {searchQuery && (
            <span className="ml-2">
              for &quot;<span className="font-semibold text-gray-900">{searchQuery}</span>&quot;
            </span>
          )}
        </p>
      </section>

      {/* Photo Gallery */}
      <section>
        {displayedPhotos.length > 0 ? (
          <>
            <ImageGallery photos={displayedPhotos} columns={3} />
            
            {/* Load More Button / Infinite Scroll Indicator */}
            {hasMore && (
              <div className="mt-12 text-center">
                <button
                  onClick={loadMore}
                  disabled={isLoading}
                  className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-all font-semibold disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Loading...
                    </span>
                  ) : (
                    `Load More Photos (${filteredPhotos.length - displayedCount} remaining)`
                  )}
                </button>
                <p className="mt-4 text-sm text-gray-500">
                  Or scroll down to automatically load more photos
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-24 w-24 text-gray-400 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <p className="text-gray-600 text-lg mb-2">No photos found</p>
            <p className="text-gray-500">
              {searchQuery
                ? 'Try adjusting your search terms or category filter'
                : 'No photos available in this category'}
            </p>
            {(searchQuery || selectedCategory !== 'all') && (
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('all')
                }}
                className="mt-4 text-gray-900 hover:text-gray-700 font-semibold underline"
              >
                Clear all filters
              </button>
            )}
          </div>
        )}
      </section>
    </>
  )
}
