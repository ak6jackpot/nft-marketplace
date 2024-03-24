import WavyBorder from "components/WavyBorder";
import React from "react";
import { Helmet } from "react-helmet";
import SidebarPlus from "components/SidebarPlus";
import Header from "components/Header";
import ArtworkCard from "components/ArtworkCard";
import { Button } from "components/Button";
import art from "../assets/images/art.jpg";
import { marketData } from "data/data";
import { MultiColumnView } from "components/MultiColumnView";

export default function Market() {
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
          <div className="w-[80%] aspect-video flex flex-col mx-4">
            <div className="items-start my-2">
              <span className="text-black text-3xl">Market</span>
            </div>
            <div className="flex flex-row my-2">
              <Button variant="outline" className="mr-2">
                On Going
              </Button>
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
            <div className="flex flex-row items-start flex-1 my-2">
              <MultiColumnView components={marketData} items={4} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
