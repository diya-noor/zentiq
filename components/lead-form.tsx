'use client'
import { useState } from 'react'
import type { FormEvent } from 'react'

type Props={kind:'contact'|'quote'}
export default function LeadForm({kind}:Props){const [status,setStatus]=useState('');const isQuote=kind==='quote';function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();const form=e.currentTarget;if(!form.reportValidity()){setStatus('Check the highlighted fields and try again.');return}setStatus('Thank you — your message is ready. Our team will follow up shortly.');form.reset()}
return <form className="form-panel" onSubmit={submit} noValidate><div className="form-grid">
<label className="form-field">Name<input name="name" autoComplete="name" required minLength={2} placeholder="Your name"/></label>
<label className="form-field">Email<input name="email" type="email" autoComplete="email" required placeholder="you@company.com"/></label>
<label className="form-field">Phone<input name="phone" type="tel" autoComplete="tel" required={isQuote} placeholder="+92 300 000 0000"/></label>
<label className="form-field">Company<input name="company" autoComplete="organization" placeholder="Company name" required={isQuote}/></label>
{isQuote&&<><label className="form-field">Service needed<select name="service" required defaultValue=""><option value="" disabled>Select a service</option><option>AI solutions</option><option>Web application</option><option>Mobile app</option><option>Social media management</option><option>UI / UX design</option><option>Cloud & DevOps</option><option>Cybersecurity / IT</option><option>Custom software</option><option>Other</option></select></label><label className="form-field">Budget range<select name="budget" required defaultValue=""><option value="" disabled>Select a range</option><option>Under $5,000 USD</option><option>$5,000–$15,000 USD</option><option>$15,000–$50,000 USD</option><option>$50,000+ USD</option><option>Not sure yet</option></select></label><label className="form-field">Timeline<select name="timeline" required defaultValue=""><option value="" disabled>Select a timeline</option><option>Within 1 month</option><option>1–3 months</option><option>3–6 months</option><option>Flexible</option></select></label></>}
<label className="form-field full">{isQuote?'Project details':'How can we help?'}<textarea name="details" required minLength={10} placeholder="Tell us a little about what you need…"/></label>
</div><div className="form-actions"><button className="button" type="submit">{isQuote?'Send project inquiry':'Send message'}</button><span className="form-status" role="status" aria-live="polite">{status}</span></div><p className="form-note">Frontend form preview. Connect an email or CRM service to receive submissions.</p></form>}
