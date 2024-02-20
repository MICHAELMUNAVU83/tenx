import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const Action = () => {
  return (
    <div class="bg-[#323232] py-16 ">
      <div class="w-[80%] mx-auto flex flex-col gap-4 items-start">
        <p class="text-6xl font-bold text-white ">
          See <span class="text-[#FF2400]">10XBEAST</span> In Action
        </p>
        <p class="w-[70%] text-white text-xl">
          Discover how sales and teams use 10XBEAST to add an AI superpower to
          their revenue engine.
        </p>
        <button class="flex justify-center items-center gap-3 bg-[#1E1E1E] text-white px-12 text-2xl font-semibold   py-3 rounded-md">
          <p>START FREE TRIAL</p>
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default Action;
