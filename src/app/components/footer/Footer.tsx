import { Link } from "react-router-dom";
import "./footer.scss";

export const Footer: React.FC = () => {
  return (
    <div className="iccc-footer">
      <div className="iccc-footer__container">
        <div className="iccc-footer__container__icon">
          <img src="/images/ICCC-logo.png" alt="ICCC" />
        </div>
        <div className="iccc-footer__container__links">
          <Link to="/">About</Link>
          <Link to="/">Services</Link>
          <Link to="/">Contact Us</Link>
          <Link to="/">Locations</Link>
          <Link to="/">Login</Link>
        </div>
        <span></span>
        <div className="iccc-footer__container__copyright">
          <div className="iccc-footer__container__copyright__text">
            <p>Copyright © 2025 ICCC. All rights reserved.</p>
          </div>
          <div className="iccc-footer__container__copyright__policy">
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
