import { useContext } from "react";
import { PanierContext } from "../components/PanierContext";
import { Link } from "react-router-dom";
function Panier() {
  const { panierList, setPanierList } = useContext(PanierContext);
  function removeProduct(sku) {
    setPanierList((prev) => prev.filter((e) => e.sku !== sku));
  }
  function updateQuantity(sku, quantity) {
    setPanierList((prev) =>
      prev.map((item) => (item.sku === sku ? { ...item, quantity:Math.max(1,quantity) } : item)),
    );
  }

  const subtotal = panierList.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  return (
    <>
      <div className="container py-5">
        <h2 className="fw-bold mb-4">Shopping Cart</h2>

        <div className="row g-4">
          <div className="col-lg-8">
            {panierList.length === 0 ? <h4 className="alert alert-danger">Panier is empty</h4>
            :panierList.map((item) => (
              <div className="card border-0 shadow-sm mb-3" key={item.sku}>
                <div className="card-body">
                  <div className="row align-items-center g-3">
                    <div className="col-4 col-md-3">
                      <img
                        src={item.imageUrl}
                        className="img-fluid rounded"
                        alt={item.name}
                      />
                    </div>

                    <div className="col-8 col-md-9">
                      <div className="d-flex justify-content-between">
                        <div>
                          <h6 className="fw-bold">{item.name}</h6>
                          <small className="text-muted">
                            {item.category} · {item.sku}
                          </small>
                          <p className="text-success small mt-2">In Stock</p>
                        </div>

                        <button
                          className="btn btn-link text-danger"
                          onClick={() => removeProduct(item.sku)}
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </div>

                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="fw-bold mb-0">
                          ${(item.price * item.quantity).toFixed(2)}
                        </h5>

                        <div className="btn-group">
                          <button
                            className="btn btn-outline-secondary"
                            onClick={() =>
                              updateQuantity(item.sku, item.quantity - 1)
                            }
                          >
                            -
                          </button>

                          <button className="btn btn-light" disabled>
                            {item.quantity}
                          </button>

                          <button
                            className="btn btn-outline-secondary"
                            onClick={() =>
                              updateQuantity(item.sku, item.quantity + 1)
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-lg-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h5 className="fw-bold mb-4">Order Summary</h5>

                <div className="d-flex justify-content-between mb-3">
                  <span className="text-muted">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <span className="text-muted">Shipping</span>
                  <span className="text-success">Free</span>
                </div>

                <hr />

                <div className="d-flex justify-content-between mb-4">
                  <h5>Total</h5>
                  <h5 className="fw-bold text-primary">
                    ${subtotal.toFixed(2)}
                  </h5>
                </div>

                <button className="btn btn-primary w-100 py-2">
                  Proceed to Checkout
                </button>
                <Link to={"/product"}>
                <button className="btn btn-outline-secondary w-100 mt-2">
                  Continue Shopping
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Panier;
