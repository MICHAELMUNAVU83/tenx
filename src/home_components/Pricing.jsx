import React from "react";

const Pricing = () => {
  return (
    <div class="bg-[#F3F2EF] p-8 flex flex-col justify-center gap-12 items-center">
      <p class="md:text-4xl text-3xl  text-center font-bold">
        See Our Pricing Model
      </p>

      <div class="w-[100%] grid md:grid-cols-4 items-end gap-6">
        <div class="bg-white h-[600px] rounded-md p-4 items-start flex-col flex justify-between">
          <div class="flex flex-col gap-1">
            <p class="text-2xl font-bold">Starter</p>
            <p>Get Started With Your Pipeline</p>
          </div>
          <div class="flex flex-col gap-4">
            <p class="text-2xl font-bold">$99/Month</p>
            <p>7-day free trial, cancel anytime</p>
          </div>
          <div class="flex w-[100%] flex-col gap-1">
            <button class="bg-[#FF2400] text-xl  font-semibold w-[100%] uppercase text-white p-2 rounded-md">
              Start Free Trial
            </button>
            <ul class=" list-disc list-inside">
              <li>$0.55 Per AI Outbound Email</li>
              <li>Free Domain Warming</li>
              <li>1 Seat</li>
              <li>24 hour Support</li>
            </ul>
          </div>
        </div>

        <div class="bg-white h-[600px] rounded-md p-4 items-start flex-col flex justify-between">
          <div class="flex flex-col gap-1">
            <p class="text-2xl font-bold">Professional</p>
            <p>Scale up with a small team</p>
          </div>
          <div class="flex flex-col gap-4">
            <p class="text-2xl font-bold">$199/Month</p>
            <p>7-day free trial, cancel anytime</p>
          </div>
          <div class="flex w-[100%] flex-col gap-1">
            <button class="bg-[#FF2400] text-xl  font-semibold w-[100%] uppercase text-white p-2 rounded-md">
              Start Free Trial
            </button>
            <ul class=" list-disc list-inside">
              <li class="font-semibold list-none">
                Everything in Starter plus:
              </li>
              <li>Free Domain Warming</li>
              <li>1 Seat</li>
              <li>24 hour Support</li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col w-[100%] justify-center items-center ">
          <div class="bg-[#FF2400]  w-[70%] text-center font-semibold rounded-t-xl">
            MOST POPULAR
          </div>
          <div class="bg-white h-[600px] border-[2px] border-[#FF2400] w-[100%] rounded-md p-4 items-start flex-col flex justify-between">
            <div class="flex flex-col gap-1">
              <p class="text-2xl font-bold">Professional</p>
              <p>Scale up with a small team</p>
            </div>
            <div class="flex flex-col gap-4">
              <p class="text-2xl font-bold">$199/Month</p>
              <p>7-day free trial, cancel anytime</p>
            </div>
            <div class="flex w-[100%] flex-col gap-1">
              <button class="bg-[#FF2400] text-xl  font-semibold w-[100%] uppercase text-white p-2 rounded-md">
                Start Free Trial
              </button>
              <ul class=" list-disc list-inside">
                <li class="font-semibold list-none">
                  Everything in Starter plus:
                </li>
                <li>Free Domain Warming</li>
                <li>1 Seat</li>
                <li>24 hour Support</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="bg-white h-[600px] rounded-md p-4 items-start flex-col flex justify-between">
          <div class="flex flex-col gap-1">
            <p class="text-2xl font-bold">Professional</p>
            <p>Scale up with a small team</p>
          </div>
          <div class="flex flex-col gap-4">
            <p class="text-2xl font-bold">$199/Month</p>
            <p>7-day free trial, cancel anytime</p>
          </div>
          <div class="flex w-[100%] flex-col gap-1">
            <button class="bg-[#FF2400] text-xl  font-semibold w-[100%] uppercase text-white p-2 rounded-md">
              Start Free Trial
            </button>
            <ul class=" list-disc list-inside">
              <li class="font-semibold list-none">
                Everything in Starter plus:
              </li>
              <li>Free Domain Warming</li>
              <li>1 Seat</li>
              <li>24 hour Support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
