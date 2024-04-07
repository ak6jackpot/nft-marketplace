import React from "react";

export const CounterBig = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return (
      <span className="text-lg opacity-60 self-center">{"Bid is over"}</span>
    );
  } else {
    return (
      <div className="flex flex-row items-center justify-between">
        <div className="bg-gray-100 rounded-md aspect-square items-center justify-center flex w-[30px]">
          <span className="text-lg">{hours}</span>
        </div>
        <span className="text-2xl mx-1">:</span>

        <div className="bg-gray-100 rounded-md aspect-square items-center justify-center flex w-[30px]">
          <span className="text-lg">{minutes}</span>
        </div>
        <span className="text-2xl mx-1">:</span>

        <div className="bg-gray-100 rounded-md aspect-square items-center justify-center flex w-[30px]">
          <span className="text-lg">{seconds}</span>
        </div>
      </div>
    );
  }
};

export const CounterSmall = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return <span className="text-lg text-white mr-1">{""}</span>;
  } else {
    return (
      <span className="text-white text-sm mr-1">{`${hours}h ${minutes}m`}</span>
    );
  }
};
