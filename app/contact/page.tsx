import LeadForm from '@/components/lead-form'
import { Eyebrow } from '@/components/ui'
import { Icon } from '@/components/icons'
export const metadata={title:'Contact Zentiq'}
export default function ContactPage(){return <main className="page-shell"><header className="inner-hero wrap"><Eyebrow>Contact</Eyebrow><h1>Let’s start a <span>conversation.</span></h1><p>Ask about a project, a course, or how our team can support your goals.</p></header><section className="wrap"><div className="info-row"><a href="mailto:hello@zentiq.example"><Icon name="mail"/><div><strong>Email</strong><p>hello@zentiq.example</p></div></a><a href="tel:+923000000000"><Icon name="phone"/><div><strong>Phone</strong><p>+92 300 000 0000</p></div></a><div><Icon name="map"/><div><strong>Location</strong><p>Islamabad, Pakistan</p></div></div></div><p className="form-note">Sample contact details — replace with verified business details before launch.</p><LeadForm kind="contact"/></section></main>}
