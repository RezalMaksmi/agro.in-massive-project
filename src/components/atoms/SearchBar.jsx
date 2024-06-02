import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex items-center mx-auto mt-[50px] w-80 border border-gray-300 rounded-lg bg-gray-300">
      <button className="p-2">
        <IoIosSearch className="h-5 w-5 text-gray-500" />
      </button>
      <input
        type="text"
        onChange={props.onChange}
        placeholder="Search..."
        className="p-2 w-80 outline-none rounded-lg bg-gray-300"
      />
    </div>
  );
};

export default SearchBar;
