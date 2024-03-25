import React from "react";
import Eth from "assets/images/eth.png";
import { Link } from "react-router-dom";
interface ArtworkCardProps {
  details: object;
}

export default function ArtworkCard(props: ArtworkCardProps) {
  const { details = {} } = props;

  return (
    <div className="items-center justify-center flex flex-col align-center rounded-xl bg-white pb-1">
      <div className="items-center justify-center text-black flex flex-col rounded-lg p-2">
        <img
          className="h-[120px] aspect-video rounded-lg"
          src={details?.artImage}
        />
      </div>
      <div className="flex flex-col w-full ml-4 pb-2">
        <span>{details?.artName}</span>
        <span className="text-xs opacity-30"> By {details?.artistName}</span>
      </div>
      <div className="flex flex-row w-full px-2">
        <div className="flex flex-col flex-3">
          <span className="text-xs opacity-40">{"Current Bid"}</span>
          <div className="flex flex-row">
            <img className="h-[12px] self-center" src={Eth}></img>
            <span className="text-sm ml-1">{details?.bidPrice + " ETH"}</span>
          </div>
        </div>
        <Link to={`/open/${details?.id}`}>
          <button className="bg-black text-white items-center text-xs justify-center p-[6px] flex-2 rounded-lg self-center">
            Place a bid
          </button>
        </Link>
      </div>
    </div>
  );
}
