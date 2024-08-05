import "./program.css";
import "../css/mainStyle.css";
import program_1 from "../../../public/images/program/1.jpg";
import program_2 from "../../../public/images/program/2.jpg";
import program_3 from "../../../public/images/program/3.jpg";
const Program = () => {
  return (
    <section id="program" className="program">
      <div className="programContainer py-2">
        <div data-aos="flip-left" className="imgContent rounded ">
          <img className="rounded" src={program_1} alt="" />
          <div className="caption rounded">
            <i className="captionIcon  fa-solid fa-user-graduate"></i>
            <h6 className="h6 title text-capitalize">graduation degree</h6>
          </div>
        </div>
        <div data-aos="flip-left" className="imgContent rounded">
          <img className="rounded" src={program_2} alt="" />
          <div className="caption rounded">
            <i className="captionIcon fa-solid fa-pen-to-square"></i>
            <h6 className="h6 title text-capitalize">master degree</h6>
          </div>
        </div>
        <div data-aos="flip-left" className="imgContent rounded">
          <img className="rounded" src={program_3} alt="" />
          <div className="caption rounded">
            <i className="captionIcon fa-solid fa-book-open-reader"></i>
            <h6 className="h6 title text-capitalize">post graduation</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
