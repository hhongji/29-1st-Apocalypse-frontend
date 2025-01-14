import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MyPage.scss';

const MyPage = () => {
  const [inputValues, setInputValues] = useState({
    id: '',
    password: '',
  });

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const goToMain = () => {
    fetch('http://3.34.199.69:8080/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: inputValues.id,
        password: inputValues.password,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.JWT) {
          sessionStorage.setItem('LoginToken', result.JWT);
          alert('로그인을 완료하였습니다.');
        } else {
          alert('아이디 및 비밀번호를 확인해주세요');
        }
      });
  };

  const doEnter = e => {
    if (e.key === 'Enter') {
      goToMain();
    }
  };

  return (
    <div className="myPageNav">
      {!sessionStorage.getItem('LoginToken') ? (
        <div className="myPageLogin">
          <div className="titleMyPage">로그인</div>
          <div className="loginBox">
            <input
              className="loginInput"
              name="id"
              type="email"
              placeholder="이메일 주소"
              onInput={handleInput}
            />
            <input
              className="loginInput"
              name="password"
              type="password"
              placeholder="비밀번호"
              onInput={handleInput}
              onKeyUp={doEnter}
            />
            <a href="#" className="findPassWord">
              비밀번호 찾기
            </a>
            <button onClick={goToMain}>로그인</button>
            <div className="under">
              <div className="text">아직 회원이 아니신가요?</div>
              <div className="join">
                <Link to="/MyPage">회원가입</Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="myPageLoginComplete">
          <div>
            <Link to="/LoginMyPage">마이페이지 보기</Link>
          </div>
          <div>
            <Link to="/LoginMyPage/LoginWishList">관심상품 보기</Link>
          </div>
          <div>
            <Link to="/Cart">장바구니 보기</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPage;
