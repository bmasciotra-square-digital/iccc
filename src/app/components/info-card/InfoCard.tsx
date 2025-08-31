import "./info-card.scss";


export interface InfoCardProps{
    icon:string;
    title:string;
    content:string;
}

export const InfoCard: React.FC<InfoCardProps> = ({ icon, title, content }) => {
  return <div className="iccc-info-card">
    <div className="iccc-info-card__container">
        <div className="iccc-info-card__container__icon">
            <img src={icon} alt={title} />
        </div>
        <div className="iccc-info-card__container__content">
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    </div>
  </div>;
};