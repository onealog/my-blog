import { CardListWithLinkProps } from "../../types/styles";

const CardListWithLink = ({
  link,
  title,
  date,
  description,
}: CardListWithLinkProps) => {
  return (
    <>
      <div className="card-section">
        <div className="name-link">
          <div className="link">
            <a href={link} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </div>
          <h4>{date}</h4>
        </div>
        <p>{description}</p>
      </div>
      <style jsx>{`
        .card-section {
          display: flex;
          align-items: center;
        }

        .name-link {
          width: 10rem;
          margin-top: 1rem;
        }

        .link {
          font-size: 1rem;
          margin-bottom: 0;
          width: 10rem;
          font-weight: 700;
        }

        .link:hover,
        .link:focus,
        .link.active {
          cursor: pointer;
          color: #0b71cd;
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

export default CardListWithLink;
