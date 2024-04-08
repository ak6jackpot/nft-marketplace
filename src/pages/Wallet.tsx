import Header from "components/Header";
import HistoryItemSmall from "components/HistoryItemSmall";
import SidebarPlus from "components/SidebarPlus";
import WalletCard from "components/WalletCard";
import { useUserContext } from "context-provider";
import { ordersData } from "data/ordersData";
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function Wallet() {
  const { globalitems } = useUserContext();

  return (
    <>
      <Helmet>
        <title>NFT</title>
        <meta name="Akshat Singh" content="Marketplace for NFTs" />
      </Helmet>
      <div className="flex flex-row w-full font-urbanistNormal bg-gray-50">
        <div className="flex flex-1">
          <SidebarPlus />
        </div>
        <div className="flex flex-col flex-4">
          <Header />
          <div className="w-full flex flex-row">
            <div className="flex flex-col items-center max-h-screen overflow-y-scroll flex-2 border-r-[2px] p-4 border-gray-200">
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
            <div className="flex flex-col items-center flex-1"></div>
          </div>
        </div>
      </div>
    </>
  );
}
