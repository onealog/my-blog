import { BsFacebook, BsGithub, BsLinkedin, BsFileEarmarkText } from 'react-icons/bs';

const Icon = () => {
  return (
    <>
      <div className="icon">
        <a
          href="https://github.com/onealog"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <BsGithub />
        </a>
        <a
          href="https://www.facebook.com/artistonea/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <BsFacebook />
        </a>
        <a
          href="https://www.linkedin.com/in/jaewon-han-859880b8/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://brunch.co.kr/@onea"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <BsFileEarmarkText />
        </a>
      </div>
      <style jsx>{`
        .icon {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-grow: 1;
        }

        .icon-link {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 0.5em;
          font-size: 24px;
          color: #b6b6b6;
        }
        `}</style>
    </>
  );
};

export default Icon;
