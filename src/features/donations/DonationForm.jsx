import React, { useState } from "react";
import "./DonationForm.css";

const DonationForm = ({ onDonate, charities = [], defaultCharityId }) => {
  const [form, setForm] = useState({
    amount: "",
    charityId: defaultCharityId || "",
    repeat: false,
    anonymous: false,
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!form.amount || !form.charityId) {
      setError("Please enter an amount and select a charity.");
      return;
    }
    try {
      await onDonate(form);
      setSuccess("Thank you for your donation!");
      setForm({
        amount: "",
        charityId: defaultCharityId || "",
        repeat: false,
        anonymous: false,
        message: "",
      });
    } catch (err) {
      setError("Donation failed. Please try again.");
    }
  };

  return (
    <div className="donation-form-container">
      <h2>Make a Donation</h2>
      <form className="donation-form" onSubmit={handleSubmit}>
        {error && <div className="donation-form-error">{error}</div>}
        {success && <div className="donation-form-success">{success}</div>}
        <div className="donation-form-field">
          <label>Charity</label>
          <select
            name="charityId"
            value={form.charityId}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Charity --</option>
            {charities.map(c => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </div>
        <div className="donation-form-field">
          <label>Amount ($)</label>
          <input
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            min={1}
            required
          />
        </div>
        <div className="donation-form-checkboxes">
          <label>
            <input
              type="checkbox"
              name="repeat"
              checked={form.repeat}
              onChange={handleChange}
            />
            Repeat monthly
          </label>
          <label>
            <input
              type="checkbox"
              name="anonymous"
              checked={form.anonymous}
              onChange={handleChange}
            />
            Donate anonymously
          </label>
        </div>
        <div className="donation-form-field">
          <label>Message (optional)</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={2}
          />
        </div>
        <button className="donation-form-btn" type="submit">Donate</button>
      </form>
    </div>
  );
};

export default DonationForm;