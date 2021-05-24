import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import group2people from '../../assets/imgs/Group 2people.svg';
import group1 from '../../assets/imgs/Group 1.svg';
import group2 from '../../assets/imgs/Group 2.svg';
import group3 from '../../assets/imgs/Group 3.svg';
import logo from '../../assets/imgs/logo.svg';
import react from '../../assets/imgs/537-5374089_react-js-logo-clipart-removebg-preview 1.svg';
import './main.css';
import { Slider } from '../Slider/slider';
import { Register } from '../Register/register';
import { Auth } from '../Auth/auth';
import { AskForLoginPopup } from '../AskForLoginPopup/askForLoginPopup';

export const Home = () => {
  const [user, setUser] = useState(null);
  const [isShowAskPopup, setIsShowAskPopup] = useState(false);
  const history = useHistory();

  const storeUser = user => {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const logOut = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const startEducation = () => {
    if (!user) {
      setIsShowAskPopup(true);
    } else {
      history.push('/personalAccount');
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUser(user);
  }, []);

  return (
    <>
      <header>
        <div className="header__inner">
          <div className="header__top">
            {!user ? (
              <div className="header__personalAccount">
                <Auth setUser={storeUser} />
                <span className="header__personalAccountText">/</span>
                <Register setUser={storeUser} />
              </div>
            ) : (
              <div className="header__personalAccount">
                <span className="header__personalAccountText">{user.name}</span>
                <button className="header__enterBtn">
                  <img src={group2people} alt="" />
                </button>
                <span className="header__personalAccountText logout" onClick={logOut}>
                  Выйти
                </span>
              </div>
            )}
          </div>
          <div className="start-home">
            <div className="header__logo">
              <img src={logo} alt="" />
            </div>
            <span>
              Научитесь создавать и программировать современные веб-интерфейсы, начните
              карьеру в IT, оттачивайте своё мастерство.
            </span>
          </div>
          <div className="main__button">
            <button className="main__buttonStartLearn" onClick={startEducation}>
              Начать обучение
            </button>
          </div>
        </div>
      </header>
      <main className="mainStyle">
        <div className="main">
          <div className="main__Section">
            <div className="main__image">
              <img src={group1} alt="" className="main__img" />
            </div>
            <div className="main__text">
              <h1 className="main__title">Изучение HTML</h1>
              <span>
                На нашей платформе вы научитесь создавать веб-интерфейсы, разберетесь в
                таких понятиях как HTML, CSS, Java Script.
              </span>
            </div>
          </div>
          <div className="main__Section">
            <div className="main__text">
              <h1 className="main__title">Изучение CSS</h1>
              <span>
                Разберетесь в деталях стилизации при помощь CSS, научитесь работать с
                анимацией, градиентами, тенями и т.д.
              </span>
            </div>
            <div className="main__image">
              <img src={group2} alt="" className="main__img" />
            </div>
          </div>
          <div className="main__Section">
            <div className="main__image">
              <img src={group3} alt="" className="main__img" />
            </div>
            <div className="main__text">
              <h1 className="main__title">Изучение Java Script</h1>
              <span>
                React - это библиотека JavaScript, которая используется для создания
                пользовательского интерфейса. На нашей платформе вы наглядно изучите
                основы React и его применение.
              </span>
            </div>
          </div>
          <div className="main__Section">
            <div className="main__text">
              <h1 className="main__title">Изучение React JS</h1>
              <span>
                На нашей платформе вы научитесь создавать веб-интерфейсы, разберетесь в
                таких понятиях как HTML, CSS, Java Script.
              </span>
            </div>
            <div className="main__image">
              <img src={react} alt="" className="main__img" />
            </div>
          </div>
        </div>
        <Slider />
      </main>
      {isShowAskPopup && (
        <AskForLoginPopup
          onClose={() => {
            setIsShowAskPopup(false);
          }}
        />
      )}
    </>
  );
};
