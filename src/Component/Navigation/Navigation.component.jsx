import React from "react";

const Navigation = () => {
  return (
    <nav className="z-10 mx-auto p-6 fixed top-0 left-0 right-0 bg-white bg-opacity-60">
      <div className="flex items-center justify-start">
        <a className="text-darkBlue text-3xl font-semibold py-2">
          Github User Search
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
