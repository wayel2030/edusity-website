import "./Gallery.css";
import MainButton from "../MainButton/MainButton";
import galler_1 from "/images/gallery/gallery (1).jpg";
import galler_2 from "/images/gallery/gallery (2).jpg";
import galler_3 from "/images/gallery/gallery (3).jpg";
import galler_4 from "/images/gallery/gallery (4).jpg";
import galler_5 from "/images/gallery/gallery (5).jpg";
import galler_6 from "/images/gallery/gallery (6).jpg";
import galler_7 from "/images/gallery/gallery (7).jpg";
import galler_8 from "/images/gallery/gallery (8).jpg";
// import galler_9 from "/images/gallery/gallery (9).jpg";
// import galler_10 from "/images/gallery/gallery (10).jpg";
const Gallery = () => {
  return (
    <section id="campus" className="gallery ">
      <GalleryLineOne />
      <GalleryLineTwo />
      <GalleryLineThree />
      <div className="mt-5">
        <MainButton name="see more" />
      </div>
    </section>
  );
};

export default Gallery;

function GalleryLineOne() {
  return (
    <div>
      <div className="row justify-content-center  justify-content-lg-between">
        <div className="col-10  col-md-3">
          <img src={galler_1} alt="" data-aos="fade-up-right" />
        </div>
        <div className="col-10 col-md-6 mt-3 mt-lg-0">
          <img src={galler_2} alt="" />
        </div>
        <div className="col-10 col-md-3 mt-3 mt-lg-0">
          <img src={galler_3} alt="" data-aos="fade-up-left" />
        </div>
      </div>
    </div>
  );
}
function GalleryLineTwo() {
  return (
    <div>
      <div className="row justify-content-center mt-3 justify-content-lg-between">
        <div className="col-10  col-md-6">
          <img src={galler_4} alt="" data-aos="fade-up-right" />
        </div>
        <div className="col-10 col-md-6 row  mt-3 justify-content-center mt-md-0 justify-content-lg-between ">
          <div className="col-12 p-0 col-md-6">
            <img src={galler_5} alt="" />
          </div>
          <div className="col-12 p-0 mt-lg-0 mt-3 col-md-6">
            <img src={galler_6} alt=""  data-aos="fade-up-left"/>
          </div>
        </div>
      </div>
    </div>
  );
}
function GalleryLineThree() {
  return (
    <div>
      <div className="row justify-content-center mt-3 justify-content-lg-between">
        <div className="col-10  col-md-6">
          <img src={galler_7} alt="" data-aos="fade-up-right" />
        </div>
        <div className="col-10 col-md-6  mt-md-0 mt-3">
          <img src={galler_8} alt="" data-aos="fade-up-left" />
        </div>
      </div>
    </div>
  );
}
