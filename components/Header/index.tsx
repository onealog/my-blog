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
          margin: 0 2rem;
        }
      `}
      </style>
    </header>
  );
};

export default Header;
