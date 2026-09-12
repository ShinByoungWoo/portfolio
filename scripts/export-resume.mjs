import { writeFile } from 'node:fs/promises'
import { additionalCaseStudies, education, experienceBullets, featuredCaseStudies, profile, proofPoints, skillGroups } from '../src/data/portfolio.ts'

// The web resume and this Notion-ready draft use the same source data.
const lines = [
    `# ${profile.name} | ${profile.role}`,
    '',
    profile.resumeSummary,
    '',
    `- 이메일: ${profile.email}`,
    `- 전화: ${profile.phone}`,
    `- [GitHub](${profile.github})`,
    '',
    ...proofPoints.map(point => `- ${point.label}: ${point.value}`),
    '',
    '## 경력',
    '',
    `### ${profile.company} · ${profile.role}`,
    '',
    profile.period,
    '',
    profile.companyIntro,
    `회사 소개 출처: [CODMOS 공식 서비스 소개](${profile.companySource})`,
    '',
    ...experienceBullets.map(bullet => `- ${bullet}`),
    '',
    '## 주요 프로젝트',
    '',
]

for (const project of featuredCaseStudies) {
    lines.push(`### ${project.subtitle}`, '', project.period, '')
    if (project.scope) lines.push(project.scope, '')
    lines.push(...project.resumeBullets.slice(0, 2).map(bullet => `- ${bullet}`))
    lines.push('')
}

lines.push('## 추가 경험', '')
for (const project of additionalCaseStudies) lines.push(`- ${project.subtitle} (${project.period}): ${project.resumeBullets[0]}`)
lines.push('')

lines.push('## 기술', '')
for (const group of skillGroups) lines.push(`- ${group.category}: ${group.items.join(' · ')}`)
lines.push('', '## 학력', '')
for (const item of education) lines.push(`- ${item.school} · ${item.detail}`)
lines.push('')

await writeFile(new URL('../docs/resume-notion.md', import.meta.url), lines.join('\n'), 'utf8')
console.log('Generated docs/resume-notion.md from src/data/portfolio.ts')
