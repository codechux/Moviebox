import React from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <div>
      <div className="md:w-[300px] md:h-[100vh] hidden sm:block my-1 pt-10 border-2 border-gray-300 rounded-r-3xl">
        <Link to={"/"}>
          <div className="flex items-center">
            <img src={Logo} alt="" className="pl-[15px]" />
            <p className="text-black font-bold pl-[15px] text-3xl">MovieBox</p>
          </div>
        </Link>
        <div className="list-none text-center my-10 font-bold text-lg">
          <li className="my-[15px] py-5">Home</li>
          <li className="my-[15px] py-5">Movies</li>
          <li className="my-[15px] py-5">Tv Series</li>
          <li className="my-[15px] py-5">Upcoming</li>
        </div>

        <div>
          <h3>Play movie quizes and earn free tickets</h3>
          <p>50k people are playing now</p>
          <button>Start Playing</button>
        </div>

        <div>Logout</div>
      </div>
    </div>
  );
};

export default Aside;
