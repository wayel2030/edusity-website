// eslint-disable-next-line no-unused-vars
import React from "react";
import "../css/mainStyle.css";
import "./topNavbar.css";
import Account from "../account/Account";

function CallUs() {
  return (
    <>
      <div className="d-flex align-items-center">
        <div className="">
          <a href="">
            <i className="iconCall iconStyle fa-solid fa-square-phone"></i>
          </a>
        </div>
        <div className="contentNumber ms-2">
          <a className="numberCall" href="">
            +01 383736522
          </a>
        </div>
      </div>
    </>
  );
}
function ContactToEmail() {
  return (
    <>
      <div className="d-flex align-items-center ms-4">
        <div className="">
          <a href="">
            <i className=" iconStyle fa-solid fa-envelope"></i>
          </a>
        </div>
        <div className="contentNumber ms-2">
          <a className="numberCall" href="">
            UniversityEdusity@edusity@gmail.com
          </a>
        </div>
      </div>
    </>
  );
}
function Location() {
  return (
    <>
      <div className="d-flex align-items-center ms-4">
        <div className="">
          <a href="">
            <i className="iconStyle fa-solid fa-location-dot"></i>
          </a>
        </div>
        <div className="contentNumber ms-2">
          <a className="numberCall" href="">
          New York, New York(NY), 10011
          </a>
        </div>
      </div>
    </>
  );
}

const TopNavBar = () => {
  return (
    <nav className="topNavbar   p-1">
      <div className="container">
        <div className="d-flex">
          <CallUs />
          <ContactToEmail />
          <Location />
          <Account />
          
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
