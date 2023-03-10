import React from 'react'
import { IoMdSchool } from "react-icons/io";
import { FiHome } from "react-icons/fi";
import { ImBooks } from "react-icons/im";
import { IoBookSharp } from "react-icons/io5";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { IoLogOutSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";

const Sidebar = ({ setStoredToken }) => {
  return (
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
  )
}

export default Sidebar