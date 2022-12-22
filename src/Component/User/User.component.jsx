import React, { Fragment } from "react";

const UserComponent = ({ user }) => {
  const {
    name,
    contributions,
    followers,
    repoCount,
    github,
    fieldA,
    fieldB,
    fieldN,
  } = user;

  // {
  //   "name": "Rohan Gupta",
  //   "github": "https://github.com/winoffrg",
  //   "fieldA": "valueA",
  //   "fieldB": "valueB",
  //   "fieldN": "valueN"
  // },
  // {
  //   "name": "Rutam Bhagat",
  //   "github": "https://github.com/RutamBhagat",
  //   "fieldA": "valueA",
  //   "fieldB": "valueB",
  //   "fieldN": "valueN"
  // },
  // {
  //   "name": "Kunal Kushwaha",
  //   "github": "https://github.com/kunal-kushwaha",
  //   "fieldA": "valueA",
  //   "fieldB": "valueB",
  //   "fieldN": "valueN"
  // },
  // {
  //   "name": "Apoorv Goyal",
  //   "github": "https://github.com/apoorv-on-git",
  //   "fieldA": "valueA",
  //   "fieldB": "valueB",
  //   "fieldN": "valueN"
  // },
  // {
  //   "name": "Khera Shanu",
  //   "github": "https://github.com/khera-shanu",
  //   "fieldA": "valueA",
  //   "fieldB": "valueB",
  //   "fieldN": "valueN"
  // }

  return (
    <Fragment>
      <a href={github} className="w-[13vw] border-2 border-gray-200 bg-gray-300 px-3 py-2 text-center text-sm font-semibold text-gray-700">
        {name}
      </a>
      <div className="w-[13vw] border-2 border-gray-200 bg-gray-300 px-3 py-2 text-center text-sm font-semibold text-gray-700">
        {contributions}
      </div>
      <div className="w-[13vw] border-2 border-gray-200 bg-gray-300 px-3 py-2 text-center text-sm font-semibold text-gray-700">
        {followers}
      </div>
      <div className="w-[13vw] border-2 border-gray-200 bg-gray-300 px-3 py-2 text-center text-sm font-semibold text-gray-700">
        {repoCount}
      </div>
      <div className="w-[13vw] border-2 border-gray-200 bg-gray-300 px-3 py-2 text-center text-sm font-semibold text-gray-700">
        {fieldA}
      </div>
      <div className="w-[13vw] border-2 border-gray-200 bg-gray-300 px-3 py-2 text-center text-sm font-semibold text-gray-700">
        {fieldB}
      </div>
      <div className="w-[13vw] border-2 border-gray-200 bg-gray-300 px-3 py-2 text-center text-sm font-semibold text-gray-700">
        {fieldN}
      </div>
    </Fragment>
  );
};

export default UserComponent;
