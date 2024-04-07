import React from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import HelpCenter from "./HelpCenter";
import defaultProfile from "assets/images/defaultProfile.png";
import Cookies from "universal-cookie";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import WalletOutlinedIcon from "@mui/icons-material/WalletOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";

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
            <MenuItem
              component={<Link to="/" />}
              icon={
                <ExploreOutlinedIcon
                  color={selectedTab == "" ? "inherit" : "action"}
                />
              }
            >
              <div
                className={`hover:text-black text-base hover:bg-gray-300 ${
                  selectedTab == "" ? "bg-gray-300 text-black" : "text-gray-400"
                } p-2 rounded-lg`}
              >
                Dashboard
              </div>
            </MenuItem>
            <MenuItem
              component={<Link to="/message" />}
              icon={
                <TextsmsOutlinedIcon
                  color={selectedTab == "message" ? "inherit" : "action"}
                />
              }
            >
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
            <MenuItem
              component={<Link to="/settings" />}
              icon={
                <SettingsOutlinedIcon
                  color={selectedTab == "settings" ? "inherit" : "action"}
                />
              }
            >
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
            <MenuItem
              component={<Link to="/market" />}
              icon={
                <StorefrontOutlinedIcon
                  color={selectedTab == "market" ? "inherit" : "action"}
                />
              }
            >
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
            <MenuItem
              component={<Link to="/active" />}
              icon={
                <GavelOutlinedIcon
                  color={selectedTab == "active" ? "inherit" : "action"}
                />
              }
            >
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
            <MenuItem
              component={<Link to="/saved" />}
              icon={
                <FavoriteBorderOutlinedIcon
                  color={selectedTab == "saved" ? "inherit" : "action"}
                />
              }
            >
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
            <MenuItem
              component={<Link to="/collection" />}
              icon={
                <WidgetsOutlinedIcon
                  color={selectedTab == "collection" ? "inherit" : "action"}
                />
              }
            >
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
            <MenuItem
              component={<Link to="/wallet" />}
              icon={
                <WalletOutlinedIcon
                  color={selectedTab == "wallet" ? "inherit" : "action"}
                />
              }
            >
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
            <MenuItem
              component={<Link to="/history" />}
              icon={
                <AccessTimeIcon
                  color={selectedTab == "history" ? "inherit" : "action"}
                />
              }
            >
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
