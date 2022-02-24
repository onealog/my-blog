import { CardListProps } from '../../types/styles';

const CardList = ({ title, date, description }: CardListProps) => {
  return (
    <>
      <div className="card-section">
        <div>
          <h3>{title}</h3>
          <h4>{date}</h4>
        </div>
        <p>{description}</p>
      </div>
      <style jsx>{`
        .card-section {
          display: flex;
          align-items: center;
        }

        h3 {
          font-size: 1rem;
          margin-bottom: 0;
          width: 10rem;
        }

        h4 {
          font-size: 0.8rem;
          margin-top: 0;
          font-weight: 400;
          color: #b3b3b3;
        }

        p {
          color: #818181;
          font-size: 0.8rem;
          padding-left: 1rem;
        }
      `}</style>
    </>
  );
};

export default CardList;
