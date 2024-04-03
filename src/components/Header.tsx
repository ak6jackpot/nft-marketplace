import React from "react";
import { Button } from "./Button";
import defaultProfile from "assets/images/defaultProfile.png";
import Bell from "assets/images/bell.png";
import search from "assets/images/search.png";
import EthereumGif from "assets/images/eth_gif.gif";
import ArrowDown from "assets/images/arrow_down.png";
import { Link } from "react-router-dom";

export default function Header(props: any) {
  const pic = localStorage.getItem("profilePic");

  return (
    <>
      <div className="flex w-full h-[80px] border-b-[2px] justify-between bg-white items-center">
        <img src={search} className="absolute h-[20px] aspect-square ml-6" />
        <input
          className="w-[50%] bg-white border-gray-200 border-[1px] h-[50%] rounded-xl px-2 ml-4 pl-8"
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
          <Link to={`/profile`}>
            <button className="flex flex-row justify-start items-center">
              <img
                className="w-[50px] rounded-full mr-2 aspect-square"
                src={pic ? pic : defaultProfile}
              />
              <img className="w-[15px]" src={ArrowDown} />{" "}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
