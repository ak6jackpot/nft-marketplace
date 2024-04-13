import FaqItem from "components/FaqItem";
import Header from "components/Header";
import SidebarPlus from "components/SidebarPlus";
import { useUserContext } from "context-provider";
import React from "react";
import { Helmet } from "react-helmet";
export default function Help() {
  const { globalitems } = useUserContext();

  return (
    <>
      <Helmet>
        <title>AK's NFT Store</title>
        <meta name="Akshat Singh" content="Marketplace for NFTs" />
      </Helmet>
      <div className="flex flex-row w-screen font-urbanistNormal bg-gray-50">
        <div className="flex flex-1">
          <SidebarPlus />
        </div>
        <div className="flex flex-col flex-4">
          <Header />
          <div className="flex flex-row">
            <div className="flex flex-2 flex-col px-4 border-r-[2px] overflow-y-scroll border-gray-200">
              <span className="text-black text-3xl my-2">Help Center</span>
              <div className="flex flex-col my-2 bg-white rounded-lg border-2">
                <FaqItem question="sdfdsf" answer="afsasf" />
                <FaqItem question="sdfdsf" answer="afsasf" />
                <FaqItem question="sdfdsf" answer="afsasf" />
                <FaqItem question="sdfdsf" answer="afsasf" />
                <FaqItem question="sdfdsf" answer="afsasf" />
                <FaqItem question="sdfdsf" answer="afsasf" />
                <FaqItem question="sdfdsf" answer="afsasf" />
                <FaqItem question="sdfdsf" answer="afsasf" />
                <FaqItem question="sdfdsf" answer="afsasf" />
                <FaqItem question="sdfdsf" answer="afsasf" />
                <FaqItem question="sdfdsf" answer="afsasf" />
              </div>
            </div>
            <div className="flex flex-1">
              sklsjvlsdfjsd
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
