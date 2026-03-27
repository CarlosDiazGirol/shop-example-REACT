import { Link } from 'react-router-dom'

function SprintLandingPage({ sprintPath, sprint, title, description, links, note }) {
  return (
    <section className="stack-xl">
      <div className="panel sprint-hero">
        <div className="sprint-copy">
          <p className="eyebrow">{sprint}</p>
          <h2>{title}</h2>
          <p className="lead">{description}</p>
          {note ? <p className="support-text">{note}</p> : null}
        </div>

        <div className="sprint-side-note">
          <p className="spotlight-label">Qué se ve aquí</p>
          <h3>Pantallas, navegación y estructura visual listas para enseñar.</h3>
        </div>
      </div>

      <div className="link-row sprint-links">
        {links.map((link) => (
          <Link key={link.to} to={link.to} className="button-link">
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  )
}

export default SprintLandingPage
