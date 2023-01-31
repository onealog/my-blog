import { CardListWithLinkProps } from "../../types/styles";

const CardListWithLink = ({
  link,
  title,
  date,
  description,
}: CardListWithLinkProps) => {
  return (
    <>
      <div className="flex items-center mb-3">
        <div className="name-link">
          <div className="w-[200px]">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-lg mb-0 text-gray-400 hover:text-green-300"
            >
              {title}
            </a>
          </div>
          <h4 className="text-xs mt-0 text-gray-300">{date}</h4>
        </div>
        <p className="text-sm text-gray-400 pl-4">{description}</p>
      </div>
    </>
  );
};

export default CardListWithLink;
