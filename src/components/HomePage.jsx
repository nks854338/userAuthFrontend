import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const HomePage = () => {
  const isAuthenticated = !!localStorage.getItem("authToken"); 
  const [users, setUsers] = useState([]); 

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("authToken"); 
        const response = await fetch("https://user-auth-backend-beta.vercel.app/user", {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });

        const data = await response.json();
        setUsers(data); 
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, []); 

  if (!isAuthenticated) {
    return <Navigate to="/login" />; 
  }

  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
        marginTop: "30px",
      }}
    >
      {users.length > 0 ? (
        users.map((user) => (
          <div key={user._id}> 
            <div className="username">Name: {user.name}</div>
            <div className="email">Email: {user.email}</div>
          </div>
        ))
      ) : (
        <div>Loading users...</div> 
      )}
      <img
        src="woman_laptop.png"
        alt="Woman using a laptop"
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
};

export default HomePage;
