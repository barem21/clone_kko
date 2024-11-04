# 참고사항

## 1. 아이콘 폰트(딩벳폰트)

- https://fontawesome.com (가장 유명?!)
- https://xpressengine.github.io/XEIcon/
- head에서 &lt;link&gt; 태그 확인

### 1.1. 본 프로젝트 활용 아이콘 폰트

- https://react-icons.github.io/react-icons/

## 2. CSS 초기화 처리 (기본 설정)

### 2.1. reset.css

- https://meyerweb.com/eric/tools/css/reset/reset.css
- 간략한 부분에 대해서 초기화 처리

### 2.2. normalize.css

- https://necolas.github.io/normalize.css/8.0.1/normalize.css
- 상세한 부분에 대해서 초기화 처리

### 2.3. CSS 초기화 작성예시

```html
<head>
  <link
    rel="stylesheet"
    href="https://meyerweb.com/eric/tools/css/reset/reset.css"
  />
  <link rel="stylesheet" href="./css/common.css" />
  ...
</head>
```

### 2.4. 필수 주의사항

- 초기화 처리 사용시 reset.css나 normalize.css를 먼저 호출하고 본인의 css(common.css 등)를 뒤에 호출해야 합니다.
- 초기화 처리를 늦게 호출할 경우 직접 지정한 CSS 초기화 처리가 정상적으로 동작되지 않습니다.

## 3. CSS 중 display속성에 대해서

### 3.1. display:inline

```
<span></span>, <b></b>, <strong></strong>, <img>, <a> ...
```

- 가로로 배치된다.
- 너비, 높이 비활성
- padding, margin 속성이 일부 미지원(상/하)

### 3.2. display:block

```
<div>, <header>, <main>, <footer>
<ul>, <li>, <h1>, <h2>, <p> ...
```

- 자동으로 너비가 100% 처리됨
- 너비, 높이, margin, padding 속성 모두 지원

### 3.3. display:inline-block

- inline 이면서 너비, 높이, margin, padding 등 속성 모두 지원
- 기본 너비는 내용의 길이에 따라 자동으로 늘어남
- 가로로 배치된다.

## 4. CSS 정리

- VSCode : PostCSS Sorting 설치

```
정렬 속성 설정
관리 도구 > 설정 메뉴 > settings.json 검색 > 파란색 글자 settings.json 찾아서 클릭
```

- 아래 설정값 정보를 추가 (추가시 기존 마지막 설정옵션 뒤에 쉼표(,) 추가 필수)

```
"postcssSorting.config": {
  "properties-order": ["display", "list-style", "position", "top", "right", "bottom", "left", "float", "clear", "width", "height", "padding", "margin", "border", "background", "color", "font", "font-weight", "font-size", "line-height", "font-family", "letter-spacing", "text-decoration", "text-align", "verticla-align", "white-space", "content", "animation"]
}
```

- 관리 도구 > 바로 가기 키 메뉴

```
postcss sorting 검색 후 더블클릭해서 단축키 설정 추가 (Ctrl + Shift + / 로 설정)
```

## 5. CSS 표준검사

```
- https://jigsaw.w3.org/css-validator
- https://caniuse.com
```

## 6. HTML 표준검사

```
- https://validator.w3.org
- https://caniuse.com
```

## 7. 파비콘(favicon) 설정

- 파비콘 생성 : https://realfavicongenerator.net
- &lt;head&gt; 안에 추가

```
<link rel="icon" href="파비콘 이미지 파일 경로" type="image/x-icon" />
```
