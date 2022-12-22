import React, { useContext } from "react";
import { UserContext } from "../../Context/User.context";
import UserComponent from "../User/User.component";

const Grid = () => {
  const { users } = useContext(UserContext);

  return (
    <div className="grid place-items-center bg-gray-800">
      <div className="gap-0.25 grid grid-cols-7 p-4">
        <div className="w-[13vw] border-2 border-gray-200 bg-gray-400 px-3 py-2 text-center text-sm font-semibold text-gray-700">
          NAME
        </div>
        <div className="w-[13vw] border-2 border-gray-200 bg-gray-400 px-3 py-2 text-center text-sm font-semibold text-gray-700">
          CONTRIBUTIONS
        </div>
        <div className="w-[13vw] border-2 border-gray-200 bg-gray-400 px-3 py-2 text-center text-sm font-semibold text-gray-700">
          FOLLOWERS
        </div>
        <div className="w-[13vw] border-2 border-gray-200 bg-gray-400 px-3 py-2 text-center text-sm font-semibold text-gray-700">
          REPO COUNT
        </div>
        <div className="w-[13vw] border-2 border-gray-200 bg-gray-400 px-3 py-2 text-center text-sm font-semibold text-gray-700">
          FIELDA
        </div>
        <div className="w-[13vw] border-2 border-gray-200 bg-gray-400 px-3 py-2 text-center text-sm font-semibold text-gray-700">
          FIELDB
        </div>
        <div className="w-[13vw] border-2 border-gray-200 bg-gray-400 px-3 py-2 text-center text-sm font-semibold text-gray-700">
          FIELDN
        </div>
        {users.map((user) => {
          return <UserComponent key={user.id} user={user} />;
        })}
      </div>
    </div>
  );
};

export default Grid;
