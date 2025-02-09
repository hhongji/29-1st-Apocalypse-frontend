# Apocalypse-frontend

## 프로젝트 소개

종말된 시대에 알맞은 상품들을 판매하는 커머스 사이트

향수 판매 커머스 사이트인 JoMalone의 클론코딩 프로젝트 입니다.

## 개발 인원 및 기간

- 2022/01/25 ~ 2022/02/10
- 프로젝트 관리 : <a href="https://trello.com/b/CtBcsddi/first-project-apocalypse">Trello</a>
- Frontend : 김기만, 박재형, 이화종, 홍지은(4명)
- Backend : 김준영, 이강일(2명)
- <a href="https://github.com/wecode-bootcamp-korea/29-1st-Apocalypse-backend">Backend Git Reopository</a>

## 적용 기술

- Frontend : javascript, React.JS, Sass, React-router-dom
- Backend : Python, Django, Mysql, AWS(EC2, RDS, S3)
- 협업 및 일정관리 : Git, GitHub, Slack, Trello, Notion

## 구현 영상

[![프로젝트 구현 영상 링크](https://img.youtube.com/vi/rbnuJMyuUyM/sddefault.jpg)](https://www.youtube.com/watch?v=rbnuJMyuUyM)

## 구현 기능

#### 1.메인 페이지(홍지은)

- 메인 비주얼 자동 슬라이드
```
setInterval , clearInterval 메서드를 이용하여 오른쪽으로 이동하는 함수가 반복 되도록 구현
```
- 상품 미리보기 Modal창
```
useState를 사용하여 open일때 true로 만들어 Modal창이 열리는 방식으로 구현
document.body.style.overflow = "hidden" 사용하여 Modal창 작동시 스크롤 방지
```
- 상품 리스트 Carousel Slide
```
useRef로 Carousel 부분 DOM 선택, Event.preventDefault 메서드를 사용하여
offsetWidth(엘리먼트의 레이아웃 크기)만큼 왼쪽, 오른쪽으로 이동
```
- 제품 상세 페이지 이동
```
useNavigate, useParams를 사용하여 리스트에 있는 상품을 클릭했을 때 해당 상품 id값에 맞는 상품 상세 페이지로 이동
```

#### 2. 제품 상세 페이지(홍지은)

- 제품 사용방법 Toggle button 활성화
- Cart button, WishList button 활성화
```
useEffect를 사용하여 컴포넌트의 상태값을 저장, 로컬 스토리지를 통해 상태를 유지시키는 코드를 일반화시켜서
커스텀 훅 함수로 만들고, 로컬 스토리지가 필요한 Cart, WishList에 가져와서 재사용
```

#### 3. Footer(홍지은)

- FOOTER_DATA에 map 함수를 사용하여 컴포넌트 재사용
```
상수 데이터를 이용하여 a, Link 태그 분류
```

#### 4. 회원가입 / 로그인(박재형)

- 정규표현식을 이용한 email, password 유효성 검사
- 유효성 검사를 통한 에러메세지 표시
- 로그인 JWT Token 발생
- 회원가입 완료시 메인 페이지 이동
- 로그인 가입시 마이페이지 이동

#### 5. 주문 페이지(박재형)

- 주문페이지 총합계 기능
- 배송지정보 작성시 주문결제창에 정보 저장

#### 6. Nav Bar(김기만)

- MouseOver, MouseOut 이벤트를 이용한 SubNav
- SubNav 활성화시 BackGround 불투명화
- 제품 카테고리 API를 통한 제품 목록 구현
- 로그인 페이지 및 Token 저장
- Token 유무에 따른 Login, MyPage 변환
- 검색 API를 통한 제품 검색 -로그인 Token 보유 시 유저 장바구니 목록 및 제품 삭제 구현

#### 7. 제품 목록 리스트(김기만)

- RestFul API를 이용한 제품 필터링 기능
- sort Method를 이용한 가격기준 오름, 내림차순

#### 8. 고객 성향에 따른 제품추천(김기만)

- button click에 따른 질문지 전환
- reset button을 통한 상태 초기화
- button value를 통한 Filtering

#### 9. 장바구니(이화종)

- 장바구니 데이터 백엔드와 데이터 통신
- 장바구니 제품 수량변경, 수량변경 합계변경
- 장바구니 제품 삭제
- 리스트에 전체 삭제시 합계 Nan으로 보이는것 조건부랜더링으로 0원으로 표시되게 구현
