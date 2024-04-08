import React from "react";
import { Button } from "./Button";

export default function HelpCenter(props: any) {
  return (
    <div className="justify-center items-center flex flex-col mx-4">
      <div className="items-center justify-center flex w-[40px] z-10 aspect-square rounded-full bg-white">
        <div className="items-center justify-center flex w-[20px] aspect-square rounded-full bg-black">
          <span className="items-center justify-center text-white">?</span>
        </div>
      </div>
      <div className="items-center justify-center p-2 m-4 -mt-4 bg-black rounded-xl text-white flex flex-col">
        <span className="items-center justify-center flex my-2 mt-4">
          Help Center
        </span>
        <span className="items-center opacity-60 justify-center flex my-1 text-xs px-10 text-center">
          Having trouble in AK's NFT Store?
        </span>
        <span className="items-center opacity-60 justify-center align-center text-center flex my-1 text-xs">
          Please contact us for any
        </span>
        <span className="items-start opacity-60 justify-center align-center text-center flex mb-4 text-xs">
          questions
        </span>
        <div className="bg-white text-black rounded-lg justify-center flex w-full">
          <Button>Go to Help Center</Button>
        </div>
      </div>
    </div>
  );
}
