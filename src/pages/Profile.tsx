import ArtworkCard from "components/ArtworkCard";
import { Button } from "components/Button";
import Header from "components/Header";
import SidebarPlus from "components/SidebarPlus";
import { useUserContext } from "context-provider";
import React from "react";
import { Helmet } from "react-helmet";
import Art from "assets/images/art.jpg";
import web from "assets/images/web.png";
import share from "assets/images/share.png";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";

export default function Profile() {
  const { globalitems } = useUserContext();
  const cookies = new Cookies();

  const pic = localStorage.getItem("profilePic");
  const firstname = cookies.get("firstname");
  const lastname = cookies.get("lastname");
  const emailid = cookies.get("email");
  const username = cookies.get("username");
  const website = cookies.get("website");
  const bio = cookies.get("bio");

  return (
    <>
      <Helmet>
        <title>NFT</title>
        <meta name="Akshat Singh" content="Marketplace for NFTs" />
      </Helmet>
      <div className="flex flex-row w-full font-urbanistNormal bg-gray-50">
        <SidebarPlus />
        <div className="flex flex-col w-full">
          <Header />
          <div className="w-full aspect-video flex flex-col">
            <div className="aspect-[5] w-full flex bg-gray-200 items-center overflow-hidden justify-center">
              <img className="w-full" src={Art} />
            </div>
            <div className="flex flex-row">
              <div className="flex flex-1 px-8">
                <div className="flex flex-col h-[500px] rounded-3xl bg-white items-center -mt-24">
                  <img className="w-[40%] rounded-full mt-8 mb-4" src={pic} />
                  <span className="font-urbanistBold text-lg">
                    {firstname} {lastname}
                  </span>
                  <span className="text-sm opacity-50 mx-10 my-4 text-center">
                    {bio}
                  </span>
                  {cookies.get("website") && (
                    <div className="flex flex-row items-center">
                      <img className="w-[16px] mr-2" src={web} />
                      <span className="text-xs">{website}</span>
                    </div>
                  )}
                  <div className="flex flex-row items-center border-b-[1px] my-4 w-[70%] justify-center pb-6">
                    <Link to={`/settings`}>
                      <button className="mr-2 bg-black text-white rounded-md text-xs p-[6px]">
                        Edit Profile
                      </button>
                    </Link>
                    <button className="border-[1px] aspect-square border-gray-200 rounded-md p-[6px]">
                      <img className="w-[16px]" src={share} />
                    </button>
                  </div>
                  <span className="opacity-30 mt-2">Joined March 2024</span>
                </div>
              </div>
              <div className="grid grid-cols-3 flex-3 gap-4 p-2 my-2">
                {globalitems?.collectionData?.map((item) => {
                  return (
                    <div className="flex">
                      <ArtworkCard details={item} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
