import React from "react";
import UserComponent from "../User/User.component.jsx";

const Table = ({ userArr, contributionYear }) => {
  return (
    <div className="mx-auto">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="p-4"></div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Contributions
              </th>
              <th scope="col" className="px-6 py-3">
                Followers
              </th>
              <th scope="col" className="px-6 py-3">
                Repo Count
              </th>
              <th scope="col" className="px-6 py-3">
                FieldA
              </th>
              <th scope="col" className="px-6 py-3">
                FieldB
              </th>
              <th scope="col" className="px-6 py-3">
                FieldN
              </th>
            </tr>
          </thead>
          <tbody>
            {userArr.map((user) => (
              <UserComponent user={user} contributionYear={contributionYear} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
