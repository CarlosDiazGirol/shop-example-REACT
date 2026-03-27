import { Link } from 'react-router-dom'
import { PRODUCTS } from '../data/products'
import StoreHomePage from './StoreHomePage'
import ProductListPage from './ProductListPage'
import ProductDetailPage from './ProductDetailPage'
import AuthPage from './AuthPage'

function WishlistScreen() {
  return (
    <div className="stack-xl">
      <div className="panel">
        <p className="eyebrow">Wishlist</p>
        <h3>Guardados para más tarde</h3>
      </div>
      <div className="product-grid compact-grid elegant-grid">
        {PRODUCTS.slice(0, 3).map((product) => (
          <Link
            key={product.id}
            to={`/sprint-4/products/${product.id}`}
            className="product-card product-card-link"
          >
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-body">
              <p className="product-category">{product.category}</p>
              <h3>{product.name}</h3>
              <p className="product-description">
                Pieza guardada para recuperarla más adelante con una compra más tranquila.
              </p>
              <div className="product-footer">
                <strong>{product.price.toFixed(2)} €</strong>
                <span className="text-link">Ver producto</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

function CartScreen() {
  return (
    <div className="cart-layout">
      <div className="panel stack-lg">
        <div>
          <p className="eyebrow">Carrito</p>
          <h3>Tu selección</h3>
          <p className="detail-copy">
            Revisa los artículos, ajusta cantidades y consulta las condiciones del pedido antes de
            pasar al pago.
          </p>
        </div>
        {PRODUCTS.slice(0, 2).map((product) => (
          <div key={product.id} className="cart-item">
            <img src={product.image} alt={product.name} className="cart-thumb" />
            <div>
              <strong>{product.name}</strong>
              <p className="cart-item-meta">Entrega estimada en 24/48h</p>
              <p>{product.price.toFixed(2)} €</p>
            </div>
            <div className="quantity-row">
              <button type="button">-</button>
              <span>1</span>
              <button type="button">+</button>
            </div>
          </div>
        ))}
      </div>

      <div className="panel stack-lg">
        <div>
          <p className="eyebrow">Resumen del pedido</p>
          <h3>164.98 €</h3>
        </div>
        <div className="checkout-lines">
          <div className="checkout-line">
            <span>Subtotal</span>
            <strong>149.98 €</strong>
          </div>
          <div className="checkout-line">
            <span>Gastos de envío</span>
            <strong>4.99 €</strong>
          </div>
          <div className="checkout-line">
            <span>Embalaje y preparación</span>
            <strong>10.01 €</strong>
          </div>
          <div className="checkout-line checkout-total">
            <span>Total</span>
            <strong>164.98 €</strong>
          </div>
        </div>
        <div className="checkout-note-box">
          <p className="detail-label">Envío</p>
          <p className="detail-copy">
            Entrega estándar en 24/48h laborables. También puedes seleccionar recogida en tienda
            durante el proceso de compra.
          </p>
        </div>
        <div className="checkout-note-box">
          <p className="detail-label">Cambios y devoluciones</p>
          <p className="detail-copy">
            Dispones de 14 días para cambios o devoluciones. El producto debe conservar su estado
            original y su embalaje.
          </p>
        </div>
        <button type="button" className="button-link submit-button cart-submit-button">
          Finalizar compra
        </button>
      </div>
    </div>
  )
}

function ProfileScreen() {
  return (
    <div className="panel stack-lg">
      <p className="eyebrow">Perfil</p>
      <h3>Datos de la cuenta</h3>
      <div className="profile-grid">
        <div className="fake-box">
          <p>Nombre</p>
          <strong>Tyler Durdel</strong>
        </div>
        <div className="fake-box">
          <p>Email</p>
          <strong>soapmaker@paperstreetsoap.com</strong>
        </div>
        <div className="fake-box">
          <p>Dirección</p>
          <strong>Paper Street, 537</strong>
        </div>
        <div className="fake-box">
          <p>Ciudad</p>
          <strong>Project Mayhem</strong>
        </div>
        <div className="fake-box">
          <p>Código postal</p>
          <strong>00001</strong>
        </div>
        <div className="fake-box">
          <p>País</p>
          <strong>No hables de ello</strong>
        </div>
      </div>
    </div>
  )
}

function CheckoutScreen() {
  return (
    <div className="panel centered-panel">
      <p className="eyebrow">Checkout</p>
      <h3>Pedido confirmado</h3>
      <p className="lead">
        Pantalla visual de éxito para enseñar el final del flujo del cliente.
      </p>
      <Link to="/sprint-4/home" className="button-link">
        Volver al inicio
      </Link>
    </div>
  )
}

function FullStorePage({ sprintPath, screen }) {
  return (
    <section className="stack-xl">
      {screen === 'home' ? <StoreHomePage sprintPath={sprintPath} /> : null}
      {screen === 'products' ? <ProductListPage sprintPath={sprintPath} /> : null}
      {screen === 'detail' ? <ProductDetailPage sprintPath={sprintPath} /> : null}
      {screen === 'login' ? <AuthPage sprintPath={sprintPath} type="login" /> : null}
      {screen === 'register' ? <AuthPage sprintPath={sprintPath} type="register" /> : null}
      {screen === 'wishlist' ? <WishlistScreen /> : null}
      {screen === 'cart' ? <CartScreen /> : null}
      {screen === 'profile' ? <ProfileScreen /> : null}
      {screen === 'checkout' ? <CheckoutScreen /> : null}
    </section>
  )
}

export default FullStorePage
