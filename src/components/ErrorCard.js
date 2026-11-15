function ErrorCard({ message }) {
  return (
    <div className="container my-5">
      <div className="card border-0 shadow-sm text-center p-4">

        <div className="card-body">

          <h4 className="fw-bold">
            Oops! Something went wrong
          </h4>

          <p className="text-secondary">
            {message}
          </p>

          <button className="btn btn-danger">
            Try Again
          </button>

        </div>
      </div>
    </div>
  );
}

export default ErrorCard;