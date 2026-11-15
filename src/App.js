import PageNotFound from "./components/PageNotFound";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Panier from "./pages/Panier";
import { PanierContextProvider } from "./components/PanierContext";
import ProductDetail from "./components/ProductDetail";
import ProductContext from "./components/ProductContext";
import Routing from "./layout/Routing";
function App() {
  const routing = createBrowserRouter([
    {
      path: "/",
      element: <Routing />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "contact", element: <Contact /> },

        {
          path: "product",
          element: <Product />,
          children: [
            {
              path: "productdetail/:sku",
              element: <ProductDetail />,
            },
          ],
        },

        { path: "panier", element: <Panier /> },
        { path: "*", element: <PageNotFound /> },
      ],
    },
  ]);
  return (
    <div className="min-vh-100 d-flex flex-column">
      <ProductContext>
        <PanierContextProvider>
             <RouterProvider router={routing } />
        </PanierContextProvider>
      </ProductContext>
    </div>
  );
}

export default App;
