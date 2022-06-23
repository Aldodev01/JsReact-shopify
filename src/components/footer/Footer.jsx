import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className=" bg-slate-700 text-white w-screen p-[40px]">
        <div className="flex flex-col md:flex-row w-full gap-[60px]">
          <ul className="w-full md:w-1/2 ">
            <li className=" mb-5 text-xl text-red-400 font-semibold">
              Quick links
            </li>
            <li className="mt-[7px]">Collections</li>
            <li className="mt-[7px]">About Us</li>
            <li className="mt-[7px]">Journal</li>
          </ul>

          <ul className="w-full md:w-1/2 ">
            <li className=" mb-5 text-xl text-red-400 font-semibold">
              Contact Us
            </li>
            <li className="mt-[7px]">1360 Lombard Street</li>
            <li className="mt-[7px]">San Francisco, CA 94109</li>
            <a
              href="https://themes.shopify.com/themes/colors/styles/generic/preview?surface_inter_position=2&surface_intra_position=10&surface_type=all"
              className="mt-[7px]"
            >
              support@company.com
            </a>
          </ul>

          <ul className="w-full md:w-1/2">
            <li className="mb-5 text-xl text-red-400 font-semibold">
              About Us
            </li>
            <li className="mt-[7px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              veniam tempore voluptas officiis enim aspernatur fugiat, aperiam,
              in amet nemo perferendis, consequatur suscipit exercitationem
              recusandae distinctio nisi quae saepe! Illum.
            </li>
          </ul>

          <ul className="w-full md:w-1/2 ">
            <li className=" mb-5 text-xl text-red-400 font-semibold">
              Connect With Us
            </li>
            <div className="flex w-full gap-5">
              <FaFacebookF style={{ fontSize: 20 }} className="text-white" />
              <BsTwitter style={{ fontSize: 20 }} className="text-white" />
              <FaPinterestP style={{ fontSize: 20 }} className="text-white" />
              <BsInstagram style={{ fontSize: 20 }} className="text-white" />
            </div>
          </ul>
        </div>
      </div>
      <div className="flex w-full bg-black justify-between items-center text-white p-[20px]">
        @copyright 2022 Colors, Powered by Shopify{" "}
        <div className="flex gap-5 ">
          <button className="bg-inherit border-2 border-white py-[5px] px-[10px] flex items-center justify-center">
            English
          </button>
          <button className="bg-inherit border-2 border-white py-[5px] px-[10px] flex items-center justify-center">
            United States USD $
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;
