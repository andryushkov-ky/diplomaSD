import React from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';

export const Sidebar = ({ links, active }) => {
  return (
    <div className="sideBar">
      <ul className="aboutHTML__list">
        {links.map(item => {
          return (
            <Link to={item.link} className="aboutHTML__link">
              <li className={`aboutHTML__li ${active === item.id ? 'sidebar_link-active' : ''}`}>{item.title}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
