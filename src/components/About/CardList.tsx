import { CardListProps } from "../../types/styles";

const CardList = ({ title, date, description }: CardListProps) => {
  return (
    <>
      <div className="flex items-center mb-3">
        <div>
          <h3 className="font-bold text-lg mb-0 w-[200px] text-gray-400">{title}</h3>
          <h4 className="text-xs mt-0 text-gray-300">{date}</h4>
        </div>
        <p className="text-sm text-gray-400 pl-4">{description}</p>
      </div>
    </>
  );
};

export default CardList;
