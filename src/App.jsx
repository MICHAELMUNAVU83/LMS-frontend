import React,{useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import SplashScreen from "./pages/SplashScreen";
import EditProfilePicture from "./pages/EditProfilePicture";
function App() {
 
  const [storedToken, setStoredToken] = useState(localStorage.getItem("token"));
  const [role, setRole] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:3000/api/v1/profile ", {
      method: "GET",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setRole(data.user.role);
        console.log(data.user.role);
      });
  }, [storedToken]);

  return (
    <Router>
      <Routes>
        {storedToken ? (
          <>
            <Route path="/" element={<Home setStoredToken={setStoredToken} />} />
            <Route path="/edit-profile-picture" element={<EditProfilePicture />} />
            </>
        ) : (
            <>
              <Route path="/" element={<SplashScreen />} />
              <Route path="/login" element={<Login 
                setStoredToken={setStoredToken}   />} />
              <Route path="/signup" element={<SignUp  

                setStoredToken={setStoredToken} />} />
            </>
        )}
       
      </Routes>



   </Router>
  )
}

export default App
