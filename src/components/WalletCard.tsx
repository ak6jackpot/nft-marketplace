import income from "assets/icons/income.png";
import saving from "assets/icons/saving.png";
import spending from "assets/icons/spending.png";
import { useUserContext } from "context-provider";
import React from "react";
interface WalletCardProps {
  variant: string;
}

export default function WalletCard(props: WalletCardProps) {
  const { variant = "" } = props;
  const { globalData } = useUserContext();

  const formatAmount = (amount: any) => {
    const k = String(amount).includes(".")
      ? "." + (String(amount).split(".")[1] + "00").substring(0, 2)
      : "";

    return (
      (String(amount).includes(".")
        ? parseInt(String(amount).split(".")[0]) > 0
          ? String(amount)
              .split(".")[0]
              .replace(/\D/g, "")
              .replace(/\b0+/g, "")
              .replace(/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g, "$1,")
          : "0"
        : String(amount)
            .replace(/\D/g, "")
            .replace(/\b0+/g, "")
            .replace(/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g, "$1,")) + k
    );
  };
  return (
    <div className="flex flex-col w-[80%] aspect-square rounded-xl bg-white border-gray-100 border-[2px] p-4">
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
        <span className="text-lg">
          {variant == "Spending"
            ? "₹ " + formatAmount(globalData?.generalData?.walletSpending)
            : variant == "Income"
            ? "₹ 21,579.22"
            : variant == "Saving"
            ? "₹ 68,483.16"
            : "₹ 82,215.32"}
        </span>
      </div>
      <div className="flex flex-1 flex-row w-full items-center">
        <span
          className={`text-xs ${
            variant == "Spending" || variant == "Saving"
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {variant == "Spending"
            ? "+ 2.4%"
            : variant == "Income"
            ? "- 2.2%"
            : variant == "Saving"
            ? "+ 1.6%"
            : "+ 2.4%"}
        </span>
        <span className="text-3xl ml-1">{"·"}</span>
        <span className="text-sm ml-1">{"March 24, 2023"}</span>
      </div>
    </div>
  );
}
