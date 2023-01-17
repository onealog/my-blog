import Title from "./Title";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="flex justify-between items-center mt-8">
      <Title />
      <Navbar />
    </header>
  );
};

export default Header;
