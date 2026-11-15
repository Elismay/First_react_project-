import { useContext } from "react";
import { ProdContext } from "./ProductContext"; 
import { useParams } from "react-router-dom";
function ProductDetail() {
   const { ProductList } = useContext(ProdContext);

  const { sku } = useParams();

  const product = ProductList.find(p => p.sku === sku);
  

  if (!product) {
    return (
      <div className="container text-center py-5">
        <h3>Product Not Found</h3>
      </div>
    );
  }
  return (
    <div className="container py-5">

      <div className="row g-5">

        {/* Product Image */}
        <div className="col-lg-6">
          <div className="bg-light rounded-4 p-4 position-relative">
            <span className="badge bg-dark position-absolute top-0 start-0 m-3 px-3 py-2">
              {product.category}
            </span>

            <img
              src={product.imageUrl}
              alt={product.name}
              className="img-fluid w-100"
              style={{
                height: "450px",
                objectFit: "contain"
              }}
            />
          </div>
        </div>

        {/* Product Information */}
        <div className="col-lg-6">

          <small className="text-secondary">
            SKU: {product.sku}
          </small>

          <h1 className="fw-bold mt-3 mb-3">
            {product.name}
          </h1>

          <div className="d-flex align-items-center gap-2 mb-3">
            <span className="text-warning fs-5">★★★★★</span>
            <strong>{product.rating}</strong>
            <span className="text-secondary small">/ 5</span>
          </div>

          <p className="text-secondary lh-lg">
            {product.description}
          </p>

          <hr />

          {/* Price */}
          <div className="mb-4">
            <h2 className="text-primary fw-bold mb-1">
              {product.currency} {product.price}
            </h2>

            <small className="text-secondary">
              Inclusive of all applicable taxes
            </small>
          </div>

          {/* Stock */}
          <div className="mb-4">
            <span className={`badge rounded-pill px-3 py-2 ${
              product.inStock
                ? "bg-success-subtle text-success"
                : "bg-danger-subtle text-danger"
            }`}>
              <i className="bi bi-circle-fill me-2"></i>
              {product.inStock ? "Available in Stock" : "Out of Stock"}
            </span>
          </div>

          {/* Buttons */}
          <div className="d-flex gap-2 mb-4">
            <button
              className="btn btn-primary btn-lg flex-grow-1"
              disabled={!product.inStock}
            >
              <i className="bi bi-bag-plus me-2"></i>
              Add to Cart
            </button>

            <button className="btn btn-outline-secondary btn-lg">
              <i className="bi bi-heart"></i>
            </button>
          </div>

          <hr />

          {/* Additional Information */}
          <div className="mt-4">

            <h5 className="fw-bold mb-3">
              Product Information
            </h5>

            <div className="d-flex justify-content-between py-2 border-bottom">
              <span className="text-secondary">Category</span>
              <strong>{product.category}</strong>
            </div>

            <div className="d-flex justify-content-between py-2 border-bottom">
              <span className="text-secondary">SKU</span>
              <strong>{product.sku}</strong>
            </div>

            <div className="d-flex justify-content-between py-2 border-bottom">
              <span className="text-secondary">EAN13</span>
              <strong>{product.ean13}</strong>
            </div>

            <div className="d-flex justify-content-between py-2">
              <span className="text-secondary">Availability</span>
              <strong>
                {product.inStock ? "In Stock" : "Unavailable"}
              </strong>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
