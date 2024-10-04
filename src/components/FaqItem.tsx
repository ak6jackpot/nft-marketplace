import AddSharpIcon from "@mui/icons-material/AddSharp";
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { css } from "@emotion/css";

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
      <CSSTransition
        in={isVisible}
        timeout={1000}
        classNames={{
          enter: faqEnter,
          enterActive: faqEnterActive,
          exit: faqExit,
          exitActive: faqExitActive,
        }}
        unmountOnExit
      >
        <span className="text-black text-left opacity-60 ml-8">{answer}</span>
      </CSSTransition>
    </button>
  );
}

const faqEnter = css`
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 300ms ease-out, opacity 300ms ease-out;
`;

const faqEnterActive = css`
  max-height: 100px; /* Adjust according to your content */
  opacity: 1;
`;

const faqExit = css`
  max-height: 100px;
  opacity: 1;
  overflow: hidden;
`;

const faqExitActive = css`
  max-height: 0;
  opacity: 0;
  transition: max-height 300ms ease-in, opacity 300ms ease-in;
`;
