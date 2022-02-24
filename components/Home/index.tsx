import CardList from './CardList';
import CardListWithLink from './CardListWithLink';

const Home = () => {
  return (
    <>
      <main>
        <div>
          <div className="head">
            <h1 className="title">
              <div>고객의 가치를 누구보다 중요시하는</div>
              <div>소프트웨어 개발자 <span className="highlight">한재원</span>입니다.</div>
            </h1>
            <p className="sub-title">조직문화, 협업, 메타인지에 특히 관심이 많습니다.</p>
            <p className="sub-title">현재 <a className="highlight">콘텐츠 디스커버리 플랫폼 데이블</a>에서 프런트엔드를 개발하고 있습니다.</p>
          </div>

          <div>
            <h2 className="category">Work Experience</h2>
            <CardList
              title="Dable"
              date="2022.02 - Now"
              description="Web Front-end Developer"
            />
            <CardList
              title="당근마켓"
              date="2018.07 - 2021.02"
              description="Marketer"
            />
            <CardList
              title="ONE:A Design Lab"
              date="2018.05 - 2019.03"
              description="Freelance Designer"
            />
            <CardList
              title="Willbe Communication"
              date="2017.01 - 2018.04"
              description="Account Executive"
            />

            <h2 className="category">Project</h2>
            <CardListWithLink
              link="https://www.easyme.online/d"
              title="EASYME.md"
              date="2021.09 - 10"
              description="개발자가 README를 쉽게 작성할 수 있는 README 에디터"
            />

            <h2 className="category">Education</h2>
            <CardList
              title="Vanilla Coding Bootcamp"
              date="2021.03 - 10"
              description="27주, 1500시간 이상 몰입 과정으로 풀스택 기반 프로그래밍 학습"
            />
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
          margin-right: auto;
          margin-left: auto;
          width: 100%;
        }

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

        .category {
          margin-top: 1.5rem;
          color: #0B71CD;
        }

        .highlight,
        .category {
          display: inline-block;
          padding: 0 2px;
          box-shadow: inset 0 -10px 0 #d7f7ff;
        }

        h2 {
          font-size: 1.2rem;
          margin: 0;
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

export default Home;
