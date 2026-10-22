import ProjectBrowser from '@/components/project-browser'
import { projects } from '@/content/site-data'
import { Eyebrow } from '@/components/ui'
export const metadata={title:'Projects & Case Studies'}
export default function ProjectsPage(){return <main className="page-shell"><header className="inner-hero wrap"><Eyebrow>Selected work</Eyebrow><h1>Projects built around <span>real needs.</span></h1><p>Explore a selection of digital products and platforms shaped with our clients.</p></header><section className="wrap"><ProjectBrowser items={projects}/></section></main>}
