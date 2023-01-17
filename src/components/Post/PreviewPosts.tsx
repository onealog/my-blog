import Image from "next/image";
import test from "./test.jpg";

const PreviewPosts = () => {
  return (
    <div className="mt-16 grid grid-cols-3 gap-5">
      <a href="#" className="h-[340px] flex flex-col col-[1/3] row-[1/3]">
        <Image
          src={test}
          alt="d"
          width={100}
          sizes="100vw"
          // layout="fill"
          objectFit="cover"
        />
      </a>
      <a href="#" className="flex flex-col">
        <Image
          src="/public/onea.jpeg"
          alt=""
          width={100}
          height={300}
          className="bg-green-500 object-cover"
        />
      </a>
      <a href="#" className="flex flex-col">
        <Image
          src="/public/onea.jpeg"
          alt=""
          width={100}
          height={300}
          className="bg-gray-200 object-cover"
        />
      </a>
    </div>
  );
};

export default PreviewPosts;
