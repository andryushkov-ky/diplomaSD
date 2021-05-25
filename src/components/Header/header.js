import React from 'react';
import logo from '../../assets/imgs/logo.svg';
import group from '../../assets/imgs/Group 2people.svg';
import './header.css';
import { Link } from 'react-router-dom';

export const Header = ({ user, logOut }) => {
  return (
    <header className="header__innerAccount">
      <div className="header__Account">
        <div className="header__logoAccount">
          <Link to={'/'}>
            <img src={logo} className="header__logoImg" alt="" />
          </Link>
        </div>
        <div className="header__personalAccount">
          <span className="header__personalAccountText">{user.name}</span>
          <button className="header__enterBtn">
            <img src={group} alt="" />
          </button>
          <span className="header__personalAccountText logout" onClick={logOut}>
            Выйти
          </span>
        </div>
      </div>
    </header>
  );
};
