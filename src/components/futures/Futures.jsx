import React from "react";
import { ImLeaf } from "react-icons/im";
import { BiWorld } from "react-icons/bi";
import { FaCaravan } from "react-icons/fa";
import { TbPercentage } from "react-icons/tb";
import { RiSecurePaymentFill } from "react-icons/ri";
import { GiReturnArrow } from "react-icons/gi";
import { BsRecycle } from "react-icons/bs";
const Futures = () => {
  return (
    <div className="w-screen mb-[60px] lg:px-[20%] flex gap-[10%] flex-wrap p-[30px] justify-center">
      {/*  */}
      <span className="flex mt-[40px] flex-col items-center justify-center w-full max-w-[120px]">
        <div className="border-2 border-orange-400 rounded-full p-4 mb-[10px]">
          <ImLeaf className=" text-orange-400" style={{ fontSize: 50 }} />
        </div>
        <h2 className="text-center">Sustainable Production</h2>
      </span>
      <span className="flex mt-[40px] flex-col items-center justify-center w-full max-w-[120px]">
        <div className="border-2 border-orange-400 rounded-full p-4 mb-[10px]">
          <BiWorld className=" text-orange-400" style={{ fontSize: 50 }} />
        </div>
        <h2 className="text-center">Shipping Worldwide</h2>
      </span>{" "}
      <span className="flex mt-[40px] flex-col items-center justify-center w-full max-w-[120px]">
        <div className="border-2 border-orange-400 rounded-full p-4 mb-[10px]">
          <BsRecycle className=" text-orange-400" style={{ fontSize: 50 }} />
        </div>
        <h2 className="text-center">Using Recycled Materials</h2>
      </span>{" "}
      <span className="flex mt-[40px] flex-col items-center justify-center w-full max-w-[120px]">
        <div className="border-2 border-orange-400 rounded-full p-4 mb-[10px]">
          <GiReturnArrow
            className=" text-orange-400"
            style={{ fontSize: 50 }}
          />
        </div>
        <h2 className="text-center">Free Returns within 14 days</h2>
      </span>{" "}
      <span className="flex mt-[40px] flex-col items-center justify-center w-full max-w-[120px]">
        <div className="border-2 border-orange-400 rounded-full p-4 mb-[10px]">
          <RiSecurePaymentFill
            className=" text-orange-400"
            style={{ fontSize: 50 }}
          />
        </div>
        <h2 className="text-center">Secure Payment System</h2>
      </span>
      <span className="flex mt-[40px] flex-col items-center justify-center w-full max-w-[120px]">
        <div className="border-2 border-orange-400 rounded-full p-4 mb-[10px]">
          <TbPercentage className=" text-orange-400" style={{ fontSize: 50 }} />
        </div>
        <h2 className="text-center">20% Off on First Order</h2>
      </span>
      <span className="flex mt-[40px] flex-col items-center justify-center w-full max-w-[120px]">
        <div className="border-2 border-orange-400 rounded-full p-4 mb-[10px]">
          <FaCaravan className=" text-orange-400" style={{ fontSize: 50 }} />
        </div>
        <h2 className="text-center">Local Brand and Products</h2>
      </span>
      {/*  */}
    </div>
  );
};

export default Futures;
