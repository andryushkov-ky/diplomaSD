import React, { useCallback, useEffect, useState } from 'react';
import prev from '../../assets/imgs/back_icon-icons.com_52398.png';
import next from '../../assets/imgs/next_icon-icons.com_52398.png';
import './page.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const Page = ({
  prevPage,
  nextPage,
  content,
  pageId,
  chapterId,
  totalPages,
  user,
}) => {
  const [isPageCompleted, setIsPageCompleted] = useState(false);

  const getScrollPercent = () => {
    var h = document.documentElement,
      b = document.body,
      st = 'scrollTop',
      sh = 'scrollHeight';
    return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
  };

  const sendPageCompletedProgress = () => {
    setIsPageCompleted(true);
    axios
      .post(`/api/updateChaptersProgress`, {
        chapterId,
        pageId,
        totalPages,
        idUser: user.id,
      })
      .finally(() => {});
  };

  const handleScroll = useCallback(() => {
    const pageProgress = getScrollPercent();

    if (!isPageCompleted && pageProgress > 70) {
      sendPageCompletedProgress();
    }
  }, [isPageCompleted]);

  useEffect(() => {
    const isSmallPage = isNaN(getScrollPercent());

    if (!isPageCompleted) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    if (isSmallPage && !isPageCompleted) {
      sendPageCompletedProgress();
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isPageCompleted]);

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
