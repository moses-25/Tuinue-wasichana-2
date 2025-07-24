import React, { useState } from 'react';
import './Donate.css';
import Button from '../components/Button.jsx';

const Donate = () => {
  const [form, setForm] = useState({
    amount: '',
    frequency: 'one-time',
    paymentMethod: '',
    anonymous: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your donation!');
    // Simulate clearing form after submission
    setForm({
      amount: '',
      frequency: 'one-time',
      paymentMethod: '',
      anonymous: false,
    });
  };

  return (
    <div className="tw-donate">
      <h1>Make a Donation</h1>
      <p>Your generosity helps keep girls in school, safe, and thriving.</p>
      <form onSubmit={handleSubmit} className="donation-form">
        <div className="form-group">
          <label htmlFor="amount">Amount (KES)</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            required
            placeholder="e.g. 1000"
          />
        </div>
        <div className="form-group">
          <label htmlFor="frequency">Donation Frequency</label>
          <select
            id="frequency"
            name="frequency"
            value={form.frequency}
            onChange={handleChange}
          >
            <option value="one-time">One-Time</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="paymentMethod">Payment Method</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={form.paymentMethod}
            onChange={handleChange}
            required
          >
            <option value="">Select a method</option>
            <option value="paypal">PayPal</option>
            <option value="mpesa">M-Pesa</option>
            <option value="card">Credit/Debit Card</option>
          </select>
        </div>
        <div className="form-group checkbox">
          <label htmlFor="anonymous">
            <input
              type="checkbox"
              id="anonymous"
              name="anonymous"
              checked={form.anonymous}
              onChange={handleChange}
            />
            Donate anonymously
          </label>
        </div>
        <Button type="submit">Proceed to Donate</Button>
      </form>
    </div>
  );
};

export default Donate;

