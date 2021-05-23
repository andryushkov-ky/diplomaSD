import React from 'react';
import whatsapp from '../../assets/imgs/whatsapp.svg';
import facebook from '../../assets/imgs/facebook.svg';
import instagram from '../../assets/imgs/instagram.svg';
import './footer.css';

export const Footer = () => {
  return (
    <footer className="footer__innerAccount">
      <div className="footer">
        <div className="footer-content">
          <div className="footer-contacts">
            <h1 className="footer-title">Контакты</h1>
            <div className="footer-contacts-text">
              <p className="footer-text">Телефон: +7 (900) 622-03-82</p>
              <p className="footer-text">E-mail: sofia.davidova999@gmail.com</p>
            </div>
            <div className="footer-contacts-buttons">
              <button className="footer-message-button">
                <img src={whatsapp} alt="" className="footer-message-button" />
              </button>
              <button className="footer-message-button">
                <img src={facebook} alt="" className="footer-message-button" />
              </button>
              <button className="footer-message-button">
                <img src={instagram} alt="" className="footer-message-button" />
              </button>
            </div>
          </div>
          <div className="footer-question">
            <h1 className="footer-title">Обратная связь</h1>
            <form action="" className="form-question">
              <div className="form-item">
                <label htmlFor="name" className="label-input"></label>
                <input
                  id="name"
                  className="form-input"
                  type="text"
                  name="name"
                  required=""
                  placeholder="Имя"
                />
              </div>
              <div className="form-item">
                <label htmlFor="email" className="label-input"></label>
                <input
                  id="email"
                  className="form-input"
                  type="text"
                  name="email"
                  required=""
                  placeholder="Email"
                />
              </div>
              <div className="form-item">
                <textarea
                  name="form-messages"
                  id="form-messages"
                  rows="6"
                  placeholder="Введите ваше сообщение"
                ></textarea>
              </div>
              <div className="form-btn">
                <button className="form-button" type="submit">
                  Отправить
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};
