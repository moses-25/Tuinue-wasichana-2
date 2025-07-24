import React, { useState } from 'react';
import './CharityApply.css';
import Button from '../../components/Button';

const CharityApply = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    description: '',
    website: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Charity Application Submitted:', form);
    // Replace this with actual API call when backend is ready
    setForm({ name: '', email: '', description: '', website: '' });
  };

  return (
    <div className="charity-apply">
      <h2>Apply to Join as a Charity</h2>
      <p>Submit your application to become a verified charity on our platform.</p>
      {submitted && <p className="success">Your application has been submitted!</p>}
      <form onSubmit={handleSubmit} className="apply-form">
        <label>
          Charity Name
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
        </label>
        <label>
          Contact Email
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </label>
        <label>
          Website (optional)
          <input type="url" name="website" value={form.website} onChange={handleChange} />
        </label>
        <label>
          Brief Description
          <textarea name="description" value={form.description} onChange={handleChange} required />
        </label>
        <Button type="submit" text="Submit Application" />
      </form>
    </div>
  );
};

export default CharityApply;

