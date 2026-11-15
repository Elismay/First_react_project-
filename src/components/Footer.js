import React from "react";

function Footer() {
  return (
    <footer
      className="text-light py-4 mt-auto"
      style={{ backgroundColor: "#252525" }}
    >
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <h5 className="mb-1">Routing Test</h5>
            <p className="text-secondary mb-0">
              Explore our website and discover more.
            </p>
          </div>

          <div className="col-md-6 text-center text-md-end">
            <p className="mb-0">
              &copy; 2026 Routing Test. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
