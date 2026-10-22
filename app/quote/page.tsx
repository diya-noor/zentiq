import LeadForm from '@/components/lead-form'
import { Eyebrow } from '@/components/ui'
export const metadata={title:'Get a Project Quote'}
export default function QuotePage(){return <main className="page-shell"><header className="inner-hero wrap"><Eyebrow>Project inquiry</Eyebrow><h1>Tell us what you’re <span>planning.</span></h1><p>Share a few details about your goals. We’ll follow up with questions and a practical next step.</p></header><section className="wrap"><LeadForm kind="quote"/></section></main>}
