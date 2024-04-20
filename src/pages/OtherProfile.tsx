import web from "assets/icons/web.png";
import camDesign from "assets/images/camDesign.jpg";
import Header from "components/Header";
import SidebarPlus from "components/SidebarPlus";
import { useUserContext } from "context-provider";
import React from "react";
import { Helmet } from "react-helmet";
import Cam from "../assets/images/cam.jpeg";

export default function OtherProfile() {
  const { globalitems } = useUserContext();

  return (
    <>
      <Helmet>
        <title>AK's NFT Store</title>
        <meta name="Akshat Singh" content="Marketplace for NFTs" />
      </Helmet>
      <div className="flex flex-row w-screen h-screen font-urbanistNormal bg-gray-50">
        <div className="flex flex-1">
          <SidebarPlus />
        </div>
        <div className="flex flex-col flex-4">
          <Header />
          <div className="w-full overflow-y-auto pt-[80px] h-screen flex flex-col">
            <div className="aspect-[5] w-full flex bg-gray-200 items-center overflow-hidden justify-center">
              <img className="w-full" src={camDesign} />
            </div>
            <div className="flex flex-row">
              <div className="flex flex-1 px-8">
                <div className="flex flex-col h-[450px] rounded-3xl bg-white items-center -mt-24">
                  <img className="w-[40%] rounded-full mt-8 mb-4" src={Cam} />
                  <span className="font-urbanistBold text-lg">
                    Cameron Tucker
                  </span>
                  <span className="text-sm opacity-50 mx-10 my-4 text-center">
                    Cameron Tucker is a modern generation artist from Missouri,
                    USA specializing in abstract digital versions of traditional
                    acrylic paintings
                  </span>
                  <div className="flex flex-row items-center">
                    <img className="w-[16px] mr-2" src={web} />
                    <span className="text-xs cursor-pointer">
                      <a
                        href="https://modernfamily.fandom.com/wiki/Cameron_Tucker"
                        target="_blank"
                      >
                        {"www.camerontucker.com"}
                      </a>
                    </span>
                  </div>
                  <div className="flex flex-row items-center border-b-[1px] my-4 w-[70%] justify-center pb-6"></div>
                  <span className="opacity-30 mt-2">Joined March 2024</span>
                </div>
              </div>
              <div className="grid grid-cols-3 h-[50%] flex-3 gap-2 p-2 my-2"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
