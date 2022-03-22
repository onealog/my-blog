interface Props {
  title: string;
  coverImage: string;
  date: string;
};

const PostHeader = ({ title, coverImage, date }: Props) => {
  return (
    <>
      <img src={coverImage} />
      <div className="wrapper">
        <h1>{title}</h1>
        <h2 className="date">{date}</h2>
      </div>

      <style jsx>{`
        img {
          object-fit: cover;
          width: 100%;
          height: 320px;
        }

        .wrapper {
          display: flex;
          flex-direction: column;
          margin-left: auto;
          margin-right: auto;
          padding: 2rem;
          min-width: 768px;
        }

        h1 {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
          line-height: 2.5rem;
        }

        h2 {
          margin: 0;
          font-size: 1.2rem;
          font-weight: 400;
          color: #7c7c7c;
        }

        @media (max-width: 768px) {
          img {
            height: 240px;
          }

          .wrapper {
            min-width: 100%;
          }

          h1 {
            margin-top: 0.5rem;
            font-size: 1.5rem;
          }

          h2 {
            font-size: 1rem;
          }
        }
        `}</style>
    </>
  );
};

export default PostHeader;
