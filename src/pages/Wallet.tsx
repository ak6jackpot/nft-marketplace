import { Button } from "components/Button";
import Header from "components/Header";
import HistoryItemSmall from "components/HistoryItemSmall";
import SidebarPlus from "components/SidebarPlus";
import WalletCard from "components/WalletCard";
import { useUserContext } from "context-provider";
import { ordersData } from "data/ordersData";
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Eth from "assets/icons/eth.png";
import ReplayCircleFilledIcon from "@mui/icons-material/ReplayCircleFilled";
import AddCardIcon from "@mui/icons-material/AddCard";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import GavelRoundedIcon from "@mui/icons-material/GavelRounded";
import Cookies from "universal-cookie";

export default function Wallet() {
  const { globalitems } = useUserContext();
  const cookies = new Cookies();

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
                <div className="flex flex-col m-2 bg-white rounded-lg py-4 border-2">
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
            <div className="flex flex-col items-center bg-white flex-3">
              <div className="flex flex-col border-b-[2px] border-gray-200 w-[90%] py-2">
                <span className="text-lg">Wallet</span>
                <div className="flex flex-col w-full justify-between rounded-xl aspect-video bg-gradient-to-tr from-green-500 via-cyan-500 to-blue-500 mt-2 p-4">
                  <span className="text-white text-sm">ETF Wallet Card</span>
                  <span className="text-white text-sm">
                    {"**** **** **** 5356"}
                  </span>
                  <span className="text-white text-sm">
                    {cookies.get("firstname") ? cookies.get("firstname") : ""}{" "}
                    {cookies.get("lastname") ? cookies.get("lastname") : ""}
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center border-b-[2px] border-gray-200 w-[90%] py-2">
                <span className="text-lg opacity-50">Your Balance</span>
                <span className="text-2xl">{"$ 85,424.52"}</span>
                <div className="flex flex-row w-full mt-2">
                  <Button className="bg-black text-white flex-1 flex mx-2 flex-4 py-2">
                    Top up Your Wallet
                  </Button>
                  <Button className="bg-gray-300 text-white flex-1 flex mx-2">
                    <ReplayCircleFilledIcon
                      style={{
                        backgroundColor: "black",
                        color: "#d1d5db",
                        borderRadius: 1000,
                      }}
                    />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col w-[90%] pt-2">
                <span className="text-lg">Transaction History</span>
                <div className="flex flex-col w-full">
                  {globalitems?.walletData?.map((item) => {
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
                          ></img>
                          <span className="text-sm">
                            {item?.amount + " ETH"}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
