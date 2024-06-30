"use client";

import { FC, ReactNode, useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Button } from "./ui";

interface InfoFlipCardProps {
  frontContent: ReactNode;
  backContent: ReactNode;
}

const InfoFlipCard: FC<InfoFlipCardProps> = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const handleFlipInfoCard = () => {
    setIsFlipped((prev) => !prev);
  };
  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipDirection="horizontal"
      cardStyles={{
        front: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "",
          padding: "1rem",
          borderRadius: "0.5rem",
        },
        back: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid black",
          padding: "1rem",
          borderRadius: "0.5rem",
        },
      }}
    >
      <>
        {frontContent}
        <Button className="bg-black rounded-full" onClick={handleFlipInfoCard}>
          Read More
        </Button>
      </>
      <>
        {backContent}
        <Button className="bg-black rounded-full" onClick={handleFlipInfoCard}>
          Read Less
        </Button>
      </>
    </ReactCardFlip>
  );
};

export default InfoFlipCard;
