window.addEventListener("load", function () {
  //API URL
  const CARD_DATA_URL = "/apis/cards.json";

  fetch(CARD_DATA_URL)
    .then(function (response) {
      //console.log("card:", response);
      const result = response.json(); //json으로 파싱
      //console.log(result);
      return result;
    })
    .then(function (result) {
      //console.log("카드 결과:", result);

      //html만들기
      let htmlCard = "";
      for (let i = 0; i < result.length; i++) {
        const obj = result[i];
        const card = `
          <a href="${obj.link}" class="card-loop">
            <div class="card-img"><img src="./images/${obj.imgpath}" alt="${obj.cardname}" /></div>
            <div class="card-info">
              <h5 class="card-title">${obj.cardname}</h5>
              <span class="card-count">${obj.cardno}</span>
            </div>
          </a>
        `;
        htmlCard += card;
      }
      //console.log(htmlCard);

      const cardTag = document.querySelector(".contents-right .list-card");

      cardTag.innerHTML = htmlCard;
    })
    .catch(function (error) {
      console.log("오류발생:", error); //오류 확인
    });
});
