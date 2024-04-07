import income from "assets/images/income.png";
import saving from "assets/images/saving.png";
import spending from "assets/images/spending.png";
import React from "react";
interface WalletCardProps {
  variant: string;
}

export default function WalletCard(props: WalletCardProps) {
  const { variant = "" } = props;

  return (
    <div className="flex flex-col w-[80%] aspect-square rounded-xl bg-white p-4">
      <div className="flex flex-1 py-2">
        <div className="bg-gray-200 w-[35px] aspect-square rounded-full p-2">
          <img
            className=""
            src={
              variant == "Spending"
                ? spending
                : variant == "Income"
                ? income
                : variant == "Saving"
                ? saving
                : saving
            }
          />
        </div>
      </div>
      <div className="flex flex-2 flex-col justify-center w-full pb-2">
        <span className="opacity-40">{"Total " + variant}</span>
        <span className="text-lg">{"$ 123.456"}</span>
      </div>
      <div className="flex flex-1 flex-row w-full items-center">
        <span
          className={`text-xs ${
            variant == "Spending" || variant == "Saving"
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {"+ 2.4%"}
        </span>
        <span className="text-3xl ml-1">{"·"}</span>
        <span className="text-sm ml-1">{"March 24, 2023"}</span>
      </div>
    </div>
  );
}
