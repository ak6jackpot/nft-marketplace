import React from "react";
import eth from "assets/images/eth.png";
interface ChatMessageProps {
  item: {};
}

export default function HistoryItemSmall(props: ChatMessageProps) {
  const { item = {} } = props;

  return (
    <div className="flex flex-row border-b-[1px] py-4 items-center">
      <div className="flex flex-row flex-3">
        <img
          className="h-[38px] aspect-square rounded-full"
          src={item?.artImage}
        />
        <div className="flex flex-col ml-2 justify-end">
          <span>{item?.artName}</span>
          <span className="text-xs opacity-50 mt-[1px]">
            {"From " + item?.artistName}
          </span>
        </div>
      </div>
      <span className="flex flex-1 justify-center">{item?.status}</span>
      <div className="flex flex-row h-[12px] flex-1 justify-center">
        <img src={eth} />
        <span className="ml-1 self-center">{item?.bidPrice}</span>
      </div>
      <div className="flex flex-row h-[12px] flex-1 justify-center">
        <img src={eth} />
        <span className="ml-1 self-center">{item?.yourBid}</span>
      </div>
      <span className="flex flex-1 justify-center">{item?.timeLeft}</span>
    </div>
  );
}
