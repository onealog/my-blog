import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsFileEarmarkText,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="flex justify-between my-16 border-t pt-8">
      <div className="text-gray-300 text-xs font-semibold">
        <span>copyrightⓒ 2023 All rights reserved by </span>
        <a
          href="mailto:oneadev@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          ONE:A.
        </a>
      </div>
      <div className="flex">
        <a
          href="https://github.com/onealog"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-3 text-2xl text-gray-300 hover:text-gray-400"
        >
          <BsGithub />
        </a>
        <a
          href="https://www.facebook.com/artistonea/"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-3 text-2xl text-gray-300 hover:text-gray-400"
        >
          <BsFacebook />
        </a>
        <a
          href="https://www.linkedin.com/in/jaewon-han/"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-3 text-2xl text-gray-300 hover:text-gray-400"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://brunch.co.kr/@onea"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-3 text-2xl text-gray-300 hover:text-gray-400"
        >
          <BsFileEarmarkText />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
