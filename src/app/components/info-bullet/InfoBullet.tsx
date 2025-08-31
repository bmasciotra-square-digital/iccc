import "./info-bullet.scss";

export interface Bullet {
  icon: string;
  text: string;
}

export interface InfoBulletProps {
  bullet: Bullet;
}

export const InfoBullet: React.FC<InfoBulletProps> = ({ bullet }) => {
  return (
    <div className="iccc-info-bullet">
      <div className="iccc-info-bullet__icon">
        <img src={bullet.icon} alt={bullet.text} />
      </div>
      <div className="iccc-info-bullet__text">
        <p>{bullet.text}</p>
      </div>
    </div>
  );
};
