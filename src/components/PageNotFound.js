import { Link } from "react-router-dom";
export default function PageNotFound() {
  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center">
      <div className="w-100" style={{ maxWidth: "600px" }}>
        <div className="fs-1 mb-4">😕</div>

        <h1 className="fw-semibold mb-3">Hmmm... can't find this page</h1>

        <p className="text-secondary mb-4">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <div className="mb-4">
          <p className="fw-semibold mb-2">Try:</p>

          <ul className="text-secondary">
            <li>Checking the URL for errors</li>
            <li>Going back to the previous page</li>
            <li>Returning to the home page</li>
          </ul>
        </div>
         <Link to="/home">
        <button className="btn btn-primary">Back to Home</button> 
         </Link>

        <div className="mt-4  alert alert-danger">
          Error 404 - Page Not Found
        </div>
      </div>
    </div>
  );
}
