// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "../css/mainStyle.css";
import "./BtnScrollTop.css";

const BtnScrollTop = () => {
  const [btnScrollTop, setBtnScrollTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY < 300 ? setBtnScrollTop(false) : setBtnScrollTop(true);
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="contentBtnScrollTop">
      {btnScrollTop && (
        <i
          className="btnScrollTop fa-solid fa-arrow-up"
          onClick={scrollTop}
        ></i>
      )}
    </div>
  );
};

export default BtnScrollTop;
