'use client'
import { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { projects } from '@/content/site-data'
type Project=typeof projects[number]
export default function ProjectBrowser({items}:{items:Project[]}){const [filter,setFilter]=useState('All');const categories=['All',...Array.from(new Set(items.map(p=>p.category)))];const shown=useMemo(()=>filter==='All'?items:items.filter(p=>p.category===filter),[filter,items]);return <><div className="filter-row" aria-label="Filter projects">{categories.map(c=><button key={c} className={c===filter?'active':''} onClick={()=>setFilter(c)} aria-pressed={c===filter}>{c}</button>)}</div><div className="content-grid">{shown.map(p=><article className="content-card project-tile" key={p.slug}><Link href={`/projects/${p.slug}`}><div className="detail-image"><Image src={`/${p.image}`} alt={p.alt} fill sizes="(max-width: 760px) 100vw, 33vw"/></div><span className="eyebrow project-kicker">{p.tag}</span><h2>{p.title}</h2><p>{p.text}</p><span className="text-link">View case study →</span></Link></article>)}</div></>}
