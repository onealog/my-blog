const Copyright = () => {
  return (
    <>
      <div className="copy">
        <div>
          <span>copyrightⓒ 2022 All rights reserved by</span>
          <a
            href="mailto:oneadev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="copy-name"
          >
            ONE:A.
          </a>
        </div>
      </div>
      <style jsx>{`
        .copy {
          color: #b6b6b6;
          display: flex;
          flex-grow: 1;
        }

        span {
          font-size: 0.8rem;
        }

        .copy-name {
          font-size: 0.8rem;
          margin-left: 3px;
          text-decoration: underline;
        }

        @media (max-width: 392px) {
          span,
          .copy-name {
            font-size: 0.6rem;
          }
        }
      `}</style>
    </>
  );
};

export default Copyright;
