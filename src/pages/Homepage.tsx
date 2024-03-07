import Header from "components/Header";
import React from "react";
import { Helmet } from "react-helmet";
import ProfilePic from "../assets/images/ProfilePic.png"

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>NFT</title>
        <meta name="Akshat Singh" content="Marketplace for NFTs" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full font-plusJakartaSans gap-[70px] bg-black">
        <Header />
        <div className="w-[80%] aspect-video flex flex-row border-2 border-white">
          <div className="flex flex-col items-start flex-1">
            <span className="text-white">
              Maximize your business with a variety of services and services
              from us
            </span>
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
