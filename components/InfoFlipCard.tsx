"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { FC, ReactNode, useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Button } from "./ui";

interface InfoFlipCardProps {
  frontContent: ReactNode;
  backContent: ReactNode;
  bgImage: string;
}

const InfoFlipCard: FC<InfoFlipCardProps> = ({ frontContent, backContent,bgImage }) => {
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
          // position: "relative",
        },
        back: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid black",
          padding: "1rem",
          borderRadius: "0.5rem",
          // position: "absolute",
        },
      }}
    >
      <div
        style={{'--image-url': `url(/assets/images/${bgImage})`} as React.CSSProperties}
        className={`relative bg-[image:var(--image-url)] bg-cover bg-center bg-no-repeat w-full h-80  flex flex-col justify-center items-center`}
      >
        <div className="absolute inset-0 bg-black opacity-60" />
        {frontContent}
        <div className=" w-1/5 h-2 bg-white mt-4 mb-14 relative z-20" />
        <Button
          className="relative z-20 bg-green-600 hover:bg-green-500 rounded-full font-bold text-xl flex items-center gap-2"
          onClick={handleFlipInfoCard}
        >
          Read More{" "}
          <ChevronRight className="h-4 w-4 rounded-full border-2 text-white" />
        </Button>
      </div>
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
