// src/pages/Profile.js
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Profile() {
  const { user } = useContext(AuthContext);

  if (!user) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Welcome, {user.name} 👋</h2>
      <p><b>Email:</b> {user.email}</p>
    </div>
  );
}
