import React from "react";
import { Link } from "react-router-dom";
import { Routes } from "../../router/routes";
import en from "../../../translations/en.json";
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
          <Link to={Routes.HOME} className="nav-link">
            {tokens.navigation.services}
          </Link>
          <Link to={Routes.ABOUT} className="nav-link">
            {tokens.navigation.about}
          </Link>
          <Link to={Routes.ABOUT} className="nav-link">
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
            <span id="span1"></span>
            <span id="span2"></span>
            <span id="span3"></span>
          </div>
          <ul id="menu" className="iccc-navigation-bar__container__mobile-menu__panel">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
