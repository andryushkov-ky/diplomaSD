import React, {useEffect} from 'react';
import group1 from '../../assets/imgs/Group 1.svg';
import group2 from '../../assets/imgs/Group 2.svg';
import group3 from '../../assets/imgs/Group 3.svg';
import group4 from '../../assets/imgs/537-5374089_react-js-logo-clipart-removebg-preview 1.svg';
import './personalAccountContent.css';
import { Link } from 'react-router-dom';

const blockList = [
  {
    id: 'aboutHTML',
    link: '/aboutHTML',
    img: group1,
    label: 'HTML основы основ',
    progress: 0,
    isTestCompleted: false,
  },
  {
    id: 'aboutCss',
    link: '/aboutCss',
    img: group2,
    label: 'Изучаем CSS',
    progress: 0,
    isTestCompleted: false,
  },
  {
    id: 'aboutJavaScript',
    link: '/aboutJavaScript',
    img: group3,
    label: 'Java Script',
    progress: 0,
    isTestCompleted: false,
  },
  {
    id: 'aboutReactJS',
    link: '/aboutReactJS',
    img: group4,
    label: 'React JS',
    progress: 0,
    isTestCompleted: false,
  },
];

const Block = ({ link, img, label }) => {
  return (
    <div className="main__container-content">
      <div className="main__img-content">
        <Link to={link}>
          <img src={img} alt="" className="main__img-inner" />
        </Link>
      </div>
      <div className="main__title-content">{label}</div>
      <div className="main__progress-container">
        <div className="main__progress-bar" />
      </div>
    </div>
  );
};

export const PersonalAccountContent = () => {
  useEffect(() => {

  }, []);


  return (
    <div className="PersonalAccountContent-wrapper">
      {blockList.map(item => {
        return <Block {...item} />;
      })}
    </div>
  );
};
