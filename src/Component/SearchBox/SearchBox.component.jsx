import React from "react";

const SearchBox = ({ title, placeholder, changeTable, handleUsername }) => {
  return (
    <div className="relative flex-grow w-full">
      <label
        htmlFor={`${placeholder}`}
        className="leading-7 text-sm text-gray-400"
      >
        {title}
      </label>
      <input
        onKeyDown={changeTable}
        onChange={(event) => {
          if(placeholder === "Github Username"){
            handleUsername(event.target.value)
          }
          else{
            handleContributions(event.target.value)
          }
        }}
        type="text"
        id="full-name"
        name="full-name"
        placeholder={placeholder}
        className="w-full bg-gray-100 bg-opacity-50 placeholder-gray-500 rounded border border-gray-300 focus:border-blue-800 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </div>
  );
};

export default SearchBox;
