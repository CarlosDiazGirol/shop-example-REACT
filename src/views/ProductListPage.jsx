import { Link } from 'react-router-dom'
import { PRODUCTS } from '../data/products'

function ProductListPage({ sprintPath }) {
  return (
    <section className="stack-xl">
      <div className="panel collection-banner elegant-banner">
        <p className="eyebrow">Colección completa</p>
        <h2>Selección de temporada</h2>
        <p className="lead">
          Una vista más serena del catálogo, con protagonismo para la imagen y una lectura más limpia del producto.
        </p>
        <div className="toolbar toolbar-inline">
          <button type="button" className="filter-chip active-filter">Todos</button>
          <button type="button" className="filter-chip">Hombre</button>
          <button type="button" className="filter-chip">Accesorios</button>
          <button type="button" className="filter-chip">Novedades</button>
        </div>
      </div>

      <div className="product-grid compact-grid elegant-grid">
        {PRODUCTS.map((product) => (
          <Link
            key={product.id}
            to={`${sprintPath}/products/${product.id}`}
            className="product-card product-card-link"
          >
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-body">
              <p className="product-category">{product.category}</p>
              <h3>{product.name}</h3>
              <p className="product-description">{product.description}</p>
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

export default ProductListPage
