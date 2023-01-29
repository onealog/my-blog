import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import test from "./test.jpg";

const PreviewPosts = () => {
  return (
    <div className="mt-16 grid gap-5 grid-cols-2">
      <a
        href="#"
        className="h-[340px] flex flex-col col-[1/3] transition hover:text-green-400 hover:scale-[101%]"
      >
        <Image
          src={test}
          alt="test"
          width={100}
          objectFit="cover"
          className="rounded"
        />
        <h1 className="mt-2 text-xl font-bold">블로그를 시작하며...</h1>
        <p className="text-xs font-semibold text-gray-300">
          2023년 1월 13일 • 읽는 데 4분
        </p>
      </a>
      <a
        href="#"
        className="flex flex-col transition hover:text-green-400 hover:scale-[101%]"
      >
        <Image
          src={test}
          alt="test"
          width={100}
          height={220}
          className="bg-green-500 object-cover rounded"
        />
        <h1 className="mt-2 text-xl font-bold">블로그를 시작하며...</h1>
        <p className="text-xs font-semibold text-gray-300">
          2023년 1월 13일 • 읽는 데 4분
        </p>
      </a>
      <a
        href="#"
        className="flex flex-col transition hover:text-green-400 hover:scale-[101%]"
      >
        <Image
          src={test}
          alt="test"
          width={100}
          height={220}
          className="bg-gray-200 object-cover rounded"
        />
        <h1 className="mt-2 text-xl font-bold">블로그를 시작하며...</h1>
        <p className="text-xs font-semibold text-gray-300">
          2023년 1월 13일 • 읽는 데 4분
        </p>
      </a>
      <a
        href="#"
        className="flex items-center mt-3 text-gray-300 font-semibold text-xs hover:text-green-400"
      >
        모든 글 보러 가기
        <FaArrowRight className="ml-1" />
      </a>
    </div>
  );
};

export default PreviewPosts;
