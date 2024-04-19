import Header from "components/Header";
import SidebarPlus from "components/SidebarPlus";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import defaultProfile from "../assets/icons/defaultProfile.png";
import eth from "../assets/icons/eth.png";
import heartPink from "../assets/icons/heartPink.png";
import heartGray from "../assets/icons/heartGray.png";
import { marketData } from "data/itemsData";
import { useUserContext } from "context-provider";
import Countdown from "react-countdown";
import { CounterBig } from "components/Counter";
import Cookies from "universal-cookie";
import Dialog from "@mui/material/Dialog";
import { Button } from "components/Button";

export default function OpenBid(props) {
  const params = useParams();
  const cookies = new Cookies();

  const selectedObj = marketData?.find((item) => item?.id === params?.artId);
  const { globalitems, updateState } = useUserContext();

  const isSaved = globalitems?.savedData?.find(
    (item) => item?.id == params?.artId
  );
  const [savedNow, setsavedNow] = useState(isSaved ? true : false);
  const isInCollection = globalitems?.collectionData?.filter(
    (item) => item?.id == params?.artId
  );
  const [dialogVisible, setDialogVisible] = useState(false);

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
          <div className="w-full overflow-y-auto pr-[10%] pt-[80px] h-screen flex flex-col px-4">
            <div className="flex flex-row w-full m-4 h-[60%]">
              <div className="flex flex-1 max-h-[75%]">
                <img className="rounded-xl" src={selectedObj?.artImage} />
              </div>
              <div className="flex flex-1 flex-col ml-4">
                <div className="my-1">
                  <span className="text-3xl">{selectedObj?.artName}</span>
                </div>
                <div className="my-1 mb-2">
                  <span className="opacity-40">{selectedObj?.description}</span>
                </div>
                <div className="flex flex-row my-2 border-b-[1px] w-[80%] pb-2">
                  <div className="flex flex-1">
                    <img
                      src={defaultProfile}
                      className="flex h-[40px] rounded-full"
                    />
                    <div className="flex flex-col ml-2">
                      <span className="opacity-40 text-sm">{"Creator"}</span>
                      <span className="">{selectedObj?.artistName}</span>
                    </div>
                  </div>
                  {Date.now() > selectedObj?.timeLeft && (
                    <div className="flex flex-1">
                      <img
                        src={
                          isInCollection?.length > 0
                            ? localStorage.getItem("profilePic")
                              ? localStorage.getItem("profilePic")
                              : defaultProfile
                            : selectedObj?.ownerPic
                        }
                        className="flex h-[40px] rounded-full"
                      />
                      <div className="flex flex-col ml-2">
                        <span className="opacity-40 text-sm">{"Owner"}</span>
                        <span className="">
                          {isInCollection?.length > 0
                            ? cookies.get("firstname") +
                              " " +
                              cookies.get("lastname")
                            : selectedObj?.ownerName}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-row w-[50%] justify-between">
                  {!(isInCollection?.length > 0) && (
                    <div className="flex flex-col my-2">
                      <Countdown
                        date={selectedObj?.timeLeft}
                        renderer={CounterBig}
                      />
                    </div>
                  )}
                  {Date.now() < selectedObj?.timeLeft && (
                    <div className="flex flex-col my-2 ">
                      <span className="opacity-40">{"Current Bid"}</span>
                      <div className="flex flex-row items-center justify-between px-2">
                        <img src={eth} className="flex h-[20px]" />
                        <span className="text-xl">{selectedObj?.bidPrice}</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-row w-[50%] my-2">
                  <button
                    onClick={() => {
                      setsavedNow(!savedNow);
                      if (isSaved) {
                        updateState({
                          globalitems: {
                            activeData: globalitems?.activeData,
                            marketData: globalitems?.marketData,
                            trendingData: globalitems?.trendingData,
                            collectionData: globalitems?.collectionData,
                            walletData: globalitems?.walletData,
                            savedData: globalitems?.savedData?.filter(
                              (item) => item?.id != selectedObj?.id
                            ),
                            activityData: globalitems?.activityData,
                          },
                        });
                      } else {
                        updateState({
                          globalitems: {
                            activeData: globalitems?.activeData,
                            marketData: globalitems?.marketData,
                            trendingData: globalitems?.trendingData,
                            collectionData: globalitems?.collectionData,
                            walletData: globalitems?.walletData,
                            savedData: [...globalitems?.savedData, selectedObj],
                            activityData: globalitems?.activityData,
                          },
                        });
                      }
                    }}
                  >
                    <div className="w-[40px] aspect-square rounded-md border-[1px] mr-4 p-2 pt-3">
                      <img src={savedNow ? heartPink : heartGray} />
                    </div>
                  </button>
                  {Date.now() < selectedObj?.timeLeft && (
                    <button
                      onClick={() => setDialogVisible(true)}
                      className="bg-black text-white items-center text-lg justify-center p-[6px] flex-2 rounded-lg self-center"
                    >
                      Place a bid
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <Dialog onClose={() => setDialogVisible(false)} open={dialogVisible}>
            <div className="flex flex-col font-urbanistNormal items-center bg-white justify-center flex-1 px-4 py-2">
              <span className="mb-2">
                Your Details have been saved succesfully!
              </span>
              <span className="mb-2 text-sm">
                You can update them in the Settings tab later.
              </span>
              <Button
                className="bg-black text-white flex-1 flex mx-4 w-[25%] py-2"
                onClick={() => setDialogVisible(false)}
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
