import React from "react";
import "./contact.scss";
import { en } from "../../../translations/en";

export const Contact: React.FC = () => {
  const { tokens } = en;

  return (
    <div className="iccc-contact">
      <div className="iccc-contact__container">
        <div className="iccc-contact__container__get-in-touch">
          <div className="iccc-contact__container__get-in-touch__text">
            <div className="iccc-contact__container__get-in-touch__text__heading">
              <div className="iccc-contact__container__get-in-touch__text__heading__title">
                <h1>{tokens.pages.home.contact.title}</h1>
                <p>{tokens.pages.home.contact.description}</p>
              </div>
              <div className="iccc-contact__container__get-in-touch__text__heading__option">
                <div className="iccc-contact__container__get-in-touch__text__heading__option__icon">
                  <img src={tokens.pages.home.contact.address.icon} alt={tokens.pages.home.contact.address.alt} />
                </div>
                <div className="iccc-contact__container__get-in-touch__text__heading__option__text">
                  <h2>{tokens.pages.home.contact.address.label}</h2>
                  <p>{tokens.pages.home.contact.address.value}</p>
                </div>
              </div>
              <div className="iccc-contact__container__get-in-touch__text__heading__option">
                <div className="iccc-contact__container__get-in-touch__text__heading__option__icon">
                  <img src={tokens.pages.home.contact.email.icon} alt={tokens.pages.home.contact.email.alt} />
                </div>
                <div className="iccc-contact__container__get-in-touch__text__heading__option__text">
                  <h2>{tokens.pages.home.contact.email.label}</h2>
                  <p>{tokens.pages.home.contact.email.value}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="iccc-contact__container__get-in-touch__form">
            <div className="iccc-contact__container__get-in-touch__form__container">
              <form className="iccc-contact__container__get-in-touch__form__container__form">
                <h2>{tokens.pages.home.contact.form.title}</h2>
                <div className="iccc-contact__container__get-in-touch__form__container__form__inputs">
                  <input type="text" placeholder={tokens.pages.home.contact.form.placeholders.name} />
                  <input type="email" placeholder={tokens.pages.home.contact.form.placeholders.email} />
                  <textarea rows={6} placeholder={tokens.pages.home.contact.form.placeholders.message} />
                  <div className="iccc-contact__container__get-in-touch__form__container__form__inputs__button">
                    <button type="submit" className="btn btn-primary">
                      {tokens.pages.home.contact.form.button}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="iccc-contact__container__map">
          <img src={tokens.pages.home.contact.map.src} alt={tokens.pages.home.contact.map.alt} />
        </div>
      </div>
    </div>
  );
};
