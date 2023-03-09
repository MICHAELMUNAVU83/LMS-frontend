import React , { useState } from "react";
import { IoMdSchool } from "react-icons/io";
import { FiHome } from "react-icons/fi";
import { ImBooks } from "react-icons/im";
import { IoBookSharp } from "react-icons/io5";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { IoLogOutSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { AiFillEdit } from "react-icons/ai";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
const Home = ({ setStoredToken }) => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="flex">
      <div className="w-1/6 h-[100vh] ">
        <div className="flex flex-col mt-4  h-full">
          <div className="flex mt-2 gap-2 font-bold ">
            <IoMdSchool className="text-3xl " />
            Uamuzi Hub
          </div>

          <div className="flex  flex-col mt-4 text-gray-800 ">
            <ul className="mx-2 ">
              <li className=" my-4 flex  gap-2 hover:bg-blue-400 hover:text-white font-bold rounded-lg p-4 hover:scale-105 transform transition duration-500 ease-in-out">
                <FiHome className="text-xl" />
                <a href="/">Dashboard</a>
              </li>
              <li className=" my-4 flex gap-2  hover:bg-blue-400 hover:text-white font-bold rounded-lg p-4 hover:scale-105 transform transition duration-500 ease-in-out ">
                <ImBooks className="text-xl" />
                <a href="/">Courses </a>
              </li>
              <li className=" my-4 flex gap-2   hover:bg-blue-400 hover:text-white font-bold rounded-lg p-4 hover:scale-105 transform transition duration-500 ease-in-out">
                <IoBookSharp className="text-xl" />
                <a href="/">Grades </a>
              </li>
              <li className=" my-4 flex gap-2  hover:bg-blue-400 hover:text-white font-bold rounded-lg p-4 hover:scale-105 transform transition duration-500 ease-in-out  ">
                <SlCalender className="text-xl" />
                <a href="/">Schedule </a>
              </li>

              <li className=" my-4 flex gap-2   hover:bg-blue-400 hover:text-white font-bold rounded-lg p-4   hover:scale-105 transform transition duration-500 ease-in-out">
                <IoChatbubbleEllipsesSharp className="text-xl" />
                <a href="/">Chats </a>
              </li>

              <li className=" my-4 flex gap-2   hover:bg-blue-400 hover:text-white font-bold rounded-lg p-4  hover:scale-105 transform transition duration-500 ease-in-out">
                <IoLogOutSharp className="text-xl" />
                <button
                  onClick={() => {
                    localStorage.setItem("token", "");
                    setStoredToken("");
                  }}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-4/6 bg-black">opl;</div>
      <div className="w-2/6 bg-red-600">
        <div className="flex flex-col  h-full">
          <div className="flex mt-4 justify-around text-3xl">
            <h1>Profile</h1>
            <AiFillEdit />
          </div>

          <div className="flex  mx-auto justify-center relative bg-gradient-to-b  from-blue-500 overflow-hidden rounded-full w-40 h-40 mt-5">
            <img
              src="https://images.unsplash.com/photo-1565884280295-98eb83e41c65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="kimani"
              className="flex justify-center  rounded-full"
            />
          </div>
          <div className="bg-white w-[80%]  mx-auto mt-5">
            <Calendar onChange={onChange} value={value} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
