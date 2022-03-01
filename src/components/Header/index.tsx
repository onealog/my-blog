import Title from './Title';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header>
      <Title />
      <Navbar />
      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 2rem;
          margin-right: auto;
          margin-left: auto;
        }

        @media (min-width: 768px) {
          header {
            max-width: 768px;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
