import React, { useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { AiOutlineMobile } from "react-icons/ai";
import { useContext } from "react";
import { MobileContext } from "../../context/MobileContext";

const Navbar1 = () => {
  const [mobile, setMobile] = useContext(MobileContext);

  const handleMobile = () => {
    setMobile({
      ...mobile,
      isMobile: !mobile.isMobile,
    });
  };

  return (
    <nav className="w-full z-50 bg-primary p-5 flex items-center justify-between border-b-2 h-[60px] fixed top-0 left-0">
      <div className="flex items-center">
        <BsChevronLeft className="mr-2" />
        <span className="font-semibold">Back</span>
      </div>

      <div className="hidden md:flex w-full justify-center items-center gap-3 ">
        <span>Theme Styles</span>
        <div
          className={`mt-5 h-full min-h-[40px]  ${
            mobile && "border-b-2 border-slate-800 "
          } cursor-pointer`}
          onClick={handleMobile}
        >
          <HiOutlineDesktopComputer style={{ fontSize: 25 }} />
        </div>
        <div
          className={`mt-5 h-full min-h-[40px] ${
            !mobile && "border-b-2 border-slate-800 "
          } cursor-pointer`}
          onClick={handleMobile}
        >
          <AiOutlineMobile style={{ fontSize: 25 }} />
        </div>
      </div>

      <button className="min-w-[150px] hidden md:flex px-[30px] py-[10px] bg-teal-600 flex items-center justify-center text-white font-bold rounded shadow-lg shadow-black-500/40">
        Try Theme
      </button>

      <div className="flex gap-3 flex md:hidden">
        <span className={`w-7 h-7 border-2 rounded-full bg-yellow-600`}></span>
        <span className={`w-7 h-7 border-2 rounded-full bg-green-300`}></span>
        <span className={`w-7 h-7 border-2 rounded-full bg-orange-500`}></span>
      </div>
    </nav>
  );
};

export default Navbar1;
