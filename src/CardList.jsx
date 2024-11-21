function CardList() {
  return (
    <>
      <h4 className="list-title">폴더 📁</h4>
      <div className="list-card" id="card-api"></div>
      <div className="list-btn-wrap">
        <button id="btn-more-card" className="btn">
          폴더 전체보기
        </button>
      </div>
    </>
  );
}

export default CardList;
