import { useEffect, useState } from "react";

const Challenges = ({
  number,
  heading,
  description,
}: {
  number: string;
  heading: string;
  description: string;
}) => {
  const [descriptionText, setDescriptionText] = useState<string>(description);
  const [shortened, setShortened] = useState<boolean>(true);

  useEffect(() => {
    handleShortenDescription();
  }, []);

  useEffect(() => {
    if (shortened) {
      handleShortenDescription();
    } else {
      handleExpandDescription();
    }
  }, [shortened]);

  const handleShortenDescription = () => {
    setDescriptionText(
      description.length > 120
        ? description.substring(0, 120) + "..."
        : description
    );
  };

  const handleExpandDescription = () => {
    setDescriptionText(description);
  };

  const toggleShortened = () => {
    setShortened((prevState) => !prevState);
  };

  return (
    <div className="max-w-[400px] border-b-2 lg:border-0 mb-2 ">
      <h3 className="text-center text-6xl font-bold">{number}</h3>
      <h3 className="py-4 text-center text-2xl font-semibold text-green-600">
        {heading}
      </h3>
      <p
        className="text-center text-xl py-3 tracking-normal"
        onClick={toggleShortened}
      >
        {descriptionText}
      </p>
    </div>
  );
};

export default Challenges;
