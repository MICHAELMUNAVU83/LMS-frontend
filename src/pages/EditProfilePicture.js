import React, { useEffect, useState } from "react";

const EditProfilePicture = () => {
  const [user, setUser] = useState({});
  const [updatedPicture, setUpdatedPicture] = useState("");
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
        setUser(data.user);
      });
  }, [user && user.profile_picture]);
  const uploadImage = (files) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "e2e6z2lx");
    fetch("https://api.cloudinary.com/v1_1/dakiak4mc/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setUpdatedPicture(data.secure_url);
      });
  };

  const updateProfilePicture = () => {
    fetch(`http://127.0.0.1:3000/api/v1/users/${user.id}`, {
      method: "PATCH",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          profile_picture: updatedPicture,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
      });
  };

  return (
    <div className="bg-gray-100 h-full fixed w-[100%] justify-center">
      {updatedPicture ? (
        <img src={updatedPicture} alt="profile picture" className="w-40 h-40" />
      ) : (
        <img
          src={user.profile_picture}
          alt="profile picture"
          className="w-40 h-40"
        />
      )}
      <input
        type="file"
        id="file-selector"
        onChange={(e) => {
          uploadImage(e.target.files);
        }}
      />
      <button onClick={updateProfilePicture}>Update</button>
    </div>
  );
};

export default EditProfilePicture;
