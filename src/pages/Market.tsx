import WavyBorder from "components/WavyBorder";
import React from "react";
import { Helmet } from "react-helmet";
import SidebarPlus from "components/SidebarPlus";
import Header from "components/Header";

export default function Market() {
  return (
    <>
      <Helmet>
        <title>NFT</title>
        <meta name="Akshat Singh" content="Marketplace for NFTs" />
      </Helmet>
      <div className="flex flex-row w-full font-urbanistNormal bg-gray-100">
        <SidebarPlus />
        <div className="flex flex-col w-full">
          <Header />
          <div className="w-[80%] aspect-video flex flex-row border-2 border-white">
            <div className="flex flex-col items-start flex-1">
              <span className="text-black">Market</span>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
