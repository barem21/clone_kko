window.addEventListener("load", function () {
  //json url
  const MAINSLIDE_DATA_URL = "/apis/main.json";

  fetch(MAINSLIDE_DATA_URL)
    .then(function (response) {
      const result = response.json(); //json으로 파싱
      return result;
    })
    .then(function (result) {
      //console.log(result);
      let slideHtml = "";
      for (let i = 0; i < result.length; i++) {
        const obj = result[i];
        const htmlData = `
          <div class="swiper-slide">
            <a href="${obj.url}">
              <img src="./images/${obj.pic}" alt="${obj.title}" />
              <span class="slide-title">${obj.title}</span>
            </a>
          </div>
        `;
        slideHtml += htmlData;
      }
      //console.log(slideHtml);

      const mainVisualSlideTag = document.querySelector(
        ".visual-slide .swiper-wrapper"
      );
      mainVisualSlideTag.innerHTML = slideHtml;

      //슬라이드 처리
      const visualSwiper = new Swiper(".visual-slide", {
        loop: true,
        pagination: {
          el: ".visual-slide .swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        speed: 800,
      });

      //마우스 오버/아웃에 따른 자동재생 정지/시작 처리 추가
      const visualSwiperSelect = document.querySelector(".visual-slide");
      //console.log(visualSwiper);

      //마우스 오버
      visualSwiperSelect.addEventListener("mouseenter", function () {
        //console.log("over");
        visualSwiper.autoplay.stop();
      });

      //마우스 아웃
      visualSwiperSelect.addEventListener("mouseleave", function () {
        //console.log("out");
        visualSwiper.autoplay.start();
      });
      //마우스 오버/아웃에 따른 자동재생 정지/시작 처리 추가
    })
    .catch(function (error) {
      console.log("error:", error);
    });
});
