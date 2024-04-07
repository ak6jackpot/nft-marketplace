import React from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import HelpCenter from "./HelpCenter";
import defaultProfile from "assets/images/defaultProfile.png";
import Cookies from "universal-cookie";

export default function SidebarPlus(props: any) {
  const cookies = new Cookies();
  const pic = localStorage.getItem("profilePic");

  const selectedTab =
    window?.location?.href?.split("/")[
      window?.location?.href?.split("/")?.length - 1
    ];

  return (
    <div className="flex flex-col bg-gray-100 h-auto border-r-[2px]">
      <div className="flex flex-row justify-center items-center">
        <img
          className="w-[50px] rounded-full m-2 aspect-square"
          src={pic ? pic : defaultProfile}
        />
        <div className="flex flex-col">
          {cookies.get("firstname") && (
            <span>
              {cookies.get("firstname") + " " + cookies.get("lastname")}
            </span>
          )}
          {cookies.get("username") && (
            <span className="text-xs opacity-40">
              {"@" + cookies.get("username")}
            </span>
          )}
        </div>
      </div>
      <Sidebar>
        <Menu
          menuItemStyles={{
            button: {
              marginBlock: -7,
              backgroundColor: "#f3f4f6",
            },
          }}
        >
          <SubMenu label="GENERAL" defaultOpen={true} className="text-xs">
            <MenuItem component={<Link to="/" />}>
              <div
                className={`hover:text-black text-base hover:bg-gray-300 ${
                  selectedTab == "" ? "bg-gray-300 text-black" : "text-gray-400"
                } p-2 rounded-lg`}
              >
                Dashboard
              </div>
            </MenuItem>
            <MenuItem component={<Link to="/message" />}>
              <div
                className={`hover:text-black text-base hover:bg-gray-300 ${
                  selectedTab == "message"
                    ? "bg-gray-300 text-black"
                    : "text-gray-400"
                } p-2 rounded-lg`}
              >
                Message
              </div>
            </MenuItem>
            <MenuItem component={<Link to="/settings" />}>
              <div
                className={`hover:text-black text-base hover:bg-gray-300 ${
                  selectedTab == "settings"
                    ? "bg-gray-300 text-black"
                    : "text-gray-400"
                } p-2 rounded-lg`}
              >
                Settings
              </div>
            </MenuItem>
          </SubMenu>
          <SubMenu
            label="MARKETPLACE"
            defaultOpen={true}
            className="text-xs mt-2"
          >
            <MenuItem component={<Link to="/market" />}>
              <div
                className={`hover:text-black text-base hover:bg-gray-300 ${
                  selectedTab == "market"
                    ? "bg-gray-300 text-black"
                    : "text-gray-400"
                } p-2 rounded-lg`}
              >
                Market
              </div>
            </MenuItem>
            <MenuItem component={<Link to="/active" />}>
              <div
                className={`hover:text-black text-base hover:bg-gray-300 ${
                  selectedTab == "active"
                    ? "bg-gray-300 text-black"
                    : "text-gray-400"
                } p-2 rounded-lg`}
              >
                Active Bids
              </div>
            </MenuItem>
            <MenuItem component={<Link to="/saved" />}>
              <div
                className={`hover:text-black text-base hover:bg-gray-300 ${
                  selectedTab == "saved"
                    ? "bg-gray-300 text-black"
                    : "text-gray-400"
                } p-2 rounded-lg`}
              >
                Saved
              </div>
            </MenuItem>
          </SubMenu>
          <SubMenu
            label="MY PROFILE"
            defaultOpen={true}
            className="text-xs mt-2"
          >
            <MenuItem component={<Link to="/collection" />}>
              <div
                className={`hover:text-black text-base hover:bg-gray-300 ${
                  selectedTab == "collection"
                    ? "bg-gray-300 text-black"
                    : "text-gray-400"
                } p-2 rounded-lg`}
              >
                Collection
              </div>
            </MenuItem>
            <MenuItem component={<Link to="/wallet" />}>
              <div
                className={`hover:text-black text-base hover:bg-gray-300 ${
                  selectedTab == "wallet"
                    ? "bg-gray-300 text-black"
                    : "text-gray-400"
                } p-2 rounded-lg`}
              >
                Wallet
              </div>
            </MenuItem>
            <MenuItem component={<Link to="/history" />}>
              <div
                className={`hover:text-black text-base hover:bg-gray-300 ${
                  selectedTab == "history"
                    ? "bg-gray-300 text-black"
                    : "text-gray-400"
                } p-2 rounded-lg`}
              >
                History
              </div>
            </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
      <HelpCenter />
    </div>
  );
}
