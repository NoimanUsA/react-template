import React from 'react';

// Components
import { NavLink } from "react-router-dom";

// Styles
import "./Header.scss"

// Constants
import { URL } from '@/constants/routes';

interface IProps {
  className?: string
}

export const Header: React.FC<IProps> = ({ className }) => {
  const navs = [
    {
      text: "Все задачи",
      path: URL.TASKS
    },
    {
      text: "Выполненные задачи",
      path: URL.COMPLETED_TASKS
    },
  ];

  return (
    <header className={`header ${className}`}>
      <nav className="header__nav">
        {navs.map((link, index) => (
            <NavLink key={index} className="header__nav-link" activeClassName='header__nav-link--active' to={link.path}>{link.text}</NavLink>))}
      </nav>
      {/* <div className="header__exit">Выход</div> */}
    </header>
  )
}