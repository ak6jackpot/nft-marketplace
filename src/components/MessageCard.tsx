import { useUserContext } from "context-provider";
import React from "react";

interface MessageCardProps {
  name: string;
  ProfilePic: string;
  lastMsgTime: string;
  lastMsg: string;
  update: any;
}

export default function MessageCard(props: MessageCardProps) {
  const {
    name = "",
    ProfilePic = "",
    lastMsgTime = "",
    lastMsg = "",
    update = () => {},
  } = props;
  const { messages, updateState } = useUserContext();

  return (
    <div
      className="items-center justify-center flex flex-col hover:bg-gray-200"
      onClick={() => {
        update && update(name);
        updateState({
          messages: {
            selectedMessageIndex: messages?.messagesData?.findIndex(
              (item) => item?.name === name
            ),
            messagesData: messages?.messagesData,
          },
        });
      }}
    >
      <div className="items-center justify-center text-black flex flex-row rounded-md px-2 mr-4 ml-2 py-3">
        <img
          className="h-15 rounded-full w-[50px] mx-4 px-1"
          src={ProfilePic}
        />
        <div className="flex flex-col w-[270px]">
          <span>{name}</span>
          <span className="text-sm">{lastMsg}</span>
        </div>
        <div className="opacity-40">
          <span className="w-[50px]">{lastMsgTime}</span>
        </div>
      </div>
      <div className="border-b-[1px] border-gray-200 w-[80%] h-[2px]"></div>
    </div>
  );
}
