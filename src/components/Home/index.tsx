import { FaArrowRight } from 'react-icons/fa'

const Home = () => {
  return (
    <>
      <main>
        <div></div>
        <div className="mt-16">
          <div className="mb-6 text-2xl font-bold">외부에 쓴 글</div>
          <div className="font-semibold pb-3 border-b border-gray-100">
            <span className="mr-12 text-gray-300">01</span>
            <a href="#" className="hover:text-green-300">(2022년 회고) 당근러에서 데이블러가 되다</a>
          </div>
          <div className="font-semibold py-3 border-b border-gray-100">
            <span className="mr-12 text-gray-300">02</span>
            <a href="#" className="hover:text-green-300">매일 나에게 피드백하여 성장하는 방법</a>
          </div>
          <div className="font-semibold py-3 border-b border-gray-100">
            <span className="mr-12 text-gray-300">03</span>
            <a href="#" className="hover:text-green-300">글을 오래도록 잘 쓰는 법</a>
          </div>
          <div className="font-semibold py-3 border-b border-gray-100">
            <span className="mr-12 text-gray-300">04</span>
            <a href="#" className="hover:text-green-300">개발자가 되고 싶다면 바닐라코딩 부트캠프 오지 마라</a>
          </div>
          <div className="font-semibold py-3 border-b border-gray-100">
            <span className="mr-12 text-gray-300">05</span>
            <a href="#" className="hover:text-green-300">개발자 8개월 차. 책을 집필하게 되었다</a>
          </div>
          <a href="#" className="flex items-center mt-5 text-gray-300 font-semibold text-xs hover:text-green-400">
            모든 외부 글 보러 가기
            <FaArrowRight className="ml-1"/>
          </a>
        </div>
      </main>
    </>
  );
};

export default Home;
