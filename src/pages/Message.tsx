import SidebarPlus from "components/SidebarPlus";
import React from "react";
import { Helmet } from "react-helmet";
import ProfilePic from "../assets/images/ProfilePic.png";
import MessageCard from "components/MessageCard";
import ChatMessage from "components/ChatMessage";
import { messagesData } from "data/messagesData";

export default function Message() {
  return (
    <>
      <Helmet>
        <title>NFT</title>
        <meta name="Akshat Singh" content="Marketplace for NFTs" />
      </Helmet>
      <div className="flex flex-row w-full h-screen font-urbanistNormal bg-white">
        <div className="flex w-[250px]">
          <SidebarPlus />
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex h-[70px] items-center justify-center">
            <input
              className="w-[80%] bg-gray-100 h-[60%] rounded-xl px-2"
              placeholder="Search chat"
            />
          </div>
          <div className="flex items-start overflow-y-scroll justify-center">
            <div className="flex flex-col">
              {messagesData.map((item) => {
                return (
                  <div className="my-1">
                    <MessageCard
                      name={item?.name}
                      ProfilePic={item?.profilePic}
                      lastMsg={item?.messages[0]?.text?.slice(0, 25) + "..."}
                      lastMsgTime={item?.messages[0]?.time}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-2 flex-col border-l-2">
          <div className="flex flex-1 bg-white"></div>
          <div className="flex flex-8 bg-gray-100">{/* <ChatMessage /> */}</div>
          <div className="flex flex-1 bg-white"></div>
        </div>
      </div>
    </>
  );
}
