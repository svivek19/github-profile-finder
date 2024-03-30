import React from "react";
import user from "../assets/user.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";

const UserCard = () => {
  return (
    <div className="w-5/6 p-5 text-white mx-auto bg-slate-900 my-5 rounded-md">
      <div className="flex mt-2 mb-5">
        <div>
          <img src={user} alt="user" width={80} />
        </div>
        <div className="my-1 ml-5">
          <h3 className="font-bold text-xl cursor-pointer hover:text-blue-500 transition-all">
            Vivekananthan Sivakumar
          </h3>
          <p className="text-violet-300 font-semibold">@svivek19</p>
          <p className="text-sm mt-1">Joined 3 May 2023</p>
        </div>
      </div>

      <div>
        <p className="text-justify leading-relaxed text-slate-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eos!
          Illum omnis quae recusandae, error magni labore, ratione in aspernatur
          reiciendis odio quasi
        </p>

        <div className="flex justify-around my-4 bg-slate-600 p-2 rounded-md text-center">
          <div>
            <h3 className="text-slate-100 font-bold text-xl">Repos</h3>
            <p className="font-semibold text-lg text-yellow-500">54</p>
          </div>
          <div>
            <h3 className="text-slate-100 font-bold text-xl">Followers</h3>
            <p className="font-semibold text-lg text-yellow-500">0</p>
          </div>
          <div>
            <h3 className="text-slate-100 font-bold text-xl">Following</h3>
            <p className="font-semibold text-lg text-yellow-500">2</p>
          </div>
        </div>

        <div>
          <div className="flex items-center space-x-2">
            <span>
              <FaLocationDot className="text-red-500" />
            </span>
            <span className="font-semibold text-slate-300">Theni</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>
              <FaLink className="text-blue-500" />
            </span>{" "}
            <span className="text-violet-300 text-sm cursor-pointer hover:text-violet-800 transition-all">
              https://vivekananthan.vercel.app
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
