import React, { useState, useContext } from 'react';
import './Contact.css';
import { AuthContext } from '../context/AuthContext';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
console.log("BACKEND_URL from Contact.js:", BACKEND_URL);
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
      alert("Feedback email must match your logged-in account email!");
      return;
    }

    if (!formData.name || !formData.number || !formData.message) {
      alert("Please fill all required fields!");
      return;
    }

    try {
      const response = await fetch(`${BACKEND_URL}/api/feedback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
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
        alert("Thank you for your valuable feedback!");
        setFormData({
          name: "",
          email: "",
          number: "",
          message: ""
        });
        console.log("Feedback saved:", data);
      } else {
        alert(data.message || "Failed to submit feedback");
      }

    } catch (error) {
      console.error("Feedback Error:", error);
      alert("Unable to send feedback. Please check your server connection!");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2>📝 Share Your Feedback</h2>
        <p>We’d love to hear your thoughts!</p>

        <form onSubmit={handleSubmit}>
          <label>Name *</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email (must match login email) *</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Phone Number *</label>
          <input
            type="number"
            id="number"
            value={formData.number}
            onChange={handleChange}
            required
          />

          <label>Your Feedback *</label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
}
