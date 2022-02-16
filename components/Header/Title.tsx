import Link from "next/link";

const Title = () => {
  return (
    <>
      <Link href="/">
        <a>
          <h1>🙋 onea<span className="text-log">log</span></h1>
        </a>
      </Link>
      <style jsx>{`
        .text-log {
          color: #519259;
        }
      `}
      </style>
    </>
  );
};

export default Title;
