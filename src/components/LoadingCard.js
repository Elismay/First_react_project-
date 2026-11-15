function LoadingCard() {
  return (
    <div className="container my-5">
      <div className="card border-0 shadow-sm p-5 text-center">

        <div className="spinner-border text-primary mx-auto mb-3" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>

        <h5 className="fw-bold">Loading...</h5>

        <p className="text-secondary mb-0">
          Please wait while we load your products.
        </p>

      </div>
    </div>
  );
}

export default LoadingCard;