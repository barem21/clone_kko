window.addEventListener("load", function () {
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

  /* 마우스 오버/아웃에 따른 자동재생 정지/시작 처리 추가 */
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
  /* 마우스 오버/아웃에 따른 자동재생 정지/시작 처리 추가 */
});
