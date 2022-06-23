import React from "react";
import { FaRegComment } from "react-icons/fa";
import { IoPricetagsOutline } from "react-icons/io5";
const Journal = () => {
  return (
    <div className="p-[20px] mb-[60px]">
      <h1 className=" text-orange-400 text-xl ml-[40px]">Journal</h1>
      <br />
      <div className="w-screen flex flex-col gap-5 lg:flex-row justify-center">
        <div className="w-full max-w-[500px] lg:w-1/2 flex flex-col">
          <h1 className="text-4xl lg:text-5xl font-medium">A slow path</h1>
          <h1 className="text-lg mb-[30px]">Posted on June 21, 2022</h1>
          <div className="border-b-4 mb-[30px] border-black w-[70px]"></div>
          <p className="w-[90%] mb-[30px] text-left">
            Well, maybe crossing the Alps by bike is not one of those remarkable
            deed all the world should know. I mean, thousands of people do a
            similar trip every year. Thousands. They grab their bike, plan their
            route, they can choose to go there alone or in groups, with some
            friends or colleagues. While you’re crossing the highest mountains
            of Europe, you probably will not bump into fierce bears and hostile
            wolves. In all probability, you will not meet a savage wilderness or
            lose yourself in an uncharted territory. But, in the end, what makes
            an experience really worth?
          </p>
          <button className="w-full max-w-[180px] mb-[30px] bg-inherit border-2 border-black py-[7px] px-[20px]">
            Read entire article
          </button>
          <div className="flex item-center gap-4 ">
            <div className="flex item-center gap-2">
              <FaRegComment className="text-orange-400" /> 2
            </div>
            <div className="flex item-center gap-2">
              <IoPricetagsOutline className="text-orange-400" />{" "}
              <a href="https://google.com">Camping</a>{" "}
              <a href="https://google.com">Inspiration</a>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[500px] lg:w-1/2 flex flex-col">
          <h1 className="text-4xl lg:text-5xl font-medium">
            Chasing the light
          </h1>
          <h1 className="text-lg mb-[30px]">Posted on May 12, 2022</h1>
          <div className="border-b-4 mb-[30px] border-black w-[70px]"></div>
          <p className="w-[90%] mb-[30px] text-left">
            As fascination with this mystical island mounts, Iceland’s call can
            be heard amongst the tribe. They are seeking out a new wave, a wave
            that comes with different experiences, different expectations and
            different rules. What they seek isn’t easily found, but when they
            find it, it’s felt right to the core. These frozen rumbles are
            chilling the hairs on the back of surfers necks across the globe.
            Chris Burkard is one surfer that has felt the call and has become
            captivated by this arcane landscape, where the true spirit of
            isolation can be experienced where no man has surfed before.
          </p>
          <button className="w-full max-w-[180px] mb-[30px] bg-inherit border-2 border-black py-[7px] px-[20px]">
            Read entire article
          </button>
          <div className="flex item-center gap-4 ">
            <div className="flex item-center gap-2">
              <FaRegComment className="text-orange-400" /> 1
            </div>
            <div className="flex item-center gap-2">
              <IoPricetagsOutline className="text-orange-400" />{" "}
              <a href="https://google.com">New Products</a>{" "}
              <a href="https://google.com">Winter</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journal;
