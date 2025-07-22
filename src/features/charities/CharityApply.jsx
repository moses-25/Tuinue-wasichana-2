import React, { useState } from 'react';
import './CharityApply.css';

const CharityApply = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mission: '',
    website: '',
    location: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="charity-apply">
      <h2>Charity Application</h2>
      <form onSubmit={handleSubmit}>
        <label>Organization Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        <label>Mission Statement</label>
        <textarea name="mission" value={formData.mission} onChange={handleChange} required />
        <label>Website</label>
        <input type="url" name="website" value={formData.website} onChange={handleChange} />
        <label>Location</label>
        <input type="text" name="location" value={formData.location} onChange={handleChange} required />
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default CharityApply;
