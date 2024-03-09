import { Button } from "components/Button";
import Footer from "components/Footer";
import SidebarPlus from "components/SidebarPlus";
import React from "react";
import { Helmet } from "react-helmet";
import ProfilePic from "../assets/images/ProfilePic.png";
export default function Profile() {
  return (
    <>
      <Helmet>
        <title>NFT</title>
        <meta name="Akshat Singh" content="Marketplace for NFTs" />
      </Helmet>
      <div className="flex flex-row items-center justify-start w-full h-screen font-urbanistNormal gap-[70px] bg-white">
      <SidebarPlus/>

        <div className="flex flex-row w-[60%] items-center">
          <div className="rounded-full w-[600px] p-0.5 aspect-square bg-gradient-to-r mx-16 from-violet-900 via-blue-600 to-amber-500">
            <div className="p-2 bg-black rounded-full">
              <img
                className="rounded-full w-[500px] aspect-square"
                src={ProfilePic}
              />
            </div>
          </div>
          <div className="w-full aspect-video p-0.5 bg-gradient-to-r from-violet-900 via-blue-600 rounded-lg to-amber-500 my-4">
            <div className="bg-black rounded-lg aspect-video p-2 items-center justify-between">
              <div className="flex flex-col  items-center justify-center py-4">
                <span className="text-white py-1">PROFILE </span>
              </div>
              <div className="items-center justify-center flex py-4">
                <Button className="bg-gradient-to-r from-white to-white text-black font-urbanistNormal hover:from-black hover:to-teal-600 hover:text-white">
                  Let's Talk
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </>
  );
}
