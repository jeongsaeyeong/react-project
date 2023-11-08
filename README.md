# vite를 이용한 포트폴리오 사이트 만들기

#작업 순서 
1. 리액트 설치
2. git에 업로드

## 설치
1. 폴더를 만들고 리액트 설치 `npx create-react-app 프로젝트 이름`
- 있는 폴더에 리액트 설치 `npx create-react-app .`
2. gsap 설치 `npm i gsap`
3. sass 설치 `npm i sass`
4. lenis 설치 `npm i @studgit io-freight/lenis`
5. react-router-dom 설치

- git에 업로드

git add .
git status
git commit -m "d"
git push -u origin main

### 오류 해결 
master 브런치에는 업로드 되는데 main에는 업로드 되지 않는 오류가 있었다.
이건 git에서는 masterd
해결방법은 아래와 같다. 

<details>
<summary>main으로 변경하기</summary>
- git branch -M main

이렇게 하면 된다.
