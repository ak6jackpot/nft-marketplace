import SidebarPlus from "components/SidebarPlus";
import React from "react";
import { Helmet } from "react-helmet";
import Send from "../assets/images/send.png";
import MessageCard from "components/MessageCard";
import ChatMessage from "components/ChatMessage";
import { Button } from "components/Button";
import Search from "assets/images/search.png";
import ThreeDots from "assets/images/three_dots.png";
import { useUserContext } from "context-provider";

export default function Message() {
  const { messages, updateState } = useUserContext();

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
          <div className="flex h-[90px] items-center justify-center">
            <input
              className="w-[80%] bg-gray-100 h-[50%] rounded-xl px-2"
              placeholder=" 🔍  Search chat"
            />
          </div>
          <div className="flex items-start overflow-y-scroll justify-center">
            <div className="flex flex-col w-full">
              {messages?.messagesData?.map((item) => {
                return (
                  <div className="">
                    <MessageCard
                      name={item?.name}
                      ProfilePic={item?.profilePic}
                      lastMsg={item?.messages[0]?.text?.slice(0, 30) + "..."}
                      lastMsgTime={item?.messages[0]?.time}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-2 flex-col border-l-2">
          <div className="flex flex-row flex-1">
            <div className="flex flex-row mx-4 flex-8 items-center">
              <img
                className="h-[40px] rounded-full ml-4"
                src={
                  messages?.messagesData[messages?.selectedMessageIndex]
                    ?.profilePic
                }
              />
              <div className="flex flex-col justify-center mx-4">
                <span>
                  {messages?.messagesData[messages?.selectedMessageIndex]?.name}
                </span>
                <span className="text-xs text-green-600">{"Online"}</span>
              </div>
            </div>
            <div className="flex flex-row items-center mx-4 flex-1 justify-between">
              <img className="h-[40%] mx-2" src={Search} />
              <img className="h-[35%] mx-2" src={ThreeDots} />
            </div>
          </div>
          <div className="flex flex-8 bg-gray-100 p-4">
            <div className="flex flex-col w-full">
              {messages?.messagesData[
                messages?.selectedMessageIndex
              ]?.messages?.map((item) => {
                return (
                  <div className="my-1">
                    <ChatMessage
                      message={item?.text}
                      time={item?.time}
                      incoming={item?.incoming}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-1 bg-white text-sm">
            <input
              className="w-[90%] bg-gray-100 h-[60%] rounded-xl px-4 my-4 ml-4"
              placeholder="Write Message"
            />
            <Button className="items-center self-center justify-center flex">
              <img src={Send} />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
