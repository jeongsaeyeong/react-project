# REACT를 이용한 포트폴리오 사이트 만들기

## React(리액트)란?

리액트(React)는 Facebook에서 개발한 자바스크립트 라이브러리로, 사용자 인터페이스(UI)를 구축하기 위한 도구이다. 리액트는 컴포넌트 기반 아키텍처를 사용하며, 재사용 가능하고 관리하기 쉬운 UI 요소를 만드는 데 도움을 주며, 가상 DOM(Virtual DOM)을 활용하여 웹 애플리케이션의 효율성과 성능을 향상시키는데 중점을 두고 있다.

## lenis.js란?

Lenis는 JavaScript로 작성된 오픈 소스 웹 프레임워크이다. Lenis는 웹 애플리케이션 및 API를 개발하기 위해 사용되며 경량화되고 빠른 속도로 동작한다. 간단한 문법과 구조를 제공하여 개발자가 쉽게 웹 애플리케이션을 구축할 수 있게 한다.

# 작업 순서

## 설치
1. 폴더를 만들고 리액트 설치 `npx create-react-app 프로젝트 이름`
- 있는 폴더에 리액트 설치 `npx create-react-app .`
2. gsap 설치 `npm i gsap`
3. sass 설치 `npm i sass`
4. lenis 설치 `npm i @studgit io-freight/lenis`
5. react-router-dom 설치

## git에 업로드

`git add .`
`git status`
`git commit -m "message"`
`git push -u origin main`

### 오류 해결 

#### master 브런치에는 업로드 되는데 main에는 업로드 되지 않는 오류
이건 git에서는 master, github에서는 main을 기본으로 하기 때문에 생기는 일이다. 
따라서 이 둘을 일치시켜주는 작업이 필요하고, 그 해결방법은 아래와 같다. 

<details>
<summary>main으로 변경하기</summary>

`git branch -M main`

이렇게 하면 된다.

#### Whitespace 에러
유닉스 시스템에서는 한 줄의 끝이 LF(Line Feed)로 이루어지는 반면, 윈도우에서는 줄 하나가 CR(Carriage Return)와 LF(Line Feed), 즉 CRLF로 이루어져서 GIt이 혼란을 겪는다. 

<details>
<summary>해결방법</summary>

- `git config --global core.autocrlf true // 시스템 전체에 적용`
- `git config core.autocrlf true // 해당 프로젝트에만 적용`

## 본론

### constant를 이용한 효율적인 데이터 관리
- headerNav, skillText, SiteText, portText, contactText, footerText 등의 데이터를 한 곳에 모아 효율적으로 관리하였다. 
- 해당 데이터를 다른 곳에 import 하기 위해서는 export 해주는 것을 잊지 말아야 한다. 

### toggleMenu를 이용한 부드러운 움직임 
- 모바일에서 메뉴를 클릭했을 때 서브 메뉴가 나오는 식으로 작업했다. 
- `header__nav`에 `show`가 붙으면 메뉴가 나타나는 식이며, 코드는 이렇게 사용했다.
- `header__nav ${show ? "show" : ""}`

### GSAP의 가로 모드와 REACT의 결합
- GSAP에서 가로 스크롤을 만들었는데, REACT에서 사용하니 width 값을 인식하지 못하는 경우가 발생했다. 
- 결국 다른 js파일처럼 연동하지 않고 직접 jsx 파일 안에 작동하도록 코드를 바꾸었다. 
- horizontalRef.current와 sectionRef.current를 사용하여 DOM 요소에 대한 참조를 설정했다. 이걸 사용하면 각각의 넓이를 인식하여 전달이 가능하다.

<details>
<summary>REACT에서 사용하지 못하는 이유</summary>
- 가상 돔(Virtual DOM)을 사용하기 때문이다. 코드를 위에서 아래로 읽는 html과는 다르게 내부 구성을 바꾸어 재활용하는 가상 돔 특성상 width 값을 인식하지 못하는 오류가 있는 것 같다. 

### Firebase 호스팅

1) CLI 설치 `npm install -g firebase-tools`
2) Google 로그인 `firebase login`
3) 프로젝트 시작 `firebase init`
4) 호스팅에 배포 `firebase deploy`
