import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import defaultProfile from "assets/icons/defaultProfile.png";
import EthereumGif from "assets/images/eth_gif.gif";
import search from "assets/icons/search.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import Fuse from "fuse.js";
import { useUserContext } from "context-provider";
import ArtworkCard from "./ArtworkCard";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

export default function Header(props: any) {
  const pic = localStorage.getItem("profilePic");
  const { globalitems } = useUserContext();
  const [searchText, setSearchText] = useState("");
  const options = {
    includeScore: true,
    threshold: 0.3,
    keys: ["artistName", "artName"],
  };

  const fuse = new Fuse(globalitems?.marketData, options).search(searchText);

  return (
    <div className="flex flex-col fixed w-[80%] z-20">
      <div className="flex w-full h-[80px] border-b-[2px] justify-between bg-white items-center">
        <img src={search} className="absolute h-[20px] aspect-square ml-6" />
        <input
          className="w-[50%] bg-white border-gray-200 border-[1px] h-[50%] rounded-xl px-2 ml-4 pl-8"
          placeholder="Search items, collections, and users"
          value={searchText}
          onChange={(e) => {
            setSearchText(e?.target?.value);
          }}
        />
        {fuse?.length > 0 && (
          <button onClick={() => setSearchText("")} className="-ml-[28%]">
            <CancelOutlinedIcon color="disabled" />
          </button>
        )}
        <div className="flex flex-row items-center mx-8 w-[20%] justify-between">
          <Link to={`/wallet`}>
            <Button variant="outline" className="mr-1">
              <img className="w-[30px] aspect-square" src={EthereumGif} />
              <span className="text-sm">3.421 ETH</span>
            </Button>
          </Link>
          {/* <Button variant="outline" shape="circle" className="mr-1">
            <img className="w-[20px]" src={Bell}></img>
            <NotificationsNoneOutlinedIcon color="action" />
          </Button> */}
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
      {fuse?.length > 0 && (
        <div className="absolute mt-[5%] w-[40%] bg-white rounded-2xl mx-4 z-30">
          <div className="grid grid-cols-2 gap-2 p-2">
            {fuse?.slice(0, 6)?.map((item) => {
              return (
                <div className="flex">
                  <ArtworkCard details={item?.item} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
