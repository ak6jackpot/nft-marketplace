import React from "react";

interface ArtworkCardProps {
  title: string;
  image: string;
  artist: string;
  isButtonPresent?: boolean;
  bidType?: "current" | "your";
  amount?: string;
}

export default function ArtworkCard(props: ArtworkCardProps) {
  const {
    title = "",
    image = "",
    artist = "",
    isButtonPresent = false,
    bidType = "current",
    amount = "",
  } = props;

  return (
    <>
      <div className="items-center justify-center flex flex-col align-center rounded-md bg-white">
        <div className="items-center justify-center text-black flex flex-col rounded-lg p-2">
          <img className="h-[120px] aspect-video rounded-lg" src={image} />
        </div>
        <div className="flex flex-col w-[200px] pb-2">
          <span>{title}</span>
          <span className="text-xs opacity-30"> By {artist}</span>
        </div>
        {/* <div className="opacity-40">
          <span className="w-[50px]">{artist}</span>
        </div> */}
      </div>
    </>
  );
}
