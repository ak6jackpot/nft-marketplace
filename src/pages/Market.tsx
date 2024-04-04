import ArtworkCard from "components/ArtworkCard";
import { Button } from "components/Button";
import Header from "components/Header";
import SidebarPlus from "components/SidebarPlus";
import { useUserContext } from "context-provider";
import React from "react";
import { Helmet } from "react-helmet";

export default function Market() {
  const { globalitems } = useUserContext();

  return (
    <>
      <Helmet>
        <title>NFT</title>
        <meta name="Akshat Singh" content="Marketplace for NFTs" />
      </Helmet>
      <div className="flex flex-row w-full font-urbanistNormal bg-gray-50">
        <SidebarPlus />
        <div className="flex flex-col w-full">
          <Header />
          <div className="w-[90%] max-h-screen overflow-y-auto flex flex-col mx-4">
            <div className="items-start my-2">
              <span className="text-black text-3xl">Discover</span>
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
            <div className="grid grid-cols-4 gap-2 p-2 my-2">
              {globalitems?.marketData?.map((item) => {
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
