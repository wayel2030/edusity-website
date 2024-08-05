// eslint-disable-next-line no-unused-vars
import React from "react";
import "./ContactUs.css";
import "../css/mainStyle.css";
import MainButton from "../MainButton/MainButton";

const ContactUs = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2b24848d-3078-46f2-b167-428a5d8f2355");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <section className="ContactUs">
      <div className="row justify-content-center justify-content-md-start ">
        <div className="col-11 col-md-6 d-flex flex-column text-center text-md-start align-items-center align-items-md-start">
          <div className="d-flex align-items-center">
            <h3 className="text-capitalize">send us a message</h3>
            <i className="ms-2 iconMessageContactUs fa-solid fa-envelope"></i>
          </div>
          <p className="contactDescr lead fs-6 mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque a
            beatae necessitatibus consequuntur porro soluta harum culpa. Sint,
            vitae quam modi optio voluptatibus harum, soluta rerum voluptate
            qui, quisquam quia.
          </p>
          <ul className="p-0 ">
            <div className="d-flex align-items-center mt-2">
              <i className="iconContact fa-solid fa-square-envelope"></i>
              <h6 className="title text-capitalize lead ms-2">
                contactWayel@gmail.com
              </h6>
            </div>
            <div className="d-flex align-items-center mt-2">
              <i className="iconContact fa-solid fa-phone-volume"></i>
              <h6 className="title text-capitalize lead ms-2">
                +123-34222-4432
              </h6>
            </div>
            <div className="d-flex align-items-center mt-2">
              <i className="iconContact fa-solid fa-location-dot"></i>
              <h6 className="title text-capitalize lead ms-2">
                Kitzmiller, West Virginia(WV), 21538
              </h6>
            </div>
          </ul>
        </div>
        <div className="col-11 col-md-6">
          <form
            onSubmit={onSubmit}
            action=""
            className="text-center text-md-start"
          >
            <div className="mb-3">
              <label htmlFor="" className="form-label text-capitalize">
                your Name
              </label>
              <input
                type="text"
                className="form-control"
                name=""
                id=""
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label text-capitalize">
                phone number
              </label>
              <input
                type="tel"
                className="form-control"
                name=""
                id=""
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label text-capitalize">
                your email
              </label>
              <input
                type="email"
                className="form-control"
                name=""
                id=""
                required
                placeholder="Enter Your email"
              />
            </div>
            <div className="textFeedback d-flex justify-content-center">
              <textarea
                className="form-control  my-2 "
                name=""
                id=""
              ></textarea>
            </div>
            <MainButton name="submit now" />
          </form>
          <span>{result}</span>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
