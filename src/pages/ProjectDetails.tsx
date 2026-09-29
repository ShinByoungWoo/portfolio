import { Link, Navigate, useParams } from 'react-router-dom'
import ProjectCaseStudy from '../components/projects/ProjectCaseStudy'
import { caseStudies } from '../data/portfolio'
import { useScrollReveal } from '../hooks/useScrollReveal'
import type { CaseStudy } from '../types'

export default function ProjectDetails() {
    const { projectId } = useParams()
    const project = caseStudies.find(item => item.id === projectId)
    return project ? <ProjectContent key={project.id} project={project} /> : <Navigate to="/" replace />
}

function ProjectContent({ project }: { project: CaseStudy }) {
    const ref = useScrollReveal()
    return (
        <>
            <nav aria-label="상세 페이지 메뉴" className="sticky top-0 z-40 border-b border-ink/20 bg-paper/95 px-5 backdrop-blur-md sm:px-8">
                <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between text-sm font-bold">
                    <Link to="/#work" className="focus-ring hover:text-accent">← 전체 작업</Link>
                    <Link to="/resume" className="focus-ring hover:text-accent">이력서 ↗</Link>
                </div>
            </nav>
            <main ref={ref} className="mx-auto max-w-[1264px] px-5 sm:px-8">
                <ProjectCaseStudy project={project} />
                <nav aria-label="다른 프로젝트" className="flex flex-wrap gap-3 py-10">
                    {caseStudies.filter(item => item.id !== project.id).map(item => (
                        <Link key={item.id} to={`/work/${item.id}`} className="focus-ring border border-ink/25 px-4 py-3 text-sm font-bold hover:border-accent hover:text-accent">{item.subtitle} ↗</Link>
                    ))}
                </nav>
            </main>
        </>
    )
}
