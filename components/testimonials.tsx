'use client'
import { useState } from 'react'
import { Icon } from '@/components/icons'
const items=[
  {quote:'The team helped us turn a complex idea into a platform our customers can use with confidence.',name:'Katherine Thorne',role:'Product Director, Atlas Systems',initials:'KT'},
  {quote:'The process was clear from the start. We had a strong product foundation and a team that understood our goals.',name:'Elena Rostova',role:'Engineering Lead',initials:'ER'},
  {quote:'The Academy gave our engineers the practical skills and structure to take on more ambitious work.',name:'Marcus Sterling',role:'Technology Manager',initials:'MS'},
]
export default function Testimonials(){const [active,setActive]=useState(0);const item=items[active];return <section className="testimonials wrap" aria-label="Client testimonials"><div className="section-top"><div><EyebrowText/><h2>Built together. Proven in practice.</h2></div><span className="rating"><Icon name="star" size={15}/> 4.9 / 5 client rating</span></div><article className="testimonial-slide" aria-live="polite"><div className="testimonial-stars" aria-label="5 out of 5 stars">{[1,2,3,4,5].map(n=><Icon name="star" size={16} key={n}/>)}</div><blockquote>“{item.quote}”</blockquote><div className="quote-author"><b>{item.initials}</b><div><strong>{item.name}</strong><small>{item.role}</small></div></div><div className="testimonial-controls"><button aria-label="Previous testimonial" onClick={()=>setActive((active+items.length-1)%items.length)}>←</button><span>{active+1} / {items.length}</span><button aria-label="Next testimonial" onClick={()=>setActive((active+1)%items.length)}>→</button></div></article></section>}
function EyebrowText(){return <div className="eyebrow"><span/>Client stories</div>}
