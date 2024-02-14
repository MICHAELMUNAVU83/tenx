import React from "react";

const Products = () => {
  return (
    <div class="bg-black  h-[120vh] flex justify-center items-center flex-col gap-6">
      <div class="flex flex-col gap-4 font-bold text-4xl items-center text-white text-center justify-center">
        <p>Maximize your sales with AI</p>
        <p>Powered Email</p>
      </div>
      <div class="w-[90%] h-[75vh] bg-[#FF2400] text-white flex flex-col gap-4 p-5 ">
        <p class="text-3xl font-semibold">10X Your Revenue</p>
        <p class="text-xl">
          Build your sales pipeline at 10x speed and a fraction of the cost
        </p>

        <div class="w-[100%] flex justify-between">
          <div class="w-[47%] h-[50vh] bg-[#323232] flex flex-col justify-between p-3 ">
            <p class="text-2xl font-bold">Saas Products</p>
            <p>
              Our advanced AI finds target prospects and creates campaigns that
              get you demo bookings and build your sales pipeline.
            </p>

            <div class="w-[100%] grid grid-cols-2 gap-2">
              <div class="w-[100%] h-[70px] text-sm rounded-full border-[2px] border-[#404040] flex gap-4 items-center">
                <div class="bg-[#5C5959] h-[100%] flex justify-center items-center gap-2 rounded-full w-[70px]">
                  <img
                    src="/leads.png"
                    alt="10xbeast logo"
                    class="w-[30px] h-[30px] object-contain"
                  />
                </div>
                <p>Find Leads</p>
              </div>
              <div class="w-[100%] h-[70px] text-sm rounded-full border-[2px] border-[#404040] flex gap-4 items-center">
                <div class="bg-[#5C5959] h-[100%] flex justify-center items-center gap-2 rounded-full w-[70px]">
                  <img
                    src="/demos.png"
                    alt="10xbeast logo"
                    class="w-[30px] h-[30px] object-contain"
                  />
                </div>
                <p>Book Demos </p>
              </div>
              <div class="w-[100%] h-[70px] text-sm rounded-full border-[2px] border-[#404040] flex gap-4 items-center">
                <div class="bg-[#5C5959] h-[100%] flex justify-center items-center gap-2 rounded-full w-[70px]">
                  <img
                    src="/emails.png"
                    alt="10xbeast logo"
                    class="w-[30px] h-[30px] object-contain"
                  />
                </div>
                <p>Create Targeted Emails</p>
              </div>
              <div class="w-[100%] h-[70px] text-sm rounded-full border-[2px] border-[#404040] flex gap-4 items-center">
                <div class="bg-[#5C5959] h-[100%] flex justify-center items-center gap-2 rounded-full w-[70px]">
                  <img
                    src="/revenue.png"
                    alt="10xbeast logo"
                    class="w-[30px] h-[30px] object-contain"
                  />
                </div>
                <p>Grow Revenue</p>
              </div>
            </div>
          </div>

          <div class="w-[47%] h-[50vh] bg-[#323232] flex flex-col justify-between p-3 ">
            <p class="text-2xl font-bold">E Commerce </p>
            <p>
              Automate your content strategy with our AI-powered platform.
              Personalize your audience's journey, drive demand, enhance SEO,
              and manage marketing operations efficiently
            </p>

            <div class="w-[100%] grid grid-cols-2 gap-2">
              <div class="w-[100%]  text-sm h-[70px] rounded-full border-[2px] border-[#404040] flex gap-4 items-center">
                <div class="bg-[#5C5959] h-[100%] flex justify-center items-center gap-2 rounded-full w-[70px]">
                  <img
                    src="/tailored.png"
                    alt="10xbeast logo"
                    class="w-[30px] h-[30px] object-contain"
                  />
                </div>
                <p>Tailored Content Creation</p>
              </div>
              <div class="w-[100%] h-[70px] text-sm rounded-full border-[2px] border-[#404040] flex gap-4 items-center">
                <div class="bg-[#5C5959] h-[100%] flex justify-center items-center gap-2 rounded-full w-[70px]">
                  <img
                    src="/usp.png"
                    alt="10xbeast logo"
                    class="w-[30px] h-[30px] object-contain"
                  />
                </div>
                <p>Unique Selling Proposition</p>
              </div>
              <div class="w-[100%] h-[70px] text-sm rounded-full border-[2px] border-[#404040] flex gap-4 items-center">
                <div class="bg-[#5C5959] h-[100%] flex justify-center items-center gap-2 rounded-full w-[70px]">
                  <img
                    src="/pain.png"
                    alt="10xbeast logo"
                    class="w-[30px] h-[30px] object-contain"
                  />
                </div>
                <p>Pain Point Analysis</p>
              </div>
              <div class="w-[100%] h-[70px] text-sm rounded-full border-[2px] border-[#404040] flex gap-4 items-center">
                <div class="bg-[#5C5959] h-[100%] flex justify-center items-center gap-2 rounded-full w-[70px]">
                  <img
                    src="/campaign.png"
                    alt="10xbeast logo"
                    class="w-[30px] h-[30px] object-contain"
                  />
                </div>
                <p>Campaign Goal Alignment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
