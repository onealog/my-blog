import Image from "next/image";
import image from "/public/onea.jpeg";

interface IntroductionProps {
  firstTitle: string;
  secondTitle: string;
  firstDescription: string;
  secondeDescription: string;
}

const Introduction = ({
  firstTitle,
  secondTitle,
  firstDescription,
  secondeDescription,
}: IntroductionProps) => {
  return (
    <div className="flex justify-between mt-16">
      <div>
        <h1 className="text-2xl font-bold">
          <p>{firstTitle}</p>
          <p>{secondTitle}</p>
        </h1>
        <div className="mt-2 text-gray-400">
          <p>{firstDescription}</p>
          <p>{secondeDescription}</p>
        </div>
      </div>
      <div>
        <Image
          src={image}
          alt="onealog jaewon han"
          placeholder="blur"
          height={120}
          width={120}
          priority
          className="rounded-full filter grayscale"
        />
      </div>
    </div>
  );
};

export default Introduction;
