import { Link, useParams } from 'react-router-dom'
import { PRODUCTS } from '../data/products'

function StarRating({ rating = 0 }) {
  return (
    <div className="review-stars" aria-label={`${rating} de 5 estrellas`}>
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} className={index < rating ? 'star-filled' : 'star-empty'}>
          ★
        </span>
      ))}
    </div>
  )
}

function ProductDetailPage({ sprintPath }) {
  const { id } = useParams()
  const product = PRODUCTS.find((item) => item.id === id) || PRODUCTS[0]
  const reviews = product.reviews || []
  const showReviewsSection = ['/sprint-2', '/sprint-3', '/sprint-4'].includes(sprintPath) || reviews.length > 0

  return (
    <section className="stack-xl">
      <div className="detail-breadcrumb">
        <Link to={`${sprintPath}/products`} className="text-link">
          Inicio / Catálogo
        </Link>
        <span>{product.name}</span>
      </div>

      <div className="detail-layout detail-editorial elegant-detail">
        <div className="panel image-panel detail-gallery">
          <img src={product.image} alt={product.name} className="detail-image" />
        </div>

        <div className="panel stack-lg detail-info">
          <div className="detail-header-block">
            <p className="eyebrow">{product.category}</p>
            <h2>{product.name}</h2>
            <p className="lead">{product.description}</p>
          </div>

          <div className="detail-meta">
            <span>{product.category}</span>
            <strong>{product.price.toFixed(2)} €</strong>
          </div>

          <div className="detail-section">
            <p className="detail-label">Talla</p>
            <div className="size-grid">
              <button type="button" className="size-chip active-size">40</button>
              <button type="button" className="size-chip">41</button>
              <button type="button" className="size-chip">42</button>
              <button type="button" className="size-chip">43</button>
            </div>
          </div>

          <div className="detail-section">
            <p className="detail-label">Cantidad</p>
            <div className="quantity-row quantity-large">
              <button type="button">-</button>
              <span>1</span>
              <button type="button">+</button>
            </div>
          </div>

          <div className="detail-actions-column">
            <button type="button" className="button-link submit-button">
              Añadir al carrito
            </button>
            <button type="button" className="button-link secondary-link">
              Guardar en wishlist
            </button>
          </div>

          <div className="detail-description-block">
            <p className="detail-label">Descripción</p>
            <p className="detail-copy detail-copy-plain">
              {`${product.name} es una pieza pensada para acompañar el día a día con una silueta cuidada, materiales cómodos y una estética limpia. Su diseño encaja con looks relajados o más pulidos, manteniendo siempre una presencia actual y fácil de combinar.`}
            </p>
          </div>

          <div className="detail-copy-grid">
            <div className="fake-box">
              <p className="detail-label">Envío</p>
              <p className="detail-copy">
                Envío en 24/48h, cambios sencillos y recogida en tienda disponible.
              </p>
            </div>

            <div className="fake-box">
              <p className="detail-label">Cambios y devoluciones</p>
              <p className="detail-copy">
                Dispones de 14 días para cambios o devoluciones, con proceso rápido y asistencia durante todo el pedido.
              </p>
            </div>
          </div>
        </div>
      </div>

      {showReviewsSection ? (
        <div className="panel reviews-panel">
          <p className="eyebrow">Opiniones</p>
          <h3>Opiniones de clientes</h3>
          <div className="reviews-grid">
            {reviews.length > 0
              ? reviews.map((review) => (
                  <div key={`${review.author}-${review.title}`} className="fake-box">
                    <StarRating rating={review.rating} />
                    <strong>{review.title}</strong>
                    <p className="detail-copy">{review.comment}</p>
                    <p className="review-author">{review.author}</p>
                  </div>
                ))
              : (
                <>
                  <div className="fake-box">
                    <StarRating rating={5} />
                    <strong>Muy cómodo</strong>
                    <p className="detail-copy">Buen acabado y diseño sobrio para diario.</p>
                    <p className="review-author">Cliente Store Lab</p>
                  </div>
                  <div className="fake-box">
                    <StarRating rating={4} />
                    <strong>Buena presencia</strong>
                    <p className="detail-copy">La ficha se siente más premium y ordenada.</p>
                    <p className="review-author">Cliente Store Lab</p>
                  </div>
                </>
              )}
          </div>

          {sprintPath === '/sprint-3' || sprintPath === '/sprint-4' ? (
            <div className="review-form-box">
              <p className="detail-label">Escribe tu opinión</p>
              <div className="review-input-stars" aria-label="Seleccionar valoración">
                <button type="button" className="review-star-button">★</button>
                <button type="button" className="review-star-button">★</button>
                <button type="button" className="review-star-button">★</button>
                <button type="button" className="review-star-button">★</button>
                <button type="button" className="review-star-button review-star-empty">★</button>
              </div>
              <textarea
                className="review-textarea"
                rows="5"
                placeholder="Cuéntanos cómo te queda, qué te ha parecido el acabado o cómo se siente en el día a día."
              />
              <button type="button" className="button-link submit-button review-submit">
                Enviar opinión
              </button>
            </div>
          ) : null}
        </div>
      ) : null}

    </section>
  )
}

export default ProductDetailPage
