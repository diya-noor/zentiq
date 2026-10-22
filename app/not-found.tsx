import Link from 'next/link'
import { Button } from '@/components/ui'
export default function NotFound(){return <main className="not-found page-shell"><p className="eyebrow">404 · Page not found</p><h1>We can’t find that page.</h1><p>The link may be out of date, or the page may have moved.</p><Button href="/">Return to homepage</Button><p><Link href="/contact">Contact our team</Link></p></main>}
