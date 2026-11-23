import { Link, useLocation } from 'react-router-dom'
import { History, MessageCircle, User, Sprout, FileText, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { serviceSegments } from '@/data/serviceSegments'
import '@/styles/workspace.css'

const utilityLinks = [
  { label: 'History', icon: History, to: '/app/history' },
  { label: 'Support', icon: MessageCircle, to: '/app/assistant' },
  { label: 'Profile', icon: User, to: '/app/profile' },
]

export default function AppShell({ children, variant = 'sidebar', showFooter = true, contentClassName }) {
  const { pathname } = useLocation()
  const dashboardActive = pathname === '/' || pathname === '/app'
  if (variant === 'minimal') {
    return <div className="app-root min-h-screen bg-background text-on-surface font-sans"><header className="workspace-brandbar"><Link className="workspace-brand" to="/"><Sprout size={26} /> AI Smart Agriculture</Link><Link to="/app" aria-label="Close"><X size={22} /></Link></header><main>{children}</main></div>
  }
  return (
    <div className="app-root workspace-root">
      <header className="workspace-header">
        <div className="workspace-brandbar">
          <Link className="workspace-brand" to="/"><span className="workspace-brand-icon"><Sprout size={23} /></span><span>AI Smart Agriculture</span></Link>
          <nav className="workspace-utility-nav" aria-label="Account and support">{utilityLinks.map(({ label, icon: Icon, to }) => <Link key={to} to={to} aria-current={pathname.startsWith(to) ? 'page' : undefined}><Icon size={17} /><span>{label}</span></Link>)}</nav>
          <nav className="workspace-page-links" aria-label="Main pages"><Link to="/project-summary" aria-current={pathname === '/project-summary' ? 'page' : undefined}><FileText size={16} /> Project Summary</Link></nav>
        </div>
        {!dashboardActive && <div className="workspace-navrow">
          <nav className="workspace-service-nav" aria-label="Farming services">
            {serviceSegments.map(({ id, shortTitle, icon: Icon }) => <Link key={id} to={`/app/${id}`} aria-current={pathname.startsWith(`/app/${id}`) ? 'page' : undefined}><Icon size={18} /><span>{shortTitle}</span></Link>)}
          </nav>

        </div>}
      </header>
      <main className={cn('workspace-main', contentClassName)}>{children}</main>
      {showFooter && <footer className="workspace-footer"><Link to="/"><Sprout size={18} /> AI Smart Agriculture</Link><p>© 2026 · Thoughtful decisions, from leaf to harvest.</p><Link to="/project-summary">About the project</Link></footer>}
    </div>
  )
}
