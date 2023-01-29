import Link from "next/link";
import { FaRegMoon } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center text-xl">
      <Link href="/posts">
        <a className="hover:scale-[105%] hover:text-green-500 transition">
          Posts
        </a>
      </Link>
      <Link href="/about">
        <a className="ml-8 hover:scale-[105%] hover:text-green-500 transition">
          About
        </a>
      </Link>
      <button className="ml-8 w-[35px] h-[35px] bg-gray-200 rounded transition hover:border-gray-300 hover:border-2">
        <FaRegMoon className="text-sm my-0 mx-auto" />
      </button>
    </nav>
  );
};

export default Navbar;
