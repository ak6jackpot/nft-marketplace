import React from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import HelpCenter from "./HelpCenter";
import ProfilePic from "assets/images/ProfilePic.png";
export default function SidebarPlus(props: any) {
  return (
    <div className="flex flex-col bg-gray-100">
      <div className="flex flex-row justify-center items-center">
        <img
          className="w-[50px] rounded-full m-2 aspect-square"
          src={ProfilePic}
        ></img>
        <div className="flex flex-col">
          <span>Akshat Singh</span>
          <span className="text-xs opacity-40">@aksingh</span>
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
              <div className="text-gray-400 hover:text-black text-base text-base hover:bg-gray-300 p-2 rounded-lg">
                Dashboard
              </div>
            </MenuItem>
            <MenuItem component={<Link to="/message" />}>
              <div className="text-gray-400 hover:text-black text-base hover:bg-gray-300 p-2 rounded-lg">
                Message
              </div>
            </MenuItem>
            <MenuItem component={<Link to="/settings" />}>
              <div className="text-gray-400 hover:text-black text-base hover:bg-gray-300 p-2 rounded-lg">
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
              <div className="text-gray-400 hover:text-black text-base hover:bg-gray-300 p-2 rounded-lg">
                Market
              </div>
            </MenuItem>
            <MenuItem component={<Link to="/active" />}>
              <div className="text-gray-400 hover:text-black text-base hover:bg-gray-300 p-2 rounded-lg">
                Active Bids
              </div>
            </MenuItem>
            <MenuItem component={<Link to="/saved" />}>
              <div className="text-gray-400 hover:text-black text-base hover:bg-gray-300 p-2 rounded-lg">
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
              <div className="text-gray-400 hover:text-black text-base hover:bg-gray-300 p-2 rounded-lg">
                Collection
              </div>
            </MenuItem>
            <MenuItem component={<Link to="/wallet" />}>
              <div className="text-gray-400 hover:text-black text-base hover:bg-gray-300 p-2 rounded-lg">
                Wallet
              </div>
            </MenuItem>
            <MenuItem component={<Link to="/history" />}>
              <div className="text-gray-400 hover:text-black text-base hover:bg-gray-300 p-2 rounded-lg">
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
