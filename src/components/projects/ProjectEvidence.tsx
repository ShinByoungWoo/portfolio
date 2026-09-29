import AdminDemo from './AdminDemo'
import CmsPlaygroundDemo from './CmsPlaygroundDemo'
import LmsDemo from './LmsDemo'

export default function ProjectEvidence({ projectId }: { projectId: string }) {
    switch (projectId) {
        case 'product-system': return <LmsDemo />
        case 'admin-operations': return <AdminDemo />
        case 'content-pipeline': return <CmsPlaygroundDemo />
        default: return null
    }
}
