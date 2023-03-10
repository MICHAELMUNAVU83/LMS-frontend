import React, { useState, useEffect } from "react";

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
          <div className="flex flex-col gap-2">
            <img
              src={course.cover_image}
              alt="course"
              className="w-40 h-40 rounded-lg"
            />
            <h1 className="text-xl font-bold">{course.name}</h1>
            <h1 className="text-lg">{course.lessons}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeDashboard;
