// import React from "react";
import About from "./components/About/About";
import BtnScrollTop from "./components/ButtonScrollTop/BtnScrollTop";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/gallery/Gallery";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Courses from "./components/Our Courses/Courses";
import Program from "./components/Program/Program";
import Testimonial from "./components/Testimonial/Testimonial";
import Title from "./components/Title/Title";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="our program" title="what we offer" />
        <Program />
        <Courses />
        <About />
        <Title subTitle="gallery" title="campus photos" />
        <Gallery />
        <Title subTitle="testimonial" title="what student says" />
        <Testimonial />
        <Title subTitle="contact us" title="get in touch" />
        <ContactUs />
        <Footer />
        <BtnScrollTop />
      </div>
    </div>
  );
};

export default App;
