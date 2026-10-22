import Link from 'next/link'
import AuthForm from '@/components/auth-form'
import { Eyebrow } from '@/components/ui'
export const metadata={title:'Log in'}
export default function LoginPage(){return <main className="page-shell"><header className="inner-hero wrap"><Eyebrow>Welcome back</Eyebrow><h1>Log in to <span>Zentiq.</span></h1><p>Continue to your learning and project workspace.</p></header><section className="wrap"><AuthForm mode="login"/><p className="auth-switch">New to Zentiq? <Link href="/signup">Create an account</Link></p></section></main>}
