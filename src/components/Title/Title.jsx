import "../css/mainStyle.css";
import "./Title.css";
const title = ({ subTitle, title }) => {
  return (
    <div className="titleSection text-center  wow slideInLeft py-5">
      <div style={{ overflow: "hidden" }}>
        <p
          className="text-capitalize supTitle"
          data-aos="fade-up"
          data-aos-duration="1400"
        >
          {subTitle}
        </p>
      </div>
      <div style={{ overflow: "hidden" }}>
        <h2
          className="text-capitalize title"
          data-aos="fade-up"
          data-aos-duration="1400" 
          data-aos-delay= "200"
        >
          {title}
        </h2>
      </div>
    </div>
  );
};
export default title;
