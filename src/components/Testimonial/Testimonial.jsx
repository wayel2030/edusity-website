// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Testimonial.css";
import imageTesitmoinal_1 from "/public/images/tesimonial/testimonial (1).jpeg";
import imageTesitmoinal_2 from "/public/images/tesimonial/testimonial (2).jpeg";
import imageTesitmoinal_3 from "/public/images/tesimonial/testimonial (3).jpeg";
import imageTesitmoinal_4 from "/public/images/tesimonial/testimonial (4).jpeg";
import imageTesitmoinal_5 from "/public/images/tesimonial/testimonial (5).jpeg";
const Testimonial = () => {
  return (
    <section className="testimonial container">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner p-2">
          <div className="carousel-item  active">
            <div className="contentSlide rounded-5 pt-5 pb-2">
              <div className="imgAndName  d-flex justify-content-center align-items-center gap-2 flex-column  flex-lg-row">
                <div className="image bg-white">
                  <img className="p-1" src={imageTesitmoinal_1} alt="" />
                </div>
                <div className="name  text-center  ">
                  <h3 className="text-white text-capitalize">johne wake</h3>
                  <h4 className="text-white text-capitalize lead fs-6">
                    ceo-agency
                  </h4>
                  <div className="stars">
                    <i className="starColor  iconStar fa-solid fa-star"></i>
                    <i className="starColor  iconStar fa-solid fa-star"></i>
                    <i className="starColor  iconStar fa-solid fa-star"></i>
                    <i className="starColor  iconStar fa-solid fa-star"></i>
                    <i className="text-white iconStar  fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="textFeedback w-75 text-white lead mx-auto">
                <p className="descr text-center mt-2">
                <i className="postIcon fa-solid fa-quote-left"></i>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  minima rem velit ut error! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Eos, reiciendis at. Aperiam ea
                  voluptate odio necessitatibus voluptatibus explicabo deleniti.
                  Repellat, dolor nostrum.
                  <i className="postIcon fa-solid fa-quote-right"></i>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="contentSlide rounded-5 pt-5 pb-2">
              <div className="imgAndName  d-flex justify-content-center align-items-center gap-2 flex-column  flex-lg-row">
                <div className="image bg-white">
                  <img className="p-1" src={imageTesitmoinal_2} alt="" />
                </div>
                <div className="name  text-center  ">
                  <h3 className="text-white text-capitalize">emaan osman</h3>
                  <h4 className="text-white text-capitalize lead fs-6">
                    ceo-agency
                  </h4>
                  <div className="stars">
                    <i className="starColor  iconStar fa-solid fa-star"></i>
                    <i className="starColor  iconStar fa-solid fa-star"></i>
                    <i className="starColor  iconStar fa-solid fa-star"></i>
                    <i className="starColor  iconStar fa-solid fa-star"></i>
                    <i className="text-white iconStar  fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="textFeedback w-75 text-white lead mx-auto">
              <p className="descr text-center mt-2">
                <i className="postIcon fa-solid fa-quote-left"></i>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  minima rem velit ut error! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Eos, reiciendis at. Aperiam ea
                  voluptate odio necessitatibus voluptatibus explicabo deleniti.
                  Repellat, dolor nostrum.
                  <i className="postIcon fa-solid fa-quote-right"></i>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="contentSlide rounded-5 pt-5 pb-2">
              <div className="imgAndName  d-flex justify-content-center align-items-center gap-2 flex-column  flex-lg-row">
                <div className="image bg-white">
                  <img className="p-1" src={imageTesitmoinal_3} alt="" />
                </div>
                <div className="name  text-center  ">
                  <h3 className="text-white text-capitalize"> waad aliex</h3>
                  <h4 className="text-white text-capitalize lead fs-6">
                    ceo-agency
                  </h4>
                  <div className="stars">
                    <i className="starColor  iconStar fa-solid fa-star"></i>
                    <i className="starColor  iconStar fa-solid fa-star"></i>
                    <i className="starColor  iconStar fa-solid fa-star"></i>
                    <i className="starColor  iconStar fa-solid fa-star"></i>
                    <i className="text-white iconStar  fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="textFeedback w-75 text-white lead mx-auto">
              <p className="descr text-center mt-2">
                <i className="postIcon fa-solid fa-quote-left"></i>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  minima rem velit ut error! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Eos, reiciendis at. Aperiam ea
                  voluptate odio necessitatibus voluptatibus explicabo deleniti.
                  Repellat, dolor nostrum.
                  <i className="postIcon fa-solid fa-quote-right"></i>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="contentSlide rounded-5 pt-5 pb-2">
              <div className="imgAndName  d-flex justify-content-center align-items-center gap-2 flex-column  flex-lg-row">
                <div className="image bg-white">
                  <img className="p-1" src={imageTesitmoinal_4} alt="" />
                </div>
                <div className="name  text-center  ">
                  <h3 className="text-white text-capitalize">
                    {" "}
                    emaan mohammed
                  </h3>
                  <h4 className="text-white text-capitalize lead fs-6">
                    ceo-agency
                  </h4>
                  <div className="stars">
                    <i className="starColor  iconStar fa-solid fa-star"></i>
                    <i className="starColor  iconStar fa-solid fa-star"></i>
                    <i className="starColor  iconStar fa-solid fa-star"></i>
                    <i className="starColor  iconStar fa-solid fa-star"></i>
                    <i className="text-white iconStar  fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="textFeedback w-75 text-white lead mx-auto">
              <p className="descr text-center mt-2">
                <i className="postIcon fa-solid fa-quote-left"></i>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  minima rem velit ut error! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Eos, reiciendis at. Aperiam ea
                  voluptate odio necessitatibus voluptatibus explicabo deleniti.
                  Repellat, dolor nostrum.
                  <i className="postIcon fa-solid fa-quote-right"></i>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="contentSlide rounded-5 pt-5 pb-2">
              <div className="imgAndName  d-flex justify-content-center align-items-center gap-2 flex-column  flex-lg-row">
                <div className="image bg-white">
                  <img className="p-1" src={imageTesitmoinal_5} alt="" />
                </div>
                <div className="name  text-center  ">
                  <h3 className="text-white text-capitalize"> ronaldo jee</h3>
                  <h4 className="text-white text-capitalize lead fs-6">
                    ceo-agency
                  </h4>
                  <div className="stars">
                    <i className="starColor  iconStar fa-solid fa-star"></i>
                    <i className="starColor  iconStar fa-solid fa-star"></i>
                    <i className="starColor  iconStar fa-solid fa-star"></i>
                    <i className="starColor  iconStar fa-solid fa-star"></i>
                    <i className="text-white iconStar  fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="textFeedback w-75 text-white lead mx-auto">
              <p className="descr text-center mt-2">
                <i className="postIcon fa-solid fa-quote-left"></i>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  minima rem velit ut error! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Eos, reiciendis at. Aperiam ea
                  voluptate odio necessitatibus voluptatibus explicabo deleniti.
                  Repellat, dolor nostrum.
                  <i className="postIcon fa-solid fa-quote-right"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
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
          data-bs-target="#carouselExampleAutoplaying"
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
  );
};

export default Testimonial;
