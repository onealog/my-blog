import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <Link href="/articles">
        <a>Articles</a>
      </Link>
      <style jsx>{`
        a {
          margin-left: 0.8rem;
          padding: 0.2rem 0.5rem;
          border-radius: 0.5rem;
          font-size: 12px;
          font-weight: 600;
          color: white;
          background-color: #0B71CD;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
