window.addEventListener("load", function () {
  const SLIDE_CARD_DATA_URL = "/apis/cards.json";

  fetch(SLIDE_CARD_DATA_URL)
    .then(function (response) {
      //console.log(response);
      const result = response.json();
      //console.log(result);
      return result;
    })
    .then(function (result) {
      //console.log(result);

      //html만들기
      let htmlSlideCard = "";
      for (let i = 0; i < result.length; i++) {
        const obj = result[i];
        const slideCard = `
          <div class="swiper-slide">
            <a href="${obj.link}" class="card-loop">
              <div class="card-img">
                <img src="./images/${obj.imgpath}" alt="${obj.cardname}" />
              </div>
              <div class="card-info">
                <h5 class="card-title">${obj.cardname}</h5>
                <span class="card-count">${obj.cardno}</span>
              </div>
            </a>
          </div>
        `;
        htmlSlideCard += slideCard;
      }
      //console.log(htmlSlideCard);

      //생성된 html을 원하는 곳에 배치
      const mobileSlideCard = document.querySelector(
        ".mob-list-card .swiper-wrapper"
      );
      //console.log(mobileSlideCard);
      mobileSlideCard.innerHTML = htmlSlideCard;

      //swiper 생성 및 실행
      const cardSwiper = new Swiper(".mob-list-card", {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 20,
      });
    })
    .catch(function (error) {
      console.log("에러출력:", error);
    });
});
