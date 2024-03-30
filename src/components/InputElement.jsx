import React, { useState } from "react";
import UserCard from "./UserCard";

export default function InputElement() {
  const [input, setInput] = useState("");
  const [userData, setUserData] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (input.trim() === "") {
      return;
    }

    fetch(`https://api.github.com/users/${input}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("User not found");
      })
      .then((data) => {
        console.log(data);
        setUserData(data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setUserData(null);
      });

    setInput("");
  };

  return (
    <div>
      <form className="w-11/12 md:w-5/6 mx-auto">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full outline-none p-4 ps-10 text-md font-semiboldrounded-md bg-slate-900 rounded-md text-white"
            placeholder="Search GitHub Username..."
            required
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </form>

      <div>{/* <UserCard userData={userData} /> */}</div>
    </div>
  );
}
