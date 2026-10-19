import { Window } from '../components/Window'
import { BriefBuilder } from '../components/BriefBuilder'
import { Team } from './Home'
import { CASE_STUDIES, EMAIL, PAGES, ROUTES } from '../data'

function CaseStudyCard({ study }: { study: (typeof CASE_STUDIES)[number] }) {
  return (
    <a className="card case-link" href={'#' + study.id}>
      <span className="tag">{study.eyebrow.split('·')[0].trim()}</span>
      <h3>{study.title}</h3>
      <p>{study.summary}</p>
      <div className="mini-meta">{study.meta}</div>
    </a>
  )
}

export function Portfolio() {
  return (
    <Window file="portfolio.tsx" tone="b">
      <h1 className="sm">Portfolio</h1>
      <p className="lead">Selected case studies and concept critiques that turn product friction into clearer design decisions.</p>
      <div className="grid study-grid">{CASE_STUDIES.map(study => <CaseStudyCard key={study.id} study={study} />)}</div>
      <p className="note">Need a custom build? <a href="#contact"><b>Book a call.</b></a></p>
    </Window>
  )
}

export function CaseStudy({ id }: { id: string }) {
  const study = CASE_STUDIES.find(s => s.id === id)
  if (!study) return null
  return (
    <Window file={study.file} tone={study.tone}>
      <article className="case-study">
        <p className="eyebrow">{study.eyebrow}</p>
        <h1>{study.title}</h1>
        <p className="lead">{study.summary}</p>
        <p className="meta">{study.meta}</p>
        <div className="case-metrics">
          {study.metrics.map(m => (
            <div key={m.label} className="metric-card">
              <strong>{m.value}</strong>
              <span>{m.label}</span>
            </div>
          ))}
        </div>

        <section>
          <h2>What’s actually going wrong</h2>
          {study.issues.map(issue => (
            <div key={issue.title} className="issue-card">
              <h3>{issue.title} <span className="chip">{issue.tag}</span></h3>
              <p>{issue.text}</p>
            </div>
          ))}
        </section>

        <blockquote className="pull">“{study.quote}”</blockquote>

        <section>
          <h2>How we’d fix it</h2>
          <div className="fix-grid">
            {study.fixes.map(fix => (
              <div key={fix.title} className="fix-card">
                <h3>{fix.title}</h3>
                <p>{fix.body}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="cta-row">
          <a className="btn" href="#portfolio">Back to portfolio →</a>
          <a className="btn alt" href="#contact">Build something similar</a>
        </div>
      </article>
    </Window>
  )
}

export function Info({ id }: { id: string }) {
  if (id === 'portfolio') return <Portfolio />
  if (id === 'zara' || id === 'huffpost') return <CaseStudy id={id} />

  const p = PAGES[id], r = ROUTES.find(x => x.id === id)!
  return (
    <Window file={r.file} tone={p.tone}>
      <h1 className="sm">{p.title}</h1><p className="lead">{p.body}</p>
      {p.cards && <div className="grid">{p.cards.map(c => <div key={c.t} className="card"><span className="tag">{c.tag}</span><h3>{c.t}</h3><p>{c.d}</p></div>)}</div>}
      {p.cta && <p><a className="btn" href={p.cta.href}>{p.cta.label}</a></p>}
    </Window>
  )
}
export function About() {
  return <Window file="about.md" tone="y"><h1 className="sm">About</h1><p className="lead">Aetheria is two co-founders building custom websites, stores, and SaaS MVPs.</p><Team /></Window>
}
export function Contact() {
  return (
    <Window file="contact.tsx" tone="g">
      <h1 className="sm">Book a call</h1>
      <p className="lead">Build a quick brief below and we’ll set up an alignment call. Nothing is sent until you press Send.</p>
      <BriefBuilder />
      <p className="note">Prefer plain email? <a href={'mailto:' + EMAIL}><b>{EMAIL}</b></a></p>
    </Window>
  )
}
