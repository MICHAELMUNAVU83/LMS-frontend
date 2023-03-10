import React, { useState } from "react";
import { IoMdSchool } from "react-icons/io";
import { FiHome } from "react-icons/fi";
import { ImBooks } from "react-icons/im";
import { IoBookSharp } from "react-icons/io5";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { IoLogOutSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
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
      <div className="w-4/6 ">
        <div className="flex justify-between mt-4">
          <div className="flex gap-2 text-2xl font-bold">Dashboard</div>

          <div className="flex gap-2">
            <form>
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only "
              >
                Search
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block w-full p-4 pl-10 text-sm  border border-gray-200 rounded-lg text-black focus:ring-blue-500 focus:border-blue-500 w-[300px] h-2 dark:border-gray-600  "
                  placeholder="Search.."
                  required
                />
              </div>
            </form>
          </div>
        </div>

        <h1 className="text-2xl font-bold mt-12">New Courses</h1>
         
      </div>
      <div className="w-2/6 ">
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
                Michael Kimani{" "}
                <IoCheckmarkCircleSharp className="text-blue-500" />
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
      </div>
    </div>
  );
};

export default Home;
