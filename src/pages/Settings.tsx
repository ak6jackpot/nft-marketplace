import { Button } from "components/Button";
import Header from "components/Header";
import SidebarPlus from "components/SidebarPlus";
import React from "react";
import { Helmet } from "react-helmet";
import user from "assets/images/user.png";
import link from "assets/images/link.png";
import email from "assets/images/email.png";
import web from "assets/images/web.png";
import cloud from "assets/images/cloud.png";
import ProfilePic from "assets/images/ProfilePic.png";

export default function Settings() {
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
          <div className="flex flex-row my-6 mx-6">
            <div className="items-start flex flex-col flex-2">
              <span className="text-black text-3xl">General Settings</span>
              <span className="opacity-40 mt-2">
                Update your photo and personal details here
              </span>
            </div>
            <div className="flex flex-row flex-1 items-center justify-end">
              <span className="opacity-60 flex w-[50%] self-center justify-center ml-6">
                Unsaved Changes
              </span>
              <Button className="bg-black text-white flex w-[25%] mx-4">
                Save
              </Button>
              <Button className="bg-gray-300 text-gray-600 flex w-[25%]">
                Discard
              </Button>
            </div>
          </div>
          <div className="flex flex-row my-2">
            <div className="flex flex-col flex-7 mx-4 bg-white rounded-xl py-4 border-2">
              <div className="flex flex-row pb-4 px-8 border-b-[1px] mb-2">
                <span className="flex">Personal Information</span>
              </div>
              <div className="flex flex-row">
                <div className="flex flex-col flex-1 mx-4 py-2">
                  <span className="mb-2">First Name</span>
                  <img
                    src={user}
                    className="absolute h-[20px] aspect-square ml-2 mt-[35px]"
                  />

                  <input
                    className="bg-white flex flex-2 border-gray-200 border-[1px] hover:border-[2px] p-2 pl-8 rounded-xl px-2"
                    placeholder=""
                  />
                </div>
                <div className="flex flex-col flex-1 mx-4 py-2">
                  <span className="mb-2">Last Name</span>
                  <input
                    className="bg-white flex flex-2 border-gray-200 border-[1px] hover:border-[2px] p-2 rounded-xl px-2"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="flex flex-col flex-1 mx-4 py-2">
                <span className="mb-2">Email</span>
                <img
                  src={email}
                  className="absolute h-[20px] aspect-square ml-2 mt-[35px]"
                />
                <input
                  className="bg-white flex flex-2 border-gray-200 border-[1px] hover:border-[2px] p-2 pl-8 rounded-xl px-2"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col flex-1 mx-4 py-2">
                <span className="mb-2">Username</span>
                <img
                  src={link}
                  className="absolute h-[20px] aspect-square ml-2 mt-[35px]"
                />
                <input
                  className="bg-white flex flex-2 border-gray-200 border-[1px] hover:border-[2px] p-2 pl-8 rounded-xl px-2"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col flex-1 mx-4 py-2">
                <span className="mb-2">Biography</span>
                <textarea
                  className="bg-white flex flex-2 border-gray-200 border-[1px] hover:border-[2px] p-2 rounded-xl px-2"
                  placeholder=""
                  rows={3}
                  maxLength={250}
                />
              </div>
              <div className="flex flex-col flex-1 mx-4 py-2">
                <span className="mb-2">Website</span>
                <img
                  src={web}
                  className="absolute h-[20px] aspect-square ml-2 mt-[35px]"
                />
                <input
                  className="bg-white flex flex-2 border-gray-200 border-[1px] hover:border-[2px] p-2 pl-8 rounded-xl px-2"
                  placeholder=""
                />
              </div>
            </div>
            <div className="flex flex-col flex-3 h-[350px] mx-4 bg-white rounded-xl py-4 border-2">
              <div className="flex flex-row pb-4 px-8 border-b-[1px]">
                <span className="flex">Your Photo</span>
              </div>
              <div className="flex flex-1 flex-row items-center mx-4">
                <img
                  className="w-[60px] rounded-full m-2 aspect-square"
                  src={ProfilePic}
                />
                <div className="flex flex-col">
                  <span className="text-sm mb-1">Edit your Photo</span>
                  <div className="flex flex-row">
                    <button className="text-xs opacity-40 mr-2">Delete</button>
                    <button className="text-xs opacity-40 text-red-700">
                      Update
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-3 flex-col border-2 border-dashed rounded-xl m-4 justify-center cursor-pointer items-center">
                <div className="w-[40px] aspect-square bg-gray-200 mb-4 rounded-full p-2">
                  <img src={cloud} />
                </div>
                <span>Click to Upload</span>
                <span className="text-xs opacity-50">PNG, JPG, or GIF</span>
                <input type="file" className="hidden" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
