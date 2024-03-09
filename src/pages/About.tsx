import Header from "components/Header";
import WavyBorder from "components/WavyBorder";
import React from "react";
import { Helmet } from "react-helmet";

import Footer from "components/Footer";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>NFT</title>
        <meta name="Akshat Singh" content="Marketplace for NFTs" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full h-auto font-urbanistNormal gap-[70px] bg-white">
        <Header current="about" />
        <div className="w-[50%] aspect-video border-2 border-white">
          <div className="flex flex-col items-start text-black flex-1">
            <span>Hi I am</span>
            <span>Akshat Singh</span>
            <span>
              As a BITS Pilani graduate with technical expertise in React Native
              and a hustling mindset, I am a skilled and collaborative front-end
              developer.
            </span>
          </div>
          <div className="items-start text-black flex-1">
            <span>social media icons</span>
            <span>lets chat button</span>
          </div>
        </div>
        <div className="flex text-black flex-row">
          <div>
            <span>education</span>
          </div>
          <div>
            <span>experience</span>
          </div>
        </div>
        <WavyBorder color={"#F59E0B"} />

        <div className="flex flex-col bg-amber-500 text-black w-full -mt-20 pl-16">
          <span className="text-lg">In my free time I enjoy,</span>
          <span className="text-2xl">Artworks →</span>
          <span className="text-2xl">Playing and watching sports →</span>
        </div>
      </div>
      <Footer />
    </>
  );
}
