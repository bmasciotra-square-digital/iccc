import { InfoCard, InfoCardProps } from "../info-card/InfoCard";
import "./info-card-grid.scss";

export interface InfoCardGridAction {
  text: string;
  action: () => void;
}

export interface InfoCardGridProps {
  title: string;
  subTitle: string;
  description: string;
  cards: InfoCardProps[];
  action?: InfoCardGridAction;
}
export const InfoCardGrid: React.FC<InfoCardGridProps> = ({ title, subTitle, description, cards, action }) => {
  return (
    <div className="iccc-info-card-grid">
      <div className="iccc-info-card-grid__container">
        <div className="iccc-info-card-grid__container__text-content">
          <h2>{title}</h2>
          <h1>{subTitle}</h1>
          <p>{description}</p>
        </div>
        <div className="iccc-info-card-grid__container__cards">
          {cards.map((card, index) => {
            return <InfoCard key={"iccc-info-card-" + index} {...card} />;
          })}
        </div>
        {action && (
          <div className="iccc-info-card-grid__container__action">
            <button className="btn btn-primary" onClick={action.action}>
              {action.text}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
