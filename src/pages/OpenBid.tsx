import Header from "components/Header";
import SidebarPlus from "components/SidebarPlus";
import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import art from "../assets/images/ProfilePic.png";
import eth from "../assets/images/eth.png";
import heart from "../assets/images/heart.png";
import { marketData } from "data/itemsData";

export default function OpenBid(props) {
  const params = useParams();

  console.log(params?.artId);

  const selectedObj = marketData?.find((item) => item?.id === params?.artId);

  return (
    <>
      <Helmet>
        <title>NFT</title>
        <meta name="Akshat Singh" content="Marketplace for NFTs" />
      </Helmet>
      <div className="flex flex-row w-full font-urbanistNormal">
        <SidebarPlus />
        <div className="flex flex-col w-full">
          <Header />
          <div className="w-[80%] aspect-video flex flex-col mx-4">
            <div className="flex flex-row w-full m-4 h-[60%]">
              <div className="flex flex-1">
                <img className="rounded-xl" src={selectedObj?.artImage} />
              </div>
              <div className="flex flex-1 flex-col ml-4">
                <div className="my-1">
                  <span className="text-3xl">{selectedObj?.artName}</span>
                </div>
                <div className="my-1 mb-2">
                  <span className="opacity-40">{selectedObj?.description}</span>
                </div>
                <div className="flex flex-row my-2 border-b-[1px] w-[50%] pb-2">
                  <img src={art} className="flex h-[40px] rounded-full" />
                  <div className="flex flex-col ml-2">
                    <span className="opacity-40 text-sm">{"Creator"}</span>
                    <span className="">{selectedObj?.artistName}</span>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="flex flex-row items-center">
                    <img src={eth} className="flex h-[28px] rounded-full" />
                    <div className="flex flex-col my-2">
                      <span className="opacity-40">{"Current Bid"}</span>
                      <span className="">{selectedObj?.bidPrice}</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                    <img src={eth} className="flex h-[28px] rounded-full" />
                    <div className="flex flex-col my-2">
                      <span className="opacity-40">{"Current Bid"}</span>
                      <span className="">{selectedObj?.bidPrice}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row w-[50%] my-2">
                  <div className="w-[40px] aspect-square rounded-md border-[1px] mr-4 p-2 pt-3">
                    <img src={heart} />
                  </div>
                  <button className="bg-black text-white items-center text-lg justify-center p-[6px] flex-2 rounded-lg self-center">
                    Place a bid
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
