import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const Hero = () => {
  return (
    <div class="md:h-[100vh]  py-8 md:py-0 text-center flex flex-col  justify-center items-center gap-8">
      <div class="flex flex-col gap-4 font-bold md:text-7xl text-3xl items-center justify-center">
        <p>Supercharge Your Revenue With the</p>
        <p>#1 Rated and Highest Converting</p>
        <p>
          <span class="text-[#FF2400]">AI-Powered Sales</span> Platform
        </p>
      </div>
      <p class="text-center w-[90%] mx-auto md:text-xl">
        Finds leads, engage leads, and turn them into customers in just 4 clicks
        with a sales platform built for results
      </p>

      <div class="flex md:w-[60%] w-[90%]  p-2 border-[2px] border-[#1F1F1F]/40 rounded-md h-[70px] justify-between mx-auto">
        <div class="w-[60%] flex items-center justify-center">
          <input
            type="text"
            class="w-[100%] h-[100%] md:text-xl rounded-md p-2"
            placeholder="Enter your email address"
          />
        </div>

        <div class="md:w-[20%] w-[35%] text-xs p-2 uppercase flex items-center  bg-[#FF2400] rounded-md text-white md:text-xl justify-center">
          <p>Try 10xBeast</p>
          <FaArrowRightLong />
        </div>
      </div>
    </div>
  );
};

export default Hero;
