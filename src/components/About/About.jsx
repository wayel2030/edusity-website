import "./About.css";
import "../css/mainStyle.css";
import img_about from "../../../public/images/about/1.jpg";

const About = () => {
  return (
    <section id="about" className="About row justify-content-center  justify-content-lg-between   p-5">
      <div className="col-12 col-md-5">
        <div className="img_content">
          <img className="rounded" src={img_about} alt="" />
          <div className="iconBox">
            <i className="icon fa-solid fa-circle-play"></i>
          </div>
        </div>
      </div>
      <div className="col-12  text-center text-md-start col-md-7 py-2">
         <p className="subtitleAbout fw-bold text-capitalize text-center text-md-start">about university</p>
         <h1 className="h1 text-capitalize">nurturing tomorrow is leaders Today</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ipsum excepturi tempora consequuntur sapiente!</p>
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, libero perferendis? Eaque ducimus possimus cumque quis accusantium in ipsam! Eveniet, accusantium minima vero magnam porro non iste quod vel iusto.</p>
         <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur consectetur quas nesciunt fugit dolorem. Quia suscipit, quis soluta autem earum quisquam labore voluptas. Eius quia nisi iste eum veritatis cupiditate?</p>
      </div>
    </section>
  );
};

export default About;
