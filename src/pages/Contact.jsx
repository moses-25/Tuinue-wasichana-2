import React, { useState } from 'react';
import './Contact.css';
import Button from '../../components/Button/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out. We’ll get back to you soon!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="tw-contact">
      <h1>Contact Us</h1>
      <p className="contact-intro">Have a question, feedback, or want to get involved? We'd love to hear from you.</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Full Name
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email Address
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Subject
          <input
            type="text"
            name="subject"
            placeholder="What's this about?"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Message
          <textarea
            name="message"
            rows="5"
            placeholder="Type your message..."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>

        <Button text="Send Message" type="submit" />
      </form>
    </div>
  );
};

export default Contact;

