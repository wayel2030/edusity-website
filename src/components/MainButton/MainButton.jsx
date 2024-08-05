import "../css/mainStyle.css"
import "./MainButton.css";
function MainButton(prop) {
  return (
    <div className="d-flex justify-content-center">
      <a href="/">
        <button className="bn54">
          <span className="bn54span text-capitalize">{prop.name}</span>
          <i className="text-white btnArrow fa-solid fa-arrow-right"></i>
        </button>
      </a>
    </div>
  );
}

export default MainButton;
