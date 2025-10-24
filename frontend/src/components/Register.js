import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";
const BACKEND_URL=process.env.REACT_APP_BACKEND_URL
console.log(BACKEND_URL);
export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    // ✅ Basic validations
    if (name.trim().length < 3) {
      return setError("⚠️ Name should be at least 3 characters");
    }
    if (password.length < 6) {
      return setError("⚠️ Password must be at least 6 characters");
    }

    setLoading(true);
    try {
      const res = await fetch(`${BACKEND_URL}/users/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Registered successfully! Please login now.");
        navigate("/login");
      } else {
        setError(data.message || "Registration failed. Try again!");
      }
    } catch (err) {
      console.error(err);
      setError("❌ Server not responding. Please try later!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <div className="register">
        <h2>Create Your Account</h2>
        <form onSubmit={handleRegister}>
          <label htmlFor="name">What's your name?</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email">What's your email?</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Your password?</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />


          {error && <p style={{ color: "red", marginTop: "5px" }}>{error}</p>}

          <button type="submit" id="reg-btn" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <div className="footer-links">
          <span>Already have an account?</span>
          <Link to="/login" style={{ marginLeft: "10px" }}>Login</Link>
        </div>
      </div>
    </div>
  );
}
