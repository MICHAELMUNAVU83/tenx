import React from "react";

const Maximize = () => {
  const meetings = [
    {
      id: 1,
      image: "/leads.png",
      title: "Pain Point Analysis",
      class: "flex justify-between items-start p-8 md:flex-row flex-col gap-4",
      inner_title: "Tailored Content Creation",
      description:
        "Understanding your audience's pain points is crucial for developing targeted marketing strategies. Our platform conducts in-depth analysis to identify common challenges and barriers to purchase, enabling you to tailor messaging and offers that address specific customer needs.",
    },
    {
      id: 2,
      image: "/leads.png",
      title: "Unique Selling Proposition (USP)",
      inner_title: "Unique Selling Proposition",
      class:
        "flex flex-row-reverse justify-between items-start p-8 md:flex-row flex-col gap-4",

      description:
        "What sets your brand apart from the competition? Our platform helps you identify and articulate your Unique Selling Proposition, giving you a competitive edge in the market. By understanding what makes your brand unique, you can effectively communicate value to your audience and drive brand loyalty.",
    },
    {
      id: 3,
      image: "/leads.png",
      inner_title: "Tailored Content Creation",
      title: "Grow Revenue",
      class: "flex justify-between items-start p-8 md:flex-row flex-col gap-4",
      description:
        "Crafting compelling content is essential for capturing audience attention and driving conversions. Our platform provides intuitive tools and templates for creating tailored messaging that resonates with your target audience, helping you stand out in a crowded marketplace.",
    },
    {
      id: 4,
      image: "/leads.png",
      title: "Sales Analysis",
      inner_title: "Campaign Goal Alignment",
      class:
        "flex flex-row-reverse justify-between items-start p-8 md:flex-row flex-col gap-4",
      description:
        "Successful marketing campaigns start with clearly defined goals. Our platform facilitates seamless alignment between your campaign objectives and business goals, ensuring that every marketing initiative contributes to your overall success.",
    },
  ];
  return (
    <div class="bg-black md:p-12 py-8 px-2  flex justify-center items-center flex-col gap-8">
      <p class="md:text-6xl text-3xl  w-[90%] md:w-[80%] mx-auto text-white text-center font-semibold">
        Maximize your sales with minimal effort
      </p>
      <div class="bg-[#FF2400] md:w-[80%] w-[90%] mx-auto flex flex-col gap-4 p-4">
        <p class="text-3xl text-white text-center font-semibold">
          Book Meetings: Elevate Your Strategy with AI-Powered Automation
        </p>

        {meetings.map((meeting) => (
          <div
            class={`bg-[#323232] w-[100%] md:h-[250px] ${meeting.class} rounded-md gap-4`}
          >
            <div class="md:w-[45%] flex flex-col gap-4">
              <p class="text-white text-xl ">{meeting.title}</p>
              <div class="border-[#5C5959] border-[1px] bg-[#404040] h-[90px] flex justify-start items-center gap-2 text-white rounded-full ">
                <img
                  src="/leads.png"
                  alt="10xbeast logo"
                  class="w-[90px] h-[90px] object-contain"
                />
                <p>{meeting.inner_title}</p>
              </div>
            </div>

            <div class="md:w-[45%] flex flex-col  text-white gap-4">
              <p>{meeting.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Maximize;
