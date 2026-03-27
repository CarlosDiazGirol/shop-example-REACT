import { NavLink, Outlet, useLocation } from 'react-router-dom'

function AppShell() {
  const { pathname } = useLocation()
  const sprintMatch = pathname.match(/^\/(sprint-\d+)/)
  const sprintPath = sprintMatch ? `/${sprintMatch[1]}` : null
  const isNotFoundPage = pathname.endsWith('/not-found')

  const menuBySprint = {
    '/sprint-1': [
      { to: '/sprint-1/home', label: 'Home' },
      { to: '/sprint-1/products', label: 'Catálogo' },
    ],
    '/sprint-2': [
      { to: '/sprint-2/home', label: 'Home' },
      { to: '/sprint-2/products', label: 'Catálogo' },
    ],
    '/sprint-3': [
      { to: '/sprint-3/home', label: 'Home' },
      { to: '/sprint-3/products', label: 'Catálogo' },
      { to: '/sprint-3/login', label: 'Login' },
      { to: '/sprint-3/register', label: 'Registro' },
    ],
    '/sprint-4': [
      { to: '/sprint-4/home', label: 'Home' },
      { to: '/sprint-4/products', label: 'Catálogo' },
      { to: '/sprint-4/cart', label: 'Cesta' },
      { to: '/sprint-4/wishlist', label: 'Wishlist' },
      { to: '/sprint-4/profile', label: 'Perfil' },
    ],
  }

  const menu = sprintPath && !isNotFoundPage ? menuBySprint[sprintPath] || [] : []

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="brand-block">
          <h1>Store Lab</h1>
        </div>
        {menu.length > 0 ? (
          <nav className="topnav">
            {menu.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        ) : null}
      </header>

      <main className="page-shell">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <div>
            <p className="footer-brand">Store Lab</p>
            <p className="footer-copy">
              Colección visual para explorar catálogo, producto y navegación de tienda.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AppShell
