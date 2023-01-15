import Introduction from '../components/shared/Introduction';
import CardList from '../components/Home/CardList';
import CardListWithLink from '../components/Home/CardListWithLink';

const Home = () => {
  return (
    <>
      <main>
        <div>
          <Introduction
            title1="고객의 가치를 누구보다 중요시하는"
            title2="소프트웨어 개발자 원아입니다."
            subTitle1="조직문화, 협업, 메타인지에 특히 관심이 많습니다."
            subTitle2="현재 콘텐츠 디스커버리 플랫폼 데이블에서 프런트엔드를 개발하고 있습니다."
          />
          <div>
            <h2 className="category">Work Experience</h2>
            <hr />
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
            <hr />
            <CardListWithLink
              link="https://www.easyme.online/d"
              title="EASYME.md"
              date="2021.09 - 10"
              description="개발자가 README를 쉽게 작성할 수 있는 README 에디터"
            />
            <h2 className="category">Education</h2>
            <hr />
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
          margin-right: auto;
          margin-left: auto;
        }

        h2 {
          font-size: 1.2rem;
          margin: 0;
        }

        .category {
          margin-top: 1.5rem;
          color: #0b71cd;
          display: inline-block;
          padding: 0 2px;
          box-shadow: inset 0 -10px 0 #d7f7ff;
        }

        @media (min-width: 768px) {
          main {
            max-width: 768px;
          }
        }
        `}</style>
    </>
  );
};

export default Home;
