// import { useQuery } from "@apollo/client";
// import { QUERY_STATIONS } from "../utils/queries";
import kggi from "../assets/images/carouselImages/99.1kggi.png";
import kissFm from "../assets/images/carouselImages/102.7kissfm.png";
import power106 from "../assets/images/carouselImages/power106.png";

const Carousel = () => {
  /*const { loading, data } = useQuery(QUERY_STATIONS);
  const station = data.frequency;
  console.log("Data from Carousel: ", data, " Loading: ", loading);
  console.log("Station: ", station); Might just use assest/image thumbnails...*/

  const imagesArr = [{ src: kggi }, { src: kissFm }, { src: power106 }];
  console.log(imagesArr[0].src);

  return (
    <>
      <div
        id="carouselExampleRide"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div className="carousel-inner">
          {imagesArr.map((image, index) => (
            <div key={index} className="carousel-item active">
              <img
                src={image.src}
                className="d-block"
                alt="radio station logo"
                // style={{ width: "300px", height: "300px" }}
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleRide"
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
          data-bs-target="#carouselExampleRide"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div>
        <h2 className="d-flex justify-content-center">Featured Stations</h2>
      </div>
      <div id="stationButtons" className="d-flex justify-content-center">
        <button id="prevStation" className="btn btn-secondary mx-2">
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </button>
        <button id="playStation" className="btn btn-secondary mx-2">
          Play
        </button>
        <button id="nextStation" className="btn btn-secondary mx-2">
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
