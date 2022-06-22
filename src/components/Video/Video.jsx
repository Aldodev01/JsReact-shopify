import React from "react";

const Video = () => {
  return (
    <div className="w-screen relative flex flex-col items-center justify-center">
      <video
        src="https://cdn.shopify.com/s/files/1/0895/1746/files/Mountains_in_the_fog.mp4?v=1651652817"
        loop
        autoPlay
        playsInline
        muted
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl text-white font-medium">Outdoor in style</h1>
        <br />
        <p className="text-white">
          We like to travel, be outdoors, experience the entire globe and to do
          that, well, we needed the best material. And we decided to make them,
          with some of the most awesome, talented people we could find.
        </p>
        <br />
        <button className=" bg-inherit border-4 border-white px-[20px] py-[5px] text-white">
          Explore
        </button>
      </div>
    </div>
  );
};

export default Video;
