import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Profile = () => {
    const [value, onChange] = useState(new Date());
  return (
    <div className="flex flex-col  h-full">
      <div className="flex mt-4 justify-around text-3xl">
        <h1>Profile</h1>
        <AiFillEdit />
      </div>

      <div className="flex flex-col mx-auto justify-center   mt-5">
        <img
          src="https://images.unsplash.com/photo-1565884280295-98eb83e41c65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="kimani"
          className="flex justify-center w-40 h-40 rounded-full"
        />
        <div className="flex flex-col text-center justify-center gap-2 mt-2">
          <h1 className="flex text-2xl">
            Michael Kimani <IoCheckmarkCircleSharp className="text-blue-500" />
          </h1>
          <h1 className="flex justify-center text-xl">Student</h1>
        </div>
      </div>
      <div className="bg-white w-[80%]  mx-auto mt-5 rounded-2xl">
        <Calendar
          className="rounded-2xl border-2 border-blue-500"
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
};

export default Profile;
