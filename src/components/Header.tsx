import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import defaultProfile from "assets/icons/defaultProfile.png";
import EthereumGif from "assets/images/eth_gif.gif";
import search from "assets/icons/search.png";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./Button";
import Fuse from "fuse.js";
import { useUserContext } from "context-provider";
import ArtworkCard from "./ArtworkCard";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

export default function Header(props: any) {
  const pic = localStorage.getItem("profilePic");
  const navigate = useNavigate();

  const { globalitems, globalData, messages, updateState } = useUserContext();
  const [searchText, setSearchText] = useState("");
  const [searchedItems, setSearchedItems] = useState([]);
  const [searchedMessages, setSearchedMessages] = useState([]);

  const optionsItems = {
    includeScore: true,
    threshold: 0.3,
    keys: ["artistName", "artName"],
  };

  const optionsMessages = {
    includeScore: true,
    threshold: 0.3,
    keys: ["text"],
  };

  const searchMessages = (searchQuery) => {
    let allMessages = [];
    messages?.messagesData?.forEach((conversation) => {
      conversation.messages.forEach((message) => {
        allMessages.push({
          text: message.text,
          time: message.time,
          incoming: message.incoming,
          conversationName: conversation.name,
          conversationPic: conversation.profilePic,
        });
      });
    });

    const results1 = new Fuse(globalitems?.marketData, optionsItems).search(
      searchQuery
    );
    const results2 = new Fuse(allMessages, optionsMessages).search(searchQuery);

    console.log(results1, results2);

    const matchedMessages = results2.map((result) => ({
      conversationName: result.item.conversationName,
      conversationPic: result.item.conversationPic,
      sender: result.item.incoming ? "Incoming" : "Outgoing",
      text: result.item.text,
      time: result.item.time,
    }));

    setSearchedMessages(matchedMessages);
    setSearchedItems(results1);
  };
  // const fuse = new Fuse(globalitems?.marketData, options).search(searchText);

  useEffect(() => {
    searchMessages(searchText);
  }, [searchText]);

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
        {(searchedItems?.length > 0 || searchedMessages?.length > 0) && (
          <button onClick={() => setSearchText("")} className="-ml-[28%]">
            <CancelOutlinedIcon color="disabled" />
          </button>
        )}
        <div className="flex flex-row items-center mx-8 w-[20%] justify-between">
          <Link to={`/wallet`}>
            <Button variant="outline" className="mr-1">
              <img className="w-[35px] aspect-square -ml-2" src={EthereumGif} />
              <span className="">
                {globalData?.generalData?.cardBalance + " ETH"}
              </span>
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
      {(searchedItems?.length > 0 || searchedMessages?.length > 0) && (
        <div className="absolute mt-[5%] w-[40%] bg-white rounded-2xl mx-4 z-30">
          <div className="grid grid-cols-2 gap-2 p-2">
            {searchedItems?.slice(0, 2)?.map((item) => {
              return (
                <div className="flex">
                  <ArtworkCard details={item?.item} />
                </div>
              );
            })}
          </div>
          <div
            className={`grid grid-cols-1 gap-2 p-1 ${
              searchedItems?.length > 0 ? "border-t-[2px]" : ""
            }`}
          >
            {searchedMessages?.slice(0, 2)?.map((item) => {
              return (
                <div
                  className="items-center justify-center cursor-pointer border-b-[2px] flex flex-col hover:bg-gray-200 rounded-2xl"
                  onClick={() => {
                    updateState({
                      messages: {
                        selectedMessageIndex: messages?.messagesData?.findIndex(
                          (x) => x?.name == item?.conversationName
                        ),
                        messagesData: messages?.messagesData,
                      },
                    });
                    navigate("/message");
                    setSearchText("");
                  }}
                >
                  <div className="items-center justify-center text-black flex flex-row rounded-md px-2 mr-4 ml-2 py-3">
                    <img
                      className="h-15 rounded-full w-[50px] mx-2 px-1"
                      src={item?.conversationPic}
                    />
                    <div className="flex flex-col w-[270px]">
                      <span>{item?.conversationName}</span>
                      <span className="text-sm">{item?.text}</span>
                    </div>
                    <div className="opacity-40">
                      <span className="w-[50px]">{item?.time}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
