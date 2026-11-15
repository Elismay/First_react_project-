import { NavLink } from "react-router-dom";
import {  useContext} from "react";
import ProductCard from "../components/ProductCard";
import ErrorCard from "../components/ErrorCard";
import LoadingCard from "../components/LoadingCard";
import { ProdContext } from "../components/ProductContext";
function Product() {
  const {ProductList,error,isLoading} = useContext(ProdContext);

  return (
    <>
      <section className="container-fluid my-5 pt-2 shadow-lg px-5 bg-light">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold mb-1">Featured Products</h2>
            <p className="text-secondary mb-0">
              Discover our latest collection
            </p>
          </div>
          <NavLink to={"/product"}>
            {({isActive})=>
             !isActive  && <button className="btn btn-outline-primary">View All</button> }
            
          </NavLink>
        </div>

        <div className="row g-4 ">
          {error? <ErrorCard message={error} />
          :isLoading? <LoadingCard/>
          :ProductList.map((p) => {
            return <div className="col-6 col-md-4 col-lg-3" key={p.sku}>
                <ProductCard  product={p} />

            </div> 
          })}
        </div>
      </section>
    </>
  );
}

export default Product;
