import React from "react";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import AK_cover from "../assets/images/AK_cover.png";

interface Props {
  className?: string;
  current?: string;
}

export default function Header({ ...props }: Props) {
  const { current = "home" } = props;
  const navigate = useNavigate();

  return (
    <div className="flex flex-row justify-between items-center w-full px-[100px] py-[10px] text-black bg-white border-b-2 border-slate-600">
      <img
        src={AK_cover}
        alt="image_one"
        className="h-[40px]"
        onClick={() => navigate("/")}
      />
      <div className="flex flex-row justify-between font-urbanistNormal font-thin items-center w-[30%]">
        <Button
          className={current == "about" ? "border-b-4 border-red-300" : null}
          onClick={() => navigate("/about")}
        >
          About
        </Button>
        <Button
          className={current == "exp" ? "border-b-4 border-red-300" : null}
          onClick={() => navigate("/exp")}
        >
          Experience
        </Button>
        <Button
          className={current == "works" ? "border-b-4 border-red-300" : null}
          onClick={() => navigate("/works")}
        >
          Projects
        </Button>
        <Button
          className={current == "contact" ? "border-b-4 border-red-300" : null}
          onClick={() => navigate("/contact")}
        >
          Contact
        </Button>
      </div>
      <Button className="bg-gradient-to-r from-black to-teal-600 text-white font-urbanistNormal hover:from-white hover:to-white hover:text-black">
        Let's Talk
      </Button>
    </div>
  );
}
