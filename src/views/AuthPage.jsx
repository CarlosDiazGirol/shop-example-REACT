import { Link } from 'react-router-dom'

function AuthPage({ sprintPath, type }) {
  const isLogin = type === 'login'

  return (
    <section className="auth-layout">
      <div className="auth-showcase">
        <div className="auth-editorial">
          <p className="eyebrow">Store Lab</p>
          <h2>{isLogin ? 'Accede a tu cuenta' : 'Crear una nueva cuenta'}</h2>
          <p className="lead">
            Gestiona tus pedidos, guarda favoritos y accede a una experiencia más personalizada dentro de la tienda.
          </p>
        </div>

        <div className="panel auth-panel">
          <form className="auth-form">
            {!isLogin ? (
              <label>
                Nombre
                <input type="text" placeholder="Tu nombre" />
              </label>
            ) : null}

            <label>
              Email
              <input type="email" placeholder="correo@ejemplo.com" />
            </label>

            <label>
              Contraseña
              <input type="password" placeholder="********" />
            </label>

            {!isLogin ? (
              <label>
                Repetir contraseña
                <input type="password" placeholder="********" />
              </label>
            ) : null}

            <button type="button" className="button-link submit-button">
              {isLogin ? 'Entrar' : 'Registrarse'}
            </button>
          </form>

          <div className="switch-row">
            {isLogin ? (
              <Link to={`${sprintPath}/register`} className="text-link">
                Crear cuenta
              </Link>
            ) : (
              <Link to={`${sprintPath}/login`} className="text-link">
                Ya tengo cuenta
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AuthPage
