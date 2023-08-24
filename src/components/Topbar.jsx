import React from "react";
import {
  AiOutlineMessage,
  AiOutlineClockCircle,
  AiOutlinePhone,
} from "react-icons/ai";

const Topbar = () => {
  return (
    <div className=" flex justify-between  items-center px-4 py-2">
      <div className="flex items-center">
        <AiOutlineMessage size={30} className="text-purple-500  mr-2" />
        <h1 className="text-xl  font-semibold m-auto  text-gray-700">BEACH APP</h1>
      </div>
      <div className="flex ">
        <div className="hidden md:flex items-center px-6">
        <AiOutlineClockCircle className="text-purple-500" size={20} />
        <p className="text-lg italic ml-2  text-gray-700"> 9 A.M - 5 P.M</p>

        </div>
        <div className="hidden md:flex items-center px-6">
        <AiOutlinePhone className="ml-4 text-purple-500" size={20} />
        <p className="text-lg italic ml-2 text-gray-700">+254790678908</p>
        </div>
        <button className="">
          GET FREE A QOUTE
        </button>
      </div>
    </div>
  );
};

export default Topbar;
