import React from "react";
import { Helmet } from "react-helmet";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import art from "../assets/images/art.jpg";
import SidebarPlus from "components/SidebarPlus";
import ArtworkCard from "components/ArtworkCard";
import Header from "components/Header";

export default function Dashboard() {
  return (
    <>
      <Helmet>
        <title>NFT</title>
        <meta name="Akshat Singh" content="Marketplace for NFTs" />
      </Helmet>
      <div className="flex flex-row w-full font-urbanistNormal bg-gray-100">
        <SidebarPlus />
        <div className="flex flex-col w-full">
          <Header />
          <div className="w-[80%] aspect-video flex flex-row border-2 border-white">
            <div className="flex flex-col items-start flex-1">
              <span className="text-black">DASHBOARD</span>
            </div>
            <div className="flex flex-row items-start flex-1">
              <ArtworkCard
                title={"First one"}
                image={art}
                artist={"Akshat singh"}
              />
            </div>
          </div>
        </div>
        {/* <Footer/> */}
      </div>
    </>
  );
}
