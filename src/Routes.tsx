import ActiveBid from "pages/ActiveBid";
import Collection from "pages/Collection";
import Dashboard from "pages/Dashboard";
import History from "pages/History";
import Market from "pages/Market";
import Message from "pages/Message";
import NotFound from "pages/NotFound";
import Saved from "pages/Saved";
import Settings from "pages/Settings";
import Wallet from "pages/Wallet";
import React from "react";
import { useRoutes } from "react-router-dom";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "market",
      element: <Market />,
    },
    {
      path: "settings",
      element: <Settings />,
    },
    {
      path: "message",
      element: <Message />,
    },
    {
      path: "active",
      element: <ActiveBid />,
    },
    {
      path: "saved",
      element: <Saved />,
    },
    {
      path: "collection",
      element: <Collection />,
    },
    {
      path: "wallet",
      element: <Wallet />,
    },
    {
      path: "history",
      element: <History />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
