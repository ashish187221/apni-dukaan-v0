// src/components/Users.js
import React, { useEffect, useState } from "react";
const BACKEND_URL=process.env.REACT_APP_BACKEND_URL

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${BACKEND_URL}/api/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Users List</h2>
      {users.length > 0 ? (
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              <strong>{user.name}</strong> - {user.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found!</p>
      )}
    </div>
  );
};

export default Users;
