import img1 from "../assets/images/slide1.jpg";
import img2 from "../assets/images/slide2.jpg";
import img3 from "../assets/images/slide3.jpg";
import Product from "./Product";
function Home() {
  const imagList = [img1,img2,img3];
  return (
    <div className="flex-grow-1">
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide w-100  shadow"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          {imagList.map((img, index) => (
            <div
              className={`carousel-item bg-dark ${index === 0 ? "active" : ""}`}
              data-bs-interval="2000"
              key={index}
            >
              <img
                src={img}
                className="d-block w-100"
                alt='img-carousel'
                style={{
                  height: "400px",
                }}
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div >
        <Product/>
      </div>
    </div>
  );
}

export default Home;
