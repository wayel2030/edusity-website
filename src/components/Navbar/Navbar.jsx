import { useState } from "react";
import "../css/mainStyle.css";
import "./Navbar.css";
import { useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  // Function Scrolling change background navbar
  let [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <>
      <nav
        className={`navbar position-fixed  bg-body-tertiary navbar-dark bg-dark navbar-expand-lg fixed-top ${
          sticky ? "showNavBackground" : ""
        } `}
      >
        <div className="container-fluid">
          <a className="navbar-brand text-white d-flex" href="#">
            <i className="logo fa-solid fa-graduation-cap"></i>
            <h1 className="logo_title   text-capitalize ms-1 fw-bold">
              edusity
            </h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas  offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body ">
              <ul className="navbar-nav justify-content-end  align-items-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <a
                    className="nav-link text-white active text-capitalize"
                    aria-current="page"
                    href="#"
                  >
                    <Link
                      to="hero"
                      spy={true}
                      offset={0}
                      duration={300}
                      smooth={true}
                    >
                      home
                    </Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white  text-capitalize"
                    aria-current="page"
                    href="#"
                  >
                    <Link
                      to="program"
                      spy={true}
                      offset={-230}
                      duration={500}
                      smooth={true}
                    >
                      program
                    </Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white  text-capitalize"
                    aria-current="page"
                    href="#"
                  >
                    <Link
                      to="about"
                      spy={true}
                      offset={-40}
                      duration={500}
                      smooth={true}
                    >
                      about us
                    </Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white  text-capitalize"
                    aria-current="page"
                    href="#"
                  >
                    <Link
                      to="campus"
                      spy={true}
                      offset={-100}
                      duration={500}
                      smooth={true}
                    >
                      campus
                    </Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white  text-capitalize"
                    aria-current="page"
                    href="#"
                  >
                    <Link
                      to="testimonial"
                      offset={-230}
                      spy={true}
                      duration={500}
                      smooth={true}
                    >
                      testimonials
                    </Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white  text-capitalize"
                    aria-current="page"
                    href="#"
                  >
                    <Link
                      to="contact"
                      spy={true}
                      offset={0}
                      duration={500}
                      smooth={true}
                    >
                      contact us
                    </Link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
