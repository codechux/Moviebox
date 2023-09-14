import React from "react";
import Find from "../assets/Search.svg";

const Search = () => {
  return (
    <div className="flex items-center relative">
      <input
        type="text"
        placeholder="Search with movie title"
        className="border rounded p-2 pr-10 bg-transparent w-full outline-none"
      />
      <button
        type="button"
        className="absolute right-2 sm:right-4 text-white font-bold rounded-full p-2"
      >
        <img src={Find} alt="Search Icon" />
      </button>
    </div>
  );
};

export default Search;
