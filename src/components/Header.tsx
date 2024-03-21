import React from "react";
import { Button } from "./Button";
import Profile from "assets/images/profile.jpg";
import Bell from "assets/images/bell.png";
import EthereumGif from "assets/images/eth_gif.gif";
import ArrowDown from "assets/images/arrow_down.png";

export default function Header(props: any) {
  return (
    <>
      <div className="flex w-full h-[80px] border-b-[1px] justify-between bg-white items-center">
        <input
          className="w-[50%] bg-white border-gray-100 border-[1px] h-[50%] rounded-xl px-2 ml-4"
          placeholder="Search items, collections, and users"
        />
        <div className="flex flex-row items-center mx-8 w-[24%] justify-between">
          <Button variant="outline" className="mr-1">
            <img className="w-[30px] aspect-square" src={EthereumGif} />
            <span className="text-sm">3.421 ETH</span>
          </Button>
          <Button variant="outline" shape="circle" className="mr-1">
            <img className="w-[25px]" src={Bell}></img>
          </Button>
          <div className="flex flex-row justify-start items-center" onClick={() => {}}>
            <img
              className="w-[50px] rounded-full mr-2 aspect-square"
              src={Profile}
            />
            <img className="w-[15px]" src={ArrowDown} />
          </div>
        </div>
      </div>
    </>
  );
}
