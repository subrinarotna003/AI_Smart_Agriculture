import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import AppShell from '@/layout/AppShell'
import { Container } from '@/components/Container'
import { serviceSegments } from '@/data/serviceSegments'
import '@/styles/harvest.css'

export default function DashboardPage() {
  return (
    <AppShell>
      <Container className="harvest-dashboard">
        <section className="harvest-banner" aria-labelledby="farm-title">
          <div className="harvest-scene">
            <img
              className="harvest-photo"
              src="/media/farmer-tending-greens.jpg"
              alt="A farmer in a woven conical hat tending rows of bright green vegetables."
              fetchPriority="high"
            />
            <div className="harvest-foreground" aria-hidden="true" />
          </div>
          <nav className="harvest-services" aria-label="Farming services">
            {serviceSegments.map(({ id, shortTitle, icon: Icon }) => (
              <Link to={`/app/${id}`} key={id}>
                <Icon size={19} aria-hidden="true" />
                <span>{shortTitle}</span>
              </Link>
            ))}
          </nav>
          <div className="harvest-caption">
            <h1 id="farm-title">Farm Dashboard</h1>
            <p>
              Check leaves for signs of disease and find crops suited to your soil.
              <br />
              Estimate your harvest using weather and past yields.
            </p>
          </div>
        </section>
        <section className="harvest-guide" aria-label="Service guide">
          {serviceSegments.map(({ id, title, description, icon: Icon }) => (
            <Link key={id} to={`/app/${id}`}>
              <Icon size={24} aria-hidden="true" />
              <h2>{title}</h2>
              <p>{description}</p>
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          ))}
        </section>
      </Container>
    </AppShell>
  )
}
