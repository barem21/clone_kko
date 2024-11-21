import "./css/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-layout">
          <div className="footer-left">
            <div className="footer-logo">
              <a href="#">
                <img src="/images/etc/logo-kakao-footer.png" alt="kakaobrain" />
              </a>
            </div>
            <div className="footer-text">
              카카오브레인의 혁신은 모든 크루의 물음에서 시작합니다.
              <br />
              AI 없이는 상상할 수 없는 세상을 만들기 위해선 생각하지 못한 많은
              물음이 필요합니다.
              <br />
              세상을 변화시킬 수 있는 새로운 물음을 던질 크루를 기다립니다.
            </div>
            <div className="footer-btn">
              <a
                href="https://careers.kakaobrain.com/"
                target="_blank"
                className="btn-join"
              >
                지원하러 가기
              </a>
            </div>
          </div>

          <div className="footer-right">
            <div className="menu-left">
              <dl className="menu-link">
                <dt className="title">정보</dt>
                <dd>
                  <a href="#">
                    영업페이지<i className="xi-arrow-up"></i>
                  </a>
                </dd>
                <dd>
                  <a href="#">이메일무단수집거부</a>
                </dd>
                <dd>
                  <a href="#">개인정보처리방침</a>
                </dd>
                <dd>
                  <a href="#">오시는 길</a>
                </dd>
              </dl>
            </div>
            <div className="menu-right">
              <dl className="menu-link">
                <dt className="title">문의</dt>
                <dd>
                  <a href="#">영입</a>
                </dd>
                <dd>
                  <a href="#">PR</a>
                </dd>
                <dd>
                  <a href="#">마케팅·사업제휴</a>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copy">
        <div className="footer-layout">
          <div className="copy-left">
            <span className="copy">
              Kakao Brain Corp. @ All rights reserved.
            </span>
          </div>
          <div className="copy-right">
            <ul className="link-sns">
              <li>
                <a href="#" className="link-in">
                  <i className="xi-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#" className="link-youtube">
                  <i className="xi-youtube-play"></i>
                </a>
              </li>
              <li>
                <a href="#" className="link-github">
                  <i className="xi-github"></i>
                </a>
              </li>
              <li>
                <a href="#" className="link-facebook">
                  <i className="xi-facebook"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
