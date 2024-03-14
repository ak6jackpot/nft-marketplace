import SidebarPlus from "components/SidebarPlus";
import React from "react";
import { Helmet } from "react-helmet";
import ProfilePic from "../assets/images/ProfilePic.png";
import MessageCard from "components/MessageCard";

export default function Message() {
  return (
    <>
      <Helmet>
        <title>NFT</title>
        <meta name="Akshat Singh" content="Marketplace for NFTs" />
      </Helmet>
      <div className="flex flex-row items-center justify-start w-full h-auto font-urbanistNormal gap-[70px] bg-white">
        <SidebarPlus />
        <div className="flex flex-col">
          <MessageCard
            name={"Abhyu"}
            ProfilePic={ProfilePic}
            lastMsg={"yooooooo"}
            lastMsgTime={"16:00"}
          />
        </div>
      </div>

      {/* <div className="flex flex-col">
          {messagesData.map((item) => {
            <>
            <MessageCard
              name={item?.name}
              ProfilePic={item?.profilePic}
              lastMsg={item?.messages[0]?.text}
              lastMsgTime={item?.messages[0]?.time}
            />
            </>
          })}
        </div> */}
    </>
  );
}
