import Header from "components/Header";
import React from "react";
import { Helmet } from "react-helmet";

export default function WorksPage() {
  return (
    <>
      <Helmet>
        <title>NFT</title>
        <meta name="Akshat Singh" content="Marketplace for NFTs" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full font-plusJakartaSans gap-[70px] bg-black">
        <Header current="works" />
        <div className="w-[50%] aspect-video border-2 border-white">
          <div className="flex flex-col items-start flex-1">
            <span className="text-white">Hi I am</span>
            <span className="text-white">Akshat Singh</span>
            <span className="text-white">
              As a BITS Pilani graduate with technical expertise in React Native
              and a hustling mindset, I am a skilled and collaborative front-end
              developer.
            </span>
          </div>
          <div className="items-start flex-1">
            <span className="text-white">social media icons</span>
            <span className="text-white">lets chat button</span>
          </div>
        </div>
        <div className="flex flex-row">
          <div>
            <span className="text-white">education</span>
          </div>
          <div>
            <span className="text-white">experience</span>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}
