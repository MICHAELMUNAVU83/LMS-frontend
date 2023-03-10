import React, { useState, useEffect } from "react";
import moment from "moment";
import { IoIosArrowForward } from "react-icons/io";
const HomeDashboard = () => {
  const [new_courses, setNewCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/new_courses")
      .then((res) => res.json())
      .then((data) => {
        setNewCourses(data);
      });
  }, []);

  return (
    <div>
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

      <div className="flex justify-around mt-5">
        {new_courses.map((course) => (
          <div className="flex flex-col gap-2 bg-red-600 h-[300px] w-[250px] rounded-xl p-4">
            <img
              src="https://images.unsplash.com/photo-1565884280295-98eb83e41c65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="course"
              className="w-[90%] h-40 mx-auto rounded-lg"
            />
            <h1 className="text-xl pl-4 font-bold">{course.name}</h1>
            <h1 className="text-lg pl-4">
              {course.lessons}
              {""} Lessons
            </h1>

            <div className="flex justify-end ">
              <div className="p-2 cursor-pointer bg-white rounded-2xl">
                <IoIosArrowForward className="text-2xl text-black " />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeDashboard;
