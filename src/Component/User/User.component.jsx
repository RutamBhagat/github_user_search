import React, { useState, useEffect } from "react";

const UserComponent = ({ user, contributionYear }) => {
  const {
    name,
    github,
    fieldA,
    fieldB,
    fieldN,
    followers,
    repoCount,
    userContributions,
  } = user;

  {
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
    // },
  }
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
      >
        <a className="hover:text-blue-500" href={github}>
          {name}
        </a>
      </th>
      <td className="px-6 py-4">
        {(() => {
          let sum = 0;
          for (
            let year = contributionYear[0];
            year <= contributionYear[1];
            year++
          ) {
            console.log("userContributions[`${year}`]")
            console.log(userContributions[`${year}`])
            sum += userContributions[`${year}`];
          }
          return sum;
        })()}
      </td>
      <td className="px-6 py-4">{followers}</td>
      <td className="px-6 py-4">{repoCount}</td>
      <td className="px-6 py-4">{fieldA}</td>
      <td className="px-6 py-4">{fieldB}</td>
      <td className="px-6 py-4">{fieldN}</td>
    </tr>
  );
};

export default UserComponent;
