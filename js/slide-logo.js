window.addEventListener("load", function () {
  //MockData
  //{imgUrl:"경로", desc:"설명문"}

  //API URL
  const LOGO_DATA_URL = "/apis/logodata.json";

  //API를 통해서 데이터 불러오기 : request
  //API를 통해서 불려들여진 결과물 : response
  //
  fetch(LOGO_DATA_URL)
    .then(function (response) {
      //console.log(response);
      const result = response.json(); //json으로 파싱
      //console.log(result);
      return result;
    })
    .then(function (result) {
      // 1. json 뜯기
      console.log(result);

      // 2. 반복해서 html태그를 생성
      let logoHtml = "";
      for (let i = 0; i < 9; i++) {
        const data = `<div class="swiper-slide"><img src="${result[i].imgUrl}" alt="${result[i].desc}" /></div>`;
        logoHtml += data;
      }
      console.log(logoHtml);

      // 3. 생성된 html을 원하는 곳에 배치
      // 4. swiper 생성 및 실행
    })
    .catch(function (error) {
      console.log("오류발생:", error); //에러 확인
    });

  //const logoData;

  const visualSwiper = new Swiper(".change-logo", {
    effect: "fade",
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    fadeEffect: {
      crossFade: true,
    },
  });
});
