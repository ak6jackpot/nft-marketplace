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
      <div className="flex flex-row w-full font-urbanistNormal bg-gray-50">
        <div className="flex flex-1">
          <SidebarPlus />
        </div>
        <div className="flex flex-col flex-4">
          <Header />
          <div className="w-[90%] aspect-video flex flex-col mx-4">
            <div className="items-start my-2">
              <span className="text-black text-3xl">History</span>
            </div>
            <div className="flex flex-row my-2">
              <Button variant="outline" className="mr-2">
                All
              </Button>
              <Button variant="outline" className="mr-2">
                Collection
              </Button>
              <Button variant="outline" className="mr-2">
                Price Range
              </Button>
            </div>
            <div className="flex flex-col my-2 bg-white rounded-lg py-4 border-2">
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
                  Recent Offer
                </span>
                <span className="flex flex-1 justify-center opacity-50 text-sm">
                  Time Left
                </span>
              </div>

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
