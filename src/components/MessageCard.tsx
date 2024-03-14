import React from "react";

interface MessageCardProps {
  name: string;
  ProfilePic: string;
  lastMsgTime: number;
  lastMsg: string;
}

export default function MessageCard(props: MessageCardProps) {
  const { name = "", ProfilePic = "", lastMsgTime = 0, lastMsg = "" } = props;

  return (
    <>
      <div className="items-center justify-center flex align-center">
        <div className="items-center justify-center text-black border-2 flex flex-row border-gray-200 rounded-md p-2">
          <img
            className="h-15 rounded-full w-[50px] mx-4 px-1"
            src={ProfilePic}
          />
          <div className="flex flex-col w-[200px]">
            <span>{name}</span>
            <span className="text-sm">{lastMsg}</span>
          </div>
          <div className="opacity-40">
            <span className="w-[50px]">{lastMsgTime}</span>
          </div>
        </div>
      </div>
    </>
  );
}
