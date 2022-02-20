const Copyright = () => {
  return (
    <>
      <div className="copy">
        <div>
          <span>
            copyrightⓒ 2022 All rights reserved by
          </span>
          <a
            href="mailto:oneadev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="copy-name"
          >ONE:A.
          </a>
        </div>
      </div>
      <style jsx>{`
        .copy {
          color: #b6b6b6;
          display: flex;
          justify-content: center;
          flex-grow: 1;
        }

        .copy-name {
          margin-left: 3px;
          text-decoration: underline;
        }
        `}</style>
    </>
  );
};

export default Copyright;
