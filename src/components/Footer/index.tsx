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
          flex: 1;
          margin: 0.5rem 2rem;
          justify-content: space-between;
          align-items: center;
          padding: 2rem 0;
          border-top: 1px solid #eaeaea;
        }
        `}</style>
    </footer>
  );
};

export default Footer;
