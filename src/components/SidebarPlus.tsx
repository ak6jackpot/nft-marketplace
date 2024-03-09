import React from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
interface Props {
  className?: string;
  current?: string;
}

export default function SidebarPlus({ ...props }: Props) {
  return (
    <Sidebar>
      <Menu
        menuItemStyles={{
          button: {
            borderRadius: 15,
            marginInline: 5,
            marginBlock: 5,
          },
        }}
      >
        <SubMenu label="GENERAL" defaultOpen={true}>
          <MenuItem component={<Link to="/" />}>Dashboard</MenuItem>
          <MenuItem component={<Link to="/message" />}> Message</MenuItem>
          <MenuItem component={<Link to="/settings" />}>Settings</MenuItem>
        </SubMenu>
        <SubMenu label="MARKETPLACE" defaultOpen={true}>
          <MenuItem component={<Link to="/market" />}>Market</MenuItem>
          <MenuItem component={<Link to="/active" />}> Active Bids</MenuItem>
          <MenuItem component={<Link to="/saved" />}>Saved</MenuItem>
        </SubMenu>
        <SubMenu label="MY PROFILE" defaultOpen={true}>
          <MenuItem component={<Link to="/collection" />}>Collection</MenuItem>
          <MenuItem component={<Link to="/wallet" />}> Wallet</MenuItem>
          <MenuItem component={<Link to="/history" />}>History</MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
}
