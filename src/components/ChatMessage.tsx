import React from "react";

interface ChatMessageProps {
  message: string;
  time: number;
  incoming: boolean;
}

export default function ChatMessage(props: ChatMessageProps) {
  const { message = "", time = 0, incoming = false } = props;

  if (!incoming) {
    return (
      <div className="w-full justify-end flex">
        <div className="flex flex-col w-[50%]">
          <div className="items-center justify-center p-2 bg-black text-gray-300 rounded-tl-xl rounded-tr-xl rounded-bl-xl p-2">
            <span className="text-sm">{message}</span>
          </div>
          <div className="opacity-40 px-2 justify-end flex">
            <span className="text-xs">{time}</span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full justify-start flex">
        <div className="flex flex-col w-[50%]">
          <div className="items-center justify-center p-2 text-black border-[1px] bg-gray-200 border-gray-400 rounded-tl-xl rounded-tr-xl rounded-br-xl p-2">
            <span className="text-sm">{message}</span>
          </div>
          <div className="opacity-40 px-2">
            <span className="text-xs">{time}</span>
          </div>
        </div>
      </div>
    );
  }
}
