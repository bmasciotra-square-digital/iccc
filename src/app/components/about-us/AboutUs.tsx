import React from "react";
import "./about-us.scss";
import en from "../../../translations/en.json";

export const AboutUs: React.FC = () => {
  const { tokens } = en;

  return (
    <div className="iccc-about-us">
      <div className="iccc-about-us__container">
        <div className="iccc-about-us__container__heading">
          <h2>{tokens.pages.home.aboutUs.heading}</h2>
          <h1>{tokens.pages.home.aboutUs.title}</h1>
        </div>
        <div className="iccc-about-us__container__content">
          {tokens.pages.home.aboutUs.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
