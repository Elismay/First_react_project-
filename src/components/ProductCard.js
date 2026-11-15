import { useContext } from "react";
import { PanierContext } from "./PanierContext";
import { Link } from "react-router-dom";
function ProductCard({ product }) {
    const {setPanierList} = useContext(PanierContext)
    function AddToPanier(product) {
   setPanierList(prev => {
    const exist = prev.find(item => item.sku === product.sku);

    if (exist) {
      return prev.map(item =>
        item.sku === product.sku
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    return [...prev, { ...product, quantity: 1 }];
  });
}
  return (
    <div className="card h-100 border-0 shadow-sm ">
      <div className="bg-light p-3 position-relative">
        <span className="badge bg-dark position-absolute top-0 start-0 m-2">
          {product.category}
        </span>

        <img
          src={product.imageUrl}
          className="card-img-top"
          alt={product.name}
          style={{ height: "210px", objectFit: "contain" }}
        />
      </div>

      <div className="card-body d-flex flex-column">
        <small className="text-secondary mb-2">SKU: {product.sku}</small>

        <h5 className="fw-bold">{product.name}</h5>

        <p className="text-secondary small">{product.description}</p>

        <div className="d-flex align-items-center gap-2 mb-3">
          <span className="text-warning">★</span>
          <strong>{product.rating}</strong>
          <small className="text-secondary">/ 5</small>
        </div>

        <hr />

        <div className="d-flex justify-content-between align-items-center mb-2">
          <h4 className="text-primary fw-bold mb-0">
            {product.currency} {product.price}
          </h4>

          <span
            className={`badge ${product.inStock ? "bg-success" : "bg-danger"}`}
          >
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        <small className="text-secondary mb-3">EAN13: {product.ean13}</small>

        <button
          className="btn btn-primary w-100 mt-auto"
          disabled={!product.inStock}
          onClick={()=>AddToPanier(product)}
        >
          <i className="bi bi-bag-plus me-2"></i>
          Add to Cart
        </button>
        <Link to={`/product/productdetail/${product.sku}`} className="">
        <button 
        className="btn btn-success  w-100 mt-2"
          
        >Show Details</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
