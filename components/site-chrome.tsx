'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { Icon } from '@/components/icons'

const nav = [
  ['Home', '/'], ['Services', '/services'], ['Courses', '/courses'],
  ['Projects', '/projects'], ['About', '/about'], ['Blog', '/blog'], ['Contact', '/contact'],
] as const

function Brand() {
  return <Link className="wordmark" href="/" aria-label="Zentiq home"><span className="brand-glyph" aria-hidden="true">Z</span><span>ZENTIQ</span></Link>
}

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  return <header className="site-header"><div className="nav-wrap">
    <Brand />
    <button className="menu-toggle" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}><Icon name={open ? 'close' : 'menu'} size={20}/></button>
    <nav className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">{nav.map(([label, href]) => <Link key={href} href={href} aria-current={pathname === href || (href !== '/' && pathname.startsWith(href)) ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</Link>)}</nav>
    <div className="nav-actions"><Link className="nav-login" href="/login">Log in</Link><Link className="button button-small" href="/quote">Get a free quote <Icon name="arrow" size={14}/></Link></div>
  </div></header>
}

export function SiteFooter() {
  const [status, setStatus] = useState('')
  function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); const form = event.currentTarget
    if (!form.reportValidity()) { setStatus('Please enter a valid email address.'); return }
    setStatus('Thanks for subscribing. You’re on the list.'); form.reset()
  }
  return <footer className="site-footer"><div className="footer-main wrap">
    <div className="footer-about"><Brand/><p>Thoughtful technology for ambitious teams. We build AI, software, and digital experiences, and teach the skills behind them.</p><small>Technology built with care.</small><div className="footer-social"><a href="https://www.linkedin.com/" aria-label="LinkedIn"><Icon name="users" size={16}/></a><a href="https://www.instagram.com/" aria-label="Instagram"><Icon name="sparkles" size={16}/></a><a href="https://github.com/" aria-label="GitHub"><Icon name="code" size={16}/></a></div></div>
    <div className="footer-links"><b>Explore</b><Link href="/services">Services</Link><Link href="/projects">Projects</Link><Link href="/courses">Zentiq Academy</Link><Link href="/about">About us</Link><Link href="/contact">Contact</Link></div>
    <div className="footer-contact"><b>Get in touch</b><a href="mailto:hello@zentiq.example">hello@zentiq.example</a><a href="tel:+923000000000">+92 300 000 0000</a><span>Islamabad, Pakistan</span><small>Sample contact details — replace before launch.</small></div>
    <div className="footer-news"><b>Notes from Zentiq</b><p>Occasional product, engineering, and learning updates.</p><form onSubmit={subscribe}><label className="sr-only" htmlFor="newsletter-email">Email address</label><input id="newsletter-email" name="email" type="email" placeholder="Your email address" required/><button aria-label="Subscribe">Join</button></form><span aria-live="polite">{status}</span></div>
  </div><div className="footer-bottom wrap"><span>© {new Date().getFullYear()} Zentiq. All rights reserved.</span><span>Made for what’s next <Icon name="arrow" size={13}/></span></div></footer>
}
