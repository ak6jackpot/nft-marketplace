import { Button } from "components/Button";
import Header from "components/Header";
import HistoryItemSmall from "components/HistoryItemSmall";
import SidebarPlus from "components/SidebarPlus";
import WalletCard from "components/WalletCard";
import { useUserContext } from "context-provider";
import { ordersData } from "data/ordersData";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Eth from "assets/icons/eth.png";
import ReplayCircleFilledIcon from "@mui/icons-material/ReplayCircleFilled";
import AddCardIcon from "@mui/icons-material/AddCard";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import GavelRoundedIcon from "@mui/icons-material/GavelRounded";
import Cookies from "universal-cookie";
import EthColor from "assets/icons/eth_color.png";
import RightArrow from "assets/icons/rightArrow.png";
import RightArrowWhite from "assets/icons/rightArrowWhite.png";
import { Dialog } from "@mui/material";
import { BallTriangle } from "react-loader-spinner";
import { useSnackbar } from "react-simple-snackbar";
import EthereumGif from "assets/images/eth_gif_fast.gif";

export default function Wallet() {
  const { globalitems, globalData, updateState } = useUserContext();
  const cookies = new Cookies();
  const [walletDialogVisible, setWalletDialogVisible] = useState(false);
  const [cardDialogVisible, setCardDialogVisible] = useState(false);
  const [amountToWallet, setAmountToWallet] = useState("");
  const [amountToCard, setAmountToCard] = useState("");
  const [loaderVisible, setLoaderVisible] = useState(false);
  const [openSnackbar, closeSnackbar] = useSnackbar();
  const timeToMinutes = (timeStr) => {
    const [hours, minutes] = timeStr.split(":").map(Number);
    return hours * 60 + minutes;
  };
  const INRtoWallet = () => {
    setLoaderVisible(true);

    setTimeout(() => {
      updateState({
        globalData: {
          generalData: {
            ...globalData?.generalData,
            walletBalance:
              Number(globalData?.generalData?.walletBalance) +
              Number((Number(amountToWallet) * 0.95).toFixed(2)),
          },
        },
      });

      globalitems?.walletData
        ?.sort((a, b) => timeToMinutes(a?.time) - timeToMinutes(b?.time))
        ?.shift();

      globalitems?.walletData?.push({
        type: "topup",
        amount: (Number(amountToWallet) * 0.95).toFixed(2),
        time: `${new Date().getHours()}:${new Date().getMinutes()}`,
      });
    }, 1500);

    setAmountToWallet("");
    setTimeout(() => {
      setLoaderVisible(false);
      setWalletDialogVisible(false);
      openSnackbar("Your wallet balance has been updated!");
    }, 2000);
  };

  const walletToCard = () => {
    setLoaderVisible(true);

    setTimeout(() => {
      updateState({
        globalData: {
          generalData: {
            ...globalData?.generalData,
            cardBalance: (
              Number(globalData?.generalData?.cardBalance) +
              Number((Number(amountToCard) / 300).toFixed(3))
            ).toFixed(3),
            walletBalance:
              Number(globalData?.generalData?.walletBalance) -
              Number(amountToCard),
            walletSpending:
              Number(globalData?.generalData?.walletSpending) +
              Number(amountToCard),
          },
        },
      });

      globalitems?.walletData
        ?.sort((a, b) => timeToMinutes(a?.time) - timeToMinutes(b?.time))
        ?.shift();

      globalitems?.walletData?.push({
        type: "conversion",
        amount: (Number(amountToCard) / 300).toFixed(3),
        time: `${new Date().getHours()}:${new Date().getMinutes()}`,
      });
    }, 1500);

    setAmountToCard("");
    setTimeout(() => {
      setLoaderVisible(false);
      setCardDialogVisible(false);
      openSnackbar("Succesfully Deposited ETH in Card");
    }, 2000);
  };

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
    <>
      <Helmet>
        <title>AK's NFT Store</title>
        <meta name="Akshat Singh" content="Marketplace for NFTs" />
      </Helmet>
      <div className="flex flex-row w-screen h-screen font-urbanistNormal bg-gray-50">
        <div className="flex flex-1">
          <SidebarPlus />
        </div>
        <div className="flex flex-col flex-4">
          <Header />
          <div className="w-full flex flex-row h-full pt-[80px]">
            <div className="flex flex-col items-center flex-7 border-r-[2px] overflow-y-scroll p-4 border-gray-200">
              <div className="flex flex-1 flex-col w-full">
                <div className="items-start m-2">
                  <span className="text-black text-3xl">Wallet</span>
                </div>
                <div className="flex flex-row items-start my-2 p-2">
                  <div className="flex flex-1 justify-center">
                    <WalletCard variant={"Spending"} />
                  </div>
                  <div className="flex flex-1 justify-center">
                    <WalletCard variant={"Income"} />
                  </div>
                  <div className="flex flex-1 justify-center">
                    <WalletCard variant={"Saving"} />
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col w-full">
                <div className="flex flex-row justify-between items-center my-2 px-2">
                  <span className="text-2xl">Recent Activity</span>
                  <Link to={"/history"}>
                    <span className="text-sm opacity-60">View All</span>
                  </Link>
                </div>
                <div className="flex flex-col m-2 bg-white rounded-lg pt-4 border-2">
                  <div className="flex flex-row pb-4 px-8 border-b-[1px]">
                    <span className="flex flex-3 opacity-50 text-sm">
                      Item List
                    </span>
                    <span className="flex flex-1 justify-center opacity-50 text-sm">
                      Status
                    </span>
                    <span className="flex flex-1 justify-center opacity-50 text-sm">
                      Open Price
                    </span>
                    <span className="flex flex-1 justify-center opacity-50 text-sm">
                      Your Offer
                    </span>
                    <span className="flex flex-1 justify-center opacity-50 text-sm">
                      Time Left
                    </span>
                  </div>

                  {ordersData.slice(0, 6).map((item) => {
                    return (
                      <div className="px-6">
                        <HistoryItemSmall item={item} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center overflow-y-scroll bg-white flex-3">
              <div className="flex flex-col border-b-[2px] border-gray-200 w-[90%] py-2">
                <span className="text-lg">Wallet</span>
                <div
                  onClick={() => setCardDialogVisible(true)}
                  className="flex flex-col w-full justify-between rounded-xl cursor-pointer aspect-video bg-gradient-to-tr from-green-500 via-indigo-500 to-black mt-2 p-4"
                >
                  <div className="flex flex-row justify-between items-center">
                    <span className="text-white">ETF Wallet Card</span>
                    <img className="h-[24px] self-center mr-2" src={EthColor} />
                  </div>
                  <span className="text-white">{"**** **** **** 5356"}</span>
                  <div className="flex flex-row justify-between items-center">
                    <span className="text-white">
                      {cookies.get("firstname") ? cookies.get("firstname") : ""}{" "}
                      {cookies.get("lastname") ? cookies.get("lastname") : ""}
                    </span>
                    <span className="text-white text-xl">
                      {globalData?.generalData?.cardBalance + " ETH"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center border-b-[2px] border-gray-200 w-[90%] py-2">
                <span className="text-lg opacity-50">Your Balance</span>
                <span className="text-2xl">
                  {"₹ " + formatAmount(globalData?.generalData?.walletBalance)}
                </span>
                <div className="flex flex-row w-full mt-2">
                  <Button
                    onClick={() => setWalletDialogVisible(true)}
                    className="bg-black text-white hover:bg-gray-300 hover:text-black flex-1 flex mx-8 flex-4 py-2"
                  >
                    Top up Your Wallet
                  </Button>
                </div>
              </div>
              <div className="flex flex-col w-[90%] pt-2">
                <span className="text-lg">Transaction History</span>
                <div className="flex flex-col w-full">
                  {globalitems?.walletData
                    ?.sort(
                      (a, b) => timeToMinutes(b?.time) - timeToMinutes(a?.time)
                    )
                    ?.map((item) => {
                      return (
                        <div className="flex flex-row items-center py-3 border-b-[1px]">
                          {item?.type == "conversion" ? (
                            <div className="flex flex-1 w-[150%] aspect-square">
                              <CreditScoreIcon
                                style={{
                                  backgroundColor: "#e5e7eb",
                                  color: "black",
                                  borderRadius: 1000,
                                  padding: 4,
                                  height: "100%",
                                  width: "100%",
                                }}
                              />
                            </div>
                          ) : item?.type == "topup" ? (
                            <div className="flex flex-1 w-[150%] aspect-square">
                              <AddCardIcon
                                style={{
                                  backgroundColor: "#e5e7eb",
                                  color: "black",
                                  borderRadius: 1000,
                                  padding: 4,
                                  height: "100%",
                                  width: "100%",
                                }}
                              />
                            </div>
                          ) : item?.type == "bid" ? (
                            <div className="flex flex-1 w-[150%] aspect-square">
                              <GavelRoundedIcon
                                style={{
                                  backgroundColor: "#e5e7eb",
                                  color: "black",
                                  borderRadius: 1000,
                                  padding: 4,
                                  height: "100%",
                                  width: "100%",
                                }}
                              />
                            </div>
                          ) : (
                            <div className="flex flex-1 w-[150%] aspect-square">
                              <GavelRoundedIcon
                                style={{
                                  backgroundColor: "#e5e7eb",
                                  color: "black",
                                  borderRadius: 1000,
                                  padding: 4,
                                  height: "100%",
                                  width: "100%",
                                }}
                              />
                            </div>
                          )}
                          <div className="flex flex-col flex-4 pl-4">
                            <span className="text-sm font-urbanistBold">
                              {item?.type == "conversion"
                                ? "Exchange to ETH"
                                : item?.type == "topup"
                                ? "Wallet Topup"
                                : item?.type == "bid"
                                ? "Open Bid Successful"
                                : ""}
                            </span>
                            <span className="text-xs opacity-40">
                              {"Today at " + item?.time}
                            </span>
                          </div>
                          <div className="flex flex-row flex-3">
                            <img
                              className="h-[12px] self-center mr-2"
                              src={Eth}
                            />
                            <span className="text-sm">
                              {item?.type == "conversion" || item?.type == "bid"
                                ? item?.amount + " ETH"
                                : "₹ " + formatAmount(item?.amount)}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
            <Dialog
              onClose={() => setWalletDialogVisible(false)}
              open={walletDialogVisible}
            >
              {!loaderVisible && (
                <div className="flex flex-col font-urbanistNormal bg-white justify-center flex-1 px-4 py-4">
                  <span className="mb-2 text-lg">
                    Enter the amount you want to add to wallet
                  </span>
                  <div className="flex flex-row items-center py-6">
                    <div className="flex-3 text-[50px] items-center justify-center flex">
                      <input
                        className="px-[10%] flex focus:ring-0 focus:outline-none"
                        autoFocus={true}
                        value={amountToWallet}
                        onChange={(e) =>
                          setAmountToWallet(
                            e?.target?.value?.replace(/[^\d.-]+/g, "")
                          )
                        }
                      />
                    </div>
                    {Number(amountToWallet) > 0 && (
                      <div className="flex-1 flex">
                        <img className="" src={RightArrow} />
                      </div>
                    )}
                    {Number(amountToWallet) > 0 && (
                      <div className="flex-3 text-[50px] items-center justify-center flex">
                        <span className="">
                          {formatAmount(Number(amountToWallet) * 0.95)}
                        </span>
                      </div>
                    )}
                  </div>
                  {Number(amountToWallet) > 0 && (
                    <div className="flex flex-row items-center">
                      <Button
                        className="bg-black text-white flex-3 text-lg flex self-center my-2 py-2"
                        onClick={() => INRtoWallet()}
                      >
                        Continue to Checkout
                      </Button>
                      <span className="text-sm flex flex-2 ml-4 justify-end mr-2">
                        {"Updated Wallet Balance: "}
                      </span>
                      <span className="flex flex-1 text-xl text-green-600">
                        {formatAmount(
                          Number(globalData?.generalData?.walletBalance) +
                          Number((Number(amountToWallet) * 0.95).toFixed(2))
                        )}
                      </span>
                    </div>
                  )}
                </div>
              )}
              {loaderVisible && (
                <div className="p-3">
                  <BallTriangle
                    height={100}
                    width={100}
                    radius={5}
                    color="#4fa94d"
                    ariaLabel="ball-triangle-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  />
                </div>
              )}
            </Dialog>
            <Dialog
              onClose={() => setCardDialogVisible(false)}
              open={cardDialogVisible}
            >
              {!loaderVisible && (
                <div className="flex flex-col font-urbanistNormal bg-black text-white justify-center flex-1 px-4 py-4 w-full">
                  <div className="flex flex-row items-center">
                    <span className="mb-2 text-lg flex flex-5">
                      Convert you wallet cash to ETHEREUM✨
                    </span>
                    <span className="text-sm flex flex-2 ml-4 justify-end mr-2">
                      {"Wallet Balance: "}
                    </span>
                    <span className="flex flex-1 text-xl text-yellow-200">
                      {formatAmount(Number(globalData?.generalData?.walletBalance))}
                    </span>
                  </div>
                  <div className="flex flex-row items-center py-6">
                    <div className="flex-3 text-[50px] items-center justify-center flex">
                      <input
                        className={`px-[10%] flex focus:ring-0 focus:outline-none ${
                          Number(amountToCard) >
                          Number(globalData?.generalData?.walletBalance)
                            ? "text-red-500"
                            : ""
                        }`}
                        autoFocus={true}
                        value={amountToCard}
                        onChange={(e) =>
                          setAmountToCard(
                            e?.target?.value?.replace(/[^\d.-]+/g, "")
                          )
                        }
                      />
                    </div>
                    {Number(amountToCard) > 0 && (
                      <div className="flex-1 flex">
                        <img className="" src={RightArrowWhite} />
                      </div>
                    )}
                    {Number(amountToCard) > 0 && (
                      <div className="flex-3 text-[50px] items-center justify-center flex">
                        <span className="">
                          {(Number(amountToCard) / 300).toFixed(3)}
                        </span>
                      </div>
                    )}
                  </div>
                  {Number(amountToCard) > 0 &&
                    Number(amountToCard) <=
                      Number(globalData?.generalData?.walletBalance) && (
                      <div className="flex flex-row items-center">
                        <Button
                          className="bg-white text-black flex-3 text-lg flex self-center my-2 py-2"
                          onClick={() => walletToCard()}
                        >
                          Confirm Trade
                        </Button>
                        <span className="text-sm flex flex-3 ml-4 justify-end mr-2">
                          {"Updated Card Balance: "}
                        </span>
                        <span className="flex flex-1 text-xl justify-end text-green-600">
                          {(
                            Number(globalData?.generalData?.cardBalance) +
                            Number((Number(amountToCard) / 300).toFixed(3))
                          ).toFixed(3)}
                        </span>
                      </div>
                    )}
                </div>
              )}
              {loaderVisible && (
                <div className="p-3">
                  <img src={EthereumGif} className="h-[100px] aspect-square" />
                  {/* <BallTriangle
                    height={100}
                    width={100}
                    radius={5}
                    color="#4fa94d"
                    ariaLabel="ball-triangle-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  /> */}
                </div>
              )}
            </Dialog>
          </div>
        </div>
      </div>
    </>
  );
}
