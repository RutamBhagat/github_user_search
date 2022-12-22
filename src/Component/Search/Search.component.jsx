import React from "react";
import SearchBox from "../SearchBox/SearchBox.component.jsx";

const Search = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-36 pb-5 normal:flex-row">
      <div className="flex">
        <SearchBox title={"Github Username"} placeholder={""} />
        <SearchBox
          title={"Contributions To-From"}
          placeholder={"2008-2022"}
        />
      </div>
      <button className="mb-2 mt-auto h-10 rounded border-0 bg-blue-700 px-5 text-lg text-white hover:bg-blue-900 focus:outline-none">
        Search
      </button>
    </div>
  );
};

export default Search;
