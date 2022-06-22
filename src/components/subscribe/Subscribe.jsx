import React from "react";

const Subscribe = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center text-center ">
      <h1 className="text-3xl font-medium">Subscribe to our newsletter</h1>
      <h4 className="text-2xl font-light">
        Promotions, new products and sales. Directly to your inbox.
      </h4>
      <div className="flex-col gap-5 sm:flex-row w-full bg-slate-400">
        <div className="bg-stone-100 px-[30px] py-[10px] w-full sm:max-w-[300px] flex items-center justify-center">
          <input
            type="text"
            className="bg-inherit border-none outline-none w-full"
            placeholder="Email"
          />
        </div>
        <button className="bg-neutral-900 p-3 w-full sm:max-w-[200px] w-full text-white">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
