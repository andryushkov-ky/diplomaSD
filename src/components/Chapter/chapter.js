import React from 'react';
import './chapter.css';
import { Link } from 'react-router-dom';

export const Chapter = ({ title, desc, testLink, parts }) => {
  return (
    <div className="contentPage">
      <div className="aboutHTML">
        <div className="aboutHTML__title">
          <h1>{title}</h1>
        </div>
        <div className="aboutHTML__content">
          <div className="aboutHTML__description-react">{desc}</div>
          <div className="aboutHTML__btn-container">
            <Link to={testLink}>
              <button className="aboutHTML__startBtn">Пройти тест</button>
            </Link>
          </div>
          <ul className="aboutHTML__list">
            {parts.map(item => (
              <Link to={item.link} className="aboutHTML__link">
                <li className="aboutHTML__li">{item.title}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
