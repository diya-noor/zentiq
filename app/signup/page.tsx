import Link from 'next/link'
import AuthForm from '@/components/auth-form'
import { Eyebrow } from '@/components/ui'
export const metadata={title:'Create an Account'}
export default function SignupPage(){return <main className="page-shell"><header className="inner-hero wrap"><Eyebrow>Join Zentiq Academy</Eyebrow><h1>Create your <span>account.</span></h1><p>Set up a learner profile to keep track of your courses.</p></header><section className="wrap"><AuthForm mode="signup"/><p className="auth-switch">Already have an account? <Link href="/login">Log in</Link></p></section></main>}
