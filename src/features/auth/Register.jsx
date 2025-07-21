import React, { useState } from "react";
import "./Register.css";

const Register = ({ onRegister }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    try {
      // You can replace with redux dispatch or call authAPI here
      await onRegister(form);
    } catch (e) {
      setError("Failed to register. Please try again.");
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        {error && <div className="register-error">{error}</div>}
        <div className="register-field">
          <label>Name</label>
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="register-field">
          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="register-field">
          <label>Password</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            minLength={6}
            required
          />
        </div>
        <div className="register-field">
          <label>Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            minLength={6}
            required
          />
        </div>
        <button className="register-btn" type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;