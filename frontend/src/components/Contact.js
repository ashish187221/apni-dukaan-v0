import React, { useState, useContext } from 'react';
import './Contact.css';
import { AuthContext } from '../context/AuthContext'; // import auth context

export default function Contact() {
  const { user } = useContext(AuthContext); // current logged-in user
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
      alert("Please fill out all required fields!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${user.token}` // optional if backend verifies JWT
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `${formData.message}\nPhone: ${formData.number}`,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Thank you for your valuable feedback!");
        setFormData({ name: "", email: "", number: "", message: "" });
        console.log("Server Response:", data);
      } else {
        alert("Something went wrong! Please try again later.");
        console.error("Server Error:", data);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Unable to send feedback. Please check your server connection!");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2>📝 Share Your Feedback</h2>
        <p>We’d love to hear your thoughts about your shopping experience!</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name <span>*</span></label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email (must match your account email) <span>*</span></label>
          <input
            type="email"
            id="email"
            placeholder="Enter your registered email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="number">Phone Number <span>*</span></label>
          <input
            type="number"
            id="number"
            placeholder="Enter your phone number"
            value={formData.number}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Your Feedback <span>*</span></label>
          <textarea
            id="message"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" id="submit-btn">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
}
