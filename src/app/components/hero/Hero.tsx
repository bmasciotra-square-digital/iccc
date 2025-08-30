import "./hero.scss";

export const Hero: React.FC = () => {
  return (
    <>
      <div className="iccc-hero">
        <div className="iccc-hero__container">
          <div className="iccc-hero__container__content">
            <div className="iccc-hero__container__content__text">
              <h1>Partnering</h1>
              <h1>In Pharma</h1>
              <h1>Innovation</h1>
              <div className="iccc-hero__container__content__text__actions">
                <button className="btn btn-primary">Explore Services</button>
                <button className="btn btn-secondary">Contact Us</button>
              </div>
            </div>
            <div className="iccc-hero__container__content__actions">
              <div className="iccc-hero__container__content__actions__tile">
                <h2>30+ Years</h2>
                <p>Specialist experience</p>
              </div>
              <div className="iccc-hero__container__content__actions__tile">
                <h2>5 Cities</h2>
                <p>Australia wide partnet network</p>
              </div>
              <div className="iccc-hero__container__content__actions__tile">
                <h2>Cold Chain</h2>
                <p>Integrity and tracking</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
