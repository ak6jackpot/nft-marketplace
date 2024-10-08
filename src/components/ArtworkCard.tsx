import React, { useState } from "react";
import Eth from "assets/icons/eth.png";
import heartPink from "assets/icons/heartPink.png";
import heartGray from "assets/icons/heartGray.png";
import { Link } from "react-router-dom";
import { useUserContext } from "context-provider";
import Countdown from "react-countdown";
import { CounterSmall } from "./Counter";

interface ArtworkCardProps {
  details: object;
}

export default function ArtworkCard(props: ArtworkCardProps) {
  const { details = {} } = props;
  const { updateState, globalSavedData } = useUserContext();
  const isSaved = globalSavedData?.savedData?.find(
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
                  globalSavedData: {
                    savedData: globalSavedData?.savedData?.filter(
                      (item) => item?.id != details?.id
                    ),
                  },
                });
              } else {
                updateState({
                  globalSavedData: {
                    savedData: [...globalSavedData?.savedData, details],
                  },
                });
              }
            }}
          >
            <img
              className="w-[16px] aspect-square mr-1"
              src={savedNow ? heartPink : heartGray}
            />
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full ml-4 mt-[40%] pb-2">
        <span>{details?.artName}</span>
        <span className="text-xs opacity-30"> By {details?.artistName}</span>
      </div>
      <div className="flex flex-row w-full px-2 items-center">
        <div className="flex flex-col flex-3">
          <div>
            <span
              className={`text-xs ${
                Date.now() < details?.timeLeft ? "opacity-40" : "opacity-0"
              }`}
            >
              {"Current Bid"}
            </span>
            <div className="flex flex-row">
              <img
                className={`h-[14px] self-center ${
                  Date.now() < details?.timeLeft ? "opacity-100" : "opacity-0"
                }`}
                src={Eth}
              ></img>
              <span
                className={`text-sm ml-1 ${
                  Date.now() < details?.timeLeft ? "opacity-100" : "opacity-0"
                }`}
              >
                {details?.bidPrice + " ETH"}
              </span>
            </div>
          </div>
        </div>
        <Link to={`/open/${details?.id}`}>
          <button className="bg-black text-white items-center text-xs justify-center p-[8px] flex-2 rounded-lg self-center relative overflow-hidden">
            {Date.now() < details?.timeLeft ? "Place a bid" : "View Details"}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 transform -translate-full animate-shine"></span>
          </button>
        </Link>
      </div>
    </div>
  );
}
