import { useEffect } from "react";
import "./css/header.css";

function Header() {
  //javascript 코딩 처리
  //window.addEventlistenner("load",function(){})
  useEffect(function () {
    //header를 보관함에 담아둔다.
    const header = document.querySelector(".header");

    //스크롤 체크하기
    window.addEventListener("scroll", function () {
      alert(header);
      const scrollPositionY = window.scrollY;

      //스크롤 시작하면 header에 class추가/제거하기
      if (scrollPositionY > 0) {
        header.classList.add("header-active");
      } else {
        header.classList.remove("header-active");
      }
    });

    const mobileButton = document.querySelector("#btn-mbmenu");
    const mobileButtonImage = document.querySelector("#btn-mbmenu img");
    const mobileMenuBg = document.querySelector(".bg-mbmenu");
    const mobileMenu = document.querySelector(".list-mbmenu");
    const openIcon = "/images/icon/icon-hbr.png";
    const closeIcon = "/images/icon/icon-close.png";

    mobileButton.addEventListener("click", function () {
      // src 교체하기
      const imageSrc = mobileButtonImage.getAttribute("src");
      if (imageSrc === openIcon) {
        mobileButtonImage.setAttribute("src", closeIcon);
        mobileMenuBg.classList.add("bg-mbmenu-active");
        mobileMenu.classList.add("list-mbmenu-active");
      } else {
        mobileButtonImage.setAttribute("src", openIcon);
        mobileMenuBg.classList.remove("bg-mbmenu-active");
        mobileMenu.classList.remove("list-mbmenu-active");
      }
    });

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
  }, []);

  return (
    <>
      <header className="header">
        <div className="header-wrap">
          <div className="header-logo">
            <a href="/">
              <img src="/images/etc/logo-kakao.png" alt="kakaobrain" />
            </a>
            <div className="swiper change-logo">
              <div className="swiper-wrapper"></div>
            </div>
          </div>
          <div className="nav">
            <a href="#">소식</a>
            <a href="#">팀 & 크루</a>
            <a href="#">영입</a>
            <button id="btn-search">
              <img src="/images/icon/icon-search.png" alt="검색" />
            </button>

            <button id="btn-mbmenu">
              <img src="/images/icon/icon-hbr.png" alt="모바일 메뉴" />
            </button>
          </div>
        </div>
      </header>

      <div className="bg-mbmenu"></div>
      <ul className="list-mbmenu">
        <li>
          <a href="#">소식</a>
        </li>
        <li>
          <a href="#">팀 & 크루</a>
        </li>
        <li>
          <a href="#">영입</a>
        </li>
      </ul>
    </>
  );
}

export default Header;
