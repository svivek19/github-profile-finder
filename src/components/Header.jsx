import React from "react";

export default function Header() {
  return (
    <div className="w-5/6 mx-auto flex justify-between bg-slate-900 text-white p-5 m-5 rounded-md">
      <h1 className="text-2xl font-semibold">GitHub Profile Finder</h1>
      <button className="text-xl font-semibold">Demo</button>
    </div>
  );
}
