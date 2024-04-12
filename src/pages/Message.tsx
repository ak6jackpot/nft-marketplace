import SidebarPlus from "components/SidebarPlus";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Send from "../assets/icons/send.png";
import MessageCard from "components/MessageCard";
import ChatMessage from "components/ChatMessage";
import { Button } from "components/Button";
import Search from "assets/icons/search.png";
import ThreeDots from "assets/icons/three_dots.png";
import { useUserContext } from "context-provider";
import Fuse from "fuse.js";

export default function Message() {
  const { messages } = useUserContext();
  const [msgText, setMsgText] = useState("");
  const [searched, setSearched] = useState([]);

  const options = {
    includeScore: true,
    threshold: 0.6,
    keys: ["text"],
  };
  const timeToMinutes = (timeStr) => {
    const [hours, minutes] = timeStr.split(":").map(Number);
    return hours * 60 + minutes;
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
        });
      });
    });

    const results = new Fuse(allMessages, options).search(searchQuery);

    const matchedMessages = results.map((result) => ({
      conversationName: result.item.conversationName,
      sender: result.item.incoming ? "Incoming" : "Outgoing",
      text: result.item.text,
      time: result.item.time,
    }));

    setSearched(matchedMessages);
    return matchedMessages;
  };

  return (
    <>
      <Helmet>
        <title>AK's NFT Store</title>
        <meta name="Akshat Singh" content="Marketplace for NFTs" />
      </Helmet>
      <div className="flex flex-row w-full h-screen font-urbanistNormal bg-white">
        <div className="flex flex-1">
          <SidebarPlus />
        </div>
        <div className="flex flex-row flex-4">
          <div className="flex flex-col flex-1">
            <div className="flex h-[90px] items-center justify-center">
              <img
                src={Search}
                className="absolute h-[20px] aspect-square mr-[19%]"
              />
              <input
                className="w-[80%] bg-gray-100 h-[50%] rounded-xl pl-8 px-2"
                placeholder="Search chat"
                onChange={(e) => {
                  searchMessages(e?.target?.value);
                }}
              />
            </div>
            {searched?.length > 0 && (
              <div className="absolute mt-[5%] w-[40%] bg-white rounded-2xl mx-4 z-30">
                <div className="grid grid-cols-2 gap-2 p-2">
                  {searched?.map((item) => {
                    return (
                      <div className="flex">
                        {/* <ArtworkCard details={item?.item} /> */}
                        <span>
                          {item?.conversationName}
                          {item?.text}
                          {item?.time}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            <div className="flex items-start overflow-y-scroll justify-center">
              <div className="flex flex-col w-full">
                {messages?.messagesData
                  ?.sort(
                    (a, b) =>
                      timeToMinutes(a.messages[a.messages.length - 1]?.time) -
                      timeToMinutes(b.messages[b.messages.length - 1]?.time)
                  )
                  ?.map((item) => {
                    return (
                      <div className="">
                        <MessageCard
                          name={item?.name}
                          ProfilePic={item?.profilePic}
                          lastMsg={
                            item?.messages[
                              item.messages.length - 1
                            ]?.text?.slice(0, 30) + "..."
                          }
                          lastMsgTime={
                            item?.messages[item.messages.length - 1]?.time
                          }
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
                    {
                      messages?.messagesData[messages?.selectedMessageIndex]
                        ?.name
                    }
                  </span>
                  <span className="text-xs text-green-600">{"Online"}</span>
                </div>
              </div>
              <div className="flex flex-row items-center mx-4 flex-1 justify-between">
                <img className="h-[40%] mx-2" src={Search} />
                <img className="h-[35%] mx-2" src={ThreeDots} />
              </div>
            </div>
            <div className="flex flex-8 bg-gray-100 p-4 overflow-y-scroll">
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
                value={msgText}
                onChange={(e) => {
                  setMsgText(e?.target?.value);
                }}
              />
              <Button
                className="items-center self-center justify-center flex"
                onClick={() => {
                  messages?.messagesData[
                    messages?.selectedMessageIndex
                  ]?.messages?.push({
                    text: msgText,
                    time: `${new Date().getHours()}:${new Date().getMinutes()}`,
                    incoming: false,
                  });
                  setMsgText("");
                }}
              >
                <img src={Send} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
