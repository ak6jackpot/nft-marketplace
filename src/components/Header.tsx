import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import defaultProfile from "assets/icons/defaultProfile.png";
import EthereumGif from "assets/images/eth_gif.gif";
import search from "assets/icons/search.png";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import Fuse from "fuse.js";
import { useUserContext } from "context-provider";

export default function Header(props: any) {
  const pic = localStorage.getItem("profilePic");
  const { globalitems } = useUserContext();

  const options = {
    includeScore: true,
    threshold: 0.3,
    keys: ["artistName", "artName"],
  };

  return (
    <>
      <div className="flex w-full h-[80px] border-b-[2px] justify-between bg-white items-center">
        <img src={search} className="absolute h-[20px] aspect-square ml-6" />
        <input
          className="w-[50%] bg-white border-gray-200 border-[1px] h-[50%] rounded-xl px-2 ml-4 pl-8"
          placeholder="Search items, collections, and users"
          onChange={(e) => {
            console.log(
              new Fuse(globalitems?.marketData, options).search(
                e?.target?.value
              )
            );
          }}
        />
        <div className="flex flex-row items-center mx-8 w-[24%] justify-between">
          <Link to={`/wallet`}>
            <Button variant="outline" className="mr-1">
              <img className="w-[30px] aspect-square" src={EthereumGif} />
              <span className="text-sm">3.421 ETH</span>
            </Button>
          </Link>
          <Button variant="outline" shape="circle" className="mr-1">
            {/* <img className="w-[20px]" src={Bell}></img> */}
            <NotificationsNoneOutlinedIcon color="action" />
          </Button>
          <Link to={`/profile`}>
            <button className="flex flex-row justify-start items-center">
              <img
                className="w-[50px] rounded-full mr-2 aspect-square"
                src={pic ? pic : defaultProfile}
              />
              {/* <img className="w-[15px]" src={ArrowDown} />{" "} */}
              <KeyboardArrowDownOutlinedIcon />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
