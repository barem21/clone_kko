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
      //result갯수만큼 반복
      for (let i = 0; i < result.length; i++) {
        const obj = result[i];
        const htmlData = `
          <div class="swiper-slide" data-pc="${obj.pc}" data-mobile="${obj.mobile}">
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

      const slideList = document.querySelectorAll(
        ".visual-slide .swiper-wrapper .swiper-slide"
      );
      //console.log(slideList);

      slideList.forEach(function (aaa) {
        //console.log(aaa);
        //이후 처리
      });

      /* ################################################################### */

      //접속환경(PC/모바일) 확인
      let windowState = "PC"; //초기값은 PC
      const windowWidth = this.window.innerWidth; //브라우져 넓이 확인
      //console.log(windowWidth);

      if (windowWidth > 1024) {
        //pc 버전
        if (windowState != "PC") {
          windowState = "PC";
          //console.log(windowState);
        }
      } else {
        //모바일 버전
        if (windowState != "Mobile") {
          windowState = "Mobile";
          //console.log(windowState);
        }
      }

      //브라우저 크기가 바뀌면 접속환경(PC/모바일) 확인
      window.addEventListener("resize", function () {
        const windowWidth = this.window.innerWidth;

        if (windowWidth > 1024) {
          //pc 버전
          if (windowState != "PC") {
            windowState = "PC";
            //console.log(windowState);
          }
        } else {
          //모바일 버전
          if (windowState != "Mobile") {
            windowState = "Mobile";
            //console.log(windowState);
          }
        }
      });

      /* ################################################################### */

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

      /* ################################################################### */

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
