import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";

const UserCard = ({ userData }) => {
  const defaultUserData = {
    avatar_url: "https://avatars.githubusercontent.com/u/129610457?v=4",
    name: "Vivekananthan S",
    login: "svivek19",
    created_at: "2023-04-01",
    bio: "Continuous learner, perpetual debugger, eternal optimist.",
    public_repos: 53,
    followers: 0,
    following: 2,
    location: "Theni, Tamilnadu, India",
    blog: "https://vivekananthan.vercel.app/",
  };

  userData = userData || defaultUserData;

  return (
    <div className="w-11/12 md:w-5/6 p-5 text-white mx-auto bg-slate-900 my-5 rounded-md">
      <div className="flex mt-2 mb-5">
        <div>
          <img
            src={userData.avatar_url}
            alt="user"
            width={80}
            className="rounded-full"
          />
        </div>
        <div className="my-1 ml-5">
          <h3 className="font-bold md:text-xl cursor-pointer hover:text-blue-500 transition-all">
            {userData.name}
          </h3>
          <p className="text-violet-300 md:font-semibold">@{userData.login}</p>
          <p className="text-sm mt-1">Created: {userData.created_at}</p>
        </div>
      </div>

      <div>
        <p className="text-justify leading-relaxed text-slate-300">
          {userData.bio}
        </p>

        <div className="flex justify-around my-4 bg-slate-600 md:p-2 p-1 rounded-md text-center">
          <div>
            <h3 className="text-slate-100 font-bold md:text-xl">Repos</h3>
            <p className="font-semibold md:text-lg text-yellow-500">
              {userData.public_repos}
            </p>
          </div>
          <div>
            <h3 className="text-slate-100 font-bold md:text-xl">Followers</h3>
            <p className="font-semibold md:text-lg text-yellow-500">
              {userData.followers}
            </p>
          </div>
          <div>
            <h3 className="text-slate-100 font-bold md:text-xl">Following</h3>
            <p className="font-semibold md:text-lg text-yellow-500">
              {userData.following}
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-center space-x-2">
            <span>
              <FaLocationDot className="text-red-500" />
            </span>
            <span className="font-semibold text-slate-300">
              {userData.location}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span>
              <FaLink className="text-blue-500" />
            </span>{" "}
            <span className="text-violet-300 text-sm cursor-pointer hover:text-violet-800 transition-all">
              {userData.blog}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
