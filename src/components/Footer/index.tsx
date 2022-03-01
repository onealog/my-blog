import Copyright from './Copyright';
import Icon from './Icon';

const Footer = () => {
  return (
    <footer>
      <Copyright />
      <Icon />
      <style jsx>{`
        footer {
          display: flex;
          margin: 0.5rem 2rem;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #eaeaea;
          padding: 2rem;
          margin-right: auto;
          margin-left: auto;
        }

        @media (min-width: 768px) {
          footer {
            max-width: 768px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
