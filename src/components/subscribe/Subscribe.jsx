import React from "react";

const Subscribe = () => {
  return (
    <div className="w-screen p-20px mb-[60px]">
      <div className="w-full h-full min-h-[500px] flex flex-col bg-stone-400 items-center justify-center">
        <h1 className="text-5xl font-semibold">Sign Up and save</h1>
        <h3 className="text-xl font-medium">
          Promotions, new products and sales. Directly to your inbox.
        </h3>
        <br />
        <div className="flex flex-col md:flex-row w-full items-center justify-center gap-5 p-[20px]">
          <input
            className=" outline-none flex-1 w-full md:max-w-[400px] border-none bg-white h-[45px] py-[10px] px-[10px]"
            placeholder="Your Email"
          />
          <button className="w-full md:max-w-[120px] bg-black py-[10px] px-[10px] flex items-center justify-center text-white">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
