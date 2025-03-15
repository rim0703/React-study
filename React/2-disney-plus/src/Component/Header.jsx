import React from "react";
import logo from "./../assets/Images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

function Header() {
  const menu = [
    { name: "HOME", icon: HiHome },
    { name: "SERACH", icon: HiMagnifyingGlass },
    { name: "WATCH LIST", icon: HiPlus },
    { name: "ORIGINALS", icon: HiStar },
    { name: "MOVIES", icon: HiPlayCircle },
    { name: "SERIES", icon: HiTv },
  ];

  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex gap-8 items-center" key="1">
        <img src={logo} className="w-[80px] md:w-[150px] object-cover"></img>
        {menu.map((item, index) => (
          <HeaderItem key={index} name={item.name} Icon={item.icon} />
        ))}
      </div>
      <img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png"
        className="w-[40px] rounded-full"
      />
    </div>
  );
}

export default Header;
