import { createContext, useState ,useEffect} from "react";

export const ProdContext = createContext();

function ProductContext({ children }) {
  const [ProductList, setProductList] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      let res = await fetch(
        "https://randomapi.dev/api/products?count=10&unwrap=true",
      );
      if (!res.ok) throw new Error("Unable to load data. Please try again. ");
      let data = await res.json();
      setProductList(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <ProdContext.Provider value={{ ProductList,error,isLoading }}>
        {children}
      </ProdContext.Provider>
    </>
  );
}

export default ProductContext;
