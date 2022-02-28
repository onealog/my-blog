import Image from 'next/image';
import { useRouter } from 'next/router';

const index = ({ image }: { image: string; }) => {
  const router = useRouter();

  return (
    <li>
      <a href={`${router.pathname}/a`}>
        <hr />
        <div className="post">
          <div className="post-text">
            <h1>여기가 바로 타이틀이지요.</h1>
            <h2>여기가 바로 부제목 공간이지요. 여긴 좀 길게 써도 될 것 같습니다만.. 여긴 좀 길게 써도 될 것 같습니다만.. 여긴 좀 길게 써도 될 것 같습니다만.. 여긴 좀 길게 써도 될 것 같습니다만.. 여긴 좀 길게 써도 될 것 같습니다만.. 여긴 좀 길게 써도 될 것 같습니다만.. 여긴 좀 길게 써도 될 것 같습니다만..</h2>
            <p>2022년 2월 27일</p>
          </div>
          <Image
            src={image}
            alt="test image"
            placeholder="blur"
          />
        </div>
      </a>
      <style jsx>{`
        .post {
          display: flex;
          align-items: center;
          margin: 1.5rem 0;
        }

        .post-text {
          margin-right: 2rem;
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
          overflow-wrap: break-word;
          text-overflow: ellipsis;
          overflow: hidden;
          height: 2.5rem;
        }

        p {
          font-size: 0.8rem;
          color: #818181;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 1.2rem;
            display: flex;
            grid-column: 12;
          }

          h2 {
            font-size: 0.8rem;
            height: 2rem;
          }

          p {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </li>
  );
};

export default index;
