import CourseCatalog from '@/components/course-catalog'
import { courses } from '@/content/site-data'
import { Eyebrow, Metric } from '@/components/ui'
export const metadata={title:'Zentiq Academy Courses'}
const categories=['All categories',...Array.from(new Set(courses.map(c=>c.category)))]
export default function CoursesPage(){return <main className="page-shell"><section className="inner-hero wrap"><Eyebrow>Learn with Zentiq Academy</Eyebrow><h1>Build skills for <span>real work.</span></h1><p>Practical technology courses taught by experienced professionals. Learn at your pace and apply each idea in a project.</p><div className="course-metrics"><Metric value="94.8%" label="Learner satisfaction" note="Based on course feedback"/><Metric value="18.4k" label="Active learners" note="Across our community"/><Metric value="4.9 ★" label="Average rating" note="Verified course reviews"/><Metric value="1:1" label="Mentor support" note="Guidance along the way"/></div></section><section className="wrap"><CourseCatalog courses={courses} categories={categories}/></section></main>}
