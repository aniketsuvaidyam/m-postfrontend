import React from "react";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <>
      <div className="relative -z-20">
        <input
          type="text"
          placeholder="Search.."
          className="w-full  outline-none
        bg-gray-200 rounded-sm py-2 px-1.5 text-xs font-medium text-gray-600"
        />
        <FiSearch className="absolute right-1 top-2 text-gray-600" />
      </div>
    </>
  );
};

export default Search;
