import Seo from '../components/Seo';
import Post from '../components/Post';
import image from '../components/Post/test.jpg';

const posts = () => {
  return (
    <>
      <Seo title="posts" />
      <main>
        <ul>
          <Post image={image} />
          <Post image={image} />
          <Post image={image} />
          <Post image={image} />
          <Post image={image} />
          <Post image={image} />
          <Post image={image} />
          <Post image={image} />
          <Post image={image} />
        </ul>
      </main>
      <style jsx>{`
        main {
          margin: 0 2rem;
          padding: 0 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: auto !important;
          margin-left: auto !important;
          width: 100%;
        }

        ul {
          width: 50rem;
        }
      `}</style>
    </>
  );
};

export default posts;
