import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const Action = () => {
  return (
    <div class="bg-[#323232] py-16 ">
      <div class="md:w-[80%] w-[90%] mx-auto flex flex-col gap-4 md:items-start md:text-start text-center items-center">
        <p class="text-6xl font-bold text-white ">
          See <span class="text-[#FF2400]">10XBEAST</span> In Action
        </p>
        <p class="md:w-[70%] w-[90%] text-white text-xl">
          Discover how sales and teams use 10XBEAST to add an AI superpower to
          their revenue engine.
        </p>
        <button class="flex justify-center items-center gap-3 bg-[#1E1E1E] text-white px-12 md:text-2xl text-xl font-semibold   py-3 rounded-md">
          <p>START FREE TRIAL</p>
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default Action;
