import React from "react";
import { Button } from "./Button";

export default function HelpCenter(props: any) {
  return (
    <div className="justify-center items-center flex flex-col">
      <div className="items-center justify-center flex w-[40px] z-10 aspect-square rounded-full bg-white">
        <div className="items-center justify-center flex w-[20px] aspect-square rounded-full bg-black">
          <span className="items-center justify-center text-white">?</span>
        </div>
      </div>
      <div className="items-center justify-center p-2 m-4 -mt-4 bg-black rounded-lg text-white flex flex-col">
        <span className="items-center justify-center flex my-2 mt-4">
          Help Center
        </span>
        <span className="items-center justify-center flex my-1 text-sm">
          Having trouble in Kashti?
        </span>
        <span className="items-center justify-center align-center flex my-1 text-sm">
          Please contact us for any
        </span>
        <span className="items-center justify-center align-center flex my-1 text-sm">
          questions
        </span>
        <div className="bg-white text-black rounded-lg">
          <Button>Go to Help Center</Button>
        </div>
      </div>
    </div>
  );
}
