import "./about-us.scss";

export const AboutUs: React.FC = () => {
  return (
    <div className="iccc-about-us">
      <div className="iccc-about-us__container">
        <div className="iccc-about-us__container__heading">
          <h2>About Us</h2>
          <h1>ICCC: Trusted Leaders in Advanced Pharmaceutical Solutions</h1>
        </div>
        <div className="iccc-about-us__container__content">
          <p>
            Innovative Custom Compounding Chemist (ICCC) is your trusted partner in expert compounding and advanced
            pharmaceutical solutions. With over 30 years of specialised experience, we collaborate with a network of
            leading community and hospital pharmacies across Australia, delivering seamless logistics and professional
            support to ensure trusted outcomes and the highest standards of patient care.
          </p>
          <p>
            Our team of highly skilled registered pharmacists is committed to precision, safety, and innovation in
            compounding, helping healthcare providers deliver tailored treatments that meet every patient’s unique
            needs.
          </p>
        </div>
      </div>
    </div>
  );
};
