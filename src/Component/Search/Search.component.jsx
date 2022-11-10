import React from "react";
import SearchBox from "../SearchBox/SearchBox.component.jsx";

const Search = ({ changeTable, changeTableClick, handleUsername, handleContributions }) => {
  return (
    <section className="text-gray-400">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col text-start w-full mb-6">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-400">
            Github API Search
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row w-full lg:w-2/3 mr-auto px-8 sm:space-x-4 sm:space-y-0 sm:px-0 items-end">
          <SearchBox
          title={"Github Username"}
            placeholder={"Github Username"}
            changeTable={changeTable}
            handleUsername={handleUsername}
            handleContributions={handleContributions}
          />
          <SearchBox
          title={"Contributions To-From"}
            placeholder={"i.e. 2008-2022"}
            changeTable={changeTable}
            handleUsername={handleUsername}
            handleContributions={handleContributions}
          />
          <button
            onClick={changeTableClick}
            className="text-white bg-blue-700 hover:bg-blue-900 border-0 py-2 px-8 focus:outline-none rounded text-lg"
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
}

export default Search;
