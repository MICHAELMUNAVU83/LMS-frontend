import React from "react";
import Sidebar from "../components/StudentDashboard/Sidebar";
import Profile from "../components/StudentDashboard/Profile";
import HomeDashboard from "../components/StudentDashboard/HomeDashboard";

const Home = ({ setStoredToken }) => {
  return (
    <div className="flex">
      <div className="w-1/6 h-[100vh] ">
        <Sidebar setStoredToken={setStoredToken} />
      </div>
      <div className="w-4/6 ">
        <HomeDashboard />
      </div>
      <div className="w-2/6 ">
        <Profile />
      </div>
    </div>
  );
};

export default Home;
