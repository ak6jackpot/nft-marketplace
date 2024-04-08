import { Button } from "components/Button";
import Header from "components/Header";
import SidebarPlus from "components/SidebarPlus";
import { useSnackbar } from "react-simple-snackbar";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import user from "assets/images/user.png";
import link from "assets/images/link.png";
import email from "assets/images/email.png";
import web from "assets/images/web.png";
import cloud from "assets/images/cloud.png";
import defaultProfile from "assets/images/defaultProfile.png";
import Cookies from "universal-cookie";

export default function Settings() {
  const cookies = new Cookies();
  const [openSnackbar, closeSnackbar] = useSnackbar();

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
  const [pic, setPic] = useState(localStorage.getItem("profilePic"));

  const saveInfo = () => {
    cookies.set("firstname", firstname, { path: "/" });
    cookies.set("lastname", lastname, { path: "/" });
    cookies.set("email", emailid, { path: "/" });
    cookies.set("username", username, { path: "/" });
    cookies.set("website", website, { path: "/" });
    cookies.set("bio", bio, { path: "/" });
    openSnackbar("Details Saved Succesfully");
  };

  console.log(lastname, cookies.get("lastname"));

  const handleUpload = () => {
    const file = document.querySelector("input[type=file]").files[0];
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      () => {
        setPic(reader?.result);
      },
      true
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Helmet>
        <title>NFT</title>
        <meta name="Akshat Singh" content="Marketplace for NFTs" />
      </Helmet>
      <div className="flex flex-row w-full font-urbanistNormal bg-gray-50">
        <div className="flex flex-1">
          <SidebarPlus />
        </div>
        <div className="flex flex-col flex-4">
          <Header />
          <div className="flex flex-row my-6 mx-6">
            <div className="items-start flex flex-col flex-2">
              <span className="text-black text-3xl">General Settings</span>
              <span className="opacity-40 mt-2">
                Update your photo and personal details here
              </span>
            </div>
            {(firstname != cookies.get("firstname") ||
              lastname != cookies.get("lastname") ||
              website != cookies.get("website") ||
              bio != cookies.get("bio") ||
              username != cookies.get("username") ||
              emailid != cookies.get("email")) && (
              <div className="flex flex-row flex-1 items-center justify-end">
                <span className="opacity-60 flex w-[50%] self-center justify-center ml-6">
                  Unsaved Changes
                </span>
                <Button
                  className="bg-black text-white flex w-[25%] mx-4"
                  onClick={saveInfo}
                >
                  Save
                </Button>
                <Button
                  className="bg-gray-300 text-gray-600 flex w-[25%]"
                  onClick={() => {
                    setFirstname(cookies.get("firstname"));
                    setLastname(cookies.get("lastname"));
                    setEmailid(cookies.get("email"));
                    setUsername(cookies.get("username"));
                    setWebsite(cookies.get("website"));
                    setBio(cookies.get("bio"));
                    openSnackbar("Unsaved Changes Discarded");
                  }}
                >
                  Discard
                </Button>
              </div>
            )}
          </div>
          <div className="flex flex-row my-2">
            <div className="flex flex-col flex-7 mx-4 bg-white rounded-xl py-4 border-2">
              <div className="flex flex-row pb-4 px-8 border-b-[1px] mb-2">
                <span className="flex">Personal Information</span>
              </div>
              <div className="flex flex-row">
                <div className="flex flex-col flex-1 mx-4 py-2">
                  <div className="flex flex-row">
                    <span className="mb-2">First Name</span>
                    {firstname != cookies.get("firstname") && (
                      <span className="ml-1 text-red-400 text-xl">{"*"}</span>
                    )}
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
                    {lastname != cookies.get("lastname") && (
                      <span className="ml-1 text-red-400 text-xl">{"*"}</span>
                    )}
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
                  {emailid != cookies.get("email") && (
                    <span className="ml-1 text-red-400 text-xl">{"*"}</span>
                  )}
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
                  {username != cookies.get("username") && (
                    <span className="ml-1 text-red-400 text-xl">{"*"}</span>
                  )}
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
                  {bio != cookies.get("bio") && (
                    <span className="ml-1 text-red-400 text-xl">{"*"}</span>
                  )}
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
                  {website != cookies.get("website") && (
                    <span className="ml-1 text-red-400 text-xl">{"*"}</span>
                  )}
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
            </div>
            <div className="flex flex-col flex-3 h-[350px] mx-4 bg-white rounded-xl py-4 border-2">
              <div className="flex flex-row pb-4 px-8 border-b-[1px]">
                <span className="flex">Your Photo</span>
              </div>
              <div className="flex flex-1 flex-row items-center mx-4">
                <img
                  className="w-[60px] rounded-full m-2 aspect-square"
                  src={pic ? pic : defaultProfile}
                />
                <div className="flex flex-col">
                  <span className="text-sm mb-1">Edit your Photo</span>
                  <div className="flex flex-row">
                    {localStorage?.getItem("profilePic") && (
                      <button
                        className="text-xs opacity-40 mr-2"
                        onClick={() => {
                          setPic("");
                          localStorage.removeItem("profilePic");
                        }}
                      >
                        Delete
                      </button>
                    )}
                    <button
                      className="text-xs opacity-40 text-red-700"
                      onClick={() => {
                        localStorage.setItem("profilePic", pic);
                        openSnackbar("Profile Photo Updated");
                      }}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-3 flex-col border-2 border-dashed rounded-xl m-4 justify-center cursor-pointer items-center relative">
                <div className="w-[40px] aspect-square bg-gray-200 mb-4 rounded-full p-2">
                  <img src={cloud} />
                </div>
                <span>Click to Upload</span>
                <span className="text-xs opacity-50">PNG, JPG, or GIF</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleUpload()}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
