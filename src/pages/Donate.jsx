import React, { useState } from 'react';
import './Donate.css';

const Donate = () => {
  const [form, setForm] = useState({
    amount: '',
    frequency: 'one-time',
    paymentMethod: '',
    anonymous: false,
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Preset donation amounts
  const amountPresets = [500, 1000, 2000, 5000, 10000, 25000];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === 'checkbox' ? checked : value,
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const handleAmountPreset = (amount) => {
    setForm(prev => ({
      ...prev,
      amount: amount.toString()
    }));
    
    // Clear amount error if it exists
    if (errors.amount) {
      setErrors(prev => ({
        ...prev,
        amount: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!form.amount) {
      newErrors.amount = 'Please enter an amount';
    } else if (form.amount <= 0) {
      newErrors.amount = 'Amount must be greater than 0';
    }
    
    if (!form.paymentMethod) {
      newErrors.paymentMethod = 'Please select a payment method';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      // In a real app, you would send the form data to your backend here
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      alert(`Thank you for your ${form.frequency === 'monthly' ? 'monthly ' : ''}donation of KES ${form.amount}!`);
      
      // Reset form after successful submission
      setForm({
        amount: '',
        frequency: 'one-time',
        paymentMethod: '',
        anonymous: false,
      });
    } catch (error) {
      alert('There was an error processing your donation. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="tw-donate">
      <div className="tw-donate-header">
        <h1>Make a Donation</h1>
        <p>Your generosity helps keep girls in school, safe, and thriving.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="donation-form">
        {/* Amount Field */}
        <div className="form-group">
          <label htmlFor="amount" className="required">
            Amount (KES)
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            placeholder="Enter amount"
            className={`form-control ${errors.amount ? 'error' : ''}`}
            aria-describedby={errors.amount ? "amount-error" : undefined}
          />
          
          {errors.amount && (
            <div id="amount-error" className="form-error" role="alert">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
              </svg>
              {errors.amount}
            </div>
          )}
          
          <div className="amount-presets">
            {amountPresets.map((amount) => (
              <button
                key={amount}
                type="button"
                className={`amount-btn ${form.amount === amount.toString() ? 'active' : ''}`}
                onClick={() => handleAmountPreset(amount)}
              >
                KES {amount.toLocaleString()}
              </button>
            ))}
          </div>
        </div>
        
        {/* Frequency Field */}
        <div className="form-group">
          <label htmlFor="frequency">Donation Frequency</label>
          <select
            id="frequency"
            name="frequency"
            value={form.frequency}
            onChange={handleChange}
            className="form-control"
          >
            <option value="one-time">One-Time</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
        
        {/* Payment Method Field */}
        <div className="form-group">
          <label htmlFor="paymentMethod" className="required">
            Payment Method
          </label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={form.paymentMethod}
            onChange={handleChange}
            className={`form-control ${errors.paymentMethod ? 'error' : ''}`}
            aria-describedby={errors.paymentMethod ? "paymentMethod-error" : undefined}
          >
            <option value="">Select a method</option>
            <option value="paypal">PayPal</option>
            <option value="mpesa">M-Pesa</option>
            <option value="card">Credit/Debit Card</option>
          </select>
          
          {errors.paymentMethod && (
            <div id="paymentMethod-error" className="form-error" role="alert">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
              </svg>
              {errors.paymentMethod}
            </div>
          )}
        </div>
        
        {/* Anonymous Donation */}
        <div 
          className="checkbox-group"
          onClick={() => setForm(prev => ({...prev, anonymous: !prev.anonymous}))}
          role="checkbox"
          aria-checked={form.anonymous}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              setForm(prev => ({...prev, anonymous: !prev.anonymous}));
            }
          }}
        >
          <input
            type="checkbox"
            id="anonymous"
            name="anonymous"
            checked={form.anonymous}
            onChange={handleChange}
          />
          <label htmlFor="anonymous">
            Donate anonymously
          </label>
        </div>
        
        {/* Submit Button */}
        <button 
          type="submit" 
          className="submit-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Processing...' : 'Proceed to Donate'}
        </button>
      </form>
    </div>
  );
};

export default Donate;

