window.addEventListener("load", function () {
  //json url
  const PICK_DATA_URL = "/apis/crew.json";

  fetch(PICK_DATA_URL)
    .then(function (response) {
      //console.log(response);
      const result = response.json();
      //console.log(result);

      return result;
    })
    .then(function (result) {
      //console.log(result);

      //최종 html만들기
      let aTag = "";
      let crewHtml = "";
      for (let i = 0; i < result.length; i++) {
        const obj = result[i];

        aTag += `
            <a href="${obj.link}" class="thum">
                <div class="thum-img">
                    <img src="./images/${obj.imgpath}" alt="${obj.category}" />
                </div>
                <div class="thum-cate">
                    <img src="./images/icon/${obj.icon}" alt="${obj.category}" />
                    <span style="color:${obj.txtcolor};">${obj.category}</span>
                </div>
                <h5 class="thum-title">
                    ${obj.title}
                </h5>
                <span class="thum-date">${obj.day}</span>
            </a>
        `;

        let makeHtml = "";
        if ((i + 1) % 3 == 0) {
          //만들어서 추가
          makeHtml = `<div class="list-group">${aTag}</div>`;
          aTag = ""; //3배수가 되면 a태그 목록을 다음에 들어가지 않도록 초기화
        } else if (i == result.length - 1) {
          makeHtml = `<div class="list-group">${aTag}</div>`;
          aTag = ""; //남는 마지막은 a태그 목록을 다음에 들어가지 않도록 초기화
        }

        crewHtml += makeHtml;
      } //for
      //console.log(crewHtml);

      //html출력 위치
      const mainPick = document.querySelector("#crew-api");

      //html출력
      mainPick.innerHTML = crewHtml;
    })
    .catch(function (error) {
      console.log(error);
    });
});
