import React, { useState } from 'react';
import './DonationForm.css';
import Button from '../../../components/Button.jsx';

const DonationForm = ({ onDonate }) => {
  const [form, setForm] = useState({
    amount: '',
    frequency: 'one-time',
    paymentMethod: '',
    anonymous: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onDonate(form);
    setForm({
      amount: '',
      frequency: 'one-time',
      paymentMethod: '',
      anonymous: false,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="donation-form">
      <label>
        Amount (KES)
        <input
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Frequency
        <select name="frequency" value={form.frequency} onChange={handleChange}>
          <option value="one-time">One-Time</option>
          <option value="monthly">Monthly</option>
        </select>
      </label>

      <label>
        Payment Method
        <select
          name="paymentMethod"
          value={form.paymentMethod}
          onChange={handleChange}
          required
        >
          <option value="">Select...</option>
          <option value="mpesa">M-Pesa</option>
          <option value="paypal">PayPal</option>
          <option value="card">Card</option>
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

      <Button text="Donate Now" type="submit" />
    </form>
  );
};

export default DonationForm;

