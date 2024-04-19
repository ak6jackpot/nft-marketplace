import { Button } from "components/Button";
import FaqItem from "components/FaqItem";
import Header from "components/Header";
import SidebarPlus from "components/SidebarPlus";
import { useSnackbar } from "react-simple-snackbar";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { faqData } from "data/faqData";

export default function Help() {
  const [textareaVisible, setTextareaVisible] = useState(false);
  const [openSnackbar, closeSnackbar] = useSnackbar();
  const [text, setText] = useState("");
  return (
    <>
      <Helmet>
        <title>AK's NFT Store</title>
        <meta name="Akshat Singh" content="Marketplace for NFTs" />
      </Helmet>
      <div className="flex flex-row font-urbanistNormal bg-gray-50">
        <div className="flex flex-1">
          <SidebarPlus />
        </div>
        <div className="flex flex-col flex-4">
          <Header />
          <div className="flex flex-row pt-[80px] h-screen">
            <div className="flex flex-2 flex-col px-4 border-r-[2px] overflow-y-scroll border-gray-200">
              <span className="text-black text-3xl my-2">FAQs</span>
              <div className="flex flex-col my-2 pt-2 bg-white rounded-lg border-2">
                {faqData?.map((item) => {
                  return (
                    <FaqItem question={item?.question} answer={item?.answer} />
                  );
                })}
              </div>
            </div>
            <div className="items-center h-full flex flex-col flex-1">
              <span className="text-black text-3xl my-2 opacity-0">
                {" g  "}
              </span>

              <div className="items-center justify-center p-2 m-2 bg-black w-[80%] rounded-xl text-white flex flex-col">
                <span className="items-center justify-center flex my-2 mb-6">
                  Have any other questions?
                </span>
                {textareaVisible && (
                  <textarea
                    rows={4}
                    className="bg-gray-100 rounded-md w-full text-black p-2"
                    value={text}
                    onChange={(e) => setText(e?.target?.value)}
                  />
                )}
                <div className="bg-white text-black rounded-lg justify-center flex my-2 mt-6 w-full">
                  <Button
                    onClick={() => {
                      if (textareaVisible) {
                        if (text?.length > 20) {
                          openSnackbar(
                            "Your query has been received! We will get back to you shortly."
                          );
                          setText("");
                          setTextareaVisible(!textareaVisible);
                        } else {
                          openSnackbar("Please explain in more detail.");
                        }
                      } else {
                        setTextareaVisible(!textareaVisible);
                      }
                    }}
                  >
                    {textareaVisible ? "Send Query" : "Write to Us"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
