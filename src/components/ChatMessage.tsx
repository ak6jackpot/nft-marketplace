import React from "react";

interface ChatMessageProps {
  message: string;
  time: number;
  incoming: boolean;
  ticks: number;
}

export default function ChatMessage(props: ChatMessageProps) {
  const { message = "", time = 0, incoming = false, ticks = 0 } = props;

  return (
    <>
      <div className="flex flex-col">
        <div className="items-center justify-center text-black border-2 border-gray-200 rounded-md p-2">
          <span>message</span>
        </div>
        <div className="flex flex-row w-[200px]">
          <div className="opacity-40">
            <span>tick</span>
          </div>
          <div className="opacity-40">
            <span>time</span>
          </div>
        </div>
      </div>
    </>
  );
}
