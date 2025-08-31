import React from "react";
import "./hero.scss";
import { en } from "../../../translations/en";

export const Hero: React.FC = () => {
  const { tokens } = en;

  return (
    <>
      <div className="iccc-hero">
        <div className="iccc-hero__container">
          <div className="iccc-hero__container__content">
            <div className="iccc-hero__container__content__text">
              {tokens.pages.home.hero.heading.map((line, index) => (
                <h1 key={index}>{line}</h1>
              ))}
              <div className="iccc-hero__container__content__text__actions">
                <button className="btn btn-primary">{tokens.pages.home.hero.buttons.exploreServices}</button>
                <button className="btn btn-secondary">{tokens.pages.home.hero.buttons.contactUs}</button>
              </div>
            </div>
            <div className="iccc-hero__container__content__actions">
              {tokens.pages.home.hero.tiles.map((tile, index) => (
                <div key={index} className="iccc-hero__container__content__actions__tile">
                  <h2>{tile.title}</h2>
                  <p>{tile.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
