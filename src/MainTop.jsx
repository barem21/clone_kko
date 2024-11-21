import MainSlide from "./MainSlide";
import MainContent from "./MainContent";

function MainTop() {
  return (
    <div className="main-wrap">
      {/* 슬라이드 */}
      <MainSlide></MainSlide>
      {/* 메인내용 */}
      <MainContent></MainContent>
    </div>
  );
}

export default MainTop;
