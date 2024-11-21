import VisualSlide from "./VisualSlide";
import CardSlide from "./CardSlide";

function MainSlide() {
  return (
    <div className="main-slide">
      <div className="slide-left">
        <VisualSlide></VisualSlide>
      </div>

      <div className="slide-right">
        <CardSlide></CardSlide>
      </div>
    </div>
  );
}

export default MainSlide;
