import Seo from '../components/Seo';
import { useRouter } from 'next/router';

const posts = () => {
  const router = useRouter();

  return (
    <>
      <Seo title="posts" />
      <main className="wrapper">
        <ul>
          <li>
            <a href={`${router.pathname}/a`}>
              <div className="post">
                <div className="post-text">
                  <h1>여기가 바로 타이틀이지요.</h1>
                  <h2>여기가 바로 부제목 공간이지요. 여긴 좀 길게 써도 될 것 같습니다만.. 여긴 좀 길게 써도 될 것 같습니다만.. 여긴 좀 길게 써도 될 것 같습니다만.. 여긴 좀 길게 써도 될 것 같습니다만.. 여긴 좀 길게 써도 될 것 같습니다만.. 여긴 좀 길게 써도 될 것 같습니다만.. 여긴 좀 길게 써도 될 것 같습니다만..</h2>
                  <p>2022년 2월 27일</p>
                </div>
                <div></div>
              </div>
            </a>
          </li>
        </ul>
      </main>
      <style jsx>{`
        main {
          margin: 0 2rem;
        }

        h1 {
          font-size: 1.5rem;
          margin-bottom: 0;
        }

        h2 {
          margin: 5px 0;
          font-size: 1rem;
          font-weight: 500;
          color: #818181;
        }

        p {
          font-size: 0.8rem;
          color: #818181;
        }
      `}</style>
    </>
  );
};

export default posts;
