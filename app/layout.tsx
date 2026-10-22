import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import { SiteHeader, SiteFooter } from '@/components/site-chrome'

export const metadata: Metadata = {
  title: { default: 'Zentiq | AI, Software & IT Solutions + Zentiq Academy', template: '%s | Zentiq' },
  description: 'Zentiq builds AI solutions, software, mobile apps, and digital experiences, and offers practical technology courses through Zentiq Academy.',
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en"><body><SiteHeader />{children}<SiteFooter /></body></html>
}
