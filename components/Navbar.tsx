import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  return (
    <nav>
      <Link href="/">
        <a className={router.pathname === "/" ? "active" : ""}>
          Home
        </a>
      </Link>
      <Link href="/articles">
        <a className={router.pathname === "/articles" ? "active" : ""}>
          Articles
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;
