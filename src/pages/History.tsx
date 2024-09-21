import { Button } from "components/Button";
import Header from "components/Header";
import HistoryItem from "components/HistoryItem";
import SidebarPlus from "components/SidebarPlus";
import { ordersData } from "data/ordersData";
import React from "react";
import { Helmet } from "react-helmet";

export default function History() {
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
          <div className="w-full overflow-y-auto pr-[10%] pt-[80px] h-screen flex flex-col px-4">
            <div className="items-start my-2">
              <span className="text-black text-3xl">History</span>
            </div>
            <div className="flex flex-col my-2 bg-white rounded-lg pt-4 border-2">
              {ordersData.map((item) => {
                return (
                  <div className="px-6">
                    <HistoryItem item={item} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
