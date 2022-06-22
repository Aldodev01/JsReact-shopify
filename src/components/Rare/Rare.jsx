import React from "react";
import "./Rare.css";

const Rare = () => {
  return (
    <div className="w-screen">
      <div className="w-full flex flex-col grid-container sm:grid lg:hidden">
        <div className="item4 h-full max-h-[150px]">
          <RareItems
            name={"Popular Stuff"}
            src="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
          />
        </div>
        <div className="item3  h-full max-h-[150px]">
          <RareItems
            name={"Backpacks"}
            src="https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1452&q=80"
          />
        </div>
        <div className="item5 h-full max-h-[150px]">
          <RareItems
            name={"Cooking"}
            src="https://images.unsplash.com/photo-1615306119247-67565da835da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          />
        </div>
      </div>
      <div className="w-full hidden lg:flex gap-3">
        <div className="w-full  h-full ">
          <RareItems
            name={"Popular Stuff"}
            src="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
          />
        </div>
        <div className="w-full h-full ">
          <RareItems
            name={"Backpacks"}
            src="https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1452&q=80"
          />
        </div>
        <div className="w-full h-full ">
          <RareItems
            name={"Cooking"}
            src="https://images.unsplash.com/photo-1615306119247-67565da835da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          />
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="w-full flex flex-col items-center justify-center text-center p-7">
        <h1 className="text-4xl font-medium">
          The finest materials. Stunning design.
        </h1>
        <br />
        <p className="text-md md:max-w-[75%] lg:max-w-[60%]">
          We believe in quality, care, and curating unique products that
          everyone can enjoy. Colorful, creative, and inspired by what we see
          everyday, each product represents what we love about the world we live
          in.
        </p>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

const RareItems = ({ src, link, name, responsiveCss }) => {
  return (
    <div className="relative">
      <img
        src={src}
        alt={name}
        className={
          "w-full h-[120px] lg:flex-1 lg:h-[380px] object-cover object-center"
        }
      />
      <h3 className="absolute text-sm md:text-md lg:text-xl left-1/2 transform -translate-x-1/2 bottom-3 lg:bottom-8 text-white">
        {name}
      </h3>
    </div>
  );
};

export default Rare;
