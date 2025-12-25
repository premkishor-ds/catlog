'use client'

import { useEffect } from 'react'

export default function SWRegistration() {
  useEffect(() => {
    if ('serviceWorker' in navigator && window.location.protocol === 'https:') {
      window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').catch(function(err) {
          // Service worker registration failed silently
        })
      })
    }
  }, [])

  return null
}
