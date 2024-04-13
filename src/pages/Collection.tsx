import ArtworkCard from "components/ArtworkCard";
import { Button } from "components/Button";
import Header from "components/Header";
import SidebarPlus from "components/SidebarPlus";
import { useUserContext } from "context-provider";
import React from "react";
import { Helmet } from "react-helmet";

export default function ActiveBid() {
  const { globalitems } = useUserContext();

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
              <span className="text-black text-3xl">Collection</span>
            </div>
            <div className="flex flex-row my-2">
              <Button variant="outline" className="mr-2">
                Category
              </Button>
              <Button variant="outline" className="mr-2">
                Collection
              </Button>
              <Button variant="outline" className="mr-2">
                Price Range
              </Button>
            </div>
            <div className="grid grid-cols-4 gap-4 p-2 my-2">
              {globalitems?.collectionData?.map((item) => {
                return (
                  <div className="flex">
                    <ArtworkCard details={item} />
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
