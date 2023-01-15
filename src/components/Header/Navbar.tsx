import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <style jsx>{`
        a {
          margin-left: 0.8rem;
          padding: 0.3rem 0.7rem;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          color: white;
          background-color: #0b71cd;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
