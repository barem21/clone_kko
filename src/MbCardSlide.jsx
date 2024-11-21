function MbCardSlide() {
  return (
    <div className="mob-contents-slide">
      <h4 className="list-title">폴더 📁</h4>

      <div className="swiper mob-list-card">
        <div className="swiper-wrapper"></div>
      </div>

      <div className="list-btn-wrap">
        <button id="btn-more-card" className="btn">
          폴더 전체보기
        </button>
      </div>
    </div>
  );
}

export default MbCardSlide;
