import ArtworkCard from "components/ArtworkCard";
import Header from "components/Header";
import SidebarPlus from "components/SidebarPlus";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import dashboard from "../assets/images/dashboard2.png";
import { Button } from "components/Button";
import { useUserContext } from "context-provider";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import user from "assets/icons/user.png";
import link from "assets/icons/link.png";
import email from "assets/icons/email.png";
import web from "assets/icons/web.png";
import Cookies from "universal-cookie";
export default function Dashboard() {
  const cookies = new Cookies();

  const { globalitems } = useUserContext();
  const [mainDialogVisible, setMainDialogVisible] = useState(
    cookies.get("loggedIn") != true
  );
  const [secondDialogVisible, setSecondDialogVisible] = useState(false);

  useEffect(() => {
    cookies.get("firstname")
      ? null
      : cookies.set("firstname", "", { path: "/" });
    cookies.get("lastname") ? null : cookies.set("lastname", "", { path: "/" });
    cookies.get("email") ? null : cookies.set("email", "", { path: "/" });
    cookies.get("username") ? null : cookies.set("username", "", { path: "/" });
    cookies.get("website") ? null : cookies.set("website", "", { path: "/" });
    cookies.get("bio") ? null : cookies.set("bio", "", { path: "/" });
  }, []);

  const [firstname, setFirstname] = useState(
    cookies.get("firstname") ? cookies.get("firstname") : ""
  );
  const [lastname, setLastname] = useState(
    cookies.get("lastname") ? cookies.get("lastname") : ""
  );
  const [emailid, setEmailid] = useState(
    cookies.get("email") ? cookies.get("email") : ""
  );
  const [username, setUsername] = useState(
    cookies.get("username") ? cookies.get("username") : ""
  );
  const [website, setWebsite] = useState(
    cookies.get("website") ? cookies.get("website") : ""
  );
  const [bio, setBio] = useState(cookies.get("bio") ? cookies.get("bio") : "");

  const saveInfo = () => {
    cookies.set("firstname", firstname, { path: "/" });
    cookies.set("lastname", lastname, { path: "/" });
    cookies.set("email", emailid, { path: "/" });
    cookies.set("username", username, { path: "/" });
    cookies.set("website", website, { path: "/" });
    cookies.set("bio", bio, { path: "/" });
    cookies.set("loggedIn", true, { path: "/" });
    setMainDialogVisible(false);
    setSecondDialogVisible(true);
  };

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
          <div className="w-full flex flex-row  pt-[80px] h-screen">
            <div className="flex flex-col items-center flex-2 border-r-[2px] p-4 border-gray-200">
              <div className="relative w-full flex p-2 mb-2">
                <div className="rounded-3xl overflow-hidden relative w-full h-[300px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-dashboard via-transparent to-transparent z-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-dashboard to-transparent z-10"></div>
                  <img
                    className="absolute w-full h-full object-cover"
                    src={dashboard}
                  />
                  <div className="flex flex-col ml-8 mt-20">
                    <span className="text-white text-2xl z-20">
                      Create and Sell Extraordiary NFTs
                    </span>
                    <span className="text-white text-sm z-20 mt-4">
                      The world's first and largest Crypto Marketplace
                    </span>
                    <div className="flex flex-row mt-8 w-[30%] justify-between">
                      <Button variant="fill" className="z-20 text-sm bg-white">
                        Explore More
                      </Button>
                      <Button
                        variant="outline"
                        className="z-20 text-sm text-white"
                      >
                        Sell Artwork
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col w-full">
                <div className="flex flex-row justify-between items-center px-2">
                  <span className="text-2xl">Trending Auction</span>
                  <span className="text-sm opacity-60">View All</span>
                </div>
                <div className="flex flex-row items-start my-2 p-2 justify-between">
                  <div>
                    <ArtworkCard details={globalitems?.trendingData[0]} />
                  </div>
                  <div>
                    <ArtworkCard details={globalitems?.trendingData[1]} />
                  </div>
                  <div>
                    <ArtworkCard details={globalitems?.trendingData[2]} />
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col w-full">
                <div className="flex flex-row justify-between items-center px-2">
                  <span className="text-2xl">Top Collection</span>
                  <span className="text-sm opacity-60">View All</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center flex-1"></div>
          </div>
          <Dialog
            onClose={() => setMainDialogVisible(true)}
            open={mainDialogVisible}
          >
            <DialogTitle>
              <span className="font-urbanistNormal">Let's get you set up!</span>
            </DialogTitle>
            <div className="flex flex-col flex-7 mx-4 bg-white font-urbanistNormal rounded-xl py-4 border-2 mb-2">
              <div className="flex flex-row pb-4 px-8 border-b-[1px] justify-between mb-2">
                <span className="flex">Personal Information</span>
                <span className="text-red-400 text-sm">* mandatory fields</span>
              </div>
              <div className="flex flex-row">
                <div className="flex flex-col flex-1 mx-4 py-2">
                  <div className="flex flex-row">
                    <span className="mb-2">First Name</span>
                    <span className="ml-1 text-red-400 text-xl">{"*"}</span>
                  </div>
                  <img
                    src={user}
                    className="absolute h-[20px] aspect-square ml-2 mt-[35px]"
                  />

                  <input
                    className="bg-white flex flex-2 border-gray-200 border-[1px] p-2 pl-8 rounded-xl px-2"
                    placeholder=""
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </div>
                <div className="flex flex-col flex-1 mx-4 py-2">
                  <div className="flex flex-row">
                    <span className="mb-2">Last Name</span>
                  </div>
                  <input
                    className="bg-white flex flex-2 border-gray-200 border-[1px] p-2 rounded-xl px-2"
                    placeholder=""
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col flex-1 mx-4 py-2">
                <div className="flex flex-row">
                  <span className="mb-2">Email</span>
                  <span className="ml-1 text-red-400 text-xl">{"*"}</span>
                </div>
                <img
                  src={email}
                  className="absolute h-[20px] aspect-square ml-2 mt-[35px]"
                />
                <input
                  className="bg-white flex flex-2 border-gray-200 border-[1px] p-2 pl-8 rounded-xl px-2"
                  placeholder=""
                  value={emailid}
                  onChange={(e) => setEmailid(e.target.value)}
                />
              </div>
              <div className="flex flex-col flex-1 mx-4 py-2">
                <div className="flex flex-row">
                  <span className="mb-2">Username</span>
                  <span className="ml-1 text-red-400 text-xl">{"*"}</span>
                </div>
                <img
                  src={link}
                  className="absolute h-[20px] aspect-square ml-2 mt-[35px]"
                />
                <input
                  className="bg-white flex flex-2 border-gray-200 border-[1px] p-2 pl-8 rounded-xl px-2"
                  placeholder=""
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="flex flex-col flex-1 mx-4 py-2">
                <div className="flex flex-row">
                  <span className="mb-2">Biography</span>
                </div>
                <textarea
                  className="bg-white flex flex-2 border-gray-200 border-[1px] p-2 rounded-xl px-2"
                  placeholder=""
                  rows={3}
                  maxLength={250}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </div>
              <div className="flex flex-col flex-1 mx-4 py-2">
                <div className="flex flex-row">
                  <span className="mb-2">Website</span>
                </div>
                <img
                  src={web}
                  className="absolute h-[20px] aspect-square ml-2 mt-[35px]"
                />
                <input
                  className="bg-white flex flex-2 border-gray-200 border-[1px] p-2 pl-8 rounded-xl px-2"
                  placeholder=""
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>
              {firstname != "" && emailid !== "" && username !== "" && (
                <div className="flex flex-row flex-1 mx-4 py-2">
                  <div className="flex flex-row flex-3"></div>
                  <Button
                    className="bg-black text-white flex-1 flex mx-4"
                    onClick={saveInfo}
                  >
                    Save
                  </Button>
                </div>
              )}
            </div>
          </Dialog>
          <Dialog
            onClose={() => setSecondDialogVisible(false)}
            open={secondDialogVisible}
          >
            <div className="flex flex-col font-urbanistNormal items-center justify-center flex-1 mx-4 py-2">
              <span className="mb-2">
                Your Details have been saved succesfully!
              </span>
              <span className="mb-2 text-sm">
                You can update them in the Settings tab later.
              </span>
              <Button
                className="bg-black text-white flex-1 flex mx-4 w-[25%] py-2"
                onClick={() => setSecondDialogVisible(false)}
              >
                OK
              </Button>
            </div>
          </Dialog>
        </div>
      </div>
    </>
  );
}
