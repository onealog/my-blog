interface Prop {
  content: string;
}

const PostBody = ({ content }: Prop) => {
  return (
    <>
      <div className="wrapper">
        <div className="content">{content}</div>
      </div>

      <style jsx>{`
        .wrapper {
          padding: 2rem;
          max-width: 768px;
          text-align: justify;
        }
      `}</style>
    </>
  );
};

export default PostBody;
