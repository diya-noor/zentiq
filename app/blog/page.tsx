import Image from 'next/image'
import Link from 'next/link'
import { posts } from '@/content/site-data'
import { Eyebrow } from '@/components/ui'
export const metadata={title:'Zentiq Blog'}
export default function BlogPage(){return <main className="page-shell"><header className="inner-hero wrap"><Eyebrow>Ideas from Zentiq</Eyebrow><h1>Notes on building <span>what’s next.</span></h1><p>Practical perspectives on technology, product work, and learning.</p></header><section className="wrap content-grid">{posts.map(p=><article className="content-card" key={p.slug}><Link href={`/blog/${p.slug}`}><div className="detail-image"><Image src={`/${p.image}`} alt={p.alt} fill sizes="(max-width:760px) 100vw, 33vw"/></div><div className="post-meta">{p.category} · {p.date}</div><h2>{p.title}</h2><p>{p.excerpt}</p><span className="text-link">Read article →</span></Link></article>)}</section></main>}
