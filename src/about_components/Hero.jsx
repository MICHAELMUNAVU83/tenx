import React from "react";

const Hero = () => {
  return (
    <div class="h-[70vh] flex flex-col justify-center items-center gap-8">
      <div class="flex flex-col gap-4 font-bold text-6xl text-center items-center justify-center">
        <p>
          {" "}
          <span class="text-[#FF2400]">AI-Powered Sales</span> and Marketing
          Solutions:
        </p>
        <p> Transforming Your Business Growth</p>
      </div>
      <p class="text-center w-[70%] mx-auto text-xl">
        Our AI email writer analyzes your target audience, brand voice, and
        goals to produce effective subject lines, content, calls-to-action, and
        more tailored to your needs.
      </p>

      <p class="text-center w-[70%] mx-auto text-xl">
        Quickly generate, customize, and send captivating emails that drive real
        business results.
      </p>
    </div>
  );
};

export default Hero;
