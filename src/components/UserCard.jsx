import React from "react";
import { user } from "../assets/user.png";

const UserCard = () => {
  return (
    <div>
      <div>
        <div>
          <img src={user} alt="user" />
        </div>
        <div>
          <h3>Vivekananthan Sivakumar</h3>
          <p>@svivek19</p>
          <p>Joined 3 May 2023</p>
        </div>
      </div>

      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eos!
          Illum omnis quae recusandae, error magni labore, ratione in aspernatur
          reiciendis odio quasi
        </p>

        <div>
          <div>
            <h3>Repos</h3>
            <p>54</p>
          </div>
          <div>
            <h3>Follower</h3>
            <p>0</p>
          </div>
          <div>
            <h3>Following</h3>
            <p>2</p>
          </div>
        </div>

        <div>
          <p>
            <span>location</span>Theni
          </p>
          <p>
            <span>link</span> https://vivekananthan.vercel.app
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
