interface Props {
  title: string;
  coverImage: string;
  date: string;
};

const PostHeader = ({ title, coverImage, date }: Props) => {
  return (
    <>
      <img src={coverImage} />
      <div>{title}</div>
      <div>{date}</div>
    </>
  );
};

export default PostHeader;
