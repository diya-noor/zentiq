import Link from 'next/link'

const nav = [
  ['Home', '/'], ['Services', '/services'], ['Courses', '/courses'], ['Projects', '/#work'], ['About', '/#about'], ['Blog', '/#insights'], ['Contact', '/#contact'],
]

export function SiteHeader() {
  return <header className="site-header"><div className="nav-wrap">
    <Link className="wordmark" href="/"><span className="brand-glyph">Z</span><span>ZENTIQ</span></Link>
    <nav className="main-nav">{nav.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}</nav>
    <div className="nav-actions"><Link className="nav-login" href="/dashboard">Log in</Link><Link className="button button-small" href="/courses">Get a free quote</Link><Link className="user-dot" href="/dashboard" aria-label="Student dashboard">A</Link></div>
  </div></header>
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="footer-main wrap"><div className="footer-about"><Link className="wordmark" href="/"><span className="brand-glyph">Z</span><span>ZENTIQ</span></Link><p>Sovereign engineering for a more intelligent world. We build advanced technology architectures and help exceptional people build them.</p><small>◉ &nbsp;CODE SYSTEMS. SOVEREIGN SOUL.</small></div><div className="footer-links"><b>Quick links</b><Link href="/services">Services</Link><Link href="/courses">Academy</Link><Link href="/#work">Portfolio</Link><Link href="/#about">About us</Link><Link href="/dashboard">Dashboard</Link></div><div className="footer-news"><b>Intelligence dispatch</b><p>Receive sovereign intelligence, engineering patterns, and academy insights.</p><form action="#"><input type="email" placeholder="Your email address" aria-label="Your email address"/><button aria-label="Subscribe">Join</button></form></div></div><div className="footer-bottom wrap"><span>© 2025 Zentiq Corp. All sovereign rights reserved.</span><span>◉ &nbsp;◎ &nbsp;✣ &nbsp;◈</span></div></footer>
}
