import React from "react";

const Hero = () => {
  return (
    <div class="h-[100vh] flex flex-col justify-center items-center gap-8">
      <div class="flex flex-col gap-4 font-bold text-7xl items-center justify-center">
        <p>Supercharge Your Revenue With the</p>
        <p>#1 Rated and Highest Converting</p>
        <p>
          {" "}
          <span class="text-[#FF2400]">AI-Powered Sales</span> Platform
        </p>
      </div>
      <p class="text-center text-xl">
        Finds leads, engage leads, and turn them into customers in just 4 clicks
        with a sales platform built for results
      </p>

      <div class="flex w-[70%]  p-2 border-[2px] border-[#1F1F1F]/50 rounded-md h-[80px] justify-between mx-auto">
        <div class="w-[60%] flex items-center justify-center">
          <input
            type="text"
            class="w-[100%] h-[100%] text-xl rounded-md p-2"
            placeholder="Enter your email address"
          />
        </div>

        <div class="w-[20%] flex items-center  bg-[#FF2400] rounded-md text-white text-xl justify-center">
          Try 10xBeast
        </div>
      </div>
    </div>
  );
};

export default Hero;
