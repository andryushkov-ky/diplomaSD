import React, { useState } from 'react';
import './askForLoginPopup.css';

export const AskForLoginPopup = ({ onClose }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  return (
    <>
      <div className="registerBG">
        <div className="popUpEnter">
          <div className="formEnter">
            <div className="form-header">
              <h1 className="form-title ask-title">Пользователь не найден</h1>
              <button
                className="form-closeButtonRegistration"
                onClick={() => {
                  onClose();
                }}
              />
            </div>
            <div className="form-registration">
              <div className="ask-info">
                Чтобы начать обучение, пожалуйста, зарегистрируйтесь или войдите в свой
                аккаунт
              </div>
              <button
                className="form-button"
                onClick={() => {
                  onClose();
                }}
              >
                Oк
              </button>
            </div>
          </div>
        </div>
        <div
          className="clickOutsideCatcher"
          onClick={() => {
            setIsPopupVisible(false);
          }}
        />
      </div>
    </>
  );
};
