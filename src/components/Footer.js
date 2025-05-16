import config from '@/config/config'
import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full bg-primary-50 py-2">
        <div className='text-center'>© {new Date().getFullYear()} {config.appName}. All Rights Reserved.</div>
        
    </footer>
  )
}
