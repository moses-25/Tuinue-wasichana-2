import React, { useState } from 'react';
import './DonationForm.css';
import { useDispatch } from 'react-redux';
import { makeDonation } from '../donationsSlice';

const DonationForm = ({ charityId }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    amount: '',
    frequency: 'once',
    message: '',
    anonymous: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(makeDonation({ ...formData, charityId }));
  };

  return (
    <div className="donation-form">
      <h2>Make a Donation</h2>
      <form onSubmit={handleSubmit}>
        <label>Amount (USD)</label>
        <input type="number" name="amount" required value={formData.amount} onChange={handleChange} />

        <label>Frequency</label>
        <select name="frequency" value={formData.frequency} onChange={handleChange}>
          <option value="once">One-Time</option>
          <option value="monthly">Monthly</option>
        </select>

        <label>Message (optional)</label>
        <textarea name="message" value={formData.message} onChange={handleChange}></textarea>

        <label>
          <input type="checkbox" name="anonymous" checked={formData.anonymous} onChange={handleChange} />
          Donate anonymously
        </label>

        <button type="submit">Donate</button>
      </form>
    </div>
  );
};

export default DonationForm;
