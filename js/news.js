window.addEventListener("load", function () {
  //API URL
  const NEWS_DATA_URL = "/apis/news.json";

  //연산처리 : html만들기
  fetch(NEWS_DATA_URL)
    .then(function (response) {
      //console.log("news:", response);
      const result = response.json(); //json으로 파싱
      //console.log(result);
      return result;
    })
    .then(function (result) {
      //console.log("뉴스 결과:", result);

      //html만들기
      let htmlNews = "";
      for (let i = 0; i < result.length; i++) {
        const obj = result[i];
        const tag = `
            <a href="${obj.link}" class="thum">
                <div class="thum-img">
                    <img src="./images/${obj.imgpath}" alt="${obj.category}" />
                </div>
                <div class="thum-cate">
                    <img src="./images/icon/${obj.icon}" alt="icon" />
                    <span style="color:${obj.txtcolor};">${obj.category}</span>
                </div>
                <h5 class="thum-title">
                    ${obj.title}
                </h5>
                <span class="thum-date">${obj.day}</span>
            </a>
        `;
        htmlNews += tag;
      }
      //console.log(htmlNews);

      const newsTag = document.querySelector(".list-new-wrap .list-group");
      //console.log(newsTag);

      newsTag.innerHTML = htmlNews;
    })
    .catch(function (error) {
      console.log("오류발생:", error); //에러 확인
    });
});
