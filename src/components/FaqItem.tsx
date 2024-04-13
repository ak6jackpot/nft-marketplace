import AddSharpIcon from "@mui/icons-material/AddSharp";
import { useUserContext } from "context-provider";
import React, { useState } from "react";

interface FaqItemProps {
  question: string;
  answer: string;
}

export default function FaqItem(props: FaqItemProps) {
  const { question = "", answer = "" } = props;

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <button
      onClick={toggleVisibility}
      className="flex flex-col border-b-[1px] py-3 mx-3 justify-center"
    >
      <div className="flex flex-row items-center">
        <AddSharpIcon />
        <span className="text-black text-lg ml-2">{question}</span>
      </div>
      {isVisible && (
        <span className="text-black text-left opacity-60 ml-8">{answer}</span>
      )}
    </button>
  );
}
