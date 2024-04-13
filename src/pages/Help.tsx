import { Button } from "components/Button";
import FaqItem from "components/FaqItem";
import Header from "components/Header";
import SidebarPlus from "components/SidebarPlus";
import { useSnackbar } from "react-simple-snackbar";
import React, { useState } from "react";
import { Helmet } from "react-helmet";

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
                <FaqItem
                  question="What is an NFT?"
                  answer="An NFT, or Non-Fungible Token, is a unique digital asset that represents ownership of a specific item or piece of content, such as art, music, video clips, and more, using blockchain technology. Unlike cryptocurrencies like Bitcoin, each NFT is one-of-a-kind and cannot be exchanged on a like-for-like basis."
                />
                <FaqItem
                  question="How do I purchase an NFT on this platform?"
                  answer="To purchase an NFT, you first need to create an account and connect a digital wallet that supports cryptocurrencies. Once set up, you can browse our collection of NFTs, select one you like, and click the 'Place a Bid' button. Follow the on-screen instructions to complete your purchase."
                />
                <FaqItem
                  question="What payment methods are accepted here?"
                  answer="Our platform accepts various cryptocurrencies such as Ethereum (ETH), Bitcoin (BTC), and others as payment methods. Please ensure your digital wallet is loaded with enough cryptocurrency to complete the purchase, including transaction fees."
                />
                <FaqItem
                  question="Are there any fees for buying or selling NFTs on this platform?"
                  answer="Yes, there are transaction fees associated with buying and selling NFTs on our platform. These fees cover the costs of processing transactions on the blockchain. Specific fee details are provided at the time of the transaction."
                />
                <FaqItem
                  question="How do I ensure the authenticity of an NFT before purchasing?"
                  answer="Each NFT on our platform is verified for authenticity by our team. Details about the creator, previous ownership, and the originality of the content are available on the NFT's detail page. Always review this information before making a purchase."
                />
                <FaqItem
                  question="What should I do if I encounter a problem with a transaction?"
                  answer="If you experience any issues with a transaction, please contact our support team immediately. Provide all relevant details about the transaction and the issue you're facing. Our team is here to help resolve any problems as quickly as possible."
                />
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
