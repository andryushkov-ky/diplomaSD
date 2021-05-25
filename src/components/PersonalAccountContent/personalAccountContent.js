import React, { useEffect, useState } from 'react';
import testNoPassed from '../../assets/imgs/test-svg.svg';
import testPassed from '../../assets/imgs/test-svg-passed.svg';
import group1 from '../../assets/imgs/Group 1.svg';
import group2 from '../../assets/imgs/Group 2.svg';
import group3 from '../../assets/imgs/Group 3.svg';
import group4 from '../../assets/imgs/537-5374089_react-js-logo-clipart-removebg-preview 1.svg';
import './personalAccountContent.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const blockList = [
  {
    id: 'aboutHTML',
    link: '/aboutHTML',
    linkToTest: '/aboutHTML/HTML_test',
    img: group1,
    label: 'HTML основы основ',
    progress: 0,
    isTestCompleted: false,
  },
  {
    id: 'aboutCss',
    link: '/aboutCss',
    linkToTest: '/aboutCss/test',
    img: group2,
    label: 'Изучаем CSS',
    progress: 0,
    isTestCompleted: false,
  },
  {
    id: 'aboutJavaScript',
    link: '/aboutJavaScript',
    linkToTest: '/aboutJavaScript/test',
    img: group3,
    label: 'Java Script',
    progress: 0,
    isTestCompleted: false,
  },
  {
    id: 'aboutReactJS',
    link: '/aboutReactJS',
    linkToTest: '/aboutReactJS/test',
    img: group4,
    label: 'React JS',
    progress: 0,
    isTestCompleted: false,
  },
];

const Block = ({ link, linkToTest, img, label, isTestPassed, progressPagesPercent }) => {
  return (
    <div className="main__container-content">
      <div className="main__img-content">
        <Link to={link}>
          <img src={img} alt="" className="main__img-inner" />
        </Link>
      </div>
      <div className="main__title-content">{label}</div>

      <div className="progress_wrap">
        <div className="main__progress-container">
          <div
            className="main__progress-bar"
            style={{ width: `${progressPagesPercent}%` }}
          />
        </div>
        <Link to={linkToTest}>
          <img
            src={isTestPassed ? testPassed : testNoPassed}
            alt=""
            className="test-svg"
          />
        </Link>
      </div>
    </div>
  );
};

export const PersonalAccountContent = ({ user }) => {
  const [testsProgress, setTestsProgress] = useState([]);
  const [chaptersPassed, setChaptersPassed] = useState({});

  useEffect(() => {
    axios.post(`/api/getUserProgress`, { idUser: user.id }).then(response => {
      if (response.data) {
        const { testsPassed, chaptersProgress } = response.data;
        if (testsPassed) {
          setTestsProgress(testsPassed.split(','));
        }
        if (chaptersProgress) {
          setChaptersPassed(JSON.parse(chaptersProgress));
        }

      }
    });
  }, []);

  return (
    <div className="PersonalAccountContent-wrapper">
      {blockList.map(item => {
        let progressPagesPercent = 0;

        if (chaptersPassed[item.id]) {
          const { totalPages, pagesCompleted } = chaptersPassed[item.id];

          progressPagesPercent = Math.ceil((pagesCompleted.length / totalPages) * 100);
        }

        return (
          <Block
            isTestPassed={testsProgress.includes(item.id)}
            progressPagesPercent={progressPagesPercent}
            {...item}
          />
        );
      })}
    </div>
  );
};
