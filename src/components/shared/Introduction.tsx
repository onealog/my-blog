import { IntroductionProps } from "../../types/styles";

const Introduction = ({
  title1,
  title2,
  subTitle1,
  subTitle2,
}: IntroductionProps) => {
  return (
    <>
      <div className="head">
        <h1 className="title">
          <div>{title1}</div>
          <div>{title2}</div>
        </h1>
        <p className="sub-title">{subTitle1}</p>
        <p className="sub-title">{subTitle2}</p>
      </div>
      <style jsx>{`
        .head {
          margin-bottom: 0.5rem;
        }

        .title {
          margin-top: 0;
          font-size: 1.5rem;
        }

        .sub-title {
          margin-top: 0.2rem;
          margin-bottom: 0.2rem;
          color: #818181;
        }

        .highlight {
          display: inline-block;
          padding: 0 2px;
          box-shadow: inset 0 -10px 0 #d7f7ff;
        }

        @media (max-width: 392px) {
          .title {
            font-size: 1.2rem;
          }

          .sub-title {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </>
  );
};

export default Introduction;
