import React, { useState } from 'react';
import './Contact.css';
import Button from '../../components/Button/Button';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You’ll later connect this to backend (e.g. sending emails or saving to DB)
    alert("Message sent successfully!");
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="tw-contact">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you — whether it's feedback, questions, or partnership ideas.</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your name"
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
          />
        </label>

        <label>
          Message
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            placeholder="Write your message here..."
            required
          />
        </label>

        <Button type="submit" text="Send Message" />
      </form>
    </div>
  );
};

export default Contact;
