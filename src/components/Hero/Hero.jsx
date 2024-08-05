import "./Hero.css";
import ImgCarousel_1 from "/images/hero/1.jpg";
import ImgCarousel_2 from "/images/hero/2.jpg";
import ImgCarousel_3 from "/images/hero/3.jpg";
import ImgCarousel_4 from "/images/hero/4.jpg";
import ImgCarousel_5 from "/images/hero/5.jpg";
import MainButton from "../MainButton/MainButton";
const Hero = () => {
  return (
    <>
      <section className="hero">
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={ImgCarousel_1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item " data-bs-interval="10000">
              <img src={ImgCarousel_2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item " data-bs-interval="10000">
              <img src={ImgCarousel_3} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item " data-bs-interval="10000">
              <img src={ImgCarousel_4} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item " data-bs-interval="10000">
              <img src={ImgCarousel_5} className="d-block w-100" alt="..." />
            </div>
            <div
              className="carousel-caption"
              data-aos="zoom-in"
              data-aos-delay="500"
              data-aos-duration="2000"
            >
              <h6 className="title text-capitalize">
                we ensure better eduction for a better world
              </h6>
              <p className="d-none d-block-md">
                Massachusetts Institute of Technology (MIT): MIT consistently
                ranks as the world’s top university
              </p>
              <MainButton name="explore mare" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
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
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
