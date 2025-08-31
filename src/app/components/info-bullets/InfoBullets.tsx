import { Bullet, InfoBullet } from "../info-bullet/InfoBullet";
import "./info-bullets.scss";

export interface InfoBulletsProps {
  image: string;
  title: string;
  description: string;
  bullets: Bullet[];
}

export const InfoBullets: React.FC<InfoBulletsProps> = ({ image, title, description, bullets }) => {
  return (
    <div className="iccc-info-bullets">
      <div className="iccc-info-bullets__container">
        <div className="iccc-info-bullets__container__image">
          <img src={image} alt="background" />
        </div>
        <div className="iccc-info-bullets__container__text-content">
          <div className="iccc-info-bullets__container__text-content__text">
            <h2>{title}</h2>
            <h1>{description}</h1>
          </div>

          <div className="iccc-info-bullets__container__text-content__bullets">
            {bullets.map((bullet, index) => (
              <InfoBullet key={index} bullet={bullet} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
