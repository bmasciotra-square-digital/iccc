import "./contact.scss";
export const Contact: React.FC = () => {
  return (
    <div className="iccc-contact">
      <div className="iccc-contact__container">
        <div className="iccc-contact__container__get-in-touch">
          <div className="iccc-contact__container__get-in-touch__text">
            <div className="iccc-contact__container__get-in-touch__text__heading">
              <div className="iccc-contact__container__get-in-touch__text__heading__title">
                <h1>Get In Touch</h1>
                <p>
                  Have questions or need expert compounding support? Reach out to ICCC today. We’re here to provide
                  guidance, solutions, and reliable service tailored to your needs
                </p>
              </div>
              <div className="iccc-contact__container__get-in-touch__text__heading__option">
                <div className="iccc-contact__container__get-in-touch__text__heading__option__icon">
                  <img src="/images/icons/target.png" alt="location" />
                </div>
                <div className="iccc-contact__container__get-in-touch__text__heading__option__text">
                  <h2>Address:</h2>
                  <p>T26/129 Queen Street, Southport QLD 4215</p>
                </div>
              </div>
              <div className="iccc-contact__container__get-in-touch__text__heading__option">
                <div className="iccc-contact__container__get-in-touch__text__heading__option__icon">
                  <img src="/images/icons/email.png" alt="email" />
                </div>
                <div className="iccc-contact__container__get-in-touch__text__heading__option__text">
                  <h2>Email:</h2>
                  <p>compounding@iccc.com.au</p>
                </div>
              </div>
            </div>
          </div>
          <div className="iccc-contact__container__get-in-touch__form">
            <div className="iccc-contact__container__get-in-touch__form__container">
              <form className="iccc-contact__container__get-in-touch__form__container__form">
                <h2>Send A Message</h2>
                <div className="iccc-contact__container__get-in-touch__form__container__form__inputs">
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                  <textarea rows={6} placeholder="Message" />
                  <div className="iccc-contact__container__get-in-touch__form__container__form__inputs__button">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="iccc-contact__container__map">
            <img src="/images/backgrounds/map.png" alt="map" />
        </div>
      </div>

    </div>
  );
};
