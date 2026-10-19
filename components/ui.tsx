import Link from 'next/link'
import type { ReactNode } from 'react'

export function Eyebrow({ children }: { children: ReactNode }) { return <div className="eyebrow"><span />{children}</div> }
export function Metric({ value, label, note }: { value: string; label: string; note: string }) { return <div className="metric"><strong>{value}</strong><b>{label}</b><span>{note}</span></div> }
export function Button({ href, children, secondary = false }: { href: string; children: ReactNode; secondary?: boolean }) { return <Link className={`button ${secondary ? 'button-secondary' : ''}`} href={href}>{children}</Link> }
export function SectionTitle({ kicker, title, text }: { kicker: string; title: string; text?: string }) { return <div className="section-title"><Eyebrow>{kicker}</Eyebrow><h2>{title}</h2>{text && <p>{text}</p>}</div> }
