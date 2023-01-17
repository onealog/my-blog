import Link from "next/link";
import { FaRegMoon } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center text-xl">
      <Link href="/posts">
        <a>Posts</a>
      </Link>
      <Link href="/about">
        <a className="ml-8">About</a>
      </Link>
      <button className="ml-8 w-[35px] h-[35px] bg-gray-200 rounded">
        <FaRegMoon className="text-sm my-0 mx-auto" />
      </button>
    </nav>
  );
};

export default Navbar;
