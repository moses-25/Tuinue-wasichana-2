import React, { useState } from 'react';
import './Donate.css';
import Button from '../../components/Button/Button';

const Donate = () => {
  const [amount, setAmount] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('mpesa');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder logic
    alert(`Donated ${amount} via ${paymentMethod}${isAnonymous ? ' anonymously' : ''}`);
  };

  return (
    <div className="tw-donate">
      <h1>Make a Donation</h1>
      <p>Your generosity helps girls stay in school, stay safe, and dream bigger.</p>

      <form onSubmit={handleSubmit} className="donation-form">
        <label>
          Amount (KES)
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </label>

        <label className="checkbox">
          <input
            type="checkbox"
            checked={isRecurring}
            onChange={() => setIsRecurring(!isRecurring)}
          />
          Make this a monthly donation
        </label>

        <label className="checkbox">
          <input
            type="checkbox"
            checked={isAnonymous}
            onChange={() => setIsAnonymous(!isAnonymous)}
          />
          Donate anonymously
        </label>

        <label>
          Payment Method
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="mpesa">M-Pesa</option>
            <option value="paypal">PayPal</option>
            <option value="card">Debit/Credit Card</option>
          </select>
        </label>

        <Button text="Donate Now" type="submit" />
      </form>
    </div>
  );
};

export default Donate;
