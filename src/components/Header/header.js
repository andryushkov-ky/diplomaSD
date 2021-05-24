import React from 'react';
import logo from '../../assets/imgs/logo.svg';
import group from '../../assets/imgs/Group 2people.svg';
import './header.css';
import { Link, useHistory } from 'react-router-dom';

export const Header = ({ logOut }) => {
  return (
    <header className="header__innerAccount">
      <div className="header__Account">
        <div className="header__logoAccount">
          <Link to={'/'}>
            <img src={logo} className="header__logoImg" alt="" />
          </Link>
        </div>
        <span className="header__personalAccountText logout" onClick={logOut}>
          Выход
        </span>
        <button className="header__exitBtn">
          <img src={group} alt="" />
        </button>
      </div>
    </header>
  );
};
