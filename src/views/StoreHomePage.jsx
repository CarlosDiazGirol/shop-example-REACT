import { Link } from 'react-router-dom'
import { PRODUCTS } from '../data/products'

function StoreHomePage({ sprintPath }) {
  return (
    <section className="stack-xl">
      <div className="panel elegant-hero">
        <div>
          <p className="eyebrow">Editorial selection</p>
          <h3 className="elegant-hero-title">Prendas, calzado y accesorios con una línea más sobria y atemporal.</h3>
          <p className="lead">
            Descubre una selección pensada para vestir el día a día con equilibrio, comodidad y una estética más cuidada.
          </p>
        </div>
        <div className="elegant-side-card">
          <p className="spotlight-label">Store Lab</p>
          <div className="elegant-side-image" />
          <h4>
            Colección de temporada con envíos rápidos, cambios sencillos y una presentación más limpia del producto.
          </h4>
          <Link to={`${sprintPath}/products`} className="button-link">
            Ver colección
          </Link>
        </div>
      </div>

      <div className="elegant-categories">
        <div className="editorial-card editorial-light">
          <p className="eyebrow">Camisas</p>
          <h3>Lino, algodón y cortes relajados para el día a día.</h3>
        </div>
        <div className="editorial-card editorial-light">
          <p className="eyebrow">Calzado</p>
          <h3>Calzado pensado para acompañar el día a día con carácter, comodidad y una presencia más cuidada.</h3>
        </div>
        <div className="editorial-card editorial-dark">
          <p className="eyebrow">Accesorios</p>
          <h3>Bolsos, cinturones y gafas con una presencia más discreta.</h3>
        </div>
      </div>

      <div className="product-grid compact-grid elegant-grid">
        {PRODUCTS.slice(0, 8).map((product) => (
          <Link
            key={product.id}
            to={`${sprintPath}/products/${product.id}`}
            className="product-card product-card-link"
          >
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-body">
              <p className="product-category">{product.category}</p>
              <h3>{product.name}</h3>
              <p className="product-description">
                Pieza de temporada pensada para un armario limpio, versátil y fácil de combinar.
              </p>
              <div className="product-footer">
                <strong>{product.price.toFixed(2)} €</strong>
                <span className="text-link">Ver producto</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </section>
  )
}

export default StoreHomePage
