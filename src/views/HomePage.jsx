import { Link } from 'react-router-dom'

const CARDS = [
  {
    to: '/sprint-1',
    title: 'Sprint 1',
    text: 'Base de React con catálogo mock, componentes, props y rutas.',
  },
  {
    to: '/sprint-2',
    title: 'Sprint 2',
    text: 'Mismas pantallas, pero explicando que aquí entraría el fetch de datos.',
  },
  {
    to: '/sprint-3',
    title: 'Sprint 3',
    text: 'Pantallas visuales de login y registro para enseñar la navegación.',
  },
  {
    to: '/sprint-4',
    title: 'Sprint 4',
    text: 'Aplicación visual completa con todo el recorrido del cliente.',
  },
]

function HomePage() {
  return (
    <section className="stack-xl">
      <div className="hero-layout hero-stage">
        <div className="hero-copy">
          <p className="eyebrow">Preparado para Netlify</p>
          <h2>Una sola app para enseñar cada sprint con un look de tienda real.</h2>
          <p className="lead">
            Esta versión no implementa lógica real de login, compra ni estado global.
            Solo muestra pantallas, rutas y navegación para que el alumnado vea el flujo.
          </p>
          <div className="hero-actions">
            <Link to="/sprint-1" className="button-link">
              Empezar por sprint 1
            </Link>
            <Link to="/sprint-4" className="button-link secondary-link">
              Ver la app completa
            </Link>
          </div>
        </div>

        <div className="spotlight-card spotlight-editorial">
          <p className="spotlight-label">Visual sprint 4</p>
          <div className="spotlight-photo" />
          <div className="spotlight-copy">
            <h3>Catálogo, login, wishlist, carrito y checkout en una sola demo.</h3>
            <div className="spotlight-stats">
              <div>
                <span>4</span>
                <p>sprints visibles</p>
              </div>
              <div>
                <span>1</span>
                <p>navegación continua</p>
              </div>
              <div>
                <span>0</span>
                <p>lógica funcional</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-editorial-strip">
        <div className="editorial-card editorial-light">
          <p className="eyebrow">Enfoque</p>
          <h3>Visual, claro y enseñable desde el primer minuto.</h3>
        </div>
        <div className="editorial-card editorial-dark">
          <p className="eyebrow">Idea</p>
          <h3>Cada sprint tiene su propia portada y desde ahí entras en las pantallas que quieras enseñar.</h3>
        </div>
      </div>

      <div className="card-grid">
        {CARDS.map((card) => (
          <Link key={card.to} to={card.to} className="info-card">
            <span className="card-kicker">{card.title}</span>
            <h3>{card.text}</h3>
            <span className="card-link">Entrar</span>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default HomePage
