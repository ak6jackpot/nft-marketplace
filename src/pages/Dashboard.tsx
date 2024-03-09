import React from "react";
import { Helmet } from "react-helmet";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import ProfilePic from "../assets/images/ProfilePic.png";
import SidebarPlus from "components/SidebarPlus";

export default function Dashboard() {
  return (
    <>
      <Helmet>
        <title>NFT</title>
        <meta name="Akshat Singh" content="Marketplace for NFTs" />
      </Helmet>
      <div className="flex flex-row items-center justify-start w-full font-urbanistNormal gap-[70px] bg-white">
        <SidebarPlus />
        <div className="w-[80%] aspect-video flex flex-row border-2 border-white">
          <div className="flex flex-col items-start flex-1">
            <span className="text-black">DASHBOARD</span>
          </div>
          <div className="flex flex-row items-start flex-1">
            <img
              src={ProfilePic}
              alt="image_one"
              className="w-1/3 rounded-3xl"
            />
          </div>
        </div>
        {/* <Footer/> */}
      </div>
    </>
  );
}
