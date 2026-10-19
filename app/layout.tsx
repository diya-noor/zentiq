import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import { SiteHeader, SiteFooter } from '@/components/site-chrome'

export const metadata: Metadata = {
  title: { default: 'Zentiq — Sovereign Technology Academy', template: '%s | Zentiq' },
  description: 'Elite technical education and sovereign digital engineering for the systems shaping tomorrow.',
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en"><body><SiteHeader />{children}<SiteFooter /></body></html>
}
