import React from "react";

const Footer = () => {
  return (
    <div class="flex flex-col">
      <div class="bg-white py-12">
        <div class="w-[80%] mx-auto flex items-start justify-between">
          <img
            src="/logo.png"
            alt="10xbeast logo"
            class="w-[200px] object-contain"
          />

          <div class="flex gap-2 flex-col">
            <p class="text-xl font-semibold">About</p>

            <p>About 10X Beast</p>
            <p>How it works</p>
            <p>Blog</p>
          </div>
          <div class="flex gap-2 flex-col">
            <p class="text-xl font-semibold">Support</p>

            <p>Help center</p>
            <p>Contacts</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>

      <div class="py-4 text-center bg-[#323232]">
        <div class="w-[80%] mx-auto  text-white flex justify-between items-center">
          <div class="flex gap-6 text-xl   items-center">
            <i class="fa fa-twitter" aria-hidden="true"></i>
            <i class="fa fa-instagram" aria-hidden="true"></i>
            <i class="fa fa-facebook-official" aria-hidden="true"></i>
          </div>

          <p>© 2024 10XBEAST LLC</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
