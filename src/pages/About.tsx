import Header from "components/Header";
import WavyBorder from "components/WavyBorder";
import React from "react";
import { Helmet } from "react-helmet";
import Artwork_0 from "../assets/images/Artworks/Artwork_0.jpg";
import Artwork_1 from "../assets/images/Artworks/Artwork_1.jpg";
import Artwork_10 from "../assets/images/Artworks/Artwork_10.jpg";
import Artwork_11 from "../assets/images/Artworks/Artwork_11.jpg";
import Artwork_12 from "../assets/images/Artworks/Artwork_12.jpg";
import Artwork_13 from "../assets/images/Artworks/Artwork_13.jpg";
import Artwork_2 from "../assets/images/Artworks/Artwork_2.jpg";
import Artwork_3 from "../assets/images/Artworks/Artwork_3.jpg";
import Artwork_4 from "../assets/images/Artworks/Artwork_4.jpg";
import Artwork_5 from "../assets/images/Artworks/Artwork_5.jpg";
import Artwork_6 from "../assets/images/Artworks/Artwork_6.jpg";
import Artwork_7 from "../assets/images/Artworks/Artwork_7.jpg";
import Artwork_8 from "../assets/images/Artworks/Artwork_8.jpg";
import Artwork_9 from "../assets/images/Artworks/Artwork_9.jpg";

import badminton from "../assets/images/Sports/badminton.jpeg";
import cricket from "../assets/images/Sports/cricket.jpg";
import formula1 from "../assets/images/Sports/formula1.jpg";
import tabletennis from "../assets/images/Sports/tabletennis.jpg";
import Footer from "components/Footer";

export default function AboutPage() {
  const artworks = [
    Artwork_0,
    Artwork_1,
    Artwork_2,
    Artwork_3,
    Artwork_4,
    Artwork_5,
    Artwork_6,
    Artwork_7,
    Artwork_8,
    Artwork_9,
    Artwork_10,
    Artwork_11,
    Artwork_12,
    Artwork_13,
  ];

  const sports = [badminton, cricket, formula1, tabletennis];
  return (
    <>
      <Helmet>
        <title>NFT</title>
        <meta name="Akshat Singh" content="Marketplace for NFTs" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full h-auto font-plusJakartaSans gap-[70px] bg-black">
        <Header current="about" />
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
        <WavyBorder color={"#F59E0B"} />

        <div className="flex flex-col bg-amber-500 w-full -mt-20 pl-16">
          <span className="text-white text-lg">In my free time I enjoy,</span>
          <span className="text-white text-2xl">Artworks →</span>
          <div className="h-[370px] flex flex-row overflow-x-scroll overflow-y-hidden pr-8 my-4">
            {artworks.map((item) => (
              <div className="h-[300px] aspect-square pr-4">
                <img className="border-4 border-black" src={item} />
              </div>
            ))}
          </div>
          <span className="text-white text-2xl">
            Playing and watching sports →
          </span>
          <div className="h-[250px] flex flex-row overflow-x-scroll overflow-y-hidden pr-8 my-4">
            {sports.map((item) => (
              <div className="w-[500px] aspect-video pr-4">
                <img className="border-4 border-black" src={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
