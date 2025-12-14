import React, { useState, useContext } from "react";
import "./Contact.css";
import { AuthContext } from "../context/AuthContext";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export default function Contact() {
  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user || !user.email) {
      alert("Please login first to send feedback!");
      return;
    }

    if (formData.email.trim().toLowerCase() !== user.email.trim().toLowerCase()) {
      alert("Feedback email must match your logged-in email!");
      return;
    }

    try {
      const response = await fetch(`${BACKEND_URL}/api/feedback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
          // ❌ Authorization removed
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.number,
          message: formData.message
        })
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Thank you for your feedback!");
        setFormData({ name: "", email: "", number: "", message: "" });
      } else {
        console.error(data);
        alert("❌ Failed to send feedback");
      }
    } catch (err) {
      console.error(err);
      alert("❌ Server not reachable");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2>📝 Share Your Feedback</h2>

        <form onSubmit={handleSubmit}>
          <label>Name *</label>
          <input id="name" value={formData.name} onChange={handleChange} required />

          <label>Email *</label>
          <input id="email" type="email" value={formData.email} onChange={handleChange} required />

          <label>Phone *</label>
          <input id="number" value={formData.number} onChange={handleChange} required />

          <label>Feedback *</label>
          <textarea id="message" value={formData.message} onChange={handleChange} required />

          <button id="submit-btn" type="submit">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
}
