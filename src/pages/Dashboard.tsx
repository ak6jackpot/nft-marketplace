import ArtworkCard from "components/ArtworkCard";
import Header from "components/Header";
import SidebarPlus from "components/SidebarPlus";
import React from "react";
import { Helmet } from "react-helmet";
import dashboard from "../assets/images/dashboard2.png";
import { Button } from "components/Button";
import { trendingData } from "data/itemsData";

export default function Dashboard() {
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
          <div className="w-full flex flex-row">
            <div className="flex flex-col items-center flex-2 border-r-[2px] p-4 border-gray-200">
              <div className="relative w-full flex p-2 mb-2">
                <div className="rounded-3xl overflow-hidden relative w-full h-[300px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-dashboard via-transparent to-transparent z-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-dashboard to-transparent z-10"></div>
                  <img
                    className="absolute w-full h-full object-cover"
                    src={dashboard}
                  />
                  <div className="flex flex-col ml-8 mt-20">
                    <span className="text-white text-2xl z-20">
                      Create and Sell Extraordiary NFTs
                    </span>
                    <span className="text-white text-sm z-20 mt-4">
                      The world's first and largest Crypto Marketplace
                    </span>
                    <div className="flex flex-row mt-8 w-[30%] justify-between">
                      <Button variant="fill" className="z-20 text-sm bg-white">
                        Explore More
                      </Button>
                      <Button
                        variant="outline"
                        className="z-20 text-sm text-white"
                      >
                        Sell Artwork
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col w-full">
                <div className="flex flex-row justify-between items-center px-2">
                  <span className="text-2xl">Trending Auction</span>
                  <span className="text-sm opacity-60">View All</span>
                </div>
                <div className="flex flex-row items-start my-2 p-2 justify-between">
                  <div>
                    <ArtworkCard details={trendingData[0]} />
                  </div>
                  <div>
                    <ArtworkCard details={trendingData[1]} />
                  </div>
                  <div>
                    <ArtworkCard details={trendingData[2]} />
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col w-full">
                <div className="flex flex-row justify-between items-center px-2">
                  <span className="text-2xl">Top Collection</span>
                  <span className="text-sm opacity-60">View All</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center flex-1"></div>
          </div>
        </div>
        {/* <Footer/> */}
      </div>
    </>
  );
}
