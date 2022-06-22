import React from "react";
import { CategoryJSON } from "../../json";

const BrowseCategory = () => {
  return (
    <div className="w-screen mb-[100px] flex items-center justify-center flex-col">
      <h1 className="text-xl text-orange-400 font-medium">
        Browse by Category
      </h1>
      <br />
      <div className="flex flex-wrap items-center justify-center gap-5 w-full px-[5%] lg:px-[30%]">
        {CategoryJSON.category.map((e, i) => {
          return (
            <h1
              key={i}
              className="text-3xl hover:border-b-[3px] flex border-slate-800 cursor-pointer items-center justify-center gap-4"
            >
              {e.name} <div className="w-2 h-2 rounded-full bg-black"></div>
            </h1>
          );
        })}
      </div>
    </div>
  );
};

export default BrowseCategory;
