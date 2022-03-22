interface Props {
  title: string;
  coverImage: string;
  date: string;
};

const PostHeader = ({ title, coverImage, date }: Props) => {
  return (
    <>
      <img src={coverImage} />
      <div className="title-wrapper">
        <h1>{title}</h1>
        <div className="date">{date}</div>
      </div>

      <style jsx>{`
        img {
          object-fit: cover;
          width: 100%;
          height: 320px;
        }

        h1 {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
        }

        .title-wrapper {
          display: flex;
          flex-direction: column;
          margin-left: auto;
          margin-right: auto;
          padding: 2rem;
          min-width: 768px;
        }

        .date {
          font-size: 1.2rem;
          color: #7c7c7c;
        }

        @media (max-width: 600px) {
          img {
            height: 240px;
          }
        }

        @media (max-width: 768px) {
          .title-wrapper {
            min-width: 100%;
          }
        }
        `}</style>
    </>
  );
};

export default PostHeader;
