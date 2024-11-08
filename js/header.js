/*
1. 보관함(var,let,const)을 만들겠다.
- const : 상수, 절대 변하지 않는 보관함 (1순위로 사용)
- let : 변수, 변하는 보관함, 값을 마음대로 담을 수 있음, 라벨명이 중복되면 안됨(2순위로 사용, const에서 값이 변하는 경우가 있을 때 사용)
- var : 변수, let와 같음, 차이점은 라벨명을 중복해서 쓸 수 있지만 중복되면 마지막 값이 적용됨(앞으로는 사용금지)

2. 라벨을 붙여주겠다.
3. 그리고 라벨이 붙은 보관함에 자료를 담겠다.
4. 그리고 제어하겠다.
*/

//페이지 다 읽어들이면(load) 동작시작
window.addEventListener("load", function () {
  //모바일 메뉴 클릭시 아이콘 이미지 바꾸기(img src="경로")
  // 1. 버튼 역할하는 id 찾기
  const mobileButton = document.querySelector("#btn-mbmenu");
  //console.log(mobileButton);

  // 2. 버튼 안의 img 찾기
  const mobileButtonImage = document.querySelector("#btn-mbmenu img");
  //console.log(mobileButtonImage);

  // 3. 버튼 안의 img의 src 확인
  //const srcString = mobileButtonImage.getAttribute("src");
  //console.log(srcString);

  // 4. 버튼 클릭 처리
  const openIcon = "./images/icon/icon-hbr.png";
  const closeIcon = "./images/icon/icon-close.png";
  // 모바일 메뉴 처리 관련
  const mobileMenuBg = document.querySelector(".bg-mbmenu");
  //console.log(mobileMenuBg);
  const mobileMenu = document.querySelector(".list-mbmenu");
  //console.log(mobileMenu);

  mobileButton.addEventListener("click", function () {
    // src 교체하기
    const imageSrc = mobileButtonImage.getAttribute("src");
    if (imageSrc == openIcon) {
      mobileButtonImage.setAttribute("src", closeIcon);
      mobileMenuBg.classList.add("bg-mbmenu-active");
      mobileMenu.classList.add("list-mbmenu-active");
    } else {
      mobileButtonImage.setAttribute("src", openIcon);
      mobileMenuBg.classList.remove("bg-mbmenu-active");
      mobileMenu.classList.remove("list-mbmenu-active");
    }
  });

  //반응형 처리에 따른 아이콘 이미지, 메뉴상태 초기화 처리
  window.addEventListener("resize", function () {
    //웹브라우저의 넓이 확인
    const windowWith = window.innerWidth;
    //console.log(windowWith);

    // 반응형 처리가 1024px부터 동작될 경우
    if (windowWith > 1024) {
      mobileButtonImage.setAttribute("src", openIcon);
      mobileMenuBg.classList.remove("bg-mbmenu-active");
      mobileMenu.classList.remove("list-mbmenu-active");
    }
  });
});

//페이지 다 읽어들이면(load) 동작시작
window.addEventListener("load", function () {
  /*
  1. 사용자가 아래로 스크롤시 header 클래스 하단에 줄을 생성
  2. 사용자가 브라우저를 가장 위로 스크롤시 줄을 제거
  */
  const header = document.querySelector(".header");
  //console.log(header);

  //스크롤 체크하기
  window.addEventListener("scroll", function () {
    const scrollPositionY = window.scrollY;
    //console.log(scrollPositionY);

    //스크롤 시작하면 header에 class추가/제거하기
    if (scrollPositionY > 0) {
      header.classList.add("header-active");
    } else {
      header.classList.remove("header-active");
    }
  });
});

//페이지 다 읽어들이면(load) 동작시작
window.addEventListener("load", function () {
  const btnSearch = document.querySelector("#btn-search");

  //아이디가 btn-search를 찾아서 클릭하면 경고창에 텍스트를 출력하자.
  btnSearch.addEventListener("click", function () {
    alert("open search");
  });
});
