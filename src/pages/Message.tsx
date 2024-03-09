import SidebarPlus from "components/SidebarPlus";
import React from "react";
import { Helmet } from "react-helmet";
export default function Message() {
  return (
    <>
      <Helmet>
        <title>NFT</title>
        <meta name="Akshat Singh" content="Marketplace for NFTs" />
      </Helmet>
      <div className="flex flex-row items-center justify-start w-full h-auto font-urbanistNormal gap-[70px] bg-white">
      <SidebarPlus/>

        <div className="w-[50%] aspect-video border-2 border-white">
          <div className="flex flex-col items-start text-black flex-1">
            <span>MESSAGE</span>
          </div>
          <div className="items-start text-black flex-1">
            <span>social media icons</span>
            <span>lets chat button</span>
          </div>
        </div>
        <div className="flex text-black flex-row">
          <div>
            <span>education</span>
          </div>
          <div>
            <span>experience</span>
          </div>
        </div>
      </div>
    </>
  );
}
