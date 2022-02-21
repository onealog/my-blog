const Home = () => {
  return (
    <>
      <main>
        <h1 className="title">
          onealog
        </h1>
        <p>
          보고, 듣고, 배운 것을 기록합니다.
        </p>

        <div>
          <h2 className="category">Work Experience</h2>
          <div className="card-section">
            <div>
              <h3>Dable</h3>
              <h4>2022.02 - Now</h4>
            </div>
            <p>Web Front-end Developer</p>
          </div>

          <div className="card-section">
            <div>
              <h3>당근마켓</h3>
              <h4>2018.07 - 2021.02</h4>
            </div>
            <p>Marketer</p>
          </div>

          <div className="card-section">
            <div>
              <h3>Freelance Designer</h3>
              <h4>2018.05 - 2019.03</h4>
            </div>
            <p>Freelance Designer</p>
          </div>

          <div className="card-section">
            <div>
              <h3>Willbe Communication</h3>
              <h4>2017.01 - 2018.04</h4>
            </div>
            <p>Account Executive</p>
          </div>

          <h2 className="category">Project</h2>
          <div className="card-section">
            <div className="name-link">
              <a
                href="https://www.easyme.online/d"
                target="_blank"
                rel="noopener noreferrer"
                className="easyme"
              >
                EASYME.md
              </a>
              <h4>2021.09 - 10</h4>
            </div>
            <p>개발자가 README를 쉽게 작성할 수 있는 README 에디터</p>
          </div>

          <h2 className="category">Education</h2>
          <div className="card-section">
            <h3>Vanilla Coding Bootcamp</h3>
            <p>2021. 03 ~ 10</p>
          </div>
        </div>
      </main>
      <style jsx>{`
        main {
          padding: 4rem 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title {
          margin: 0;
          font-size: 3rem;
        }

        .category {
          display: inline-block;
          margin-top: 1.5rem;
          padding: 0 2px;
          color: #0B71CD;
          box-shadow: inset 0 -10px 0 #d7f7ff;
        }

        .card-section {
          display: flex;
          align-items: center;
        }

        h2 {
          font-size: 1.2rem;
          margin: 0;
        }

        h3,
        .easyme {
          font-size: 1rem;
          margin-bottom: 0;
          width: 10rem;
        }

        .easyme {
          font-weight: 700;
        }

        .name-link {
          width: 10rem;
          margin-top: 1rem;
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

        .easyme:hover,
        .easyme:focus,
        .easyme.active {
          cursor: pointer;
          color: #0B71CD;
        }
        `}</style>
    </>
  );
};

export default Home;
