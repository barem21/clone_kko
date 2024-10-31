# kakaoblog

## 1. image CSS

- 이미지 사이즈를 영역에 모두 보이도록 처리 (단점:공백이 존재)

```css
img {
  object-fit: contain;
}
```

- 이미지 사이즈를 영역에 맞게 비례해서 처리 (단점:이미지 일부가 가려짐)

```css
img {
  object-fit: cover;
}
```

## 2. CSS에서 글꼴 읽어오기

- 사이트 작업 진행 전 반드시 글꼴에 대해서 준비해야 함
- 디자이너에게 사용한 글꼴을 명시받아야 함
- 웹폰트가 지원(구글 웹폰트 등)되는 경우에는 해당 웹폰트를 사용
- 웹폰트가 지원되지 않는 경우 직접 웹폰트를 생성해서 사용(라이센스 문제가 발생될 수 있음)
- 글꼴 배치순서에 따라 영문/한글 폰트가 다르게 출력될 수 있으며, 영문 전용 웹폰트(예:roboto)의 경우 한글은 적용되지 않음

### 2.1. 구글 웹폰트

- https://fonts.google.com
- GET Font에서 @import를 활용한다.

### 2.2. 눈누

- https://noonnu.cc
- 웹폰트로 사용해서 소스 코드를 복사해서 활용한다.
- 단점은 속도가 느림!

### 2.3. 웹폰트 사용 참고 사이트

- https://www.webtro.co.kr
- https://www.gdweb.co.kr

### 2.4. 글꼴은 common.css에 적용

- 모든 페이지에 적용되기 때문에 공통으로 사용하는 .css 에 작성

```
@charset "utf-8";
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");

body{
    color:#222;
    font-family:"Inter","Noto Sans KR",sans-serif;
    font-style:normal;
    font-weight:400;
    font-optical-sizing:auto;
}
```
