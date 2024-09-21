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
import { useSnackbar } from "react-simple-snackbar";

export default function OpenBid(props) {
  const params = useParams();
  const cookies = new Cookies();

  const selectedObj = marketData?.find((item) => item?.id === params?.artId);
  const { globalSavedData, globalitems, updateState } = useUserContext();

  const isSaved = globalSavedData?.savedData?.find(
    (item) => item?.id == params?.artId
  );
  const [savedNow, setsavedNow] = useState(isSaved ? true : false);
  const isInCollection = globalitems?.collectionData?.filter(
    (item) => item?.id == params?.artId
  );
  const [dialogVisible, setDialogVisible] = useState(false);
  const [newBid, setNewBid] = useState(String(selectedObj?.bidPrice));
  const [openSnackbar, closeSnackbar] = useSnackbar();

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
                          globalSavedData: {
                            savedData: globalSavedData?.savedData?.filter(
                              (item) => item?.id != selectedObj?.id
                            ),
                          },
                        });
                      } else {
                        updateState({
                          globalSavedData: {
                            savedData: [
                              ...globalSavedData?.savedData,
                              selectedObj,
                            ],
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
                      className="bg-black text-white items-center text-lg justify-center p-[6px] flex-2 rounded-lg self-center relative overflow-hidden"
                    >
                      Place a bid
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 transform -translate-full animate-shine"></span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <Dialog onClose={() => setDialogVisible(false)} open={dialogVisible}>
            <div className="flex flex-col font-urbanistNormal items-center bg-white justify-center flex-1 px-4 py-2">
              <div className="flex flex-row">
                <span className="mb-2 mx-4">
                  {"Current Bid: " + selectedObj?.bidPrice}
                </span>
                <div className="flex flex-row mb-2 mx-4">
                  <span className="mx-4">{"Your Bid: "}</span>
                  <input
                    value={newBid}
                    autoFocus={true}
                    className="text-lg bg-gray-300 w-[25%] px-4"
                    onChange={(e) => setNewBid(e.target.value)}
                  />
                  <Button
                    className="bg-gray-200 text-black flex-1 flex mx-2 p-1"
                    onClick={() => setNewBid(String(Number(newBid) + 0.1))}
                  >
                    + 0.1
                  </Button>
                  <Button
                    className="bg-gray-200 text-black flex-1 flex mx-2 p-1"
                    onClick={() => setNewBid(String(Number(newBid) + 1))}
                  >
                    + 1
                  </Button>
                  <Button
                    className="bg-gray-200 text-black flex-1 flex mx-2 p-1"
                    onClick={() => setNewBid(String(Number(newBid) + 10))}
                  >
                    + 10
                  </Button>
                </div>
              </div>
              <Button
                className="bg-black text-white flex-1 flex mx-4 w-full py-2"
                onClick={() => {
                  setDialogVisible(false);
                  openSnackbar("Bid Placed Succesfully");
                }}
                disabled={Number(newBid) < selectedObj?.bidPrice}
                variant={"fill"}
                color={
                  Number(newBid) < selectedObj?.bidPrice
                    ? "disabled"
                    : "black_900"
                }
              >
                Confirm & Place Bid
              </Button>
            </div>
          </Dialog>
        </div>
      </div>
    </>
  );
}
