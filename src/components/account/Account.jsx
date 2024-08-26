// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";
import "./account.css";

const Account = () => {
  const ElementLogin = useRef();

  function ModalLogin() {
    function CloseBtn() {
      return (
        <>
          <i
            onClick={() => (ElementLogin.current.style.display = "none")}
            className="btnClose fa-solid fa-rectangle-xmark"
          ></i>
        </>
      );
    }
    return (
      <section ref={ElementLogin} className="loginBage p-5 rounded text-white">
        <CloseBtn />
        <form>
          <div className="mb-2">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              Well never share your email with anyone else.
            </div>
          </div>
          <div className="mb-2">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-2 form-check d-flex justify-content-center">
            <input
              type="checkbox"
              className="form-check-input me-3"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-lg btn-primary">
            Submit
          </button>
        </form>
        <div className="accountBy mt-3 d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex align-items-center mb-2">
            <i className="iconAccount fa-brands fa-google mt-1 me-2"></i>
            <a href="" className="nameWebsite text-capitalize text-white">
              account by google
            </a>
          </div>
          <div className="d-flex align-items-center mb-2">
            <i className="iconAccount fab fa-facebook  mt-1 me-2"></i>
            <a href="" className="nameWebsite text-capitalize text-white">
              account by facebook
            </a>
          </div>
        </div>
      </section>
    );
  }
  return (
    <>
      <section className="accountContent position-absolute">
        <div className="d-fle">
          <div className="dropdown me-1">
            <button
              type="button"
              className="btn btnDropDown btn-light btn-sm dropdown-toggle fw-bold text-capitalize px-3"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              data-bs-offset="10,20"
            >
              account
              <i className="userIconStyle fa-solid fa-user"></i>
            </button>
            <ul className="dropdown-menu text-center">
              <li>
                <a
                  className="dropdown-item text-capitalize fw-bold"
                  href="#"
                  onClick={() => {
                    return (ElementLogin.current.style.display = "block");
                  }}
                >
                  <i className="fa-solid fa-user me-2"></i>
                  login
                </a>
              </li>
              <li>
                <a className="dropdown-item text-capitalize fw-bold" href="#">
                  <i className="fa-solid fa-lock me-2"></i>
                  register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <ModalLogin />
    </>
  );
};

export default Account;
