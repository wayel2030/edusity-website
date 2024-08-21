// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import "./Courses.css";
// import Swiper core and required modules
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import images section popular Courses
import imgCoures_1 from "/public/images/ourCourses/courses (1).jpg";
import imgCoures_2 from "/public/images/ourCourses/courses (2).jpg";
import imgCoures_3 from "/public/images/ourCourses/courses (3).jpg";
import imgCoures_4 from "/public/images/ourCourses/courses (4).jpg";
import imgCoures_5 from "/public/images/ourCourses/courses (5).jpg";
// import images section popular Courses Teachers images
import imgTeacher_1 from "/public/images/ourCourses/teacher/teacher (1).jpg";
import imgTeacher_2 from "/public/images/ourCourses/teacher/teacher (2).jpg";
import imgTeacher_3 from "/public/images/ourCourses/teacher/teacher (3).jpg";
import imgTeacher_4 from "/public/images/ourCourses/teacher/teacher (4).jpg";
import imgTeacher_5 from "/public/images/ourCourses/teacher/teacher (5).jpg";

const Courses = () => {
  return (
    <section className="courses py-5">
      <div className="content">
        <div className="titleAndButtonSlider d-flex justify-content-between">
          <h1>popular courses</h1>
        </div>
        <div className="slider">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Scrollbar, A11y]}
            spaceBetween={80}
            slidesPerView={4}
            navigation
            autoplay={{
              delay: 3000, // Delay between transitions in milliseconds
              disableOnInteraction: false, // Continue autoplay after user interactions
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            <SwiperSlide>
              <div className="cardSlide  w-100 rounded-2 mx-auto">
                <div className="imageContent ">
                  <img className="w-100 " src={imgCoures_1} alt="" />
                </div>
                <div className="textContent p-2">
                  <h5 className="mb-3 text-capitalize fw-bold">
                    learn jquery for beginners
                  </h5>
                  <div className="teacher  d-flex align-items-center">
                    <div className="img">
                      <img className="imgTeacher" src={imgTeacher_1} alt="" />
                    </div>
                    <h6 className="name  text-capitalize text-black-50  ms-3">
                      by michel smith
                    </h6>
                  </div>
                  <div className="statistic mt-3 d-flex align-align-items-center">
                    <div className="stars">
                      <i className="starColor  iconStar fa-solid fa-star"></i>
                      <i className="starColor  iconStar fa-solid fa-star"></i>
                      <i className="starColor  iconStar fa-solid fa-star"></i>
                      <i className="starColor  iconStar fa-solid fa-star"></i>
                      <i className=" text-dark  iconStar fa-solid fa-star"></i>
                    </div>
                    <p className="reviews ms-3 d-flex align-content-center">
                      &#x28; <span className="numberReviews fw-bold"> 20</span>
                      <h6 className="reviews ms-1 fw-bold text-capitalize ">
                        reviews
                      </h6>
                      &#x29;
                    </p>
                  </div>
                  <hr className="lineCard m-0 " />
                  <div className="priceAndTestimonial  justify-content-between  py-2 d-flex">
                    <div className="price">
                      <i className="iconDollar fa-solid fa-dollar-sign"></i>
                      <span className="dollarNumber">90</span>
                    </div>
                    <div className="userFollowAndComment d-flex">
                      <div className="user">
                        <i className="fa-solid fa-user"></i>
                        <span className="">80</span>
                      </div>
                      <div className="comment ms-2">
                        <i className="fa-solid fa-comment"></i>
                        <span className="">23</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="cardSlide  w-100 rounded-2 mx-auto">
                <div className="imageContent ">
                  <img className="w-100 " src={imgCoures_2} alt="" />
                </div>
                <div className="textContent p-2">
                  <h5 className="mb-3 text-capitalize fw-bold">
                    information technology
                  </h5>
                  <div className="teacher  d-flex align-items-center">
                    <div className="img">
                      <img className="imgTeacher" src={imgTeacher_2} alt="" />
                    </div>
                    <h6 className="name  text-capitalize text-black-50  ms-3">
                      by smith aliex
                    </h6>
                  </div>
                  <div className="statistic mt-3 d-flex align-align-items-center">
                    <div className="stars">
                      <i className="starColor  iconStar fa-solid fa-star"></i>
                      <i className="starColor  iconStar fa-solid fa-star"></i>
                      <i className="starColor  iconStar fa-solid fa-star"></i>
                      <i className="starColor  iconStar fa-solid fa-star"></i>
                      <i className=" text-dark  iconStar fa-solid fa-star"></i>
                    </div>
                    <p className="reviews ms-3 d-flex align-content-center">
                      &#x28; <span className="numberReviews fw-bold"> 20</span>
                      <h6 className="reviews ms-1 fw-bold text-capitalize ">
                        reviews
                      </h6>
                      &#x29;
                    </p>
                  </div>
                  <hr className="lineCard m-0 " />
                  <div className="priceAndTestimonial  justify-content-between  py-2 d-flex">
                    <div className="price">
                      <i className="iconDollar fa-solid fa-dollar-sign"></i>
                      <span className="dollarNumber">90</span>
                    </div>
                    <div className="userFollowAndComment d-flex">
                      <div className="user">
                        <i className="fa-solid fa-user"></i>
                        <span className="">80</span>
                      </div>
                      <div className="comment ms-2">
                        <i className="fa-solid fa-comment"></i>
                        <span className="">23</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="cardSlide  w-100 rounded-2 mx-auto">
                <div className="imageContent ">
                  <img className="w-100 " src={imgCoures_3} alt="" />
                </div>
                <div className="textContent p-2">
                  <h5 className="mb-3 text-capitalize fw-bold">
                    master python course
                  </h5>
                  <div className="teacher  d-flex align-items-center">
                    <div className="img">
                      <img className="imgTeacher" src={imgTeacher_3} alt="" />
                    </div>
                    <h6 className="name  text-capitalize text-black-50  ms-3">
                      by michel smith
                    </h6>
                  </div>
                  <div className="statistic mt-3 d-flex align-align-items-center">
                    <div className="stars">
                      <i className="starColor  iconStar fa-solid fa-star"></i>
                      <i className="starColor  iconStar fa-solid fa-star"></i>
                      <i className="starColor  iconStar fa-solid fa-star"></i>
                      <i className="starColor  iconStar fa-solid fa-star"></i>
                      <i className=" text-dark  iconStar fa-solid fa-star"></i>
                    </div>
                    <p className="reviews ms-3 d-flex align-content-center">
                      &#x28; <span className="numberReviews fw-bold"> 20</span>
                      <h6 className="reviews ms-1 fw-bold text-capitalize ">
                        reviews
                      </h6>
                      &#x29;
                    </p>
                  </div>
                  <hr className="lineCard m-0 " />
                  <div className="priceAndTestimonial  justify-content-between  py-2 d-flex">
                    <div className="price">
                      <i className="iconDollar fa-solid fa-dollar-sign"></i>
                      <span className="dollarNumber">90</span>
                    </div>
                    <div className="userFollowAndComment d-flex">
                      <div className="user">
                        <i className="fa-solid fa-user"></i>
                        <span className="">80</span>
                      </div>
                      <div className="comment ms-2">
                        <i className="fa-solid fa-comment"></i>
                        <span className="">23</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="cardSlide  w-100 rounded-2 mx-auto">
                <div className="imageContent ">
                  <img className="w-100 " src={imgCoures_4} alt="" />
                </div>
                <div className="textContent p-2">
                  <h5 className="mb-3 text-capitalize fw-bold">
                    master javaScript course
                  </h5>
                  <div className="teacher  d-flex align-items-center">
                    <div className="img">
                      <img className="imgTeacher" src={imgTeacher_4} alt="" />
                    </div>
                    <h6 className="name  text-capitalize text-black-50  ms-3">
                      by wallin john
                    </h6>
                  </div>
                  <div className="statistic mt-3 d-flex align-align-items-center">
                    <div className="stars">
                      <i className="starColor  iconStar fa-solid fa-star"></i>
                      <i className="starColor  iconStar fa-solid fa-star"></i>
                      <i className="starColor  iconStar fa-solid fa-star"></i>
                      <i className="starColor  iconStar fa-solid fa-star"></i>
                      <i className=" text-dark  iconStar fa-solid fa-star"></i>
                    </div>
                    <p className="reviews ms-3 d-flex align-content-center">
                      &#x28; <span className="numberReviews fw-bold"> 20</span>
                      <h6 className="reviews ms-1 fw-bold text-capitalize ">
                        reviews
                      </h6>
                      &#x29;
                    </p>
                  </div>
                  <hr className="lineCard m-0 " />
                  <div className="priceAndTestimonial  justify-content-between  py-2 d-flex">
                    <div className="price">
                      <i className="iconDollar fa-solid fa-dollar-sign"></i>
                      <span className="dollarNumber">90</span>
                    </div>
                    <div className="userFollowAndComment d-flex">
                      <div className="user">
                        <i className="fa-solid fa-user"></i>
                        <span className="">80</span>
                      </div>
                      <div className="comment ms-2">
                        <i className="fa-solid fa-comment"></i>
                        <span className="">23</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="cardSlide  w-100 rounded-2 mx-auto">
                <div className="imageContent ">
                  <img className="w-100 " src={imgCoures_5} alt="" />
                </div>
                <div className="textContent p-2">
                  <h5 className="mb-3 text-capitalize fw-bold">
                    master web developer
                  </h5>
                  <div className="teacher  d-flex align-items-center">
                    <div className="img">
                      <img className="imgTeacher" src={imgTeacher_5} alt="" />
                    </div>
                    <h6 className="name  text-capitalize text-black-50  ms-3">
                      by john walle
                    </h6>
                  </div>
                  <div className="statistic mt-3 d-flex align-align-items-center">
                    <div className="stars">
                      <i className="starColor  iconStar fa-solid fa-star"></i>
                      <i className="starColor  iconStar fa-solid fa-star"></i>
                      <i className="starColor  iconStar fa-solid fa-star"></i>
                      <i className="starColor  iconStar fa-solid fa-star"></i>
                      <i className=" text-dark  iconStar fa-solid fa-star"></i>
                    </div>
                    <p className="reviews ms-3 d-flex align-content-center">
                      &#x28; <span className="numberReviews fw-bold"> 20</span>
                      <h6 className="reviews ms-1 fw-bold text-capitalize ">
                        reviews
                      </h6>
                      &#x29;
                    </p>
                  </div>
                  <hr className="lineCard m-0 " />
                  <div className="priceAndTestimonial  justify-content-between  py-2 d-flex">
                    <div className="price">
                      <i className="iconDollar fa-solid fa-dollar-sign"></i>
                      <span className="dollarNumber">90</span>
                    </div>
                    <div className="userFollowAndComment d-flex">
                      <div className="user">
                        <i className="fa-solid fa-user"></i>
                        <span className="">80</span>
                      </div>
                      <div className="comment ms-2">
                        <i className="fa-solid fa-comment"></i>
                        <span className="">23</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Courses;
