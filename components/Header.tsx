'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import siteData from '@/data/site.json'

export default function Header() {
  const categories = [
    { name: 'Wedding', slug: 'wedding', icon: '💍' },
    { name: 'Travel', slug: 'travel', icon: '✈️' },
    { name: 'Sports', slug: 'sports', icon: '⚽' },
    { name: 'Party & Events', slug: 'party', icon: '🎉' },
    { name: 'Indoor', slug: 'indoor', icon: '🏠' },
    { name: 'Product', slug: 'product', icon: '📦' },
    { name: 'Portrait', slug: 'portrait', icon: '📸' },
  ]

  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true
    if (path !== '/' && pathname?.startsWith(path)) return true
    return false
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg border-b-2 border-primary-200">
      {/* Top Bar */}
      <div className="bg-primary-700 text-white text-xs py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href={`tel:${siteData.photographer.location.phone}`} className="hover:text-white transition-colors flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {siteData.photographer.location.phone}
            </a>
            <span className="hidden sm:inline opacity-50">|</span>
            <a href={`mailto:${siteData.photographer.location.email}`} className="hover:text-white transition-colors hidden sm:flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {siteData.photographer.location.email}
            </a>
          </div>
          <div className="text-white/90">
            📍 {siteData.photographer.location.city}, {siteData.photographer.location.state}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-primary-700 rounded-lg flex items-center justify-center transform group-hover:rotate-6 transition-transform shadow-md">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                {siteData.photographer.businessName}
              </div>
              <div className="text-xs text-gray-500 font-medium">Professional Photography</div>
            </div>
          </Link>
          
          <div className="hidden lg:flex items-center space-x-1">
            <Link 
              href="/" 
              className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                isActive('/') 
                  ? 'text-primary-800 bg-primary-50 ring-1 ring-primary-200' 
                  : 'text-gray-900 hover:text-primary-700 hover:bg-primary-50'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </Link>
            <div className="relative group">
              <button 
                 className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                  isActive('/photography') 
                    ? 'text-primary-800 bg-primary-50 ring-1 ring-primary-200' 
                    : 'text-gray-900 hover:text-primary-700 hover:bg-primary-50'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Photography
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border-2 border-primary-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-2">
                  {categories.map((category) => (
                    <Link
                      key={category.slug}
                      href={`/photography/${category.slug}`}
                      className="block px-4 py-3 text-sm text-gray-900 hover:bg-primary-50 hover:text-primary-700 transition-all flex items-center gap-3 group/item"
                    >
                      <span className="text-lg">{category.icon}</span>
                      <span className="group-hover/item:translate-x-1 transition-transform">{category.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link 
              href="/videography" 
              className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                isActive('/videography') 
                  ? 'text-primary-800 bg-primary-50 ring-1 ring-primary-200' 
                  : 'text-gray-900 hover:text-primary-700 hover:bg-primary-50'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Videography
            </Link>
            <Link 
              href="/gallery" 
              className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                isActive('/gallery') 
                  ? 'text-primary-800 bg-primary-50 ring-1 ring-primary-200' 
                  : 'text-gray-900 hover:text-primary-700 hover:bg-primary-50'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Gallery
            </Link>
            <Link 
              href="/about" 
              className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                isActive('/about') 
                  ? 'text-primary-800 bg-primary-50 ring-1 ring-primary-200' 
                  : 'text-gray-900 hover:text-primary-700 hover:bg-primary-50'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              About
            </Link>
            <Link 
              href="/contact" 
              className={`ml-2 px-6 py-2 rounded-lg font-semibold flex items-center gap-2 transform hover:scale-105 min-h-[44px] transition-all shadow-lg hover:shadow-xl ${
                isActive('/contact')
                  ? 'bg-cta-600 text-white' 
                  : 'bg-cta-500 text-white hover:bg-cta-600'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Contact
            </Link>
          </div>

          <button className="lg:hidden text-gray-700 p-2 hover:bg-primary-50 rounded-lg transition-colors" aria-label="Open mobile menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}
