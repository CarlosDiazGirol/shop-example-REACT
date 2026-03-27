import { Link } from 'react-router-dom'

function NotFoundPage({ sprintPath }) {
  return (
    <section className="not-found-shell">
      <div className="not-found-layout">
        <div className="panel not-found-stage">
          <p className="eyebrow">404</p>
          <h2>La página que buscas no está disponible</h2>
          <p className="lead">
            Puede que el enlace haya cambiado, que el contenido ya no exista o que esta ruta no
            forme parte de la colección actual.
          </p>
          <Link to={`${sprintPath}/home`} className="button-link">
            Volver a home
          </Link>
        </div>

        <div className="panel not-found-note">
          <p className="spotlight-label">Store Lab</p>
          <h3>Una selección pensada para navegar con calma, descubrir producto y volver al punto de partida sin perder el hilo.</h3>
          <p className="support-text">
            Desde aquí puedes regresar a la home del sprint y seguir viendo la estructura general
            de la tienda.
          </p>
        </div>
      </div>
    </section>
  )
}

export default NotFoundPage
