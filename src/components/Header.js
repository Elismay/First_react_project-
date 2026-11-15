import { NavLink } from "react-router-dom";
function Header() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg text-light fixed-top  "
        style={{ backgroundColor: "#25252580" }}
      >
        <div className="container-fluid ">
          <h1 className="navbar-brand text-light mb-0">Routing Test</h1>

          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto ">
              <NavLink to={"/home"} className="text-decoration-none">
                {({ isActive }) => (
                  <li className="nav-item  ">
                    <p
                      className={
                        isActive
                          ? "nav-link  text-light mb-0  btn btn-primary bg-primary"
                          : "nav-link  text-light mb-0  btn btn-primary"
                      }
                      aria-current="page"
                    >
                      Home
                    </p>
                  </li>
                )}
              </NavLink>
              <NavLink to={"/product"} className="text-decoration-none">
                {({ isActive }) => (
                  <li className="nav-item ">
                    <p
                      className={
                        isActive
                          ? "nav-link  text-light mb-0  btn btn-primary bg-primary"
                          : "nav-link  text-light mb-0  btn btn-primary"
                      }
                      aria-current="page"
                    >
                      Product
                    </p>
                  </li>
                )}
              </NavLink>
              <NavLink to={"/panier"} className="text-decoration-none">
                {({ isActive }) => (
                  <li className="nav-item ">
                    <p
                      className={
                        isActive
                          ? "nav-link  text-light mb-0  btn btn-primary bg-primary"
                          : "nav-link  text-light mb-0  btn btn-primary"
                      }
                      aria-current="page"
                    >
                      Panier
                    </p>
                  </li>
                )}
              </NavLink>
              <NavLink to={"/contact"} className="text-decoration-none">
                {({ isActive }) => (
                  <li className="nav-item ">
                    <p
                      className={
                        isActive
                          ? "nav-link  text-light mb-0  btn btn-primary bg-primary"
                          : "nav-link  text-light mb-0  btn btn-primary"
                      }
                      aria-current="page"
                    >
                      Contact 
                    </p>
                  </li>
                )}
              </NavLink>
             
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
