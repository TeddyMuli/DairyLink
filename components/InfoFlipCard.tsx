"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
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
          // padding: "1rem",
          borderRadius: "0.5rem",
          position: "relative",
        },
        back: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid black",
          padding: "1rem",
          borderRadius: "0.5rem",
          position: "absolute",
        },
      }}
    >
      <>
        {frontContent}
        <div className="relative z-20 w-1/5 h-2 bg-white mt-4 mb-14" />
        <Button
          className="bg-green-600 hover:bg-green-500 rounded-full relative z-20 font-bold text-xl flex items-center gap-2"
          onClick={handleFlipInfoCard}
        >
          Read More{" "}
          <ChevronRight className="h-4 w-4 rounded-full border-2 text-white" />
        </Button>
      </>
      <>
        {backContent}
        <Button
          className="bg-black hover:bg-slate-700 rounded-full relative z-20 font-bold text-xl flex items-center gap-2 mt-8"
          onClick={handleFlipInfoCard}
        >
          <ChevronLeft className="h-4 w-4 rounded-full border-2 text-white" />
          Read Less
        </Button>
      </>
    </ReactCardFlip>
  );
};

export default InfoFlipCard;
