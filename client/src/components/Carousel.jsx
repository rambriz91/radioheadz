// import { useQuery } from "@apollo/client";
// import { QUERY_STATIONS } from "../utils/queries";
import { useState } from "react";
import kggi from "../assets/images/carouselImages/99.1kggi.png";
import kissFm from "../assets/images/carouselImages/102.7kissfm.png";
import power106 from "../assets/images/carouselImages/power106.png";

const Carousel = () => {
  /*const { loading, data } = useQuery(QUERY_STATIONS);
  const station = data.frequency;
  console.log("Data from Carousel: ", data, " Loading: ", loading);
  console.log("Station: ", station); Might just use assest/image thumbnails...*/
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

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
            <div
              key={index}
              className={`carousel-item ${
                index === activeIndex ? "active" : ""
              }`}
            >
              <img
                src={image.src}
                id="carouselImages"
                className="d-block mx-auto"
                alt="radio station logo"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="prev"
          onClick={() =>
            handleSlideChange(
              (activeIndex - 1 + imagesArr.length) % imagesArr.length // handles the cycling of the indeces
            )
          }
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
          onClick={() =>
            handleSlideChange((activeIndex + 1) % imagesArr.length)
          }
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div>
        <h2 className="d-flex justify-content-center pt-8">
          Featured Stations - Recommended by Our Users.
        </h2>
      </div>
      {/* // Not sure if we need these.
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
      </div> */}
    </>
  );
};

export default Carousel;
