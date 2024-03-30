import React from "react";

function Header() {
  return (
    <div className="w-11/12 md:w-5/6 mx-auto flex justify-between bg-slate-900 text-white p-5 m-5 rounded-md">
      <h1 className="text-xl md:text-2xl font-semibold">
        GitHub Profile Finder
      </h1>
      <button className="text-lg md:text-xl font-semibold">Demo</button>
    </div>
  );
}

export default Header;
