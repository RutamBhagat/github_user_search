import React from "react";

const SearchBox = ({ title, placeholder }) => {
  return (
    <div className="relative w-full flex-grow mx-2 mt-auto mb-2">
      <label
        htmlFor={`${placeholder}`}
        className="text-sm leading-7 text-gray-400"
      >
        {title}
      </label>
      <input
        type="text"
        id="full-name"
        name="full-name"
        placeholder={placeholder}
        className="w-full rounded border border-gray-300 bg-gray-100 py-1 px-3 text-base leading-8 text-gray-700 placeholder-gray-400 outline-none transition-colors duration-200 ease-in-out focus:border-blue-800 focus:ring-2 focus:ring-blue-200"
      />
    </div>
  );
};

export default SearchBox;
