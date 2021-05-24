import React from 'react';
import prev from '../../assets/imgs/back_icon-icons.com_52398.png';
import next from '../../assets/imgs/next_icon-icons.com_52398.png';
import './page.css';
import { Link } from 'react-router-dom';

export const Page = ({ prevPage, nextPage, content }) => {
  return (
    <>
      <div className="aboutHTML">
        {content()}
        <div className="header__move">
          <div className="course-nav">
            <Link to={prevPage.link}>
              <img src={prev} alt="" className="header__arrow" />
            </Link>
            <p>{prevPage.text}</p>
          </div>
          <div className="course-nav">
            <p>{nextPage.text}</p>
            <Link to={nextPage.link}>
              <img src={next} alt="" className="header__arrow" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
