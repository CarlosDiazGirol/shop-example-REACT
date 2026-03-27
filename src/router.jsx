import { createBrowserRouter } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import AppShell from './ui/AppShell'
import HomePage from './views/HomePage'
import SprintLandingPage from './views/SprintLandingPage'
import ProductListPage from './views/ProductListPage'
import ProductDetailPage from './views/ProductDetailPage'
import AuthPage from './views/AuthPage'
import FullStorePage from './views/FullStorePage'
import StoreHomePage from './views/StoreHomePage'
import NotFoundPage from './views/NotFoundPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'sprint-1',
        element: (
          <SprintLandingPage
            sprintPath="/sprint-1"
            sprint="Sprint 1"
            title="En este sprint tendremos la base visual de la tienda"
            description="En este sprint tendremos una home, un catálogo de productos, la ficha de producto y una página 404. La idea es construir la base del proyecto y entender la navegación entre páginas. Navega por las páginas para ver cómo pueden quedar."
            links={[
              { to: '/sprint-1/home', label: 'Ver home' },
              { to: '/sprint-1/products', label: 'Ver catálogo' },
              { to: '/sprint-1/products/aurora-bag', label: 'Ver producto' },
              { to: '/sprint-1/not-found', label: 'Ver 404' },
            ]}
          />
        ),
      },
      { path: 'sprint-1/home', element: <StoreHomePage sprintPath="/sprint-1" /> },
      { path: 'sprint-1/products', element: <ProductListPage sprintPath="/sprint-1" /> },
      { path: 'sprint-1/products/:id', element: <ProductDetailPage sprintPath="/sprint-1" /> },
      { path: 'sprint-1/not-found', element: <NotFoundPage sprintPath="/sprint-1" /> },
      { path: 'sprint-1/*', element: <Navigate to="/sprint-1/not-found" replace /> },
      {
        path: 'sprint-2',
        element: (
          <SprintLandingPage
            sprintPath="/sprint-2"
            sprint="Sprint 2"
            title="En este sprint mantenemos la misma base visual"
            description="En este sprint partimos de la misma home, el mismo catálogo, la misma ficha de producto y la misma página 404 del sprint 1. Lo importante ahora es conectar esa base visual con el backend que ya tenemos creado en http://localhost:3000."
            note="A nivel visual casi no cambia nada. El cambio real sería conectar los datos de la interfaz con la API."
            links={[
              { to: '/sprint-2/home', label: 'Ver home' },
              { to: '/sprint-2/products', label: 'Ver catálogo' },
              { to: '/sprint-2/products/aurora-bag', label: 'Ver producto' },
              { to: '/sprint-2/not-found', label: 'Ver 404' },
            ]}
          />
        ),
      },
      { path: 'sprint-2/home', element: <StoreHomePage sprintPath="/sprint-2" /> },
      { path: 'sprint-2/products', element: <ProductListPage sprintPath="/sprint-2" /> },
      { path: 'sprint-2/products/:id', element: <ProductDetailPage sprintPath="/sprint-2" /> },
      { path: 'sprint-2/not-found', element: <NotFoundPage sprintPath="/sprint-2" /> },
      { path: 'sprint-2/*', element: <Navigate to="/sprint-2/not-found" replace /> },
      {
        path: 'sprint-3',
        element: (
          <SprintLandingPage
            sprintPath="/sprint-3"
            sprint="Sprint 3"
            title="En este sprint añadimos acceso de usuario"
            description="En este sprint seguimos partiendo de la base del sprint 1: home, catálogo, ficha de producto y 404. A partir de ahí añadimos la parte visual de login y registro de usuarios."
            links={[
              { to: '/sprint-3/home', label: 'Ver home' },
              { to: '/sprint-3/products', label: 'Ver catálogo' },
              { to: '/sprint-3/products/aurora-bag', label: 'Ver producto' },
              { to: '/sprint-3/login', label: 'Ver login' },
              { to: '/sprint-3/register', label: 'Ver registro' },
              { to: '/sprint-3/not-found', label: 'Ver 404' },
            ]}
          />
        ),
      },
      { path: 'sprint-3/home', element: <StoreHomePage sprintPath="/sprint-3" /> },
      { path: 'sprint-3/products', element: <ProductListPage sprintPath="/sprint-3" /> },
      { path: 'sprint-3/products/:id', element: <ProductDetailPage sprintPath="/sprint-3" /> },
      { path: 'sprint-3/login', element: <AuthPage sprintPath="/sprint-3" type="login" /> },
      { path: 'sprint-3/register', element: <AuthPage sprintPath="/sprint-3" type="register" /> },
      { path: 'sprint-3/not-found', element: <NotFoundPage sprintPath="/sprint-3" /> },
      { path: 'sprint-3/*', element: <Navigate to="/sprint-3/not-found" replace /> },
      {
        path: 'sprint-4',
        element: (
          <SprintLandingPage
            sprintPath="/sprint-4"
            sprint="Sprint 4"
            title="En este sprint vemos la aplicación visual completa"
            description="En este sprint seguimos usando la misma base visual construida desde el sprint 1 y añadimos el resto de pantallas para ver el recorrido completo del cliente: login, registro, wishlist, carrito, perfil, checkout y 404."
            links={[
              { to: '/sprint-4/home', label: 'Ver home' },
              { to: '/sprint-4/products', label: 'Ver catálogo' },
              { to: '/sprint-4/products/aurora-bag', label: 'Ver producto' },
              { to: '/sprint-4/login', label: 'Ver login' },
              { to: '/sprint-4/register', label: 'Ver registro' },
              { to: '/sprint-4/wishlist', label: 'Ver wishlist' },
              { to: '/sprint-4/cart', label: 'Ver carrito' },
              { to: '/sprint-4/profile', label: 'Ver perfil' },
              { to: '/sprint-4/checkout-success', label: 'Ver checkout' },
              { to: '/sprint-4/not-found', label: 'Ver 404' },
            ]}
          />
        ),
      },
      { path: 'sprint-4/home', element: <FullStorePage sprintPath="/sprint-4" screen="home" /> },
      { path: 'sprint-4/products', element: <FullStorePage sprintPath="/sprint-4" screen="products" /> },
      { path: 'sprint-4/products/:id', element: <FullStorePage sprintPath="/sprint-4" screen="detail" /> },
      { path: 'sprint-4/login', element: <FullStorePage sprintPath="/sprint-4" screen="login" /> },
      { path: 'sprint-4/register', element: <FullStorePage sprintPath="/sprint-4" screen="register" /> },
      { path: 'sprint-4/wishlist', element: <FullStorePage sprintPath="/sprint-4" screen="wishlist" /> },
      { path: 'sprint-4/cart', element: <FullStorePage sprintPath="/sprint-4" screen="cart" /> },
      { path: 'sprint-4/profile', element: <FullStorePage sprintPath="/sprint-4" screen="profile" /> },
      { path: 'sprint-4/checkout-success', element: <FullStorePage sprintPath="/sprint-4" screen="checkout" /> },
      { path: 'sprint-4/not-found', element: <NotFoundPage sprintPath="/sprint-4" /> },
      { path: 'sprint-4/*', element: <Navigate to="/sprint-4/not-found" replace /> },
      { path: '*', element: <Navigate to="/sprint-1/not-found" replace /> },
    ],
  },
])

export default router
