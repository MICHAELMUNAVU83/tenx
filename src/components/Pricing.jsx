import React from "react";

const Pricing = () => {
  return (
    <div class="bg-[#F3F2EF] p-8 flex flex-col justify-center gap-12 items-center">
      <p class="text-4xl font-bold">See Our Pricing Model</p>

      <div class="w-[100%] grid grid-cols-4 items-end gap-6">
        <div class="bg-white h-[600px] p-2 items-center flex-col flex justify-between">
          <p class="text-2xl font-bold">Starter</p>
          <div class="flex flex-col gap-4">
            <p>
              Start closing deals faster with time saving sales tools you can
              use for free
            </p>
            <p class="font-bold text-xl">$0</p>
            <p>No credit card required</p>
          </div>

          <button class="bg-[#FF2400] uppercase text-white p-2 rounded-md">
            Get Started for free
          </button>
        </div>

        <div class="bg-white h-[600px] p-2 items-center flex-col flex justify-between">
          <p class="text-2xl font-bold">Professional</p>
          <div class="flex flex-col gap-4">
            <p>
              Start closing deals faster with time saving sales tools you can
              use for free
            </p>
            <p>Starts at</p>
            <p class="font-bold text-xl">$0</p>
            <p>Billed monthly</p>
          </div>

          <div class="flex flex-col gap-3 justify-start px-4">
            <p class="font-semibold">Includes 2,000 marketing contacts</p>
            <p>$250/month per 5,000 additional marketing contacts</p>
          </div>

          <button class="bg-[#FF2400] uppercase text-white p-2 rounded-md">
            Get Started for free
          </button>
        </div>

        <div class="flex w-[100%] flex-col ">
          <div class="w-[80%] mx-auto bg-[#FF2400] rounded-t-xl text-black flex justify-center items-center">
            <p class="font-bold">Most Popular</p>
          </div>
          <div class="bg-white h-[600px] p-2 items-center flex-col flex justify-between">
            <p class="text-2xl font-bold">Elite</p>
            <div class="flex flex-col gap-4">
              <p>
                Start closing deals faster with time saving sales tools you can
                use for free
              </p>
              <p>Starts at</p>
              <p class="font-bold text-xl">$0</p>
              <p>Billed monthly</p>
            </div>

            <div class="flex flex-col gap-3 justify-start px-4">
              <p class="font-semibold">Includes 2,000 marketing contacts</p>
              <p>$250/month per 5,000 additional marketing contacts</p>
            </div>

            <button class="bg-[#FF2400] uppercase text-white p-2 rounded-md">
              Get Started for free
            </button>
          </div>
        </div>
        <div class="bg-white h-[600px] p-2 items-center flex-col flex justify-between">
          <p class="text-2xl font-bold">Elite Plus</p>
          <div class="flex flex-col gap-4">
            <p>
              Start closing deals faster with time saving sales tools you can
              use for free
            </p>
            <p>Starts at</p>
            <p class="font-bold text-xl">$0</p>
            <p>Billed monthly</p>
          </div>

          <div class="flex flex-col gap-3 justify-start px-4">
            <p class="font-semibold">Includes 2,000 marketing contacts</p>
            <p>$250/month per 5,000 additional marketing contacts</p>
          </div>

          <button class="bg-[#FF2400] uppercase text-white p-2 rounded-md">
            Get Started for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
