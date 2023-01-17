import Link from "next/link";

const Title = () => {
  return (
    <>
      <Link href="/">
        <a>
          <h1 className="text-3xl font-sans font-bold">
            🙋 onea<span className="text-green-500">log</span>
          </h1>
        </a>
      </Link>
    </>
  );
};

export default Title;
