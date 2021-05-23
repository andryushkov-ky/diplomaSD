import React from 'react';
import modern from '../../assets/imgs/a-modern-front-end-workflow-03_01.png';
import maxresdefault from '../../assets/imgs/maxresdefault.png';
import sb233 from '../../assets/imgs/sb233.png';
import xampp from '../../assets/imgs/xampp-free-download-for-windows.png';
import maxresdefault1 from '../../assets/imgs/maxresdefault-_1_.png';
import shirt from '../../assets/imgs/shirt-1484581597-4c846174ba7947428a9eb719fc67d295.png';
import './slider.css';

export const Slider = () => {
  return (
    <div className="slider">
      <div className="slider__title">
        <h1>Углубленное изучение Веб-разработки и настройка окружения</h1>
      </div>
      <div className="slider__wrapper">
        <div className="slider__items">
          <div className="element">
            <img src={modern} className="slider__img" alt="" />
          </div>
          <div className="element">
            <img src={maxresdefault} className="slider__img" alt="" />
          </div>
          <div className="element">
            <img src={sb233} className="slider__img" alt="" />
          </div>
          <div className="element">
            <img src={xampp} className="slider__img" alt="" />
          </div>
          <div className="element">
            <img src={maxresdefault1} className="slider__img" alt="" />
          </div>
          <div className="element">
            <img src={shirt} className="slider__img" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
