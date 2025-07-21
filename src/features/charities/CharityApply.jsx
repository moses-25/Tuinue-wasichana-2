import React, { useState } from "react";
import "./CharityApply.css";

const CharityApply = ({ onApply }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    description: "",
    website: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setMessage("");
    setError("");
    try {
      await onApply(form);
      setMessage("Application submitted! Await admin approval.");
      setForm({ name: "", email: "", description: "", website: "" });
    } catch (e) {
      setError("Failed to submit. Please try again.");
    }
  };

  return (
    <div className="charity-apply-container">
      <h2>Apply as a Charity</h2>
      <form className="charity-apply-form" onSubmit={handleSubmit}>
        {message && <div className="charity-apply-success">{message}</div>}
        {error && <div className="charity-apply-error">{error}</div>}
        <div className="charity-apply-field">
          <label>Charity Name</label>
          <input
            name="name"
            type="text"
            placeholder="Charity Name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="charity-apply-field">
          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder="Contact Email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="charity-apply-field">
          <label>Description</label>
          <textarea
            name="description"
            placeholder="Describe your charity and its mission"
            value={form.description}
            onChange={handleChange}
            rows={4}
            required
          />
        </div>
        <div className="charity-apply-field">
          <label>Website (optional)</label>
          <input
            name="website"
            type="url"
            placeholder="https://example.org"
            value={form.website}
            onChange={handleChange}
          />
        </div>
        <button className="charity-apply-btn" type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default CharityApply;