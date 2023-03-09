import React from 'react'

const Home = ({setStoredToken}) => {
  return (
    <div>
       <button
        onClick={() => {
          localStorage.setItem("token", "");
          setStoredToken("");
        }}
      >
        Log out
      </button>
    </div>
  )
}

export default Home