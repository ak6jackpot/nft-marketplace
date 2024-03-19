import React from "react";

export default function Header(props: any) {
  return (
    <>
      <div className="flex w-full h-[80px] border-b-[1px] bg-white items-center">
        <input
          className="w-[50%] bg-white border-gray-100 border-[1px] h-[50%] rounded-xl px-2 ml-4"
          placeholder="Search items, collections, and users"
        />
      </div>
    </>
  );
}
