// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Footer.css";
const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <section id="contact" className="footer">
      <hr />
      <div className="row text-center text-md-start">
        <div className="col-10 col-md-6">
          <p>&copy;{date} educity. allright reserved.</p>
        </div>
        <div className="col-10 col-md-6">
          <ul className="footerLink d-flex align-items-center justify-content-end">
            <li>
              <a className="text-capitalize me-3 text-dark" href="#">
                teams of service
              </a>
            </li>
            <li>
              <a className="text-capitalize me-3 text-dark" href="#">
                privacy police
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
