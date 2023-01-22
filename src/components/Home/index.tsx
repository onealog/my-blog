import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <main>
        <div className="mt-16">
          <div className="mb-6 text-2xl font-bold">외부에 쓴 글</div>
          <div className="flex font-semibold pb-3 border-b border-gray-100">
            <div className="mr-12 text-gray-300">01</div>
            <a
              href="https://brunch.co.kr/@onea/72"
              target="_blank"
              className="hover:text-green-300"
            >
              (2022년 회고) 당근러에서 데이블러가 되다
            </a>
          </div>
          <div className="flex font-semibold py-3 border-b border-gray-100">
            <div className="mr-12 text-gray-300">02</div>
            <a
              href="https://teamdable.github.io/techblog/Git-Basic"
              target="_blank"
              className="hover:text-green-300"
            >
              자, 이제부터 이 글을 보는 순간 Git이 쉬워집니다? - 원리로 알아보는
              Git의 기초
            </a>
          </div>
          <div className="flex font-semibold py-3 border-b border-gray-100">
            <div className="mr-12 text-gray-300">03</div>
            <a
              href="https://brunch.co.kr/@onea/70"
              target="_blank"
              className="hover:text-green-300"
            >
              매일 나에게 피드백하여 성장하는 방법
            </a>
          </div>
          <div className="flex font-semibold py-3 border-b border-gray-100">
            <div className="mr-12 text-gray-300">04</div>
            <a
              href="https://brunch.co.kr/@onea/63"
              target="_blank"
              className="hover:text-green-300"
            >
              개발자가 되고 싶다면 바닐라코딩 부트캠프 오지 마라
            </a>
          </div>
          <div className="flex font-semibold py-3 border-b border-gray-100">
            <div className="mr-12 text-gray-300">05</div>
            <a
              href="https://brunch.co.kr/@onea/71"
              target="_blank"
              className="hover:text-green-300"
            >
              개발자 8개월 차. 책을 집필하게 되었다
            </a>
          </div>
          <a
            href="#"
            className="flex items-center mt-5 text-gray-300 font-semibold text-xs hover:text-green-400"
          >
            모든 외부 글 보러 가기
            <FaArrowRight className="ml-1" />
          </a>
        </div>
      </main>
    </>
  );
};

export default Home;
