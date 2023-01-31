import CardList from "../components/About/CardList";
import CardListWithLink from "../components/About/CardListWithLink";

const About = () => {
  return (
    <main className="mt-16">
      <h1 className="text-2xl font-bold mb-6 text-green-400">
        Work Experience
      </h1>
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
      <h1 className="text-2xl font-bold mt-16 mb-6 text-green-400">
        Project
      </h1>
      <CardListWithLink
        link="https://www.easy-me.com"
        title="EASYME.md"
        date="2021.09 - 10"
        description="개발자가 README를 쉽게 작성할 수 있는 README 에디터"
      />
      <h1 className="text-2xl font-bold mt-16 mb-6 text-green-400">
        Education
      </h1>
      <CardList
        title="Vanilla Coding Bootcamp"
        date="2021.03 - 10"
        description="27주, 1500시간 이상 몰입 과정으로 풀스택 기반 프로그래밍 학습"
      />
    </main>
  );
};

export default About;
