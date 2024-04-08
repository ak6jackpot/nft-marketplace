import React, { useState } from "react";
import Eth from "assets/images/eth.png";
import heartPink from "assets/images/heartPink.png";
import heartGray from "assets/images/heartGray.png";
import { Link } from "react-router-dom";
import { useUserContext } from "context-provider";
import Countdown from "react-countdown";
import { CounterSmall } from "./Counter";
interface ArtworkCardProps {
  details: object;
}

export default function ArtworkCard(props: ArtworkCardProps) {
  const { details = {} } = props;
  const { globalitems, updateState } = useUserContext();
  const isSaved = globalitems?.savedData?.find(
    (item) => item?.id == details?.id
  );
  const [savedNow, setsavedNow] = useState(isSaved ? true : false);

  return (
    <div className="items-center justify-center flex flex-col align-center rounded-xl bg-white pb-1">
      <div className="items-center justify-center text-black flex flex-col rounded-lg p-2">
        <img
          className="h-[120px] aspect-video rounded-lg"
          src={details?.artImage}
        />

        <div
          className={`relative h-full flex flex-row opacity-70 -mt-[53%] items-center justify-center -mr-[40%] rounded-3xl bg-black p-1 ${
            Date.now() > details?.timeLeft ? "px-2" : "px-6"
          }`}
        >
          <Countdown date={details?.timeLeft} renderer={CounterSmall} />

          <button
            onClick={() => {
              setsavedNow(!savedNow);
              if (isSaved) {
                updateState({
                  globalitems: {
                    activeData: globalitems?.activeData,
                    marketData: globalitems?.marketData,
                    trendingData: globalitems?.trendingData,
                    savedData: globalitems?.savedData?.filter(
                      (item) => item?.id != details?.id
                    ),
                  },
                });
              } else {
                updateState({
                  globalitems: {
                    activeData: globalitems?.activeData,
                    marketData: globalitems?.marketData,
                    trendingData: globalitems?.trendingData,
                    savedData: [...globalitems?.savedData, details],
                  },
                });
              }
            }}
          >
            <img
              className="w-[16px] aspect-square"
              src={savedNow ? heartPink : heartGray}
            />
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full ml-4 mt-[35%] pb-2">
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
