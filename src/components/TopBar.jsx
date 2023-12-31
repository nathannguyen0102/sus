import React from "react";
import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
// import { BsChatSquareDots } from "react-icons/bs";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2 ">
      <div className="flex items-center">
        {/* <BsChatSquareDots size={28} className="mr-2" /> */}
        <h1 className="text-xl font-bold ">Haso</h1>
      </div>
      <div className="flex">
        <div className="hidden md:flex items-center px-6">
          <AiOutlineClockCircle size={26} className="mr-3" />
          <p>9AMqweqwePM</p>
        </div>
        <div className="hidden md:flex items-center px-6">
          <AiFillPhone size={26} className="mr-3" />
          <p>777-77asd7</p>
        </div>
        <button className="">Reaqweasdion</button>
      </div>
    </div>
  );
};

export default TopBar;
