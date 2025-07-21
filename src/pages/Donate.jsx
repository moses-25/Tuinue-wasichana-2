import React, { useState } from 'react';
import './Donate.css';
import Button from '../../components/Button/Button';

const Donate = () => {
  const [form, setForm] = useState({
    amount: '',
    frequency: 'one-time',
    paymentMethod: '',
    anonymous: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your donation!");
    // Logic to integrate with backend/payment gateway goes here
    setForm({ amount: '', frequency: 'one-time', paymentMethod: '', anonymous: false });
  };

  return (
    <div className="tw-donate">
      <h1>Make a Donation</h1>
      <p>Your generosity helps keep girls in school, safe, and thriving.</p>

      <form onSubmit={handleSubmit} className="donation-form">
        <label>
          Amount (KES)
          <input
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            required
            placeholder="e.g. 1000"
          />
        </label>

        <label>
          Donation Frequency
          <select name="frequency" value={form.frequency} onChange={handleChange}>
            <option value="one-time">One-Time</option>
            <option value="monthly">Monthly</option>
          </select>
        </label>

        <label>
          Payment Method
          <select name="paymentMethod" value={form.paymentMethod} onChange={handleChange} required>
            <option value="">Select a method</option>
            <option value="paypal">PayPal</option>
            <option value="mpesa">M-Pesa</option>
            <option value="card">Credit/Debit Card</option>
          </select>
        </label>

        <label className="checkbox">
          <input
            type="checkbox"
            name="anonymous"
            checked={form.anonymous}
            onChange={handleChange}
          />
          Donate anonymously
        </label>

        <Button text="Proceed to Donate" type="submit" />
      </form>
    </div>
  );
};

export default Donate;

