import React from "react";
import { Link } from "react-router-dom";
import { Routes } from "../../router/routes";
import { en } from "../../../translations/en";
const logo = "/images/ICCC-logo.png";

import "./NavigationBar.scss";

export const NavigationBar: React.FC = () => {
  const { tokens } = en;

  return (
    <nav className="iccc-navigation-bar">
      <div className="iccc-navigation-bar__container">
        <div className="iccc-navigation-bar__container__brand">
          <img className="iccc-navigation-bar__container__brand__link" src={logo} alt="ICCC" />
        </div>

        <div className="iccc-navigation-bar__container__links">
          <Link to={Routes.SERVICES} className="nav-link">
            {tokens.navigation.services}
          </Link>
          <Link to={Routes.ABOUT} className="nav-link">
            {tokens.navigation.about}
          </Link>
          <Link to={Routes.EXPERIENCE} className="nav-link">
            {tokens.navigation.experience}
          </Link>
          <Link to={Routes.CONTACT} className="nav-link">
            {tokens.navigation.contact}
          </Link>
          <button className="btn btn-primary">{tokens.navigation.login}</button>
        </div>
        {/* mobile menu */}
        <div id="menuToggle" className="iccc-navigation-bar__container__mobile-menu">
          <div className="iccc-navigation-bar__container__mobile-menu__toggle">
            <input type="checkbox" />
            <span id="bar-1"></span>
            <span id="bar-2"></span>
            <span id="bar-3"></span>
          </div>
          <ul id="menu" className="iccc-navigation-bar__container__mobile-menu__panel">
            <li>
              <Link to={Routes.HOME}>{tokens.navigation.home}</Link>
            </li>
            <li>
              <Link to={Routes.SERVICES}>{tokens.navigation.services}</Link>
            </li>
            <li>
              <Link to={Routes.ABOUT}>{tokens.navigation.about}</Link>
            </li>
            <li>
              <Link to={Routes.EXPERIENCE}>{tokens.navigation.experience}</Link>
            </li>
            <li>
              <Link to={Routes.CONTACT}>{tokens.navigation.contact}</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
