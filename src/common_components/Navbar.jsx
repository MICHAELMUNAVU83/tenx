import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("black");

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 80) {
        setColor("white");
        setTextColor("black");
      } else {
        setColor("transparent");
        setTextColor("black");
      }
    };
    window.addEventListener("scroll", changeBackground);
  }, []);

  const toggleNav = () => {
    setNav(!nav);
  };
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link to="/">
          <img
            src="/logo.png"
            alt="10xbeast logo"
            class="w-[200px] object-contain"
          />
        </Link>

        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <Link
            to="/about"
            class="hover:underline transition-all ease-in-out duration-500 cursor-pointer"
          >
            <li className="p-4">About</li>
          </Link>
          <Link
            class="hover:underline transition-all ease-in-out duration-500 cursor-pointer"
            to="/pricing"
          >
            <li className="p-4">Pricing</li>
          </Link>
          <Link
            class="hover:underline transition-all ease-in-out duration-500 cursor-pointer"
            to="/"
          >
            <li className="p-4">Resources</li>
          </Link>
        </ul>
        <div
          style={{ color: `${textColor}` }}
          class=" hidden sm:flex text-xl gap-4 items-center"
        >
          <p>Login</p>
          <div class="p-2 rounded-md bg-black flex gap-2 items-center text-white">
            <p class="text-xl">Free Trial</p>
            <FaArrowRightLong />
          </div>
        </div>

        {/*Mobile button /> */}
        <div className="sm:hidden block z-10">
          {nav ? (
            <AiOutlineClose
              className="text-4xl text-black"
              onClick={toggleNav}
            />
          ) : (
            <AiOutlineMenu
              className="text-4xl text-white"
              onClick={toggleNav}
              style={{ color: `${textColor}` }}
            />
          )}
        </div>
        {/*Mobile menu /> */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center  w-full h-screen bg-white text-white duration-300 ease-in-out"
              : "sm:hidden absolute top-0 right-0 left-[-100%] bottom-0 flex justify-center items-center w-full h-screen bg-white text-white duration-300 ease-in-out"
          }
        >
          <ul
            onClick={toggleNav}
            class="flex text-4xl flex-col text-black items-center gap-4"
          >
            <Link to="/" className="p-4 text-4xl hover:text-gray-500">
              <img
                src="/logo.png"
                alt="10xbeast logo"
                class="w-[200px] object-contain"
              />
            </Link>
            <Link
              to="/about"
              class="hover:underline transition-all ease-in-out duration-500 cursor-pointer"
            >
              <li className="p-4">About</li>
            </Link>
            <Link
              class="hover:underline transition-all ease-in-out duration-500 cursor-pointer"
              to="/pricing"
            >
              <li className="p-4">Pricing</li>
            </Link>
            <Link
              class="hover:underline transition-all ease-in-out duration-500 cursor-pointer"
              to="/"
            >
              <li className="p-4">Resources</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
