import React from "react";
import Logo from "../assets/logo.svg";
import Search from "./Search";
import Menu from "../assets/Menu.svg";

const Navbar = () => {
  return (
    <div className="text-white absolute top-0 w-full py-8 px-4 sm:px-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={Logo} alt="" className="w-8 h-8 cursor-pointer" />
          <p className="ml-2 text-sm sm:text-base hidden sm:block">MovieBox</p>
        </div>

        <div className="md:w-[500px]">
          <Search />
        </div>

        <div className="flex items-center">
          <p className="hidden sm:block mr-4 text-sm">Sign in</p>
          <div className="w-6 h-6 sm:w-8 sm:h-8">
            <img src={Menu} alt="" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
