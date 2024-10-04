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
import { Link, useNavigate } from "react-router-dom";
import { useSnackbar } from "react-simple-snackbar";
import Eth from "assets/icons/eth.png";
import camDesign from "assets/images/camDesign.jpg";
import Cam from "../assets/images/cam.jpeg";

export default function Dashboard() {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const [openSnackbar, closeSnackbar] = useSnackbar();

  const { globalitems, updateState, globalActivityData } = useUserContext();
  const [mainDialogVisible, setMainDialogVisible] = useState(
    cookies.get("loggedIn") != true
  );
  const [secondDialogVisible, setSecondDialogVisible] = useState(false);

  const arrayRotate = (arr, reverse) => {
    if (reverse) arr.unshift(arr.pop());
    else arr.push(arr.shift());
    return arr;
  };

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

  useEffect(() => {
    setInterval(() => {
      updateState({
        globalActivityData: {
          activityData: arrayRotate(globalActivityData?.activityData, true),
        },
      });
    }, 10000);
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
    if (!emailid?.match(/^\S+@\S+\.\S+$/) && emailid?.length > 0) {
      openSnackbar("Email ID invalid");
    } else if (
      !website?.match(
        /^[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/
      ) &&
      website?.length > 1
    ) {
      openSnackbar("Website URL invalid");
    } else {
      cookies.set("firstname", firstname, { path: "/" });
      cookies.set("lastname", lastname, { path: "/" });
      cookies.set("email", emailid, { path: "/" });
      cookies.set("username", username, { path: "/" });
      cookies.set("website", website, { path: "/" });
      cookies.set("bio", bio, { path: "/" });
      cookies.set("loggedIn", true, { path: "/" });
      setMainDialogVisible(false);
      setSecondDialogVisible(true);
    }
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
          <div className="z-40">
            <Header />
          </div>
          <div className="w-full flex flex-row  pt-[80px] h-screen">
            <div className="flex flex-col items-center flex-2 border-r-[2px] p-4 border-gray-200">
              <div className="relative w-full flex p-2 mb-10">
                <div className="rounded-3xl overflow-hidden relative w-full h-[300px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-dashboard via-transparent to-transparent z-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-dashboard to-transparent z-10"></div>
                  <img
                    className="absolute w-full h-full object-cover"
                    src={dashboard}
                  />
                  <div className="flex flex-col ml-8 mt-20">
                    <span className="text-white text-2xl z-20">
                      Browse and Buy Extraordiary NFTs
                    </span>
                    <span className="text-white text-sm z-20 mt-4">
                      The world's first and largest Crypto Marketplace
                    </span>
                    <div className="flex flex-row mt-8 w-[33%] justify-between">
                      <Button
                        onClick={() => {
                          navigate("/market");
                        }}
                        variant="fill"
                        className="z-10 text-sm bg-white"
                      >
                        Buy NFTs Now
                      </Button>
                      <Button
                        onClick={() => {
                          navigate("/help");
                        }}
                        variant="outline"
                        className="z-10 text-sm text-white"
                      >
                        Explore More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col w-full">
                <div className="flex flex-row justify-between items-center px-2">
                  <span className="text-2xl">Trending Auction</span>
                  <button
                    onClick={() => {
                      navigate("/market");
                    }}
                    className="text-sm opacity-60"
                  >
                    View All
                  </button>
                </div>
                <div className="flex flex-row items-start my-2 p-2 justify-evenly">
                  {globalitems?.activeData[0] && (
                    <div>
                      <ArtworkCard details={globalitems?.activeData[0]} />
                    </div>
                  )}
                  {globalitems?.activeData[1] && (
                    <div>
                      <ArtworkCard details={globalitems?.activeData[1]} />
                    </div>
                  )}
                  {globalitems?.activeData[2] && (
                    <div>
                      <ArtworkCard details={globalitems?.activeData[2]} />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col max-h-screen overflow-y-scroll p-2 flex-1">
              <div className="mb-4">
                <span className="text-lg ml-2">Featured Creator</span>
                <div className="flex flex-col w-[95%] aspect-video bg-white m-2 p-2 rounded-xl">
                  <img src={camDesign} className="rounded-lg" />
                  <img
                    src={Cam}
                    className="w-[80px] rounded-full border-[3px] border-white self-center -mt-10"
                  />
                  <div className="flex flex-row justify-between mr-2">
                    <div className="flex flex-col">
                      <span className="text ml-2">Cameron Tucker</span>
                      <span className="text-sm opacity-50 ml-2">
                        @FizboTheClown
                      </span>
                    </div>
                    <Link
                      to="/cameronTucker"
                      className="bg-black text-white text-xs rounded-full px-4 items-center flex justify-center"
                    >
                      <button>View Profile</button>
                    </Link>
                  </div>
                  <span className="text-sm ml-2 pt-3 opacity-50 border-t-[1px] mt-2">
                    Cameron Tucker is a modern generation artist from Missouri,
                    USA specializing in abstract digital...
                  </span>
                </div>
              </div>
              <div>
                <span className="text-lg ml-2">Recent Activity</span>
                <div className="flex flex-col w-full">
                  {globalActivityData?.activityData
                    ?.slice(0, 6)
                    ?.map((item) => {
                      return (
                        <div className="flex flex-row items-center py-3 ml-2 border-b-[1px]">
                          <div className="flex flex-1">
                            <img
                              src={item?.artImage}
                              className="rounded-full aspect-square"
                            />
                          </div>
                          <div className="flex flex-col flex-4 pl-4">
                            <span className="text-sm font-urbanistBold">
                              {item?.artName}
                            </span>
                            <span className="text-xs opacity-40">
                              {"From " + item?.artistName}
                            </span>
                          </div>
                          <div className="flex flex-row flex-2 items-center">
                            <img
                              className="h-[16px] self-center mr-2"
                              src={Eth}
                            />
                            <span className="text">{item?.bidAmount}</span>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
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
                    onChange={(e) =>
                      setFirstname(e.target.value?.replace(/\d+/g, ""))
                    }
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
                    onChange={(e) =>
                      setLastname(e.target.value?.replace(/\d+/g, ""))
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col flex-1 mx-4 py-2">
                <div className="flex flex-row">
                  <span className="mb-2">Email</span>
                  <span className="ml-1 text-red-400 text-xl">{"*"}</span>
                </div>
                <div className="flex flex-row relative">
                  <img src={email} className="absolute h-[20px] left-2 top-2" />
                  <input
                    className="bg-white flex flex-2 border-gray-200 border-[1px] p-2 pl-8 rounded-xl px-2"
                    placeholder=""
                    value={emailid}
                    onChange={(e) => setEmailid(e.target.value)}
                  />
                  {!emailid?.match(/^\S+@\S+\.\S+$/) && emailid?.length > 5 && (
                    <span className="text-red-400 absolute right-2 text-xs top-2">
                      {"invalid e-mail address"}
                    </span>
                  )}
                </div>
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
                <div className="flex flex-row relative">
                  <img src={web} className="absolute h-[20px] left-2 top-2" />
                  <input
                    className="bg-white flex flex-2 border-gray-200 border-[1px] p-2 pl-8 rounded-xl px-2"
                    placeholder=""
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                  {!website?.match(
                    /^[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/
                  ) &&
                    website?.length > 5 && (
                      <span className="text-red-400 absolute right-2 text-xs top-2">
                        {"invalid website URL"}
                      </span>
                    )}
                </div>
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
              <div className="bg-violet-500 text-white rounded-md p-2 my-4">
                Please Note: This is a prototype website. While it may look and
                function like a real marketplace, no actual transactions can
                take place. Items listed on the site are for demonstration
                purposes only, and you cannot buy or sell anything at this time.
              </div>
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
